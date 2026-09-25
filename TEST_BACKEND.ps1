# Backend Test Script

Write-Host "=== Backend Test ===" -ForegroundColor Cyan

# 1. Health Check
Write-Host "`n1. Health Check..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "https://odev-asistani-backend.onrender.com/" -Method Get
    Write-Host "✅ Backend çalışıyor" -ForegroundColor Green
} catch {
    Write-Host "❌ Backend yanıt vermiyor: $_" -ForegroundColor Red
}

# 2. Premium Packages (No Auth)
Write-Host "`n2. Premium Packages Test..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "https://odev-asistani-backend.onrender.com/api/premium/packages" -Method Get
    Write-Host "✅ Premium packages endpoint çalışıyor" -ForegroundColor Green
    Write-Host "Paket sayısı: $($response.data.Count)" -ForegroundColor Cyan
    $response.data | ForEach-Object {
        Write-Host "  - $($_.name): $($_.price)₺ ($($_.daily_limit) soru/gün)" -ForegroundColor White
    }
} catch {
    Write-Host "❌ Premium packages hatası: $_" -ForegroundColor Red
    Write-Host $_.Exception.Response.StatusCode -ForegroundColor Red
}

# 3. Check Backend Version (via server response headers)
Write-Host "`n3. Backend Version Check..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://odev-asistani-backend.onrender.com/" -Method Get
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Cyan
    Write-Host "Date: $($response.Headers['Date'])" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Version check hatası: $_" -ForegroundColor Red
}

Write-Host "`n=== Test Tamamlandı ===" -ForegroundColor Cyan
