//
//  RCTNativeDeviceModel.mm
//  NativeModule
//
//  Created by Htut Wai Phyoe on 7/9/26.
//

#import "RCTNativeDeviceModel.h"

#import <TargetConditionals.h>
#import <stdlib.h>
#import <sys/sysctl.h>

@implementation RCTNativeDeviceModel

RCT_EXPORT_MODULE(NativeDeviceModel)

- (NSString *)getDeviceModel
{
#if TARGET_OS_SIMULATOR
  // Inside a simulator hw.machine reports the host architecture, so read the
  // simulated device from the environment instead.
  const char *simulated = getenv("SIMULATOR_MODEL_IDENTIFIER");
  if (simulated != NULL) {
    return [NSString stringWithUTF8String:simulated];
  }
#endif

  size_t size = 0;
  if (sysctlbyname("hw.machine", NULL, &size, NULL, 0) != 0 || size == 0) {
    return @"unknown";
  }

  char *machine = (char *)malloc(size);
  if (machine == NULL) {
    return @"unknown";
  }

  NSString *model = @"unknown";
  if (sysctlbyname("hw.machine", machine, &size, NULL, 0) == 0) {
    model = [NSString stringWithUTF8String:machine];
  }
  free(machine);

  return model;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeDeviceModelSpecJSI>(params);
}

@end
