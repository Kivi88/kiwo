Set-Location C:\kiwo\mobile
flutter clean
flutter pub get
flutter build apk --release
Copy-Item "build\app\outputs\flutter-apk\app-release.apk" "C:\Users\yazar\Desktop\KIWO-v2.apk"
Write-Host "APK built successfully: C:\Users\yazar\Desktop\KIWO-v2.apk"
