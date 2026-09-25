import { useState, useEffect, useCallback, useMemo } from 'react';

export const THEME_PHASES = {
  morning: {
    id: 'morning',
    name: 'Morning',
    phase: 'Sunrise / Dawn',
    icon: '🌅',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    description: 'Hero & About — Warm golden glow & sunrise dawn',
    sections: ['home', 'stats', 'about', 'education'],
    targetSectionId: 'home',
  },
  afternoon: {
    id: 'afternoon',
    name: 'Afternoon',
    phase: 'Midday / Daylight',
    icon: '☀️',
    accentColor: '#0284c7',
    glowColor: 'rgba(14, 165, 233, 0.35)',
    description: 'Skills & Projects — Crisp modern daylight & high contrast',
    sections: ['skills', 'certificates', 'projects', 'experience'],
    targetSectionId: 'skills',
  },
  evening: {
    id: 'evening',
    name: 'Evening',
    phase: 'Dusk / Midnight',
    icon: '🌙',
    accentColor: '#a78bfa',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    description: 'Process & Contact — Midnight starlight & neon glow',
    sections: ['design-process', 'process', 'testimonials', 'contact'],
    targetSectionId: 'contact',
  },
};

/**
 * Custom React hook to detect and manage scroll-driven Time-of-Day theme transitions.
 *
 * @param {Object} options Configuration options
 * @param {string} options.initialState Initial phase ('morning' | 'afternoon' | 'evening')
 * @param {Object} options.customMapping Optional custom section-to-phase mapping
 * @param {boolean} options.syncDocumentDataset Whether to sync data-time-of-day on document.documentElement
 * @returns {Object} { timeOfDay, themeMeta, scrollProgress, setTimeOfDay, scrollToPhase, isAuto, resumeAuto, allPhases }
 */
export default function useTimeOfDayScroll(options = {}) {
  const {
    initialState = 'morning',
    customMapping = null,
    syncDocumentDataset = true,
  } = options;

  const [timeOfDay, setTimeOfDayState] = useState(initialState);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isManualOverride, setIsManualOverride] = useState(false);

  const phaseConfig = useMemo(() => customMapping || THEME_PHASES, [customMapping]);

  // Handle manual selection
  const setTimeOfDay = useCallback((newPhase) => {
    if (phaseConfig[newPhase]) {
      setIsManualOverride(true);
      setTimeOfDayState(newPhase);
    }
  }, [phaseConfig]);

  const resumeAuto = useCallback(() => {
    setIsManualOverride(false);
  }, []);

  // Smooth scroll to a specific time-of-day phase's starting section
  const scrollToPhase = useCallback((phaseId) => {
    const targetConfig = phaseConfig[phaseId];
    if (!targetConfig) return;

    setTimeOfDayState(phaseId);

    const targetSection = document.getElementById(targetConfig.targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback based on scroll height percentages
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let targetScrollY = 0;
      if (phaseId === 'afternoon') targetScrollY = maxScroll * 0.4;
      else if (phaseId === 'evening') targetScrollY = maxScroll * 0.85;

      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  }, [phaseConfig]);

  useEffect(() => {
    let ticking = false;

    const calculateActivePhase = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / docHeight) * 100))) : 0;
      setScrollProgress(progress);

      // If user locked manually, respect the choice while still calculating progress
      if (isManualOverride) {
        ticking = false;
        return;
      }

      // 1. Precise section focal-point detection
      // Check which section intersects the upper-middle viewport focal line (35% from top)
      const focalY = window.innerHeight * 0.35;
      let detectedPhase = null;

      // Scan all section candidates
      const allPhasesList = Object.values(phaseConfig);
      for (const phase of allPhasesList) {
        for (const sectionId of phase.sections) {
          const el = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            // If the element spans across the focal line
            if (rect.top <= focalY && rect.bottom >= focalY) {
              detectedPhase = phase.id;
              break;
            }
          }
        }
        if (detectedPhase) break;
      }

      // 2. Fallback: Scroll percentage based boundaries
      // Ensures graceful continuous transitions even in gaps between sections
      if (!detectedPhase) {
        if (progress < 30) {
          detectedPhase = 'morning';
        } else if (progress < 68) {
          detectedPhase = 'afternoon';
        } else {
          detectedPhase = 'evening';
        }
      }

      setTimeOfDayState(detectedPhase);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateActivePhase);
        ticking = true;
      }
    };

    // Initial check
    calculateActivePhase();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [phaseConfig, isManualOverride]);

  // Sync to documentElement data attribute
  useEffect(() => {
    if (syncDocumentDataset) {
      document.documentElement.dataset.timeOfDay = timeOfDay;
    }
  }, [timeOfDay, syncDocumentDataset]);

  const themeMeta = phaseConfig[timeOfDay] || phaseConfig.morning;

  return {
    timeOfDay,
    themeMeta,
    scrollProgress,
    isManualOverride,
    setTimeOfDay,
    resumeAuto,
    scrollToPhase,
    allPhases: Object.values(phaseConfig),
  };
}
