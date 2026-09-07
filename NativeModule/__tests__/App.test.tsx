/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

// The specs call TurboModuleRegistry.getEnforcing at import time, which throws
// under Jest because there is no native binary. Stand in for the native modules.
jest.mock('../specs/NativeDeviceModel', () => ({
  __esModule: true,
  default: {
    getDeviceModel: () => 'Pixel 8 Pro',
  },
}));

jest.mock('../specs/NativeBatteryStatus', () => ({
  __esModule: true,
  default: {
    getBatteryStatus: () => ({ level: 0.42, isCharging: false }),
    onBatteryChange: () => ({ remove: () => {} }),
  },
}));

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
