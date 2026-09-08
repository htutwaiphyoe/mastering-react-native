package com.htutwaiphyo.android

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.fragment.app.FragmentActivity
import com.callstack.reactnativebrownfield.ReactNativeBrownfield
import com.htutwaiphyo.android.ui.theme.AndroidTheme

// FragmentActivity, not ComponentActivity: createView needs one to forward
// lifecycle events and hardware back presses to React Native.
class MainActivity : FragmentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AndroidTheme {
                var showReactNative by remember { mutableStateOf(false) }

                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    if (showReactNative) {
                        ReactNativeScreen(
                            activity = this,
                            modifier = Modifier.padding(innerPadding),
                        )
                    } else {
                        NativeScreen(
                            onOpenReactNative = { showReactNative = true },
                            modifier = Modifier.padding(innerPadding),
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun NativeScreen(onOpenReactNative: () -> Unit, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier.fillMaxSize(),
        verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(text = "This screen is native Compose")
        Button(onClick = onOpenReactNative) {
            Text(text = "Open React Native")
        }
    }
}

@Composable
private fun ReactNativeScreen(activity: FragmentActivity, modifier: Modifier = Modifier) {
    AndroidView(
        modifier = modifier.fillMaxSize(),
        // "ReactNative" must match AppRegistry.registerComponent in index.js.
        factory = { ReactNativeBrownfield.shared.createView(activity, "ReactNative") },
    )
}
