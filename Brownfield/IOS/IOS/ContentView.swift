//
//  ContentView.swift
//  IOS
//
//  Created by Htut Wai Phyoe on 8/9/26.
//

import SwiftUI
import ReactNativeReact

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {

                Text("This screen is native SwiftUI")

                NavigationLink("Open React Native") {
                    // Must match AppRegistry.registerComponent in index.js.
                    ReactNativeView(moduleName: "ReactNative")
                        .navigationTitle("React Native")
                        .navigationBarTitleDisplayMode(.inline)
                }
                .buttonStyle(.borderedProminent)
            }
            .padding()
        }
    }
}
