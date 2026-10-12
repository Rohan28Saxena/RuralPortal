import React from 'react';
import { TrendingUp, Users, Award, BookOpen, ChevronRight, Clock, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Banner */}
      <div className="bg-[#1e3a2b] rounded-2xl p-6 md:p-8 text-[#fdfbf7] relative overflow-hidden shadow-md">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-2">Welcome back, Radhika! 👋</h1>
          <p className="text-emerald-100/80 mb-6 text-sm md:text-base">
            Your handicraft business is growing. Here are your personalized funding and mentorship recommendations for today.
          </p>
          <button className="bg-[#15803d] hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2">
            Complete Your Business Profile <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Decorative background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#15803d] rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Grants', value: '12', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Available Mentors', value: '45', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Applications', value: '2', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Courses Completed', value: '1', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-[#eae2d5] p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#1e3a2b]">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Layout for Grants & Mentors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Recommended Grants */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1e3a2b]">Recommended Grants</h2>
            <button className="text-[#15803d] text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'PMEGP Micro-Enterprise', amount: '₹5,00,000', deadline: 'Dec 15, 2026', color: 'bg-[#15803d]', text: 'text-white' },
              { name: 'Artisan Credit Card Scheme', amount: '₹50,000', deadline: 'Nov 30, 2026', color: 'bg-white', text: 'text-[#1e3a2b]' }
            ].map((grant, i) => (
              <div key={i} className={`${grant.color} ${grant.text} border border-[#eae2d5] rounded-2xl p-5 shadow-sm flex items-center justify-between`}>
                <div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${grant.color === 'bg-white' ? 'text-red-500' : 'text-emerald-200'}`}>
                    Deadline Approaching
                  </span>
                  <h3 className="font-bold text-lg mt-1">{grant.amount}</h3>
                  <p className={`text-sm ${grant.color === 'bg-white' ? 'text-gray-600' : 'text-emerald-50'}`}>{grant.name}</p>
                </div>
                <button className={`px-4 py-2 rounded-xl text-sm font-bold shadow-sm ${grant.color === 'bg-white' ? 'bg-[#c2410c] text-white' : 'bg-white text-[#15803d]'}`}>
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recommended Mentors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1e3a2b]">Connect with Mentors</h2>
            <button className="text-[#15803d] text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="bg-white border border-[#eae2d5] rounded-2xl shadow-sm overflow-hidden">
            {[
              { name: 'Rupali Deshmukh', expertise: 'Retail & Handicrafts', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80' },
              { name: 'Anoop Kumar', expertise: 'Agri-Business', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80' }
            ].map((mentor, i) => (
              <div key={i} className="p-4 border-b border-[#eae2d5] last:border-0 flex items-center justify-between hover:bg-gray-50 transition">
                <div className="flex items-center gap-3">
                  <img src={mentor.img} alt={mentor.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h4 className="font-bold text-sm text-[#1e3a2b]">{mentor.name}</h4>
                    <p className="text-xs text-gray-500">{mentor.expertise}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-[#15803d] hover:bg-emerald-50 rounded-lg transition">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Learning Hub Spotlight */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#1e3a2b]">Learning Hub</h2>
          <button className="text-[#15803d] text-sm font-semibold hover:underline">Browse Courses</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Farming Business 101', category: 'Agriculture', duration: '2 hrs', color: 'bg-[#f4eae0]' },
            { title: 'Micro-Finance Basics', category: 'Finance', duration: '45 mins', color: 'bg-[#eef2e6]' },
            { title: 'Digital Marketing for Local Retail', category: 'Marketing', duration: '1.5 hrs', color: 'bg-[#e0eff4]' },
          ].map((course, i) => (
            <div key={i} className={`${course.color} rounded-2xl p-5 border border-[#eae2d5] cursor-pointer hover:shadow-md transition`}>
              <span className="text-[10px] font-black uppercase text-[#7c2d12] tracking-wider">{course.category}</span>
              <h3 className="font-bold text-[#1e3a2b] mt-2 mb-4 leading-tight">{course.title}</h3>
              <div className="flex items-center text-xs text-gray-600 font-semibold gap-1">
                <Clock className="w-3.5 h-3.5" /> {course.duration}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}