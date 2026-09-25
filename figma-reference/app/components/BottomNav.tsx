import { motion } from 'motion/react';
import { Home as HomeIcon, History, Crown, User } from 'lucide-react';

export function BottomNav({ currentScreen, setScreen }: any) {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Ana Sayfa' },
    { id: 'history', icon: History, label: 'Geçmiş' },
    { id: 'premium', icon: Crown, label: 'Premium' },
    { id: 'profile', icon: User, label: 'Profil' }
  ];

  return (
    <div className="bg-[#1E293B] border-t border-white/10 px-3 py-2 backdrop-blur-xl">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <motion.button
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setScreen(item.id)}
              className="relative flex flex-col items-center gap-1.5 py-2.5 px-4"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 backdrop-blur-xl rounded-2xl border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative">
                <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-white/40'}`} />
                {isActive && item.id === 'premium' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-[#F59E0B] rounded-full"
                  />
                )}
              </div>
              <span className={`text-[10px] font-semibold transition-colors relative ${isActive ? 'text-white' : 'text-white/40'}`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
