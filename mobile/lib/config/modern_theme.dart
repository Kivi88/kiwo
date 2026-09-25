import 'package:flutter/material.dart';

class ModernTheme {
  // Renk Paleti (Referans Tasarımdan)
  static const Color primaryIndigo = Color(0xFF6366F1);
  static const Color primaryPurple = Color(0xFF8B5CF6);
  static const Color accentPink = Color(0xFFEC4899);
  static const Color successGreen = Color(0xFF10B981);
  static const Color warningAmber = Color(0xFFF59E0B);
  static const Color errorRed = Color(0xFFEF4444);
  
  // Arka Planlar
  static const Color darkBg = Color(0xFF0F172A);
  static const Color cardBg = Color(0xFF1E293B);
  static const Color glassBg = Color(0x0DFFFFFF); // white/5%
  
  // Gradient'ler
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [primaryIndigo, primaryPurple, accentPink],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
  
  static const LinearGradient successGradient = LinearGradient(
    colors: [successGreen, Color(0xFF34D399), Color(0xFF059669)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
  
  static const LinearGradient premiumGradient = LinearGradient(
    colors: [warningAmber, Color(0xFFF97316), errorRed],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
  
  // Glass Card Decoration
  static BoxDecoration glassCard({Color? borderColor}) {
    return BoxDecoration(
      color: glassBg,
      borderRadius: BorderRadius.circular(24),
      border: Border.all(
        color: borderColor ?? Colors.white.withOpacity(0.1),
        width: 1,
      ),
      boxShadow: [
        BoxShadow(
          color: Colors.black.withOpacity(0.3),
          blurRadius: 32,
          offset: const Offset(0, 8),
        ),
      ],
    );
  }
  
  // Gradient Card Decoration
  static BoxDecoration gradientCard(Gradient gradient) {
    return BoxDecoration(
      gradient: gradient,
      borderRadius: BorderRadius.circular(24),
      border: Border.all(
        color: Colors.white.withOpacity(0.2),
        width: 1,
      ),
      boxShadow: [
        BoxShadow(
          color: Colors.black.withOpacity(0.3),
          blurRadius: 20,
          offset: const Offset(0, 8),
        ),
      ],
    );
  }
  
  // Text Styles
  static const TextStyle heading1 = TextStyle(
    fontSize: 32,
    fontWeight: FontWeight.bold,
    color: Colors.white,
    letterSpacing: -0.5,
  );
  
  static const TextStyle heading2 = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.white,
    letterSpacing: -0.3,
  );
  
  static const TextStyle heading3 = TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  );
  
  static const TextStyle bodyLarge = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w500,
    color: Colors.white,
  );
  
  static const TextStyle bodyMedium = TextStyle(
    fontSize: 14,
    fontWeight: FontWeight.normal,
    color: Colors.white,
  );
  
  static TextStyle bodySecondary = TextStyle(
    fontSize: 14,
    fontWeight: FontWeight.normal,
    color: Colors.white.withOpacity(0.7),
  );
  
  static TextStyle bodyMuted = TextStyle(
    fontSize: 12,
    fontWeight: FontWeight.normal,
    color: Colors.white.withOpacity(0.4),
  );
}
