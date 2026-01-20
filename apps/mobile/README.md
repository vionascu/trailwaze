# Trailwaze Mobile App

Expo / React Native app.

Offline-first hiking navigation inspired by Waze.

## Getting started

```bash
npm install
npx expo start
```

## Tests

```bash
npm test
```

## E2E (Detox)

Detox uses native builds generated via Expo prebuild.

```bash
# iOS
npm run e2e:build:ios
npm run e2e:test:ios

# Android
npm run e2e:build:android
npm run e2e:test:android
```

## Offline maps (MBTiles)

The Bucegi region tileset lives at:

`apps/mobile/assets/RegionMaps/bucegi.mbtiles`

Bounds: `25.25, 45.28, 25.60, 45.52` (minLon, minLat, maxLon, maxLat)  
Zooms: `10-16`

The app loads this MBTiles file into the device file system on startup and
renders it with MapLibre.
