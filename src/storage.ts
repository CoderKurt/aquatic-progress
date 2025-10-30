import { DEFAULT_STATE, type AppStateData } from "./types";

const STORAGE_KEY = "aquatic-progress/state/v1";

export function loadState(): AppStateData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as AppStateData;
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      settings: parsed.settings ?? DEFAULT_STATE.settings,
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: AppStateData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function exportState(state: AppStateData): string {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string): AppStateData {
  const parsed = JSON.parse(json) as AppStateData;
  return parsed;
}
