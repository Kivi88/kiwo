# Flutter Installation Script for Windows
# Bu script Flutter SDK'ı otomatik olarak indirir ve PATH'e ekler

# Yönetici hakları kontrolü
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Bu script'i yönetici olarak çalıştırmanız gerekiyor." -ForegroundColor Red
    Write-Host "Lütfen PowerShell'i yönetici olarak açın ve script'i tekrar çalıştırın." -ForegroundColor Yellow
    exit 1
}

Write-Host "Flutter Installation Script Başlatılıyor..." -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# 1. Git kontrolü
Write-Host "`n[1/5] Git kontrol ediliyor..." -ForegroundColor Cyan
$gitExists = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitExists) {
    Write-Host "Git yüklü değil. Lütfen Git for Windows'u indirip yükleyin:" -ForegroundColor Red
    Write-Host "https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Kurulum tamamlandıktan sonra script'i tekrar çalıştırın." -ForegroundColor Yellow
    exit 1
} else {
    Write-Host "Git yüklü: $($gitExists.Source)" -ForegroundColor Green
}

# 2. Flutter SDK indirme
Write-Host "`n[2/5] Flutter SDK indiriliyor..." -ForegroundColor Cyan
$flutterInstallPath = "$env:USERPROFILE\flutter"
$flutterZipPath = "$env:TEMP\flutter.zip"

# Klasör varsa temizle
if (Test-Path $flutterInstallPath) {
    Write-Host "Mevcut Flutter klasörü temizleniyor..." -ForegroundColor Yellow
    Remove-Item -Path $flutterInstallPath -Recurse -Force
}

# Flutter stable release indir
$flutterUrl = "https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.24.5-stable.zip"
Write-Host "Flutter indiriliyor: $flutterUrl" -ForegroundColor Yellow

try {
    Invoke-WebRequest -Uri $flutterUrl -OutFile $flutterZipPath -UseBasicParsing
    Write-Host "Flutter başarıyla indirildi." -ForegroundColor Green
} catch {
    Write-Host "Flutter indirme hatası: $_" -ForegroundColor Red
    exit 1
}

# 3. Flutter SDK çıkarma
Write-Host "`n[3/5] Flutter SDK çıkarılıyor..." -ForegroundColor Cyan
try {
    Expand-Archive -Path $flutterZipPath -DestinationPath "$env:USERPROFILE\" -Force
    Write-Host "Flutter SDK başarıyla çıkarıldı." -ForegroundColor Green
} catch {
    Write-Host "Flutter çıkarma hatası: $_" -ForegroundColor Red
    exit 1
}

# Temp dosyayı temizle
Remove-Item -Path $flutterZipPath -Force

# 4. PATH'e ekleme
Write-Host "`n[4/5] Flutter PATH'e ekleniyor..." -ForegroundColor Cyan
$flutterBinPath = "$flutterInstallPath\bin"

# Mevcut PATH'i al
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

# Flutter'ın zaten PATH'te olup olmadığını kontrol et
if ($currentPath -notlike "*$flutterBinPath*") {
    $newPath = "$currentPath;$flutterBinPath"
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host "Flutter PATH'e başarıyla eklendi." -ForegroundColor Green
} else {
    Write-Host "Flutter zaten PATH'te mevcut." -ForegroundColor Green
}

# 5. Doğrulama
Write-Host "`n[5/5] Kurulum doğrulanıyor..." -ForegroundColor Cyan
Write-Host "NOT: Terminal'i yeniden başlatmanız gerekebilir." -ForegroundColor Yellow
Write-Host "Yeni bir terminal açıp şu komutu çalıştırın:" -ForegroundColor Yellow
Write-Host "flutter doctor" -ForegroundColor Cyan

Write-Host "`n======================================" -ForegroundColor Green
Write-Host "Flutter kurulumu tamamlandı!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green
Write-Host "`nSonraki adımlar:" -ForegroundColor Yellow
Write-Host "1. Yeni bir PowerShell veya CMD terminali açın" -ForegroundColor White
Write-Host "2. 'flutter doctor' komutunu çalıştırın" -ForegroundColor White
Write-Host "3. Gerekli bağımlılıkları yükleyin" -ForegroundColor White
Write-Host "4. 'flutter create --platforms=ios .' ile iOS için proje oluşturun" -ForegroundColor White