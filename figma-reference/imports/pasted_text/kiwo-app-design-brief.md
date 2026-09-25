# 🎨 KIWO - Ödev Asistanı Mobil App UI/UX Tasarım Brief

## 📱 PROJE ÖZET

**Uygulama Adı:** KIWO - Ödev Asistanı
**Platform:** Android (Flutter)
**Hedef Kitle:** Lise ve üniversite öğrencileri (14-25 yaş)
**Ana Amaç:** AI destekli ödev ve sınav hazırlık asistanı

## 🎯 ANA ÖZELLİKLER

### 1. Soru Çözme (Ana Özellik)
- Fotoğraf çekerek veya yazarak soru sorma
- AI destekli adım adım çözüm
- Matematik, fizik, kimya, biyoloji, tarih, coğrafya desteği
- Sohbet tarzı etkileşim

### 2. Sayfa Tarama (OCR)
- Kamera ile sayfa fotoğrafı çekme
- Sayfadaki tüm soruları otomatik tespit
- Soruları liste halinde gösterme
- Her soruyu tek tek çözebilme

### 3. Premium Sistem
- 3 farklı paket (Temel, Standart, Premium)
- Günlük soru limitleri (20/60/120)
- Ücretsiz kullanıcılar: 5 soru/gün
- Premium özellikleri gösterimi

### 4. Admin Panel
- Kullanıcı yönetimi
- Premium verme/iptal etme
- İstatistikler ve raporlar
- Sadece admin kullanıcılar için

### 5. Profil ve Ayarlar
- Kullanıcı bilgileri
- Premium durumu
- Günlük soru kullanımı
- Admin badge (admin kullanıcılar için)


## 🎨 TASARIM GEREKSİNİMLERİ

### Renk Paleti
**Ana Renkler:**
- Primary: #6366F1 (Indigo) - Ana butonlar, başlıklar
- Secondary: #8B5CF6 (Purple) - Vurgular, premium öğeler
- Success: #10B981 (Green) - Başarılı işlemler
- Warning: #F59E0B (Amber) - Uyarılar
- Error: #EF4444 (Red) - Hatalar

**Arka Plan:**
- Background: #F9FAFB (Light Gray)
- Surface: #FFFFFF (White)
- Card: #FFFFFF with shadow

**Metin:**
- Primary Text: #111827 (Dark Gray)
- Secondary Text: #6B7280 (Medium Gray)
- Disabled Text: #9CA3AF (Light Gray)

### Tipografi
- **Başlıklar:** Bold, 24-32px
- **Alt Başlıklar:** SemiBold, 18-20px
- **Gövde Metni:** Regular, 14-16px
- **Küçük Metin:** Regular, 12-14px
- **Font Ailesi:** Inter, SF Pro, Roboto (modern, okunabilir)

### İkonlar
- **Stil:** Outline (çizgi) veya Filled (dolu)
- **Boyut:** 24x24px (standart), 32x32px (büyük)
- **Kaynak:** Material Icons, Heroicons, Feather Icons
- **Renkler:** Primary color veya text color

### Spacing & Layout
- **Padding:** 16px (standart), 24px (geniş)
- **Margin:** 8px (küçük), 16px (orta), 24px (büyük)
- **Border Radius:** 12px (kartlar), 8px (butonlar), 24px (pill)
- **Elevation:** 2dp (kartlar), 4dp (floating buttons), 8dp (dialogs)


## 📱 EKRAN TASARIMLARI

### 1. Ana Ekran (Home Screen)
**Bileşenler:**
- Üst bar: Logo, profil fotoğrafı, bildirim ikonu
- Hoşgeldin mesajı: "Merhaba, [İsim]!" + günlük kalan soru sayısı
- Hızlı erişim kartları (2x2 grid):
  - 📸 Fotoğraf Çek (kamera ikonu)
  - ✍️ Soru Yaz (kalem ikonu)
  - 📄 Sayfa Tara (doküman ikonu)
  - 📚 Geçmiş (saat ikonu)
