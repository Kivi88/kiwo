# Test Page Scan Endpoint

Write-Host "=== Page Scan Test ===" -ForegroundColor Cyan

# Create a small test file (1 byte - should fail validation)
$testFile = "test_empty.jpg"
[System.IO.File]::WriteAllBytes($testFile, @(0xFF))

Write-Host "`nTesting with empty file (should fail)..." -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri "https://odev-asistani-backend.onrender.com/api/page-scan/scan" `
        -Method Post `
        -Form @{
            image = Get-Item $testFile
        } `
        -Headers @{
            "Authorization" = "Bearer test_token"
        }
    
    Write-Host "Response: $($response | ConvertTo-Json)" -ForegroundColor Green
} catch {
    Write-Host "Error (expected): $_" -ForegroundColor Yellow
    Write-Host "Status: $($_.Exception.Response.StatusCode)" -ForegroundColor Yellow
}

# Cleanup
Remove-Item $testFile -ErrorAction SilentlyContinue

Write-Host "`n=== Test Complete ===" -ForegroundColor Cyan
