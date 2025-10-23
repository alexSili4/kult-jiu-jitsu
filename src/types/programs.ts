type ProgramKey =
  | 'beginners'
  | 'mixed'
  | 'basic'
  | 'kids'
  | 'personal'
  | 'events';

interface ProgramInfo {
  label: string;
  desc: string | null;
  image: string;
}

export type Programs = Record<ProgramKey, ProgramInfo>;
