describe('Epic 1: Mobile app foundation (React Native + Expo)', () => {
  describe('US1.1 - Launch the app on a phone', () => {
    it.todo('starts via `npx expo start` without errors');
    it.todo('shows the app title and a basic layout on the initial screen');
  });

  describe('US1.2 - Minimal repo structure', () => {
    it.todo('has a functional Expo project in apps/mobile');
    it.todo('documents npm install and npx expo start in the README');
  });
});

describe('Epic 2: Offline maps (MapLibre + MBTiles)', () => {
  describe('US2.1 - See an offline map', () => {
    it.todo('loads the map without an internet connection');
    it.todo('uses local MBTiles as tile sources');
  });

  describe('US2.2 - Show position on the map', () => {
    it.todo('renders the GPS dot on the map');
    it.todo('shows a clear message when GPS permission is denied');
  });

  describe('US2.3 - Display GPX tracks', () => {
    it.todo('renders GPX tracks on the map');
    it.todo('keeps the track visible offline');
  });

  describe('US2.4 - Themed layers (bear, ice, obstacles)', () => {
    it.todo('allows toggling layers on and off');
    it.todo('renders layers offline');
  });
});

describe('Epic 3: Local storage (reports, cache, sync)', () => {
  describe('US3.1 - Save reports locally', () => {
    it.todo('stores reports in local SQLite');
    it.todo('persists id, type, lat, lon, createdAt, expiresAt');
  });

  describe('US3.2 - Cache tracks and reports', () => {
    it.todo('reads tracks and reports offline from cache');
    it.todo('invalidates cache after a configurable period');
  });

  describe('US3.3 - Sync queue', () => {
    it.todo('creates a syncQueue table with status and retries');
    it.todo('processes queue items when connectivity is available');
  });
});

describe('Epic 4: Fast backend for sync (Supabase/Firebase)', () => {
  describe('US4.1 - Automatic sync when signal returns', () => {
    it.todo('sends syncQueue reports when online');
    it.todo('updates status and retries when sync fails');
  });

  describe('US4.2 - New reports from my area', () => {
    it.todo('queries reports within a geographic radius');
    it.todo('filters reports from the last 24h');
  });
});

describe('Epic 5: Weather, wind, alerts', () => {
  describe('US5.1 - Simple forecast for key points', () => {
    it.todo('shows weather for predefined coordinates');
    it.todo('caches weather data locally to reduce API calls');
  });

  describe('US5.2 - Essential route-level alerts', () => {
    it.todo('shows alerts in the UI when new data exists');
    it.todo('updates alerts only when connectivity is available');
  });
});

describe('Epic 6: Waze-style reporting without signal', () => {
  describe('US6.1 - Fast reporting button', () => {
    it.todo('renders a visible "Report" button');
    it.todo('auto-captures coordinates and time for a report');
  });

  describe('US6.2 - Choose report type', () => {
    it.todo('offers bear, ice, fallen tree, scree, hut full as types');
    it.todo('saves the selected type in the report');
  });

  describe('US6.3 - Add photo and text', () => {
    it.todo('stores an optional photo locally');
    it.todo('stores optional short text locally');
  });

  describe('US6.4 - Automatic expiration (TTL)', () => {
    it.todo('sets expiresAt based on report type');
    it.todo('hides expired reports');
  });
});
