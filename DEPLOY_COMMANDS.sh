#!/bin/bash

# Backend Deployment Script
# Bu script backend değişikliklerini GitHub'a push eder

echo "🚀 Backend Deployment Başlıyor..."

# Git durumunu kontrol et
echo "📊 Git durumu kontrol ediliyor..."
git status

# Tüm değişiklikleri stage'e al
echo "📦 Değişiklikler stage'e alınıyor..."
git add backend/src/controllers/admin.controller.js
git add backend/src/controllers/premium.controller.js
git add backend/src/middleware/admin.middleware.js
git add backend/src/middleware/rateLimit.middleware.js
git add backend/src/routes/admin.routes.js
git add backend/src/routes/premium.routes.js
git add backend/src/server.js
git add backend/run-migration.js
git add backend/migrations/add_premium_system.sql

# Commit
echo "💾 Commit oluşturuluyor..."
git commit -m "feat: Premium system and admin panel

- Added premium packages (99₺, 199₺, 399₺)
- Added admin panel for user management
- Added premium purchase system
- Added daily limits based on premium tier
- Added admin users (byazar1628, myazar483)
- Updated rate limiting system
- Added migration for premium tables"

# Push
echo "⬆️ GitHub'a push ediliyor..."
git push origin main

echo "✅ Backend başarıyla push edildi!"
echo ""
echo "📝 Sonraki Adımlar:"
echo "1. Render Dashboard'a git: https://dashboard.render.com"
echo "2. 'odev-asistani-backend' servisini bul"
echo "3. 'Manual Deploy' > 'Deploy latest commit' tıkla"
echo "4. Deploy tamamlandıktan sonra migration çalıştır:"
echo "   https://odev-asistani-backend.onrender.com/api/run-migration"
echo "5. Migration durumunu kontrol et:"
echo "   https://odev-asistani-backend.onrender.com/api/migration-status"
