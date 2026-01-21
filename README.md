# Trailwaze

[![pipeline status](https://gitlab.com/vic.ionascu/trailwaze/badges/main/pipeline.svg)](https://gitlab.com/vic.ionascu/trailwaze/-/pipelines)

Offline-first hiking navigation inspired by Waze.

## Repo structure

- Mobile app (Expo / React Native): `apps/mobile`
- Product epics and stories: `docs/mvp-epics.md`

## Web quickstart (step-by-step)

```bash
cd apps/mobile
npm install
npx expo start --web
```

1) Open the URL shown in the terminal.
2) You should see the map with hiking trails highlighted.
3) Click "Raporteaza", pick a report type, then click the map to drop a pin.

## Run the app (native)

```bash
cd apps/mobile
npm install
npx expo start
```

## Reporting guide (web)

1) Click "Raporteaza".
2) Choose a report type (Urs, Copac cazut, Grohotis, Cabana full).
3) Click the map where the issue is located.
4) A pin appears with the report type initial.

Reports are stored in memory during the session.

## Tests

```bash
cd apps/mobile
npm test
```

## CI pipeline

GitLab CI runs two stages:

- `verify`: prints Node and npm versions
- `test`: installs dependencies and runs `npm test` for the mobile app
