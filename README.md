# Trailwaze

[![pipeline status](https://gitlab.com/vic.ionascu/trailwaze/badges/main/pipeline.svg)](https://gitlab.com/vic.ionascu/trailwaze/-/pipelines)

Offline-first hiking navigation inspired by Waze.

## Repo structure

- Mobile app (Expo / React Native): `apps/mobile`
- Product epics and stories: `docs/mvp-epics.md`

## Mobile app setup

```bash
cd apps/mobile
npm install
npx expo start
```

## Tests

```bash
cd apps/mobile
npm test
```

## CI pipeline

GitLab CI runs two stages:

- `verify`: prints Node and npm versions
- `test`: installs dependencies and runs `npm test` for the mobile app
