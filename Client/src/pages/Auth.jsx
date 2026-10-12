
import React, { useState } from 'react';
import { Sprout, Mail, Lock, User, Briefcase, ArrowRight } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'entrepreneur'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a mock user object based on what they typed
    const userData = {
      // If logging in, use the part of email before '@', otherwise use the full name typed
      name: isLogin ? formData.email.split('@')[0] : formData.name,
      role: formData.role
    };

    // Pass the user data to App.jsx
    onLogin(userData); 
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-[#eae2d5]">
        
        {/* Branding Side Panel */}
        <div className="w-full md:w-2/5 bg-[#1e3a2b] p-8 md:p-12 text-[#fdfbf7] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#15803d] rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-[#15803d] rounded-xl text-white">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight">UNNATI</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              {isLogin ? 'Welcome back to your growth journey.' : 'Start your rural enterprise journey today.'}
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Connect with mentors, discover micro-grants, and learn the skills needed to scale your local business.
            </p>
          </div>

          <div className="mt-12 text-sm text-emerald-200/60 relative z-10">
            © 2026 Unnati Rural Enterprise Portal
          </div>
        </div>

        {/* Form Side Panel */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-[#1e3a2b] mb-2">
              {isLogin ? 'Sign In to Unnati' : 'Create an Account'}
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="ml-1 text-[#15803d] font-bold hover:underline"
              >
                {isLogin ? 'Register here' : 'Sign in here'}
              </button>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      required 
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] transition-all outline-none"
                      placeholder="Radhika Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    required 
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] transition-all outline-none"
                    placeholder="radhika@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input 
                    type="password" 
                    required 
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] transition-all outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">I am a...</label>
                  <div className="relative">
                    <Briefcase className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] transition-all outline-none appearance-none"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="entrepreneur">Rural Entrepreneur</option>
                      <option value="mentor">Business Mentor</option>
                    </select>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full mt-6 bg-[#1e3a2b] hover:bg-[#15803d] text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                {isLogin ? 'Sign In to Dashboard' : 'Create Account'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}