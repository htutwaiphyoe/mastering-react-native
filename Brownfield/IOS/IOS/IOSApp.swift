//
//  IOSApp.swift
//  IOS
//
//  Created by Htut Wai Phyoe on 8/9/26.
//

import SwiftUI
import ReactNativeReact

@main
struct IOSApp: App {
    init() {
        ReactNativeBrownfield.shared.bundle = ReactNativeBundle
        
        ReactNativeBrownfield.shared.startReactNative {
                print("React Native bundle loaded")
            }
        }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
