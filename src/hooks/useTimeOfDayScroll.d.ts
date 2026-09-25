export type TimeOfDayPhase = 'morning' | 'afternoon' | 'evening';

export interface PhaseMeta {
  id: TimeOfDayPhase;
  name: string;
  phase: string;
  icon: string;
  accentColor: string;
  glowColor: string;
  description: string;
  sections: string[];
  targetSectionId: string;
}

export interface UseTimeOfDayScrollOptions {
  initialState?: TimeOfDayPhase;
  customMapping?: Record<TimeOfDayPhase, PhaseMeta> | null;
  syncDocumentDataset?: boolean;
}

export interface UseTimeOfDayScrollReturn {
  timeOfDay: TimeOfDayPhase;
  themeMeta: PhaseMeta;
  scrollProgress: number;
  isManualOverride: boolean;
  setTimeOfDay: (phase: TimeOfDayPhase) => void;
  resumeAuto: () => void;
  scrollToPhase: (phase: TimeOfDayPhase) => void;
  allPhases: PhaseMeta[];
}

export declare const THEME_PHASES: Record<TimeOfDayPhase, PhaseMeta>;

export default function useTimeOfDayScroll(
  options?: UseTimeOfDayScrollOptions
): UseTimeOfDayScrollReturn;
