import { useState } from 'react';
import { Camera, Edit3, FileText, Clock, Home as HomeIcon, History, Crown, User, Bell, ChevronRight, Search, X, Check, Star, Zap, Shield, Award, Settings, FileCheck, LogOut, TrendingUp, Brain, Sparkles, Flame, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileScreen, HistoryScreen, AdminScreen } from './components/ProfileHistoryAdmin';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userName] = useState('Ahmet');
  const [questionsLeft] = useState(3);
  const [isPremium] = useState(false);
  const [isAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1E293B] rounded-[32px] shadow-2xl overflow-hidden border border-white/10" style={{ height: '812px' }}>
        <AnimatePresence mode="wait">
          {currentScreen === 'home' && <HomeScreen key="home" userName={userName} questionsLeft={questionsLeft} isPremium={isPremium} isAdmin={isAdmin} setScreen={setCurrentScreen} />}
          {currentScreen === 'question' && <QuestionScreen key="question" setScreen={setCurrentScreen} />}
          {currentScreen === 'chat' && <ChatScreen key="chat" setScreen={setCurrentScreen} />}
          {currentScreen === 'scan' && <ScanScreen key="scan" setScreen={setCurrentScreen} />}
          {currentScreen === 'premium' && <PremiumScreen key="premium" setScreen={setCurrentScreen} isPremium={isPremium} />}
          {currentScreen === 'profile' && <ProfileScreen key="profile" setScreen={setCurrentScreen} isPremium={isPremium} isAdmin={isAdmin} />}
          {currentScreen === 'history' && <HistoryScreen key="history" setScreen={setCurrentScreen} />}
          {currentScreen === 'admin' && <AdminScreen key="admin" setScreen={setCurrentScreen} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function HomeScreen({ userName, questionsLeft, isPremium, isAdmin, setScreen }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-60 h-60 bg-[#F59E0B]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-10 w-80 h-80 bg-[#10B981]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 pt-12 pb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl border border-white/30"
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h1 className="text-white font-bold text-2xl tracking-tight">KIWO</h1>
                <p className="text-white/70 text-sm">AI Ödev Asistanı</p>
              </div>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 relative"
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScreen('profile')}
                className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
              >
                <User className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-5 mb-6 border border-white/20 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-white text-xl font-bold mb-0.5">Merhaba, {userName}! 👋</h2>
                <p className="text-white/70 text-sm">Bugünkü hedefine devam et</p>
              </div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Flame className="w-8 h-8 text-[#F59E0B]" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Günlük İlerleme</span>
                <span className="text-white font-bold">{questionsLeft}/5</span>
              </div>
              <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(questionsLeft / 5) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#0F172A] rounded-t-[32px] px-6 pt-8 pb-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-white font-bold text-lg">Hızlı Başlat</h3>
            <Sparkles className="w-5 h-5 text-[#F59E0B]" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <GlassCard
              icon={<Camera className="w-7 h-7" />}
              title="Fotoğraf Çek"
              subtitle="Hızlı çözüm"
              gradient="from-[#6366F1]/20 to-[#8B5CF6]/20"
              borderGradient="from-[#6366F1] to-[#8B5CF6]"
              onClick={() => setScreen('question')}
              delay={0.1}
            />
            <GlassCard
              icon={<Edit3 className="w-7 h-7" />}
              title="Soru Yaz"
              subtitle="Detaylı açıklama"
              gradient="from-[#EC4899]/20 to-[#F472B6]/20"
              borderGradient="from-[#EC4899] to-[#F472B6]"
              onClick={() => setScreen('question')}
              delay={0.2}
            />
            <GlassCard
              icon={<FileText className="w-7 h-7" />}
              title="Sayfa Tara"
              subtitle="Toplu çözüm"
              gradient="from-[#10B981]/20 to-[#34D399]/20"
              borderGradient="from-[#10B981] to-[#34D399]"
              onClick={() => setScreen('scan')}
              delay={0.3}
            />
            <GlassCard
              icon={<Clock className="w-7 h-7" />}
              title="Geçmiş"
              subtitle="Kayıtlarım"
              gradient="from-[#F59E0B]/20 to-[#FBBF24]/20"
              borderGradient="from-[#F59E0B] to-[#FBBF24]"
              onClick={() => setScreen('history')}
              delay={0.4}
            />
          </div>

          {!isPremium && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setScreen('premium')}
              className="bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EF4444] rounded-2xl p-5 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-5 h-5 text-white" />
                    <h4 className="text-white font-bold text-lg">Premium'a Geç!</h4>
                  </div>
                  <p className="text-white/90 text-sm">Sınırsız soru, öncelikli destek</p>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          )}

          {isAdmin && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setScreen('admin')}
              className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-2xl p-5 cursor-pointer mt-4 border border-[#EF4444]/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Admin Panel</h4>
                    <p className="text-white/80 text-sm">Yönetici kontrolleri</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          )}
        </div>

        <BottomNav currentScreen="home" setScreen={setScreen} />
      </div>
    </motion.div>
  );
}

