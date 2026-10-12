import React, { useState } from 'react';
import { BookOpen, PlayCircle, Clock, FileText, Award, ChevronRight, Star } from 'lucide-react';

export default function LearningHub() {
  // Dummy data for courses
  const [courses] = useState([
    {
      _id: 'c1',
      title: 'Farming Business 101',
      category: 'Agriculture',
      duration: '2 hrs',
      type: 'Video Series',
      progress: 100, // Completed
      color: 'bg-[#f4eae0]',
      iconColor: 'text-[#c2410c]'
    },
    {
      _id: 'c2',
      title: 'Micro-Finance Basics',
      category: 'Finance',
      duration: '45 mins',
      type: 'Interactive Guide',
      progress: 35, // In progress
      color: 'bg-[#eef2e6]',
      iconColor: 'text-[#15803d]'
    },
    {
      _id: 'c3',
      title: 'Digital Marketing for Retail',
      category: 'Marketing',
      duration: '1.5 hrs',
      type: 'Video Series',
      progress: 0, // Not started
      color: 'bg-[#e0eff4]',
      iconColor: 'text-blue-600'
    },
    {
      _id: 'c4',
      title: 'Packaging & Export Guidelines',
      category: 'Operations',
      duration: '3 hrs',
      type: 'Documentation',
      progress: 0,
      color: 'bg-[#f3efe8]',
      iconColor: 'text-[#7c2d12]'
    }
  ]);

  return (
    <div className="pb-10 animate-in fade-in duration-500">
      {/* Page Heading */}
      <div className="mb-8">
        <span className="text-[#c2410c] text-xs font-bold tracking-wider uppercase">Skill Development</span>
        <h1 className="text-3xl font-extrabold text-[#1e3a2b] tracking-tight mt-1 flex items-center gap-2.5">
          Learning Hub <BookOpen className="text-[#15803d] h-8 w-8" />
        </h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Upgrade your business skills with bite-sized courses, financial guides, and inspiring success stories from rural entrepreneurs.
        </p>
      </div>

      {/* Success Story Spotlight (Hero Banner) */}
      <div className="mb-10 relative bg-[#1e3a2b] rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row items-center border border-[#2a4737]">
        {/* Image Side */}
        <div className="w-full md:w-2/5 h-48 md:h-full min-h-[240px] relative">
          <img 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80" 
            alt="Rural Weaver" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1e3a2b] via-[#1e3a2b]/40 to-transparent"></div>
        </div>
        
        {/* Content Side */}
        <div className="w-full md:w-3/5 p-6 md:p-8 relative z-10 text-[#fdfbf7]">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#c2410c] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
              Success Story Spotlight
            </span>
            <span className="flex items-center gap-1 text-emerald-300 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" /> Featured
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">Rani's Loom: From Village to Nationwide</h2>
          <p className="text-emerald-50/80 text-sm mb-6 max-w-lg leading-relaxed">
            Discover how Rani Devi utilized a micro-grant and digital marketing to scale her traditional weaving cooperative, increasing her village's income by 300%.
          </p>
          <button className="bg-white text-[#1e3a2b] hover:bg-gray-100 px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 shadow-sm w-fit">
            <PlayCircle className="w-5 h-5 text-[#15803d]" /> Watch Her Journey
          </button>
        </div>
      </div>

      {/* Courses Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#1e3a2b]">Recommended Courses</h2>
        <div className="hidden sm:flex gap-2">
          {['All', 'Finance', 'Agriculture', 'Marketing'].map((tab, i) => (
            <button key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${i === 0 ? 'bg-[#15803d] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course._id} className={`${course.color} rounded-2xl p-5 border border-[#eae2d5] flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer`}>
            
            {/* Top Metas */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] font-black uppercase tracking-wider ${course.iconColor}`}>
                {course.category}
              </span>
              {course.type === 'Video Series' ? (
                <PlayCircle className={`w-5 h-5 ${course.iconColor} opacity-70`} />
              ) : (
                <FileText className={`w-5 h-5 ${course.iconColor} opacity-70`} />
              )}
            </div>

            {/* Title & Info */}
            <h3 className="font-bold text-[#1e3a2b] text-lg mb-3 leading-tight group-hover:text-[#15803d] transition-colors">
              {course.title}
            </h3>
            
            <div className="flex items-center text-xs text-gray-700 font-semibold gap-3 mb-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 opacity-70" /> {course.duration}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span>{course.type}</span>
            </div>

            {/* Progress/Action Section at bottom */}
            <div className="mt-auto pt-4 border-t border-black/5">
              {course.progress === 100 ? (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#15803d] flex items-center gap-1">
                    <Award className="w-4 h-4" /> Completed
                  </span>
                  <button className="text-gray-500 hover:text-[#1e3a2b] bg-white rounded-full p-1 shadow-sm">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1.5">
                    <span>{course.progress > 0 ? 'In Progress' : 'Not Started'}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-1.5 mb-3">
                    <div 
                      className="bg-[#15803d] h-1.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <button className="w-full bg-white/80 hover:bg-white text-[#1e3a2b] font-bold text-xs py-2 rounded-lg transition shadow-sm border border-black/5 flex items-center justify-center gap-1">
                    {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}