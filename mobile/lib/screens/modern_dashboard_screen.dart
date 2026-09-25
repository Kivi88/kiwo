import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../config/modern_theme.dart';
import '../providers/auth_provider.dart';
import '../providers/question_provider.dart';
import '../widgets/voice_command_widget.dart';
import 'camera_screen.dart';
import 'chat_screen.dart';
import 'page_scan_screen.dart';
import 'history_screen.dart';
import 'premium_screen.dart';
import 'profile_screen.dart';
import 'admin_panel_screen.dart';
import 'dart:math' as math;

class ModernDashboardScreen extends StatefulWidget {
  const ModernDashboardScreen({super.key});

  @override
  State<ModernDashboardScreen> createState() => _ModernDashboardScreenState();
}

class _ModernDashboardScreenState extends State<ModernDashboardScreen>
    with TickerProviderStateMixin {
  late AnimationController _backgroundController;
  late AnimationController _cardController;
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _backgroundController = AnimationController(
      duration: const Duration(seconds: 20),
      vsync: this,
    )..repeat();
    
    _cardController = AnimationController(
      duration: const Duration(milliseconds: 800),
      vsync: this,
    )..forward();
    
    // Load questions
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<QuestionProvider>().fetchQuestions();
    });
  }

  @override
  void dispose() {
    _backgroundController.dispose();
    _cardController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();
    final user = authProvider.user;
    final userName = user?.name ?? 'Kullanıcı';
    final isPremium = user?.isPremium ?? false;
    final isAdmin = user?.isAdmin ?? false;

    // Bottom nav screens
    Widget currentScreen;
    switch (_selectedIndex) {
      case 0:
        currentScreen = _buildHomeScreen(userName, isPremium, isAdmin);
        break;
      case 1:
        currentScreen = const HistoryScreen();
        break;
      case 2:
        currentScreen = const PremiumScreen();
        break;
      case 3:
        currentScreen = const ProfileScreen();
        break;
      default:
        currentScreen = _buildHomeScreen(userName, isPremium, isAdmin);
    }

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [ModernTheme.darkBg, ModernTheme.cardBg, ModernTheme.darkBg],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Stack(
          children: [
            _buildAnimatedBackground(),
            SafeArea(child: currentScreen),
          ],
        ),
      ),
      floatingActionButton: const VoiceCommandWidget(),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      bottomNavigationBar: _buildBottomNav(),
    );
  }

  Widget _buildHomeScreen(String userName, bool isPremium, bool isAdmin) {
    final questionProvider = context.watch<QuestionProvider>();
    final totalQuestions = questionProvider.questions.length;
    final questionsLeft = 5; // Default daily limit

    return Column(
      children: [
        _buildHeader(context, userName, isAdmin),
        Expanded(
          child: SingleChildScrollView(
            physics: const BouncingScrollPhysics(),
            child: Column(
              children: [
                _buildStatsCard(userName, questionsLeft),
                _buildQuickActions(context),
                if (!isPremium) _buildPremiumBanner(context),
                if (isAdmin) _buildAdminBanner(context),
                const SizedBox(height: 100),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildAnimatedBackground() {
    return AnimatedBuilder(
      animation: _backgroundController,
      builder: (context, child) {
        return Stack(
          children: [
            Positioned(
              top: 80,
              right: 40,
              child: Transform.rotate(
                angle: _backgroundController.value * 2 * math.pi,
                child: Container(
                  width: 240,
                  height: 240,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(
                      colors: [
                        ModernTheme.warningAmber.withOpacity(0.3),
                        Colors.transparent,
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              bottom: 160,
              left: 40,
              child: Transform.rotate(
                angle: -_backgroundController.value * 2 * math.pi,
                child: Container(
                  width: 320,
                  height: 320,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(
                      colors: [
                        ModernTheme.successGreen.withOpacity(0.2),
                        Colors.transparent,
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
  }

  Widget _buildHeader(BuildContext context, String userName, bool isAdmin) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Row(
        children: [
          // Logo
          Container(
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.2),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: Colors.white.withOpacity(0.3),
                width: 1,
              ),
            ),
            child: const Icon(
              Icons.psychology,
              color: Colors.white,
              size: 28,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('KIWO', style: ModernTheme.heading2),
                Text(
                  'AI Ödev Asistanı',
                  style: ModernTheme.bodySecondary.copyWith(fontSize: 12),
                ),
              ],
            ),
          ),
          // Notification
          GestureDetector(
            onTap: () {
              // TODO: Show notifications
            },
            child: Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.1),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: Colors.white.withOpacity(0.2),
                  width: 1,
                ),
              ),
              child: Stack(
                children: [
                  const Center(
                    child: Icon(Icons.notifications_outlined, color: Colors.white, size: 20),
                  ),
                  Positioned(
                    top: 8,
                    right: 8,
                    child: Container(
                      width: 8,
                      height: 8,
                      decoration: const BoxDecoration(
                        color: ModernTheme.errorRed,
                        shape: BoxShape.circle,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(width: 8),
          // Profile
          GestureDetector(
            onTap: () {
              setState(() => _selectedIndex = 3);
            },
            child: Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.1),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: Colors.white.withOpacity(0.2),
                  width: 1,
                ),
              ),
              child: const Icon(Icons.person_outline, color: Colors.white, size: 20),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatsCard(String userName, int questionsLeft) {
    return FadeTransition(
      opacity: _cardController,
      child: ScaleTransition(
        scale: Tween<double>(begin: 0.9, end: 1.0).animate(
          CurvedAnimation(parent: _cardController, curve: Curves.easeOut),
        ),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 24),
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.1),
            borderRadius: BorderRadius.circular(24),
            border: Border.all(
              color: Colors.white.withOpacity(0.2),
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.3),
                blurRadius: 32,
                offset: const Offset(0, 8),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Merhaba, $userName! 👋',
                          style: ModernTheme.heading3,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Bugünkü hedefine devam et',
                          style: ModernTheme.bodySecondary,
                        ),
                      ],
                    ),
                  ),
                  const Icon(
                    Icons.local_fire_department,
                    color: ModernTheme.warningAmber,
                    size: 32,
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Günlük İlerleme', style: ModernTheme.bodySecondary),
                  Text(
                    '$questionsLeft/5',
                    style: ModernTheme.bodyLarge.copyWith(fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: LinearProgressIndicator(
                  value: questionsLeft / 5,
                  minHeight: 12,
                  backgroundColor: Colors.white.withOpacity(0.2),
                  valueColor: const AlwaysStoppedAnimation<Color>(ModernTheme.successGreen),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildQuickActions(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text('Hızlı Başlat', style: ModernTheme.heading3),
              const Spacer(),
              const Icon(Icons.auto_awesome, color: ModernTheme.warningAmber, size: 20),
            ],
          ),
          const SizedBox(height: 20),
          GridView.count(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            crossAxisCount: 2,
            mainAxisSpacing: 16,
            crossAxisSpacing: 16,
            childAspectRatio: 1.0,
            children: [
              _buildQuickActionCard(
                icon: Icons.camera_alt,
                title: 'Fotoğraf Çek',
                subtitle: 'Hızlı çözüm',
                gradient: const LinearGradient(
                  colors: [Color(0x336366F1), Color(0x338B5CF6)],
                ),
                borderGradient: ModernTheme.primaryGradient,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const CameraScreen()),
                  );
                },
              ),
              _buildQuickActionCard(
                icon: Icons.edit,
                title: 'Soru Yaz',
                subtitle: 'Detaylı açıklama',
                gradient: const LinearGradient(
                  colors: [Color(0x33EC4899), Color(0x33F472B6)],
                ),
                borderGradient: const LinearGradient(
                  colors: [Color(0xFFEC4899), Color(0xFFF472B6)],
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => const ChatScreen(questionType: 'matematik'),
                    ),
                  );
                },
              ),
              _buildQuickActionCard(
                icon: Icons.document_scanner,
                title: 'Sayfa Tara',
                subtitle: 'Toplu çözüm',
                gradient: const LinearGradient(
                  colors: [Color(0x3310B981), Color(0x3334D399)],
                ),
                borderGradient: ModernTheme.successGradient,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => const PageScanScreen()),
                  );
                },
              ),
              _buildQuickActionCard(
                icon: Icons.history,
                title: 'Geçmiş',
                subtitle: 'Kayıtlarım',
                gradient: const LinearGradient(
                  colors: [Color(0x33F59E0B), Color(0x33FBBF24)],
                ),
                borderGradient: const LinearGradient(
                  colors: [Color(0xFFF59E0B), Color(0xFFFBBF24)],
                ),
                onTap: () {
                  setState(() => _selectedIndex = 1);
                },
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActionCard({
    required IconData icon,
    required String title,
    required String subtitle,
    required Gradient gradient,
    required Gradient borderGradient,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          gradient: gradient,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: Colors.white.withOpacity(0.1),
            width: 1,
          ),
        ),
        child: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(
                      gradient: borderGradient,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.3),
                          blurRadius: 8,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Icon(icon, color: Colors.white, size: 24),
                  ),
                  const Spacer(),
                  Text(title, style: ModernTheme.bodyLarge.copyWith(fontWeight: FontWeight.bold)),
                  const SizedBox(height: 2),
                  Text(subtitle, style: ModernTheme.bodyMuted.copyWith(fontSize: 11)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPremiumBanner(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() => _selectedIndex = 2);
      },
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 24),
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          gradient: ModernTheme.premiumGradient,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: ModernTheme.warningAmber.withOpacity(0.3),
              blurRadius: 20,
              offset: const Offset(0, 8),
            ),
          ],
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      const Icon(Icons.workspace_premium, color: Colors.white, size: 20),
                      const SizedBox(width: 8),
                      Text(
                        'Premium\'a Geç!',
                        style: ModernTheme.heading3.copyWith(fontSize: 18),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Sınırsız soru, öncelikli destek',
                    style: ModernTheme.bodySecondary.copyWith(color: Colors.white.withOpacity(0.9)),
                  ),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, color: Colors.white, size: 24),
          ],
        ),
      ),
    );
  }

  Widget _buildAdminBanner(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (_) => const AdminPanelScreen()),
        );
      },
      child: Container(
        margin: const EdgeInsets.fromLTRB(24, 16, 24, 0),
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [ModernTheme.errorRed, Color(0xFFDC2626)],
          ),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: ModernTheme.errorRed.withOpacity(0.3),
            width: 1,
          ),
        ),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.2),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Icon(Icons.shield, color: Colors.white, size: 24),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Admin Panel', style: ModernTheme.bodyLarge.copyWith(fontWeight: FontWeight.bold)),
                  Text('Yönetici kontrolleri', style: ModernTheme.bodySecondary.copyWith(fontSize: 12)),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, color: Colors.white, size: 20),
          ],
        ),
      ),
    );
  }

  Widget _buildBottomNav() {
    return Container(
      decoration: BoxDecoration(
        color: ModernTheme.cardBg,
        border: Border(
          top: BorderSide(
            color: Colors.white.withOpacity(0.1),
            width: 1,
          ),
        ),
      ),
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildNavItem(Icons.home, 'Ana Sayfa', 0),
              _buildNavItem(Icons.history, 'Geçmiş', 1),
              _buildNavItem(Icons.workspace_premium, 'Premium', 2),
              _buildNavItem(Icons.person, 'Profil', 3),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String label, int index) {
    final isActive = _selectedIndex == index;
    return GestureDetector(
      onTap: () => setState(() => _selectedIndex = index),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            color: isActive ? ModernTheme.primaryIndigo : Colors.white.withOpacity(0.4),
            size: 24,
          ),
          const SizedBox(height: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              color: isActive ? ModernTheme.primaryIndigo : Colors.white.withOpacity(0.4),
              fontWeight: isActive ? FontWeight.bold : FontWeight.normal,
            ),
          ),
        ],
      ),
    );
  }
}
