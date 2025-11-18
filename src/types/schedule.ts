export type CoachId = 'andrew' | 'volodymyr' | 'buchecha';

export interface ICoach {
  name: string;
  id: CoachId;
}

export interface IProgramDetails {
  time: string;
  program: string;
  coach: ICoach;
}

export interface IScheduleItem {
  days: string;
  programs: IProgramDetails[][];
}