- Premium banner (ücretsiz kullanıcılar için): "Premium'a geç, sınırsız soru sor!"
- Alt navigasyon: Ana Sayfa, Geçmiş, Premium, Profil

**Tasarım Notları:**
- Kartlar gradient arka planlı olabilir
- İkonlar büyük ve belirgin
- Premium banner dikkat çekici ama rahatsız edici değil

### 2. Soru Sorma Ekranı (Question Screen)
**Bileşenler:**
- Üst bar: Geri butonu, "Soru Sor" başlığı
- Soru tipi seçici (chips): Matematik, Fizik, Kimya, Biyoloji, vb.
- Soru girişi:
  - Metin alanı (multiline): "Sorunuzu yazın..."
  - VEYA Fotoğraf butonu: "Fotoğraf Çek"
- Fotoğraf önizleme (eğer fotoğraf çekildiyse)
- Gönder butonu (büyük, primary color, floating)

**Tasarım Notları:**
- Soru tipi chips horizontal scroll
- Fotoğraf önizleme küçük ama görünür
- Gönder butonu her zaman görünür (sticky)

### 3. Sohbet Ekranı (Chat Screen)
**Bileşenler:**
- Üst bar: Geri butonu, soru tipi badge, paylaş ikonu
- Sohbet alanı (scrollable):
  - Kullanıcı mesajları (sağda, primary color)
  - AI mesajları (solda, surface color)
  - Markdown desteği (başlıklar, listeler, kod blokları)
- Alt bar:
  - Yeni soru butonu
  - Favorilere ekle butonu

**Tasarım Notları:**
- Mesaj balonları rounded corners
- AI mesajları daha geniş (daha fazla içerik)
- Kod blokları monospace font, arka plan farklı
- Matematik formülleri düzgün render edilmeli

### 4. Sayfa Tarama Ekranı (Page Scan Screen)
**Bileşenler:**
- Kamera önizleme (fullscreen)
- Overlay: Çerçeve (sayfa sınırlarını göster)
- Üst bar: Geri butonu, flaş butonu
- Alt bar:
  - Galeri butonu (solda)
  - Çek butonu (ortada, büyük, yuvarlak)
  - Placeholder (sağda, simetri için)
- Tara butonu (fotoğraf çekildikten sonra)

**Sonuç Ekranı:**
- Başlık: "X soru tespit edildi"
- Soru listesi (kartlar):
  - Soru numarası badge
  - Soru tipi badge
  - Soru metni (3 satır, ellipsis)
  - Şık sayısı (varsa)
  - Çöz butonu
- Yeniden çek butonu (üstte)

**Tasarım Notları:**
- Kamera overlay minimal, dikkat dağıtmayan
- Çerçeve yeşil (tespit edildiğinde) veya beyaz
- Soru kartları temiz, okunabilir
- Çöz butonu her kartta belirgin


### 5. Premium Ekranı (Premium Screen)
**Bileşenler:**
- Durum kartı (üstte):
  - Premium badge veya "Ücretsiz Üye"
  - Günlük limit göstergesi (progress bar)
  - Kullanılan/Kalan soru sayısı
- Paket kartları (3 adet, vertical scroll):
  - Paket adı + emoji (🥉 Temel, 🥈 Standart, 🥇 Premium)
  - Fiyat (büyük, bold)
  - Günlük soru limiti
  - Özellikler listesi (checkmark ile)
  - Satın Al butonu (paket renginde)
- Premium ayrıcalıkları listesi (altta):
  - İkonlar + açıklamalar

**Tasarım Notları:**
- Her paket farklı renk (Turuncu, Mor, Yeşil)
- Gradient arka planlar
- Satın Al butonları dikkat çekici
- Özellikler listesi temiz, okunabilir

