import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;
import '../config/modern_theme.dart';
import '../screens/camera_screen.dart';
import '../screens/chat_screen.dart';
import '../screens/page_scan_screen.dart';

class VoiceCommandWidget extends StatefulWidget {
  const VoiceCommandWidget({super.key});

  @override
  State<VoiceCommandWidget> createState() => _VoiceCommandWidgetState();
}

class _VoiceCommandWidgetState extends State<VoiceCommandWidget>
    with TickerProviderStateMixin {
  late stt.SpeechToText _speech;
  bool _isListening = false;
  String _recognizedText = '';
  late AnimationController _pulseController;
  late AnimationController _menuController;

  @override
  void initState() {
    super.initState();
    _speech = stt.SpeechToText();
    _pulseController = AnimationController(
      duration: const Duration(milliseconds: 1000),
      vsync: this,
    )..repeat(reverse: true);
    
    _menuController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
  }

  @override
  void dispose() {
    _pulseController.dispose();
    _menuController.dispose();
    _speech.stop();
    super.dispose();
  }

  Future<void> _startListening() async {
    bool available = await _speech.initialize(
      onStatus: (status) {
        if (status == 'done' || status == 'notListening') {
          setState(() => _isListening = false);
        }
      },
      onError: (error) {
        setState(() => _isListening = false);
        _showError('Ses tanıma hatası: ${error.errorMsg}');
      },
    );

    if (available) {
      setState(() => _isListening = true);
      _speech.listen(
        onResult: (result) {
          setState(() {
            _recognizedText = result.recognizedWords.toLowerCase();
          });

          // Check for "hi kiwo" or "hey kiwo"
          if (_recognizedText.contains('hi kiwo') ||
              _recognizedText.contains('hey kiwo') ||
              _recognizedText.contains('hay kiwo') ||
              _recognizedText.contains('hi kivo') ||
              _recognizedText.contains('hey kivo')) {
            _speech.stop();
            setState(() {
              _isListening = false;
            });
            _menuController.forward();
            _showVoiceMenu();
          }
        },
        listenFor: const Duration(seconds: 5),
        pauseFor: const Duration(seconds: 3),
        localeId: 'tr_TR',
      );
    } else {
      _showError('Mikrofon izni verilmedi');
    }
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: ModernTheme.errorRed,
        behavior: SnackBarBehavior.floating,
      ),
    );
  }

  void _showVoiceMenu() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (context) => _buildVoiceMenuSheet(),
    ).then((_) {
      _menuController.reverse();
    });
  }

  Widget _buildVoiceMenuSheet() {
    return Container(
      height: MediaQuery.of(context).size.height * 0.6,
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [ModernTheme.cardBg, ModernTheme.darkBg],
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        ),
        borderRadius: const BorderRadius.vertical(top: Radius.circular(32)),
        border: Border.all(
          color: Colors.white.withOpacity(0.1),
          width: 1,
        ),
      ),
      child: Column(
        children: [
          // Handle bar
          Container(
            margin: const EdgeInsets.only(top: 12),
            width: 40,
            height: 4,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.3),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          const SizedBox(height: 24),
          
          // Title with animation
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.mic, color: ModernTheme.primaryIndigo, size: 28),
              const SizedBox(width: 12),
              Text(
                'Hi KIWO! 👋',
                style: ModernTheme.heading2.copyWith(fontSize: 24),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            'Ne yapmak istersin?',
            style: ModernTheme.bodySecondary,
          ),
          const SizedBox(height: 32),
          
          // Menu options
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: GridView.count(
                crossAxisCount: 2,
                mainAxisSpacing: 16,
                crossAxisSpacing: 16,
                childAspectRatio: 1.1,
                children: [
                  _buildMenuOption(
                    icon: Icons.camera_alt,
                    title: 'Fotoğraf Çek',
                    subtitle: 'Soruyu çek',
                    gradient: ModernTheme.primaryGradient,
                    onTap: () {
                      Navigator.pop(context);
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const CameraScreen()),
                      );
                    },
                  ),
                  _buildMenuOption(
                    icon: Icons.edit,
                    title: 'Soru Yaz',
                    subtitle: 'Yazarak sor',
                    gradient: const LinearGradient(
                      colors: [Color(0xFFEC4899), Color(0xFFF472B6)],
                    ),
                    onTap: () {
                      Navigator.pop(context);
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const ChatScreen(questionType: 'matematik'),
                        ),
                      );
                    },
                  ),
                  _buildMenuOption(
                    icon: Icons.document_scanner,
                    title: 'Sayfa Tara',
                    subtitle: 'Toplu çözüm',
                    gradient: ModernTheme.successGradient,
                    onTap: () {
                      Navigator.pop(context);
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const PageScanScreen()),
                      );
                    },
                  ),
                  _buildMenuOption(
                    icon: Icons.chat_bubble,
                    title: 'Sohbet',
                    subtitle: 'AI ile konuş',
                    gradient: const LinearGradient(
                      colors: [Color(0xFFF59E0B), Color(0xFFFBBF24)],
                    ),
                    onTap: () {
                      Navigator.pop(context);
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const ChatScreen(questionType: 'genel'),
                        ),
                      );
                    },
                  ),
                ],
              ),
            ),
          ),
          
          // Close button
          Padding(
            padding: const EdgeInsets.all(24),
            child: GestureDetector(
              onTap: () => Navigator.pop(context),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 16),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(
                    color: Colors.white.withOpacity(0.2),
                    width: 1,
                  ),
                ),
                child: Center(
                  child: Text(
                    'Kapat',
                    style: ModernTheme.bodyLarge.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMenuOption({
    required IconData icon,
    required String title,
    required String subtitle,
    required Gradient gradient,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          gradient: gradient.colors.length > 1
              ? LinearGradient(
                  colors: gradient.colors.map((c) => c.withOpacity(0.2)).toList(),
                )
              : null,
          color: gradient.colors.length == 1 ? gradient.colors[0].withOpacity(0.2) : null,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: Colors.white.withOpacity(0.1),
            width: 1,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 56,
              height: 56,
              decoration: BoxDecoration(
                gradient: gradient,
                borderRadius: BorderRadius.circular(16),
                boxShadow: [
                  BoxShadow(
                    color: gradient.colors[0].withOpacity(0.3),
                    blurRadius: 12,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Icon(icon, color: Colors.white, size: 28),
            ),
            const SizedBox(height: 12),
            Text(
              title,
              style: ModernTheme.bodyLarge.copyWith(fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 4),
            Text(
              subtitle,
              style: ModernTheme.bodyMuted.copyWith(fontSize: 11),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _isListening ? null : _startListening,
      child: AnimatedBuilder(
        animation: _pulseController,
        builder: (context, child) {
          return Container(
            width: 64,
            height: 64,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: ModernTheme.primaryGradient,
              boxShadow: [
                BoxShadow(
                  color: ModernTheme.primaryIndigo.withOpacity(
                    _isListening ? 0.6 : 0.3 + (_pulseController.value * 0.3),
                  ),
                  blurRadius: _isListening ? 24 : 16,
                  spreadRadius: _isListening ? 4 : 0,
                ),
              ],
            ),
            child: Stack(
              children: [
                Center(
                  child: Icon(
                    _isListening ? Icons.mic : Icons.mic_none,
                    color: Colors.white,
                    size: 28,
                  ),
                ),
                if (_isListening)
                  Positioned.fill(
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      valueColor: AlwaysStoppedAnimation<Color>(
                        Colors.white.withOpacity(0.5),
                      ),
                    ),
                  ),
              ],
            ),
          );
        },
      ),
    );
  }
}
