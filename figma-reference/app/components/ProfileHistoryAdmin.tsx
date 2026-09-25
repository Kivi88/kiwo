import { motion } from 'motion/react';
import { ChevronRight, Search, Crown, User, Settings, LogOut, Shield, History, FileCheck, Award, TrendingUp, Home as HomeIcon } from 'lucide-react';
import { BottomNav } from './BottomNav';

export function ProfileScreen({ setScreen, isPremium, isAdmin }: any) {
  const stats = [
    { label: 'Toplam', value: '245', icon: <FileCheck className="w-4 h-4" />, gradient: 'from-[#6366F1] to-[#8B5CF6]' },
    { label: 'Bu Ay', value: '42', icon: <TrendingUp className="w-4 h-4" />, gradient: 'from-[#10B981] to-[#34D399]' },
    { label: 'Başarı', value: '%87', icon: <Award className="w-4 h-4" />, gradient: 'from-[#F59E0B] to-[#FB923C]' }
  ];

  const menuItems = [
    { icon: <Crown className="w-5 h-5" />, label: 'Premium\'a Geç', action: () => setScreen('premium'), show: !isPremium, gradient: 'from-[#F59E0B] to-[#FB923C]' },
    { icon: <Shield className="w-5 h-5" />, label: 'Admin Panel', action: () => setScreen('admin'), show: isAdmin, gradient: 'from-[#EF4444] to-[#DC2626]' },
    { icon: <History className="w-5 h-5" />, label: 'Geçmiş', action: () => setScreen('history'), show: true, gradient: 'from-[#6366F1] to-[#8B5CF6]' },
    { icon: <Settings className="w-5 h-5" />, label: 'Ayarlar', action: () => {}, show: true, gradient: 'from-[#64748B] to-[#475569]' },
    { icon: <LogOut className="w-5 h-5" />, label: 'Çıkış Yap', action: () => {}, show: true, gradient: 'from-[#EF4444] to-[#DC2626]' }
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="h-full flex flex-col bg-[#0F172A] overflow-y-auto"
    >
      {/* Profile Header */}
      <div className="px-6 pt-12 pb-8 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-5 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-5 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative flex flex-col items-center"
        >
          <div className="relative mb-4">
            <div className="w-28 h-28 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/20 relative overflow-hidden">
              <User className="w-14 h-14 text-white" />
            </div>
            {isAdmin && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] px-4 py-1.5 rounded-full shadow-xl border-2 border-white/30"
              >
                <p className="text-white text-xs font-bold">⚡ ADMIN</p>
              </motion.div>
            )}
          </div>
          <h2 className="text-white font-bold text-3xl mb-2">Ahmet Yılmaz</h2>
          <p className="text-white/70 mb-4">ahmet@example.com</p>
          {isPremium && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-gradient-to-r from-[#F59E0B] to-[#FB923C] px-5 py-2 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Crown className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Premium Üye</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <p className="text-white font-bold text-2xl mb-1">{stat.value}</p>
              <p className="text-white/60 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Menu */}
        <div className="space-y-3">
          {menuItems.filter(item => item.show).map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={item.action}
              className="w-full flex items-center justify-between px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <span className="text-white font-semibold">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <div className="h-20" />
    </motion.div>
  );
}

export function HistoryScreen({ setScreen }: any) {
  const history = [
    { id: 1, type: 'Matematik', emoji: '📐', date: 'Bugün, 14:30', question: 'x² + 5x + 6 = 0 denklemini çözünüz...', answer: 'x₁ = -2, x₂ = -3', color: 'from-[#6366F1] to-[#8B5CF6]' },
    { id: 2, type: 'Fizik', emoji: '⚛️', date: 'Bugün, 12:15', question: 'Bir cisim 10 m/s hızla düşey yukarı atılıyor...', answer: 'Maksimum yükseklik 5 metredir', color: 'from-[#10B981] to-[#34D399]' },
    { id: 3, type: 'Kimya', emoji: '🧪', date: 'Dün, 18:45', question: 'H₂SO₄ asidinin molekül kütlesi nedir?', answer: '98 g/mol', color: 'from-[#F59E0B] to-[#FB923C]' }
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="h-full flex flex-col bg-[#0F172A]"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-5 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen('home')}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </motion.button>
            <div>
              <h1 className="text-white font-bold text-2xl">Geçmiş</h1>
              <p className="text-white/70 text-sm">Çözülen sorular</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
          >
            <Search className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>

      {/* History List */}
      <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
        {history.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 bg-gradient-to-r ${item.color} rounded-lg flex items-center gap-2`}>
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-white text-xs font-bold">{item.type}</span>
                </div>
              </div>
              <span className="text-white/40 text-xs">{item.date}</span>
            </div>
            <p className="text-white mb-3 line-clamp-2 leading-relaxed">{item.question}</p>
            <div className="bg-white/5 rounded-xl px-4 py-3 mb-3 border border-white/10">
              <p className="text-white/70 text-sm line-clamp-1">{item.answer}</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => setScreen('chat')}
              className="text-[#6366F1] font-semibold text-sm flex items-center gap-2"
            >
              Detayları Gör
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      <BottomNav currentScreen="history" setScreen={setScreen} />
    </motion.div>
  );
}

export function AdminScreen({ setScreen }: any) {
  const stats = [
    { label: 'Toplam Kullanıcı', value: '1,234', icon: '👥', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
    { label: 'Premium Üye', value: '456', icon: '👑', gradient: 'from-[#F59E0B] to-[#FB923C]' },
    { label: 'Bugün Kayıt', value: '23', icon: '🎯', gradient: 'from-[#10B981] to-[#34D399]' },
    { label: 'Toplam Gelir', value: '₺42K', icon: '💰', gradient: 'from-[#EF4444] to-[#DC2626]' }
  ];

  const users = [
    { name: 'Ahmet Yılmaz', email: 'ahmet@example.com', premium: true, admin: false, avatar: 'A' },
    { name: 'Ayşe Demir', email: 'ayse@example.com', premium: false, admin: false, avatar: 'A' },
    { name: 'Mehmet Kaya', email: 'mehmet@example.com', premium: true, admin: true, avatar: 'M' }
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="h-full flex flex-col bg-[#0F172A] overflow-y-auto"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#B91C1C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-5 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen('profile')}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </motion.button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-white font-bold text-2xl">Admin Panel</h1>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/70 text-sm">Yönetici kontrolleri</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-white font-bold text-2xl mb-1">{stat.value}</p>
                <p className="text-white/70 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="px-6 py-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-lg">Kullanıcılar</h3>
          <button className="w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center">
            <Search className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {users.map((user, index) => (
          <motion.div
            key={user.email}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                {user.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-white font-bold">{user.name}</p>
                  {user.admin && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white text-xs font-bold rounded-md">ADMIN</span>
                  )}
                  {user.premium && (
                    <Crown className="w-4 h-4 text-[#F59E0B]" />
                  )}
                </div>
                <p className="text-white/60 text-sm">{user.email}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10"
              >
                <ChevronRight className="w-5 h-5 text-white/60" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
