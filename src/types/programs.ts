type ProgramKey =
  | 'beginners'
  | 'pro'
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
