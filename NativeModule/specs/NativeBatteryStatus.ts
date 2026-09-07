import type { TurboModule, CodegenTypes } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type BatteryStatus = {
  /** 0 to 1, or -1 when the platform cannot report it. */
  level: number;
  isCharging: boolean;
};

export interface Spec extends TurboModule {
  getBatteryStatus(): BatteryStatus;
  readonly onBatteryChange: CodegenTypes.EventEmitter<BatteryStatus>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeBatteryStatus');
