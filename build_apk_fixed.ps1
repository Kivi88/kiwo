# KIWO APK Builder - Fixed for Turkish characters in path
# This script builds the APK in a temporary directory without Turkish characters

Write-Host "KIWO APK Builder Starting..." -ForegroundColor Cyan
Write-Host ""

# Create temp directory
$tempDir = "C:\temp_kiwo_build"
$sourceDir = Get-Location
$mobileDir = Join-Path $sourceDir "mobile"

Write-Host "Creating temporary build directory..." -ForegroundColor Yellow
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

Write-Host "Copying project files..." -ForegroundColor Yellow
Copy-Item -Path $mobileDir -Destination $tempDir -Recurse -Force

Write-Host "Building APK..." -ForegroundColor Yellow
Set-Location "$tempDir\mobile"

# Clean and build
flutter clean
flutter pub get
flutter build apk --release

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Build successful!" -ForegroundColor Green
    
    # Copy APK back
    $apkPath = "$tempDir\mobile\build\app\outputs\flutter-apk\app-release.apk"
    $hash = (Get-FileHash -Path $apkPath -Algorithm MD5).Hash.Substring(0, 8)
    $newApkName = "KIWO-VOICE-COMMAND-$hash.apk"
    $destPath = Join-Path $sourceDir $newApkName
    
    Copy-Item -Path $apkPath -Destination $destPath -Force
    
    Write-Host ""
    Write-Host "APK saved to: $destPath" -ForegroundColor Green
    $sizeInMB = [math]::Round((Get-Item $destPath).Length / 1MB, 2)
    Write-Host "APK Size: $sizeInMB MB" -ForegroundColor Cyan
    
    # Cleanup
    Write-Host ""
    Write-Host "Cleaning up temporary files..." -ForegroundColor Yellow
    Set-Location $sourceDir
    Remove-Item -Path $tempDir -Recurse -Force
    
    Write-Host ""
    Write-Host "Done! APK is ready to install." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Build failed!" -ForegroundColor Red
    Set-Location $sourceDir
}
