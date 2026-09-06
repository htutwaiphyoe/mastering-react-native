/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

// The spec calls TurboModuleRegistry.getEnforcing at import time, which throws
// under Jest because there is no native binary. Stand in for the native module.
jest.mock('../specs/NativeDeviceModel', () => ({
  __esModule: true,
  default: {
    getDeviceModel: () => 'Pixel 8 Pro',
  },
}));

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
