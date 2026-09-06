package com.nativemodule

import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext

class NativeDeviceModelModule (reactContext: ReactApplicationContext): NativeDeviceModelSpec(reactContext){
    override fun getName() = NAME

    override fun getDeviceModel(): String {
        return Build.MODEL
    }

    companion object {
        const val NAME = "NativeDeviceModel"
    }
}
