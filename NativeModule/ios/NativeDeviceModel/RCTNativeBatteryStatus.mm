//
//  RCTNativeBatteryStatus.mm
//  NativeModule
//

#import "RCTNativeBatteryStatus.h"

#import <UIKit/UIKit.h>

@implementation RCTNativeBatteryStatus

RCT_EXPORT_MODULE(NativeBatteryStatus)

- (instancetype)init
{
  if (self = [super init]) {
    UIDevice.currentDevice.batteryMonitoringEnabled = YES;

    for (NSNotificationName name in @[
           UIDeviceBatteryLevelDidChangeNotification,
           UIDeviceBatteryStateDidChangeNotification,
         ]) {
      [NSNotificationCenter.defaultCenter addObserver:self
                                            selector:@selector(batteryDidChange)
                                                name:name
                                              object:nil];
    }
  }
  return self;
}

- (void)dealloc
{
  [NSNotificationCenter.defaultCenter removeObserver:self];
}

- (NSDictionary *)getBatteryStatus
{
  return [self currentStatus];
}

- (void)batteryDidChange
{
  // The generated emitter calls the callback unguarded, so it must not run
  // before React Native has installed it.
  if (_eventEmitterCallback) {
    [self emitOnBatteryChange:[self currentStatus]];
  }
}

- (NSDictionary *)currentStatus
{
  UIDevice *device = UIDevice.currentDevice;
  UIDeviceBatteryState state = device.batteryState;

  // batteryLevel is -1 when unavailable, which the spec passes through as-is.
  return @{
    @"level" : @(device.batteryLevel),
    @"isCharging" : @(state == UIDeviceBatteryStateCharging || state == UIDeviceBatteryStateFull),
  };
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeBatteryStatusSpecJSI>(params);
}

@end
