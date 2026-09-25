import React, { useMemo } from 'react';

/**
 * BackgroundScenery Component
 *
 * Renders an atmospheric, fixed background landscape with:
 * - Dynamic Sky Gradients (Morning Dawn -> Afternoon Daylight -> Evening Midnight)
 * - Animated Celestial Bodies (Rising Sun low on horizon -> High Sun -> Glowing Moon)
 * - Ambient Twinkling Stars (visible at night)
 * - Drifting Vector Clouds
 * - Subtle Gliding Silhouette Birds (Morning / Afternoon)
 * - Multi-layered vector Mountains & Pine Tree Silhouettes that dynamically adapt in lighting and tint
 *
 * All elements are non-interactive (`pointer-events: none`) and rendered behind the portfolio content (`z-index: 0`).
 */
export default function BackgroundScenery({ timeOfDay = 'morning', scrollProgress = 0 }) {
  // Pre-generate stable twinkling star positions
  const stars = useMemo(() => {
    return Array.from({ length: 42 }).map((_, i) => ({
      id: i,
      top: `${(Math.sin(i * 99) * 0.5 + 0.5) * 45}%`,
      left: `${(Math.cos(i * 33) * 0.5 + 0.5) * 98}%`,
      size: (i % 3) + 1.5,
      delay: `${(i % 5) * 0.7}s`,
      duration: `${1.8 + (i % 4) * 0.6}s`,
    }));
  }, []);

  return (
    <div className={`background-scenery scenery--${timeOfDay}`} aria-hidden="true">
      {/* 1. Dynamic Sky Gradients with smooth cross-fade */}
      <div className="scenery-sky">
        <div className="sky-gradient sky-gradient--morning" />
        <div className="sky-gradient sky-gradient--afternoon" />
        <div className="sky-gradient sky-gradient--evening" />
      </div>

      {/* 2. Celestial Layer: Stars, Sun, and Moon */}
      <div className="scenery-celestial">
        {/* Twinkling Stars (Evening / Night) */}
        <div className="celestial-stars">
          {stars.map((star) => (
            <span
              key={star.id}
              className="star-point"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>

        {/* Dynamic Sun (Low Rising in Morning, High in Afternoon, Sunset in Evening) */}
        <div className="celestial-sun-container">
          <div className="sun-glow" />
          <div className="sun-pulse-ring" />
          <svg className="sun-graphic" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" className="sun-core" />
            <circle cx="50" cy="50" r="44" className="sun-corona" />
          </svg>
        </div>

        {/* Dynamic Glowing Moon (Evening / Midnight) */}
        <div className="celestial-moon-container">
          <div className="moon-glow" />
          <svg className="moon-graphic" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="34" className="moon-orb" />
            <circle cx="64" cy="42" r="28" className="moon-crescent-mask" />
            {/* Soft subtle lunar craters */}
            <circle cx="38" cy="48" r="4" className="moon-crater" />
            <circle cx="46" cy="62" r="5" className="moon-crater" />
            <circle cx="34" cy="62" r="3.5" className="moon-crater" />
          </svg>
        </div>
      </div>

      {/* 3. Floating Clouds Layer (Drifting across viewport) */}
      <div className="scenery-clouds">
        <div className="cloud-item cloud-item--1">
          <svg viewBox="0 0 240 70" preserveAspectRatio="none">
            <path d="M20,55 Q35,25 70,30 Q95,10 135,22 Q170,8 195,30 Q225,32 225,55 Q225,65 195,65 L35,65 Q20,65 20,55 Z" />
          </svg>
        </div>
        <div className="cloud-item cloud-item--2">
          <svg viewBox="0 0 280 80" preserveAspectRatio="none">
            <path d="M25,60 Q40,28 85,35 Q115,12 165,24 Q205,10 235,35 Q265,38 265,60 Q265,72 235,72 L45,72 Q25,72 25,60 Z" />
          </svg>
        </div>
        <div className="cloud-item cloud-item--3">
          <svg viewBox="0 0 200 60" preserveAspectRatio="none">
            <path d="M15,48 Q30,22 60,26 Q82,8 118,18 Q148,6 170,26 Q195,28 195,48 Q195,58 170,58 L30,58 Q15,58 15,48 Z" />
          </svg>
        </div>
      </div>

      {/* 4. Ambient Birds Layer (Morning & Afternoon) */}
      <div className="scenery-birds">
        <div className="bird bird--1">
          <svg viewBox="0 0 34 16">
            <path d="M1,12 Q8,1 17,8 Q26,1 33,12 Q25,7 17,14 Q9,7 1,12 Z" />
          </svg>
        </div>
        <div className="bird bird--2">
          <svg viewBox="0 0 28 14">
            <path d="M1,11 Q7,1 14,7 Q21,1 27,11 Q20,6 14,12 Q8,6 1,11 Z" />
          </svg>
        </div>
        <div className="bird bird--3">
          <svg viewBox="0 0 24 12">
            <path d="M1,9 Q6,1 12,6 Q18,1 23,9 Q17,5 12,10 Q7,5 1,9 Z" />
          </svg>
        </div>
      </div>

      {/* 5. Landscape: Layered Mountains & Pine Tree Silhouettes */}
      <div className="scenery-landscape">
        {/* Far Mountain Range (High majestic peaks) */}
        <svg
          className="landscape-svg landscape-mountains-far"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
        >
          <path
            className="mountain-far-fill"
            d="M0,340 L0,185 Q90,140 180,175 Q280,100 390,165 Q480,85 580,145 Q670,60 780,135 Q890,75 1010,150 Q1120,95 1230,160 Q1330,110 1440,170 L1440,340 Z"
          />
        </svg>

        {/* Mid Mountain Range (Defined ridges with natural contour) */}
        <svg
          className="landscape-svg landscape-mountains-mid"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
        >
          <path
            className="mountain-mid-fill"
            d="M0,280 L0,145 Q120,95 240,135 Q350,70 470,120 Q590,55 710,115 Q820,70 940,130 Q1060,65 1190,125 Q1310,85 1440,140 L1440,280 Z"
          />
        </svg>

        {/* Near Rolling Foothills and Pine Trees Silhouettes */}
        <svg
          className="landscape-svg landscape-foothills-near"
          viewBox="0 0 1440 210"
          preserveAspectRatio="none"
        >
          {/* Base Rolling Foothills */}
          <path
            className="foothills-near-fill"
            d="M0,210 L0,95 Q140,55 300,85 Q480,45 660,75 Q840,40 1020,70 Q1220,50 1440,80 L1440,210 Z"
          />

          {/* Detailed Pine & Evergreen Tree Silhouettes along the ridges */}
          <g className="trees-silhouette-group">
            {/* Cluster 1: Left */}
            <polygon points="45,95 53,60 61,95" />
            <polygon points="58,98 67,52 76,98" />
            <polygon points="72,100 80,65 88,100" />
            <polygon points="120,90 128,50 136,90" />
            <polygon points="133,92 142,42 151,92" />
            <polygon points="148,94 156,58 164,94" />

            {/* Cluster 2: Mid-Left */}
            <polygon points="260,88 268,48 276,88" />
            <polygon points="273,90 283,38 293,90" />
            <polygon points="290,92 298,54 306,92" />
            <polygon points="340,82 348,46 356,82" />
            <polygon points="353,84 362,36 371,84" />
            <polygon points="368,86 376,50 384,86" />

            {/* Cluster 3: Center */}
            <polygon points="520,78 528,42 536,78" />
            <polygon points="533,80 543,32 553,80" />
            <polygon points="550,82 558,48 566,82" />
            <polygon points="620,74 628,38 636,74" />
            <polygon points="633,76 643,28 653,76" />
            <polygon points="650,78 658,44 666,78" />

            {/* Cluster 4: Mid-Right */}
            <polygon points="800,72 808,36 816,72" />
            <polygon points="813,74 823,26 833,74" />
            <polygon points="830,76 838,42 846,76" />
            <polygon points="910,75 918,39 926,75" />
            <polygon points="923,77 933,29 943,77" />
            <polygon points="940,79 948,45 956,79" />

            {/* Cluster 5: Right */}
            <polygon points="1110,75 1118,38 1126,75" />
            <polygon points="1123,77 1133,28 1143,77" />
            <polygon points="1140,79 1148,44 1156,79" />
            <polygon points="1260,78 1268,40 1276,78" />
            <polygon points="1273,80 1283,30 1293,80" />
            <polygon points="1290,82 1298,46 1306,82" />
            <polygon points="1370,82 1378,44 1386,82" />
            <polygon points="1383,84 1393,34 1403,84" />
          </g>
        </svg>
      </div>

      {/* 6. Soft Content Readability Veil: Keeps text & cards 100% readable */}
      <div className="scenery-readability-veil" />
    </div>
  );
}
