import React, { useState } from 'react';

export default function TimeOfDayBadge({
  timeOfDay,
  themeMeta,
  scrollProgress = 0,
  scrollToPhase,
  setTimeOfDay,
  isManualOverride = false,
  resumeAuto,
  allPhases = [],
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`time-of-day-badge ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
      aria-label="Time of day theme indicator and navigation"
      role="region"
    >
      <div className="badge-glow" aria-hidden="true" />

      {/* Main trigger / pill button */}
      <button
        type="button"
        className="badge-pill"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-label={`Current phase: ${themeMeta?.name || timeOfDay}. Scroll progress: ${scrollProgress}%. Click to ${isExpanded ? 'collapse' : 'expand'} theme controls.`}
      >
        <span className="badge-icon-wrap" aria-hidden="true">
          <span className="badge-icon">{themeMeta?.icon || '🌅'}</span>
          <svg className="badge-progress-ring" viewBox="0 0 36 36">
            <path
              className="ring-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="ring-fill"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </span>

        <span className="badge-label-group">
          <span className="badge-title">{themeMeta?.name || 'Morning'}</span>
          <span className="badge-phase">{themeMeta?.phase || 'Sunrise / Dawn'}</span>
        </span>

        <span className="badge-caret" aria-hidden="true">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points={isExpanded ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
          </svg>
        </span>
      </button>

      {/* Expanded Quick Navigation & Phase Details */}
      {isExpanded && (
        <div className="badge-menu" role="menu">
          <div className="badge-menu-header">
            <span className="menu-eyebrow">Scroll Atmosphere</span>
            <span className="menu-progress">{scrollProgress}% Scrolled</span>
          </div>

          <div className="phase-buttons" role="group" aria-label="Portfolio theme sections">
            {allPhases.map((phase) => {
              const isActive = timeOfDay === phase.id;
              return (
                <button
                  key={phase.id}
                  type="button"
                  className={`phase-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    if (scrollToPhase) {
                      scrollToPhase(phase.id);
                    } else if (setTimeOfDay) {
                      setTimeOfDay(phase.id);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  <span className="phase-btn-icon" aria-hidden="true">{phase.icon}</span>
                  <div className="phase-btn-text">
                    <strong>{phase.name}</strong>
                    <span>{phase.phase}</span>
                  </div>
                  {isActive && <span className="active-dot" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          <div className="badge-menu-footer">
            {isManualOverride ? (
              <button
                type="button"
                className="resume-auto-btn"
                onClick={resumeAuto}
              >
                <span>⚡ Locked: Click to Resume Auto-Scroll</span>
              </button>
            ) : (
              <span className="auto-scroll-hint">
                <span className="pulse-indicator" aria-hidden="true" />
                Live: Auto-transitions on scroll
              </span>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
