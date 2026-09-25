import React, { createContext, useContext } from 'react';
import useTimeOfDayScroll from '../hooks/useTimeOfDayScroll.js';
import BackgroundScenery from './BackgroundScenery.jsx';

export const TimeOfDayContext = createContext(null);

export function useTimeOfDay() {
  const context = useContext(TimeOfDayContext);
  if (!context) {
    throw new Error('useTimeOfDay must be used within a TimeOfDayWrapper');
  }
  return context;
}

/**
 * TimeOfDayWrapper wraps the portfolio application or page to provide:
 * 1. Automatic scroll-driven theme detection ('morning' | 'afternoon' | 'evening')
 * 2. Visual background scenery (mountains, trees, dynamic sky gradients, birds, sun, moon, stars)
 * 3. Theme atmospheric datasets (data-time-of-day="morning|afternoon|evening")
 * 4. React Context for downstream components
 */
export default function TimeOfDayWrapper({
  children,
  initialState = 'morning',
  customMapping = null,
  className = '',
}) {
  const timeOfDayState = useTimeOfDayScroll({
    initialState,
    customMapping,
    syncDocumentDataset: true,
  });

  const { timeOfDay, scrollProgress } = timeOfDayState;

  return (
    <TimeOfDayContext.Provider value={timeOfDayState}>
      <div
        className={`time-of-day-wrapper theme-${timeOfDay} ${className}`}
        data-time-of-day={timeOfDay}
      >
        {/* Dynamic visual background scenery (Sun, Moon, Stars, Clouds, Birds, Mountains, Trees) */}
        <BackgroundScenery timeOfDay={timeOfDay} scrollProgress={scrollProgress} />

        {/* Portfolio Content */}
        <div className="time-of-day-content">
          {children}
        </div>
      </div>
    </TimeOfDayContext.Provider>
  );
}
