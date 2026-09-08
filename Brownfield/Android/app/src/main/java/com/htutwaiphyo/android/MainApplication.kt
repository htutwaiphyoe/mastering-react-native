package com.htutwaiphyo.android

import android.app.Application
import com.callstack.reactnativebrownfield.ReactNativeBrownfield
import com.facebook.react.PackageList
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative

class MainApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        loadReactNative(this)
        // PackageList comes from the AAR and holds the autolinked packages,
        // such as Re.Pack's ScriptManager. Passing emptyList() leaves them out.
        ReactNativeBrownfield.initialize(this, PackageList(this).packages)
    }
}
