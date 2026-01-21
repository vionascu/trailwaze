import { useEffect, useMemo, useState } from 'react';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';
import MapLibreGL from '@maplibre/maplibre-react-native';
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import mbtilesAsset from './mbtiles';

export default function App() {
  const isWeb = Platform.OS === 'web';
  const [mbtilesPath, setMbtilesPath] = useState(null);
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const prepareTiles = async () => {
      if (isWeb || !mbtilesAsset) {
        return;
      }

      const asset = Asset.fromModule(mbtilesAsset);
      await asset.downloadAsync();

      const targetPath = `${FileSystem.documentDirectory}bucegi.mbtiles`;
      const targetInfo = await FileSystem.getInfoAsync(targetPath);

      if (!targetInfo.exists) {
        if (!asset.localUri) {
          throw new Error('Bucegi MBTiles asset is missing a local URI.');
        }
        await FileSystem.copyAsync({ from: asset.localUri, to: targetPath });
      }

      if (isMounted) {
        setMbtilesPath(targetPath);
      }
    };

    prepareTiles();

    return () => {
      isMounted = false;
    };
  }, [isWeb]);

  useEffect(() => {
    let isMounted = true;

    const requestLocation = async () => {
      if (isWeb) {
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (isMounted) {
        setLocationDenied(status !== 'granted');
      }
    };

    requestLocation();

    return () => {
      isMounted = false;
    };
  }, [isWeb]);

  const mapStyle = useMemo(() => {
    if (!mbtilesPath) {
      return null;
    }

    const normalizedPath = mbtilesPath.startsWith('file://')
      ? mbtilesPath.replace('file://', '')
      : mbtilesPath;

    return {
      version: 8,
      sources: {
        bucegi: {
          type: 'raster',
          tiles: [`mbtiles://${normalizedPath}`],
          tileSize: 256,
        },
      },
      layers: [
        {
          id: 'bucegi',
          type: 'raster',
          source: 'bucegi',
        },
      ],
    };
  }, [mbtilesPath]);

  return (
    <SafeAreaView style={styles.container} testID="app-root">
      <View style={styles.header}>
        <Text style={styles.title} testID="app-title">
          Trailwaze
        </Text>
        <Text style={styles.subtitle}>Offline-first hiking reports</Text>
      </View>

      <View style={styles.mapPlaceholder} testID="map-placeholder">
        {isWeb ? (
          <View style={styles.mapLoading}>
            <Text style={styles.mapText}>Offline map preview</Text>
            <Text style={styles.mapSubtext}>
              MapLibre MBTiles rendering is available on iOS/Android builds.
            </Text>
          </View>
        ) : mapStyle ? (
          <MapLibreGL.MapView
            style={styles.map}
            mapStyle={mapStyle}
            compassEnabled
            logoEnabled={false}
            attributionEnabled={false}
          >
            <MapLibreGL.Camera
              zoomLevel={12}
              centerCoordinate={[25.43, 45.4]}
            />
            <MapLibreGL.UserLocation visible />
          </MapLibreGL.MapView>
        ) : (
          <View style={styles.mapLoading}>
            <ActivityIndicator color="#f2b155" />
            <Text style={styles.mapText}>Preparing offline map...</Text>
            <Text style={styles.mapSubtext}>Copying MBTiles to device</Text>
          </View>
        )}
      </View>

      {locationDenied ? (
        <Text style={styles.permissionHint}>
          Location permission is needed to show your GPS dot.
        </Text>
      ) : null}

      <View style={styles.actions}>
        <View style={styles.reportButton} testID="report-button">
          <Text style={styles.reportText}>Raporteaza</Text>
        </View>
        <Text style={styles.hint}>
          Tipuri: urs, gheata, copac cazut, grohotis, cabana full
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1c1a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    color: '#f5f3e9',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#c6d4cf',
    marginTop: 4,
  },
  mapPlaceholder: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#355e57',
    backgroundColor: '#142624',
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  mapLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    color: '#f5f3e9',
    fontSize: 16,
    fontWeight: '600',
  },
  mapSubtext: {
    color: '#8da39b',
    marginTop: 6,
  },
  actions: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  reportButton: {
    backgroundColor: '#f2b155',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  reportText: {
    color: '#1b1b1b',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  hint: {
    color: '#9cb0aa',
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  permissionHint: {
    color: '#f2b155',
    paddingHorizontal: 20,
    paddingBottom: 12,
    textAlign: 'center',
    fontSize: 12,
  },
});
