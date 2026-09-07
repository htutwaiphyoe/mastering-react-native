package com.nativemodule

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap

class NativeBatteryStatusModule (reactContext: ReactApplicationContext): NativeBatteryStatusSpec(reactContext){
    private var receiver: BroadcastReceiver? = null

    override fun getName() = NAME

    override fun getBatteryStatus(): WritableMap {
        // A null receiver returns the last sticky ACTION_BATTERY_CHANGED intent.
        val sticky = reactApplicationContext.registerReceiver(null, FILTER)
        return toStatusMap(sticky)
    }

    override fun initialize() {
        super.initialize()
        val batteryReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                emitOnBatteryChange(toStatusMap(intent))
            }
        }
        receiver = batteryReceiver
        reactApplicationContext.registerReceiver(batteryReceiver, FILTER)
    }

    override fun invalidate() {
        receiver?.let { reactApplicationContext.unregisterReceiver(it) }
        receiver = null
        super.invalidate()
    }

    private fun toStatusMap(intent: Intent?): WritableMap {
        val map = Arguments.createMap()

        val level = intent?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = intent?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
        map.putDouble("level", if (level >= 0 && scale > 0) level.toDouble() / scale else -1.0)

        val status = intent?.getIntExtra(BatteryManager.EXTRA_STATUS, -1) ?: -1
        map.putBoolean(
            "isCharging",
            status == BatteryManager.BATTERY_STATUS_CHARGING || status == BatteryManager.BATTERY_STATUS_FULL,
        )

        return map
    }

    companion object {
        const val NAME = "NativeBatteryStatus"
        private val FILTER = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
    }
}
