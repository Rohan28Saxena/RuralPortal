import React from 'react';
import { Sprout, Search, Bell, Globe, LayoutDashboard, Compass, Users, BookOpen, LogOut } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab, onLogout,user, children })  {
  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };
  return (
    <div className="flex h-screen bg-[#fdfbf7] font-sans overflow-hidden">
      {/* Sidebar - Destkop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#1e3a2b] text-[#fbf8f3] border-r border-[#2d4e3c] shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-[#2a4737]">
          <div className="p-2 bg-[#15803d] rounded-xl text-white">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
              UNNATI
            </h1>
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">Rural Enterprise</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
            { id: 'grants', name: 'Discover Grants', icon: Compass },
            { id: 'mentors', name: 'Connect Mentors', icon: Users },
            { id: 'learning', name: 'Learning Hub', icon: BookOpen },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-[#15803d] text-white shadow-md' 
                  : 'hover:bg-[#254232] text-gray-300 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#2a4737] mt-auto">
          
          <button 
            onClick={onLogout} // ADD onClick HERE
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-300 hover:text-red-100 hover:bg-red-950/20 rounded-xl transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Navbar */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[#f2ebe0] px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex md:hidden items-center gap-2">
            <Sprout className="text-[#15803d] w-6 h-6" />
            <span className="font-bold text-lg text-[#1e3a2b]">UNNATI</span>
          </div>

          <div className="relative max-w-md w-full hidden sm:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text" 
              placeholder="Search grants, mentors, or courses..." 
              className="w-full pl-10 pr-4 py-2 text-sm border border-[#e8ded1] bg-[#fbfbf9] focus:outline-none focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] rounded-xl transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#e8ded1] text-[#1e3a2b] hover:bg-gray-50 text-xs font-semibold rounded-lg">
              <Globe className="w-4 h-4 text-gray-500" />
              <span>English / हिन्दी</span>
            </button>
            <button className="p-2 border border-[#e8ded1] hover:bg-gray-50 rounded-xl relative">
              <Bell className="w-5 h-5 text-[#1e3a2b]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#c2410c] rounded-full"></span>
            </button>
            <div className="flex items-center gap-2.5 ml-2 border-l border-gray-200 pl-4">
              <div className="w-9 h-9 rounded-full bg-[#f3efe8] border-2 border-[#15803d] flex items-center justify-center font-bold text-sm text-[#1e3a2b]">
                {getInitials(user?.name)}
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-sm font-semibold text-gray-800 leading-tight capitalize">
                  {user?.name || 'User'}
                </div>
                <div className="text-[10px] font-medium text-gray-400 capitalize">
                  {user?.role || 'Entrepreneur'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Injection Injection Area */}
        <main className="p-4 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}