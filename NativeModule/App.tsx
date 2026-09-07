import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import NativeDeviceModel from './specs/NativeDeviceModel';
import NativeBatteryStatus from './specs/NativeBatteryStatus';
import type { BatteryStatus } from './specs/NativeBatteryStatus';

function App() {
  const [battery, setBattery] = useState<BatteryStatus>(() =>
    NativeBatteryStatus.getBatteryStatus(),
  );

  useEffect(() => {
    const subscription = NativeBatteryStatus.onBatteryChange(setBattery);
    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left']}>
        <View style={styles.page}>
          <Text style={styles.model}>{NativeDeviceModel.getDeviceModel()}</Text>
          <Text style={styles.battery}>
            {battery.level < 0
              ? 'battery unknown'
              : `${Math.round(battery.level * 100)}%`}
            {battery.isCharging ? ' · charging' : ''}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  model: {
    fontSize: 16,
  },
  battery: {
    fontSize: 32,
    fontWeight: '600',
  },
});

export default App;