### 6. Profil Ekranı (Profile Screen)
**Bileşenler:**
- Profil kartı (üstte):
  - Profil fotoğrafı (büyük, yuvarlak)
  - İsim + email
  - Admin badge (eğer admin ise) - altın rengi, parlak
  - Premium badge (eğer premium ise)
  - Düzenle butonu
- İstatistikler (3 kart, horizontal):
  - Toplam soru
  - Bu ay soru
  - Başarı oranı
- Menü listesi:
  - Premium'a Geç (ücretsiz kullanıcılar için)
  - Admin Panel (sadece admin kullanıcılar için)
  - Geçmiş
  - Ayarlar
  - Gizlilik Politikası
  - Kullanım Koşulları
  - Çıkış Yap

**Tasarım Notları:**
- Admin badge çok belirgin, özel tasarım
- İstatistik kartları gradient arka plan
- Menü öğeleri ikon + metin + ok
- Çıkış Yap kırmızı renk

### 7. Admin Panel Ekranı (Admin Panel Screen)
**Bileşenler:**
- Üst bar: "Admin Panel" başlığı, admin badge
- İstatistik kartları (2x2 grid):
  - Toplam kullanıcı
  - Premium kullanıcı
  - Bugünkü kayıt
  - Toplam gelir
- Hızlı işlemler:
  - Kullanıcı listesi butonu
  - Premium ver butonu
  - İstatistikler butonu
  - İşlem geçmişi butonu
- Son işlemler listesi (5 adet)

**Kullanıcı Listesi Alt Ekranı:**
- Arama çubuğu
- Kullanıcı kartları:
  - Profil fotoğrafı
  - İsim + email
  - Premium durumu badge
  - Admin durumu badge
  - İşlemler butonu (3 nokta)

**Tasarım Notları:**
- Admin teması: Koyu mavi/mor tonları
- İstatistik kartları büyük sayılar, bold
- Kullanıcı kartları kompakt ama bilgilendirici
- İşlem butonları dropdown menu


### 8. Geçmiş Ekranı (History Screen)
**Bileşenler:**
- Üst bar: "Geçmiş" başlığı, filtre ikonu
- Filtre chips (horizontal scroll):
  - Tümü, Matematik, Fizik, Kimya, vb.
- Soru kartları (vertical scroll):
  - Tarih + saat (küçük, gri)
  - Soru tipi badge
  - Soru metni (2 satır, ellipsis)
  - Cevap önizleme (1 satır, ellipsis)
  - Detay butonu (ok ikonu)
- Boş durum (soru yoksa):
  - İllüstrasyon
  - "Henüz soru sormadınız" mesajı
  - Soru sor butonu

**Tasarım Notları:**
- Kartlar timeline tarzı (sol tarafta çizgi)
- Tarih gruplandırması (Bugün, Dün, Bu Hafta, vb.)
- Swipe to delete özelliği
- Boş durum friendly ve teşvik edici

### 9. Giriş/Kayıt Ekranı (Auth Screen)
**Bileşenler:**
- Logo (üstte, büyük)
- Slogan: "AI ile Ödevlerinizi Kolayca Çözün"
- Tab bar: Giriş Yap / Kayıt Ol
- Form alanları:
  - Email (ikon + input)
  - Şifre (ikon + input + göster/gizle)
  - İsim (sadece kayıt için)
  - Sınıf seviyesi (sadece kayıt için, dropdown)
- Giriş/Kayıt butonu (büyük, primary)
- Veya ayırıcı çizgi
- Sosyal giriş butonları:
  - Google ile devam et
  - Apple ile devam et
- Şifremi unuttum linki
- Gizlilik politikası + kullanım koşulları checkbox

**Tasarım Notları:**
- Gradient arka plan (primary colors)
- Form alanları temiz, modern
- Sosyal butonlar marka renklerinde
- Checkbox küçük ama okunabilir

