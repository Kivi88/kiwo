# KIWO - AI Ödev Asistanı

Modern tasarımlı, sesli komut destekli AI ödev asistanı uygulaması.

## ✨ Özellikler

### 🎤 Sesli Komut (YENİ!)
- **"Hi KIWO"** veya **"Hey KIWO"** diyerek uygulamayı sesli kontrol edin
- Floating action button ile mikrofonu aktifleştirin
- Sesli komut menüsünden istediğiniz özelliği seçin

### 📸 Fotoğraf Çek ve Sor
- Soruyu fotoğrafla çek
- AI otomatik olarak soruyu tanır ve çözer
- Adım adım açıklamalar

### ✍️ Soru Yaz
- Soruyu yazarak sor
- AI ile sohbet et
- Detaylı açıklamalar al

### 📄 Sayfa Tarama
- Birden fazla soruyu tek seferde tara
- Toplu çözüm al
- Gemini Vision ile güçlendirilmiş

### 📚 Geçmiş
- Tüm sorularını kaydet
- Geçmiş sorulara tekrar bak
- Favorilere ekle

### 👑 Premium Sistem
- Günlük soru limiti
- Premium paketler
- Sınırsız erişim

### 🛡️ Admin Panel
- Kullanıcı yönetimi
- Premium yönetimi
- İstatistikler

## 🎨 Modern Tasarım

- **Glassmorphism** efektleri
- **Gradient** renkler
- **Animasyonlu** arka plan
- **Dark theme** tasarım
- **Smooth** geçişler

## 🚀 Kurulum

### APK İndir ve Yükle
1. En son APK'yı indir: `KIWO-VOICE-COMMAND-90E97BC4.apk`
2. Telefonunda "Bilinmeyen kaynaklardan yükleme" iznini aç
3. APK'yı yükle
4. Uygulamayı aç ve kayıt ol

### İlk Kullanım
1. Email ve şifre ile kayıt ol
2. Mikrofon izni ver (sesli komut için)
3. Kamera izni ver (fotoğraf çekmek için)
4. "Hi KIWO" diyerek başla!

## 🎯 Kullanım

### Sesli Komut Kullanımı
1. Ana ekranda ortadaki **mor mikrofon butonuna** bas
2. **"Hi KIWO"** veya **"Hey KIWO"** de
3. Açılan menüden istediğin özelliği seç:
   - 📸 Fotoğraf Çek
   - ✍️ Soru Yaz
   - 📄 Sayfa Tara
   - 💬 Sohbet

### Manuel Kullanım
- Ana ekranda **Hızlı Başlat** kartlarından birini seç
- Alt menüden istediğin sayfaya git
- Profil ayarlarını düzenle

## 🔧 Teknik Detaylar

### Backend
- **Node.js** + **Express**
- **PostgreSQL** database
- **Redis** cache
- **Gemini AI** entegrasyonu
- Detaylı logging sistemi

### Mobile
- **Flutter** framework
- **Provider** state management
- **Speech-to-Text** (sesli komut)
- **Camera** + **Image Picker**
- **Google ML Kit** (OCR)
- Modern UI components

### Deployment
- Backend: **Render** (https://odev-asistani-backend.onrender.com)
- Database: **PostgreSQL** (Render)
- Auto-deploy: **GitHub** integration

## 👥 Admin Kullanıcılar

Admin paneline erişim için:
- byazar1628@gmail.com
- myazar483@gmail.com

Admin kullanıcılar:
- ✅ Sınırsız günlük limit (999999)
- ✅ Admin panel erişimi
- ✅ Kullanıcı yönetimi
- ✅ Premium yönetimi

## 📱 Ekran Görüntüleri

### Ana Ekran
- Modern glassmorphism tasarım
- Animasyonlu arka plan
- Hızlı erişim kartları
- Sesli komut butonu

### Sesli Komut Menüsü
- "Hi KIWO" ile açılır
- 4 ana özellik
- Modern bottom sheet
- Kolay navigasyon

### Özellikler
- Fotoğraf çekme ve soru çözme
- Yazarak soru sorma
- Sayfa tarama
- Geçmiş görüntüleme
- Premium paketler
- Admin panel

## 🔐 Güvenlik

- JWT token authentication
- Bcrypt password hashing
- Rate limiting
- Input validation
- SQL injection koruması

## 📊 API Endpoints

### Public
- `POST /api/auth/register` - Kayıt ol
- `POST /api/auth/login` - Giriş yap
- `GET /api/premium/packages` - Premium paketler

### Protected
- `POST /api/ai/ask` - Soru sor
- `POST /api/page-scan/scan` - Sayfa tara
- `GET /api/questions` - Geçmiş sorular
- `GET /api/users/profile` - Profil bilgileri

### Admin
- `GET /api/admin/users` - Tüm kullanıcılar
- `POST /api/admin/premium/grant` - Premium ver
- `GET /api/admin/stats` - İstatistikler

## 🛠️ Geliştirme

### Backend Çalıştırma
```bash
cd backend
npm install
npm run dev
```

### Mobile Çalıştırma
```bash
cd mobile
flutter pub get
flutter run
```

### APK Build
```powershell
.\build_apk_fixed.ps1
```

## 📝 Changelog

### v1.2.0 (Son Sürüm)
- ✨ Sesli komut özelliği eklendi ("Hi KIWO")
- 🎨 Modern UI tasarımı
- 🔧 Backend logging sistemi
- 👑 Admin panel ve premium sistem
- 📄 Sayfa tarama iyileştirmeleri
- 🐛 Bug fixes

### v1.1.0
- 📸 Fotoğraf çekme özelliği
- 📄 Sayfa tarama
- 📚 Geçmiş sorular
- 👤 Profil yönetimi

### v1.0.0
- 🎉 İlk sürüm
- ✍️ Soru sorma
- 🤖 AI entegrasyonu

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje özel bir projedir.

## 📞 İletişim

- Email: byazar1628@gmail.com
- Email: myazar483@gmail.com

## 🙏 Teşekkürler

- **Google Gemini AI** - AI entegrasyonu
- **Flutter** - Mobile framework
- **Node.js** - Backend framework
- **Render** - Hosting

---

**KIWO** ile ödevleriniz artık çok daha kolay! 🎓✨
