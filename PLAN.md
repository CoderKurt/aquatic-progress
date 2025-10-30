# Aquatic Progress – Product Plan

## MVP (must-haves)
- Landing page with a clean, calming visual of the aquarium
- Simple onboarding: choose 3 categories (e.g., Guitar, Reading, Coding)
- Practice log modal: quick form to add a session (select skill, minutes, note)
- Reactive world: adding a session causes a visible effect (spawn fish, pulse, growth)
- Encyclopedia panel: list species, progress, and unlocks
- Save/load to localStorage with export/import JSON
- Responsive UI (desktop + tablet)
- Basic sound feedback toggle (one short chime or soft ambient loop)

## Nice-to-have (Phase 1+)
- Day/night cycles & soft ambient transitions
- Animated particle effects for milestones
- Small achievement unlock animations
- Cloud saves (Supabase or AWS)
- API-based integration (Notion/Spotify)
- Shareable world snapshots (export PNG)

## Feedback Types
| Type | Purpose | Frequency | Visual / Emotional Impact | Example Feedback |
|---|---|---|---|---|
| Session | Encourage consistency | Often (daily/weekly) | Subtle, soothing | Small fish grows slightly, or gentle color shift; calm sound cue |
| Milestone | Celebrate mastery | Rare (weekly/monthly) | Noticeable, emotional | Ripple, glow, or new coral/fish; short chime or sparkle |
| Meta Milestone | Reflect long-term growth | Rare (multi-month) | Awe or surprise | Entire scene expands, unlocks new background layer (reef, kelp forest, deep ocean) |

## Notes
- Skills should be user-defined strings. No hardcoded categories.
- Keep UX minimal and gentle; avoid noisy or overly game-y elements in MVP.
- Prioritize fast session logging and clear, relaxing feedback.