### 10. Splash Screen
**Bileşenler:**
- Logo (ortada, büyük, animasyonlu)
- Slogan (logo altında)
- Loading indicator (altta)
- Gradient arka plan

**Tasarım Notları:**
- Minimal, temiz
- Logo animasyonu smooth
- Gradient primary colors


## 🎭 UI KOMPONENTLERI

### Butonlar
**Primary Button:**
- Arka plan: Primary color (#6366F1)
- Metin: Beyaz, bold
- Padding: 16px vertical, 24px horizontal
- Border radius: 12px
- Shadow: 2dp
- Hover/Press: Daha koyu ton

**Secondary Button:**
- Arka plan: Transparent
- Border: 2px primary color
- Metin: Primary color, bold
- Padding: 16px vertical, 24px horizontal
- Border radius: 12px

**Icon Button:**
- Boyut: 48x48px
- İkon: 24x24px
- Arka plan: Surface color veya transparent
- Border radius: 24px (yuvarlak)

### Kartlar
**Standard Card:**
- Arka plan: Beyaz
- Border radius: 16px
- Shadow: 2dp
- Padding: 16px
- Margin: 8px

**Premium Card:**
- Gradient arka plan (paket rengine göre)
- Border radius: 16px
- Shadow: 4dp
- Padding: 20px
- Border: 2px (paket rengi)

### Input Alanları
**Text Input:**
- Arka plan: Surface color (#F9FAFB)
- Border: 1px (#E5E7EB), focus'ta primary color
- Border radius: 12px
- Padding: 12px 16px
- Placeholder: #9CA3AF
- İkon: Sol tarafta (opsiyonel)

**Dropdown:**
- Text input ile aynı stil
- Sağ tarafta aşağı ok ikonu
- Açılır menü: Beyaz arka plan, shadow

### Badges
**Status Badge:**
- Küçük, pill şeklinde (border radius: 12px)
- Padding: 4px 12px
- Font: 12px, bold
- Renkler:
  - Premium: Altın (#F59E0B)
  - Admin: Kırmızı (#EF4444)
  - Free: Gri (#6B7280)

**Type Badge:**
- Orta boy, rounded (border radius: 8px)
- Padding: 6px 12px
- Font: 14px, medium
- Renkler: Soru tipine göre (Matematik: Mavi, Fizik: Yeşil, vb.)

### Progress Bar
- Yükseklik: 8px
- Border radius: 4px
- Arka plan: #E5E7EB
- Dolgu: Primary color gradient
- Animasyonlu

### Dialogs/Modals
- Arka plan: Beyaz
- Border radius: 20px
- Shadow: 8dp
- Padding: 24px
- Backdrop: Siyah, 50% opacity


## 🎬 ANIMASYONLAR & ETKILEŞIMLER

### Geçişler (Transitions)
- Ekran geçişleri: Slide (300ms, ease-out)
- Modal açılma: Scale + fade (250ms)
- Kart hover: Lift (shadow artışı, 200ms)

### Mikro Animasyonlar
- Buton tıklama: Scale down (100ms)
- Loading: Spinner veya skeleton screens
- Success: Checkmark animasyonu (500ms)
- Error: Shake animasyonu (300ms)

### Feedback
- Haptic feedback: Buton tıklamalarında
- Toast messages: Alt tarafta, 3 saniye
- Snackbar: Alt tarafta, action button ile

## 📐 LAYOUT & GRID

### Grid System
- Columns: 4 (mobile)
- Gutter: 16px
- Margin: 16px (kenarlardan)

### Breakpoints
- Mobile: 360px - 480px (primary)
- Tablet: 768px - 1024px (opsiyonel)

### Safe Areas
- Status bar: 24px (üst)
- Navigation bar: 56px (alt)
- Notch/Dynamic Island: Otomatik padding

## 🌙 DARK MODE (Opsiyonel)

### Renkler
- Background: #111827
- Surface: #1F2937
- Primary: #818CF8 (daha açık ton)
- Text: #F9FAFB
- Secondary Text: #9CA3AF

### Notlar
- Kartlar daha az shadow, daha fazla border
- Gradient'ler daha yumuşak
- İkonlar outline stil tercih edilmeli


## 🎯 TASARIM PRENSİPLERİ

### 1. Basitlik (Simplicity)
- Her ekranda tek bir ana görev
- Gereksiz öğelerden kaçın
- Beyaz alan kullanımı bol olsun

### 2. Tutarlılık (Consistency)
- Aynı bileşenler her yerde aynı görünsün
- Renk kullanımı tutarlı olsun
- İkonlar aynı stilden olsun

### 3. Hiyerarşi (Hierarchy)
- Önemli öğeler daha büyük ve belirgin
- Başlıklar, alt başlıklar, gövde metni net ayrılsın
- Renklerle önem vurgusu yapılsın

### 4. Erişilebilirlik (Accessibility)
- Metin kontrast oranı en az 4.5:1
- Dokunma hedefleri en az 48x48px
- Renge bağımlı bilgi verme (ikon + renk)

### 5. Performans (Performance)
- Ağır animasyonlardan kaçın
- Görsel boyutları optimize edin
- Skeleton screens kullanın (loading için)

## 📱 ÖRNEK KULLANICI AKIŞLARI

### Akış 1: Soru Sorma
1. Ana ekran → Fotoğraf Çek butonu
2. Kamera ekranı → Fotoğraf çek
3. Önizleme → Soru tipi seç → Gönder
4. Sohbet ekranı → AI cevabı görüntüle

### Akış 2: Sayfa Tarama
1. Ana ekran → Sayfa Tara butonu
2. Kamera ekranı → Sayfa fotoğrafı çek
3. Tara butonu → Loading
4. Sonuç ekranı → Soru listesi
5. Soru seç → Çöz → Sohbet ekranı

### Akış 3: Premium Satın Alma
1. Ana ekran → Premium banner
2. Premium ekranı → Paket seç
3. Satın alma onayı → Ödeme
4. Başarı mesajı → Profil güncellendi

### Akış 4: Admin İşlemleri
1. Profil → Admin Panel
2. Admin panel → Kullanıcı listesi
3. Kullanıcı seç → Premium ver
4. Onay → Başarı mesajı


## 🎨 FIGMA TASARIM YAPISI

### Sayfalar (Pages)
1. **Cover** - Proje tanıtımı, renk paleti, tipografi
2. **Components** - Tüm UI bileşenleri (butonlar, kartlar, vb.)
3. **Screens** - Tüm ekran tasarımları
4. **Flows** - Kullanıcı akışları
5. **Prototypes** - Etkileşimli prototip

### Artboard Boyutları
- Mobile: 375x812px (iPhone 13 Pro)
- Alternatif: 360x800px (Android standart)

### Organizasyon
- Frame isimlendirme: "01 - Home Screen", "02 - Question Screen"
- Component isimlendirme: "Button/Primary", "Card/Premium"
- Auto Layout kullanımı (responsive tasarım için)
- Variants kullanımı (farklı durumlar için)

## 📋 TESLIM DOSYALARI

### Figma Dosyası İçeriği
1. ✅ Tüm ekran tasarımları (10+ ekran)
2. ✅ Component library (butonlar, kartlar, vb.)
3. ✅ Renk paleti (styles)
4. ✅ Tipografi (text styles)
5. ✅ İkonlar (component set)
6. ✅ Etkileşimli prototip
7. ✅ Dark mode versiyonları (opsiyonel)

### Export Gereksinimleri
- PNG: @1x, @2x, @3x (Android için)
- SVG: İkonlar ve vektör grafikler
- PDF: Tüm ekranlar (dokümantasyon için)

## 💡 İLHAM KAYNAKLARI

### Referans Uygulamalar
- **Photomath** - Matematik çözme, kamera kullanımı
- **Duolingo** - Gamification, progress tracking
- **Notion** - Temiz UI, card design
- **Spotify** - Premium paketler, gradient kullanımı
- **Instagram** - Profil ekranı, istatistikler

### Tasarım Stilleri
- **Modern Minimalist** - Temiz, az öğe, bol beyaz alan
- **Gradient & Glassmorphism** - Premium hissi, modern görünüm
- **Friendly & Approachable** - Yumuşak köşeler, friendly renkler
- **Professional** - Admin panel için daha ciddi ton


## 🚀 ÖNCELİK SIRASI

### Yüksek Öncelik (Mutlaka Olmalı)
1. ✅ Ana Ekran (Home)
2. ✅ Soru Sorma Ekranı
3. ✅ Sohbet Ekranı
4. ✅ Sayfa Tarama Ekranı
5. ✅ Premium Ekranı
6. ✅ Profil Ekranı
7. ✅ Giriş/Kayıt Ekranı

### Orta Öncelik (Önemli)
8. ✅ Admin Panel Ekranı
9. ✅ Geçmiş Ekranı
10. ✅ Ayarlar Ekranı

### Düşük Öncelik (Opsiyonel)
11. ⭕ Dark Mode
12. ⭕ Onboarding Screens
13. ⭕ Empty States
14. ⭕ Error States

## 🎯 BAŞARI KRİTERLERİ

### Tasarım Kalitesi
- ✅ Modern ve güncel görünüm
- ✅ Tutarlı renk ve tipografi kullanımı
- ✅ Temiz ve okunabilir layout
- ✅ Profesyonel görünüm

### Kullanılabilirlik
- ✅ Kolay navigasyon
- ✅ Açık ve anlaşılır butonlar
- ✅ Hızlı erişim (3 tıklama kuralı)
- ✅ Hata durumları net

### Teknik Uygunluk
- ✅ Flutter'da implement edilebilir
- ✅ Responsive tasarım
- ✅ Performans dostu
- ✅ Erişilebilirlik standartlarına uygun

## 📞 İLETİŞİM & FEEDBACK

### Tasarım Süreci
1. **İlk Taslak** - Ana ekranlar, renk paleti (2-3 gün)
2. **Revizyon 1** - Feedback sonrası düzeltmeler (1-2 gün)
3. **Final** - Tüm ekranlar, prototip (2-3 gün)

### Feedback Noktaları
- Renk paleti uygun mu?
- Butonlar yeterince belirgin mi?
- Premium paketler çekici mi?
- Admin panel profesyonel mi?
- Genel kullanıcı deneyimi akıcı mı?

---

## 📝 ÖZET PROMPT (Figma AI için)

**Kısa Versiyon:**
```
Modern, minimalist bir eğitim uygulaması tasarla. Ana renkler: Indigo (#6366F1) ve Purple (#8B5CF6). 
Özellikler: AI soru çözme, sayfa tarama (OCR), premium sistem, admin panel. 
Hedef kitle: 14-25 yaş öğrenciler. 
Stil: Temiz, friendly, gradient kullanımı, rounded corners. 
10 ana ekran: Home, Question, Chat, Page Scan, Premium, Profile, Admin Panel, History, Auth, Splash.
Component library dahil. Etkileşimli prototip.
```

**Detaylı Versiyon:**
Bu dokümandaki tüm bilgileri kullanarak, KIWO - Ödev Asistanı mobil uygulaması için kapsamlı bir UI/UX tasarımı oluştur. Modern, minimalist ve kullanıcı dostu bir tasarım dili kullan. Renk paleti, tipografi, spacing ve tüm UI komponentleri bu dokümanda belirtildiği gibi olmalı. 10 ana ekran tasarımı yap ve component library oluştur. Etkileşimli prototip ekle.

---

**Tasarım Başarılar Dilerim! 🎨✨**