function GlassCard({ icon, title, subtitle, gradient, borderGradient, onClick, delay }: any) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-2xl p-5 cursor-pointer border border-white/10 relative overflow-hidden group`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
      <div className="relative">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className={`w-12 h-12 bg-gradient-to-br ${borderGradient} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
        >
          <div className="text-white">{icon}</div>
        </motion.div>
        <h4 className="text-white font-bold text-base mb-0.5">{title}</h4>
        <p className="text-white/60 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function QuestionScreen({ setScreen }: any) {
  const [selectedType, setSelectedType] = useState('Matematik');
  const subjects = [
    { name: 'Matematik', emoji: '📐' },
    { name: 'Fizik', emoji: '⚛️' },
    { name: 'Kimya', emoji: '🧪' },
    { name: 'Biyoloji', emoji: '🧬' },
    { name: 'Tarih', emoji: '📜' },
    { name: 'Coğrafya', emoji: '🌍' }
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
        <div className="relative flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setScreen('home')}
            className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-180" />
          </motion.button>
          <div>
            <h1 className="text-white font-bold text-2xl">Soru Sor</h1>
            <p className="text-white/70 text-sm">AI ile çözüme ulaş</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {/* Subject Selection */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#6366F1]" />
            Ders Seç
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {subjects.map((subject, index) => (
              <motion.button
                key={subject.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(subject.name)}
                className={`px-5 py-3 rounded-2xl whitespace-nowrap transition-all flex items-center gap-2 border ${
                  selectedType === subject.name
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white border-transparent shadow-lg shadow-[#6366F1]/50'
                    : 'bg-white/5 text-white/70 border-white/10 backdrop-blur-xl'
                }`}
              >
                <span>{subject.emoji}</span>
                <span className="font-semibold">{subject.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Question Input */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-white font-semibold mb-3">Sorunuzu Yazın</h3>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 focus-within:border-[#6366F1] transition-colors">
            <textarea
              placeholder="Örn: x² + 5x + 6 = 0 denklemini çöz..."
              className="w-full h-36 bg-transparent text-white placeholder-white/40 focus:outline-none resize-none"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-white/40 text-sm font-semibold">VEYA</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Camera Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#10B981] to-[#34D399] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#10B981]/30 border border-[#10B981]/30"
        >
          <Camera className="w-6 h-6" />
          Fotoğraf Çek
        </motion.button>
      </div>

      {/* Send Button */}
      <div className="px-6 pb-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('chat')}
          className="w-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white py-5 rounded-2xl font-bold shadow-2xl shadow-[#6366F1]/50 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative">Çözümü Gör</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function ChatScreen({ setScreen }: any) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="h-full flex flex-col bg-[#0F172A]"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
              <div className="flex items-center gap-2">
                <h1 className="text-white font-bold text-xl">Matematik</h1>
                <span className="text-lg">📐</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-[#10B981] rounded-full"
                />
                <p className="text-white/70 text-xs">AI Asistan Aktif</p>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 72 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
          >
            <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
          </motion.button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
        {/* User Message */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex justify-end"
        >
          <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white rounded-3xl rounded-tr-md px-5 py-4 max-w-[80%] shadow-lg shadow-[#6366F1]/30">
            <p className="leading-relaxed">2x + 5 = 15 denklemini çözer misin?</p>
          </div>
        </motion.div>

        {/* AI Message */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <div className="max-w-[85%]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/60 text-xs font-semibold">AI Asistan</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-3xl rounded-tl-md px-5 py-4 shadow-xl">
              <p className="mb-4 leading-relaxed">Tabii ki! Bu denklemi adım adım çözelim 🎯</p>
              <div className="space-y-3 bg-white/5 rounded-2xl p-4 mb-4 border border-white/10">
                <div>
                  <p className="text-[#10B981] font-bold text-sm mb-1">📍 Adım 1: Denklemi Yaz</p>
                  <p className="font-mono text-lg">2x + 5 = 15</p>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <p className="text-[#3B82F6] font-bold text-sm mb-1">📍 Adım 2: Her iki taraftan 5 çıkar</p>
                  <p className="font-mono text-lg">2x = 10</p>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <p className="text-[#8B5CF6] font-bold text-sm mb-1">📍 Adım 3: Her iki tarafı 2'ye böl</p>
                  <p className="font-mono text-lg">x = 5</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/20 border border-[#10B981]/30 rounded-xl p-3">
                <p className="text-sm text-white/80">✨ Cevap: <span className="font-bold text-[#10B981] text-lg">x = 5</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-8 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('question')}
          className="flex-1 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#6366F1]/30"
        >
          Yeni Soru
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 bg-white/5 backdrop-blur-xl border border-white/10 text-[#F59E0B] py-4 rounded-2xl font-semibold"
        >
          <Star className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function ScanScreen({ setScreen }: any) {
  const [scanned, setScanned] = useState(false);

  if (!scanned) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full flex flex-col bg-black relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10"></div>

        {/* Header */}
        <div className="relative z-20 px-6 pt-12 pb-6">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen('home')}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <Zap className="w-5 h-5 text-[#F59E0B]" />
            </motion.button>
          </div>
        </div>

        {/* Scanner Frame */}
        <div className="flex-1 flex items-center justify-center relative px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-sm aspect-[3/4] border-2 border-white/30 rounded-3xl relative"
          >
            {/* Corner Indicators */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#10B981] rounded-tl-3xl"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#10B981] rounded-tr-3xl"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#10B981] rounded-bl-3xl"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#10B981] rounded-br-3xl"
            ></motion.div>

            {/* Scan Line */}
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"
            />
          </motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="relative z-20 px-6 pb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center mb-8 font-semibold"
          >
            Sayfayı çerçeve içine alın 📄
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setScanned(true)}
            className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white/30 relative overflow-hidden group"
          >
            <div className="absolute inset-2 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-full group-hover:scale-110 transition-transform"></div>
            <Camera className="w-10 h-10 text-white relative z-10" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const questions = [
    { id: 1, type: 'Matematik', emoji: '📐', text: 'x² + 5x + 6 = 0 denklemini çözünüz.', options: 4 },
    { id: 2, type: 'Matematik', emoji: '📐', text: 'Bir dikdörtgenin alanı 48 cm², uzun kenarı kısa kenarının 2 katıdır...', options: 5 },
    { id: 3, type: 'Fizik', emoji: '⚛️', text: 'Bir cisim 10 m/s hızla düşey yukarı atılıyor. Maksimum yükseklik?', options: 4 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col bg-[#0F172A]"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-br from-[#10B981] via-[#34D399] to-[#059669] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-5 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen('home')}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </motion.button>
            <div>
              <h1 className="text-white font-bold text-2xl">Tarama Sonucu</h1>
              <p className="text-white/70 text-sm">Tespit edilen sorular</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/20">
            <div className="flex items-center justify-between">
              <p className="text-white font-bold text-lg">{questions.length} Soru Bulundu</p>
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
        {questions.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#6366F1]/20 text-[#6366F1] border border-[#6366F1]/30 rounded-lg text-xs font-bold">
                    {q.type}
                  </span>
                  <span className="text-lg">{q.emoji}</span>
                </div>
                <p className="text-white line-clamp-3 mb-2 leading-relaxed">{q.text}</p>
                <p className="text-white/50 text-sm">{q.options} şık</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setScreen('chat')}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-xl font-bold shadow-lg shadow-[#6366F1]/30"
            >
              Çöz
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Action Button */}
      <div className="px-6 pb-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScanned(false)}
          className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white py-4 rounded-2xl font-bold"
        >
          Yeniden Tara
        </motion.button>
      </div>
    </motion.div>
  );
}

function PremiumScreen({ setScreen, isPremium }: any) {
  const plans = [
    {
      name: 'Temel',
      emoji: '🥉',
      price: '₺49',
      period: '/ay',
      questions: 20,
      features: ['Günlük 20 soru', 'Temel dersler', 'Fotoğraf tanıma'],
      gradient: 'from-[#F59E0B] via-[#F97316] to-[#FB923C]',
      shadow: 'shadow-[#F59E0B]/30'
    },
    {
      name: 'Standart',
      emoji: '🥈',
      price: '₺89',
      period: '/ay',
      questions: 60,
      features: ['Günlük 60 soru', 'Tüm dersler', 'Fotoğraf tanıma', 'Öncelikli destek'],
      gradient: 'from-[#8B5CF6] via-[#A78BFA] to-[#C084FC]',
      shadow: 'shadow-[#8B5CF6]/30',
      popular: true
    },
    {
      name: 'Premium',
      emoji: '🥇',
      price: '₺149',
      period: '/ay',
      questions: 120,
      features: ['Günlük 120 soru', 'Tüm dersler', 'Fotoğraf tanıma', 'Öncelikli destek', 'Detaylı analiz', 'AI Coach'],
      gradient: 'from-[#10B981] via-[#34D399] to-[#6EE7B7]',
      shadow: 'shadow-[#10B981]/30'
    }
  ];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="h-full flex flex-col bg-[#0F172A] overflow-y-auto"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden sticky top-0 z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-5 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen('home')}
              className="w-11 h-11 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white rotate-180" />
            </motion.button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-white font-bold text-2xl">Premium</h1>
                <Crown className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <p className="text-white/70 text-sm">Sınırsız öğrenme deneyimi</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold">Günlük Limitin</span>
              <span className="text-white font-bold text-lg">{isPremium ? '60/60' : '3/5'}</span>
            </div>
            <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isPremium ? '100%' : '60%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="flex-1 px-6 py-6 space-y-5">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {plan.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] px-4 py-1.5 rounded-full z-10 border-2 border-[#0F172A]"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <p className="text-white text-xs font-bold">En Popüler</p>
                </div>
              </motion.div>
            )}
            <div className={`bg-gradient-to-br ${plan.gradient} rounded-3xl p-6 shadow-2xl ${plan.shadow} relative overflow-hidden border border-white/20`}>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{plan.emoji}</span>
                    <div>
                      <h3 className="text-white font-bold text-2xl">{plan.name}</h3>
                      <p className="text-white/80 text-sm">Günlük {plan.questions} soru</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-white font-bold text-5xl">{plan.price}</span>
                  <span className="text-white/80 text-lg">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#10B981]" />
                      </div>
                      <p className="text-white font-medium">{feature}</p>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-[#111827] py-4 rounded-xl font-bold shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative">Satın Al</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav currentScreen="premium" setScreen={setScreen} />
    </motion.div>
  );
}
