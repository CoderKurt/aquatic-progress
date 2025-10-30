export interface Session {
  id: string;
  skill: string;
  minutes: number;
  note?: string;
  createdAt: number; // epoch ms
}

export interface UserSettings {
  trackedSkills: string[];
  soundEnabled: boolean;
}

export interface AppStateData {
  sessions: Session[];
  settings: UserSettings;
}

export const DEFAULT_SETTINGS: UserSettings = {
  trackedSkills: [],
  soundEnabled: true,
};

export const DEFAULT_STATE: AppStateData = {
  sessions: [],
  settings: DEFAULT_SETTINGS,
};
