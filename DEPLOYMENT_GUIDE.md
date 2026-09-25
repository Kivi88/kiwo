# KIWO - Deployment Guide

Bu rehber, KIWO uygulamasının Android Play Store ve iOS App Store'a yüklenmesi için gerekli adımları içerir.

## 📱 Android Play Store Deployment

### 1. Google Play Console Hesabı

1. [Google Play Console](https://play.google.com/console) hesabı oluşturun
2. **$25** ücret ödeyin (tek seferlik)
3. Geliştirici hesabınızı doğrulayın

### 2. Uygulama Oluşturma

1. Play Console'da "Create app" butonuna tıklayın
2. Uygulama bilgilerini girin:
   - **App name**: KIWO - AI Ödev Asistanı
   - **Default language**: Türkçe
   - **Free or Paid**: Free
3. Uygulama detaylarını doldurun:
   - Uygulama açıklaması
   - Kategori: Education
   - İçerik derecelendirmesi

### 3. APK Build ve İmzalama

#### Seçenek A: GitHub Actions (Önerilen)
1. Projeyi GitHub'a yükleyin
2. GitHub Actions workflow'ı tetikleyin
3. Oluşturulan APK'yı indirin

#### Seçenek B: Lokal Build
```powershell
cd mobile
flutter build apk --release
```

#### APK İmzalama
1. Keystore oluşturun:
```powershell
keytool -genkey -v -keystore kiwo-release.keystore -alias kiwo -keyalg RSA -keysize 2048 -validity 10000
```

2. `android/key.properties` dosyası oluşturun:
```properties
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=kiwo
storeFile=kiwo-release.keystore
```

3. `android/app/build.gradle.kts` dosyasını güncelleyin (zaten yapılandırılmış)

4. İmzalanmış APK build edin:
```powershell
flutter build apk --release
```

### 4. Play Store'a Yükleme

1. Play Console'da "Release" sekmesine gidin
2. "Create new release" butonuna tıklayın
3. APK dosyasını yükleyin
4. Sürüm bilgilerini girin:
   - **Version name**: 1.2.0
   - **Version code**: 3
5. Değişiklik notlarını ekleyin
6. Gözden geçirme için gönderin

### 5. İçerik Derecelendirmesi

1. Play Console'da "Content rating" sekmesine gidin
2. Anketi doldurun:
   - **Violence**: None
   - **Sexual content**: None
   - **Language**: None
   - **Gambling**: None
   - **Drugs**: None
3. Derecelendirmeyi onaylayın

### 6. Store Listing

1. "Store listing" sekmesine gidin
2. Aşağıdaki bilgileri ekleyin:
   - **Uygulama açıklaması**: KIWO README.md'den
   - **Kısa açıklama**: AI-powered education assistant
   - **Screenshot'lar**: En az 2 ekran görüntüsü
   - **App icon**: 512x512 PNG
   - **Feature graphic**: 1024x500 PNG

### 7. Fiyatlandırma ve Dağıtım

1. "Pricing and distribution" sekmesine gidin
2. Ücretsiz uygulama seçin
3. Dağıtım bölgelerini seçin (Global)
4. İçerik yönergelerini kabul edin

### 8. Goğden Geçirme

- Play Store gözden geçirmesi **1-3 gün** sürebilir
- Politikaların uyduğundan emin olun
- Test cihazlarını ekleyin

---

## 🍎 iOS App Store Deployment

### 1. Apple Developer Program

1. [Apple Developer Program](https://developer.apple.com/programs/) katılın
2. **$99/yıl** ücret ödeyin
3. Geliştirici hesabınızı doğrulayın

### 2. App ID Oluşturma

1. [App Store Connect](https://appstoreconnect.apple.com/) hesabına gidin
2. "My Apps" > "+" > "New App"
3. Uygulama bilgilerini girin:
   - **Platform**: iOS
   - **Name**: KIWO
   - **Bundle ID**: com.melihy.kiwo
   - **SKU**: KIWO-001
   - **User Access**: Team

### 3. Certificate ve Provisioning Profile

#### Development Certificate
1. Xcode'da "Preferences" > "Accounts"
2. Apple ID'nizi ekleyin
3. "Manage Certificates" > "+" > "Apple Development"

#### Distribution Certificate
1. Apple Developer portalına gidin
2. "Certificates, Identifiers & Profiles"
3. "Certificates" > "+" > "Apple Distribution"
4. CSR (Certificate Signing Request) oluşturun
5. Certificate'ı indirin ve Keychain'e ekleyin

#### Provisioning Profile
1. "Profiles" > "+" > "iOS App Development"
2. App ID seçin: com.melihy.kiwo
3. Development certificate seçin
4. Cihazlarınızı ekleyin
5. Profile'i indirin

### 4. IPA Build

#### Seçenek A: GitHub Actions (Önerilen)
1. `ios/ExportOptions.plist` dosyasını güncelleyin:
   - `YOUR_TEAM_ID`: Apple Team ID'niz
   - `YOUR_PROVISIONING_PROFILE_NAME`: Profile adınız
2. GitHub workflow'ı tetikleyin
3. IPA dosyasını indirin

#### Seçenek B: Lokal Build
```powershell
cd mobile
flutter build ios --release
cd ios
xcodebuild -workspace Runner.xcworkspace -scheme Runner -configuration Release archive -archivePath build/Runner.xcarchive
xcodebuild -exportArchive -archivePath build/Runner.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath build/export
```

### 5. TestFlight

1. App Store Connect'te uygulamanızı seçin
2. "TestFlight" sekmesine gidin
3. "Create your first external test group"
4. IPA dosyasını yükleyin
5. Test kullanıcılarını ekleyin
6. Sürüm bilgilerini girin
7. Test'e gönderin

### 6. App Store Submission

1. TestFlight'ta beta testi tamamlayın
2. "Prepare for Submission" butonuna tıklayın
3. Uygulama bilgilerini doldurun:
   - **App Information**: Temel bilgiler
   - **Pricing and Availability**: Ücretsiz, global
   - **Version Information**: 1.2.0
   - **Build**: Seçin ve yükleyin
   - **App Screenshots**: Gerekli boyutlar
   - **App Icon**: 1024x1024
   - **App Privacy**: Veri toplama politikası

### 7. Gözden Geçirme

- Apple gözden geçirmesi **1-2 hafta** sürebilir
- İnsan yönergelerine uyduğundan emin olun
- TestFlight'ta önce beta testi yapın

---

## 🚀 GitHub Actions ile Otomatik Build

### 1. Repository Oluşturma

1. GitHub'da yeni repository oluşturun
2. Projeyi yükleyin:
```powershell
cd "C:\Users\yazar\Desktop\Ödev yapıcı program"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/kiwo.git
git push -u origin main
```

### 2. Workflow Tetikleme

1. GitHub'da repository'ye gidin
2. "Actions" sekmesine tıklayın
3. "Build KIWO App" workflow'unu seçin
4. "Run workflow" butonuna tıklayın
5. Branch seçin ve çalıştırın

### 3. Build Sonuçları

1. Workflow tamamlandıktan sonra "Artifacts" sekmesine gidin
2. `kiwo-android-apk` ve `kiwo-ios-build` dosyalarını indirin
3. Bu dosyaları store'lara yükleyin

### 4. Secrets Ayarlama (İsteğe Bağlı)

Apple ve Google imzalama için GitHub Secrets ekleyin:
- `APPLE_CERTIFICATE`: Apple certificate (base64)
- `APPLE_CERTIFICATE_PASSWORD`: Certificate şifresi
- `APPLE_PROVISIONING_PROFILE`: Provisioning profile (base64)
- `ANDROID_KEYSTORE`: Android keystore (base64)
- `ANDROID_KEYSTORE_PASSWORD`: Keystore şifresi

---

## 📋 Özet Kontrol Listesi

### Android
- [ ] Google Play Console hesabı oluşturuldu
- [ ] Uygulama detayları girildi
- [ ] APK build edildi ve imzalandı
- [ ] APK Play Store'a yüklendi
- [ ] İçerik derecelendirmesi tamamlandı
- [ ] Store listing dolduruldu
- [ ] Fiyatlandırma ayarlandı
- [ ] Gözden geçirme gönderildi

### iOS
- [ ] Apple Developer Program katılımı
- [ ] App ID oluşturuldu
- [ ] Certificate ve profile oluşturuldu
- [ ] IPA build edildi
- [ ] TestFlight'a yüklendi
- [ ] Beta testi tamamlandı
- [ ] App Store bilgileri dolduruldu
- [ ] Gözden geçirme gönderildi

---

## 🆘 Sorun Giderme

### Android
- **Signing hatası**: Keystore bilgilerini kontrol edin
- **Google Play reddi**: İçerik politikalarını kontrol edin
- **Build hatası**: Flutter ve Gradle sürümlerini güncelleyin

### iOS
- **Code signing hatası**: Certificate ve profile kontrol edin
- **Xcode hatası**: En son Xcode sürümünü kullanın
- **Apple reddi**: İnsan yönergelerini kontrol edin

---

## 📞 Destek

Sorularınız için:
- Email: byazar1628@gmail.com
- Email: myazar483@gmail.com

**KIWO deployment işlemi başarıyla tamamlandı! 🎉**