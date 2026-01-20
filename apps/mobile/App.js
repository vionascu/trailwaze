import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trailwaze</Text>
        <Text style={styles.subtitle}>Offline-first hiking reports</Text>
      </View>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Offline map placeholder</Text>
        <Text style={styles.mapSubtext}>MapLibre + MBTiles will live here</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.reportButton}>
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
});
