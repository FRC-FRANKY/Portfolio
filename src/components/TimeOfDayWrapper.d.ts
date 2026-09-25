import { ReactNode } from 'react';
import { TimeOfDayPhase, UseTimeOfDayScrollReturn } from '../hooks/useTimeOfDayScroll';

export interface TimeOfDayWrapperProps {
  children: ReactNode;
  initialState?: TimeOfDayPhase;
  customMapping?: Record<TimeOfDayPhase, any> | null;
  className?: string;
}

export declare function useTimeOfDay(): UseTimeOfDayScrollReturn;

export default function TimeOfDayWrapper(props: TimeOfDayWrapperProps): JSX.Element;
