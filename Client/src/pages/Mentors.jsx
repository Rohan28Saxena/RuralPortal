import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, MapPin, Briefcase, ChevronRight, MessageSquareCheck, Heart } from 'lucide-react';

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [requestStatus, setRequestStatus] = useState({});

  useEffect(() => {
    // API Call with Mock fallback so it looks great even without the backend running
    axios.get('http://localhost:5000/api/mentors')
      .then(res => {
        if(res.data.length > 0) {
          setMentors(res.data);
        } else {
          loadMockData();
        }
      })
      .catch(() => {
        loadMockData();
      });

    function loadMockData() {
      setMentors([
        {
          _id: 'm1',
          user: { name: 'Anoop Kumar' },
          location: 'Guwahati, Assam',
          experienceYears: 14,
          expertiseArea: ['Agri-Tech', 'Organic Farming', 'Micro-Finance'],
          bio: 'Passionate about digital transformation in farming. I have guided 45+ local rural startups to sustainable models.',
          availability: '6 hours/week',
          img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
        },
        {
          _id: 'm2',
          user: { name: 'Rupali Deshmukh' },
          location: 'Satara, Maharashtra',
          experienceYears: 9,
          expertiseArea: ['Handicrafts Supply', 'Retail Marketing', 'Digital Payment'],
          bio: 'Working directly with weaver co-ops and craft hubs to connect remote products directly with metros and cities.',
          availability: '4 hours/week',
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80'
        },
        {
          _id: 'm3',
          user: { name: 'Vikram Singh' },
          location: 'Jaipur, Rajasthan',
          experienceYears: 12,
          expertiseArea: ['Supply Chain', 'Exporting', 'Business Setup'],
          bio: 'Helping rural artisans and craftsmen scale their production and navigate government export documentation.',
          availability: '5 hours/week',
          img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80'
        }
      ]);
    }
  }, []);

  const handleRequest = async (mentorId) => {
    try {
      // Show loading state
      setRequestStatus(prev => ({ ...prev, [mentorId]: 'requesting' }));
      
      // Simulate API request speed
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success state
      setRequestStatus(prev => ({ ...prev, [mentorId]: 'sent' }));
    } catch {
      setRequestStatus(prev => ({ ...prev, [mentorId]: 'error' }));
    }
  };

  return (
    <div className="pb-10 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-[#c2410c] text-xs font-bold tracking-wider uppercase">Local & Industry Guides</span>
        <h1 className="text-3xl font-extrabold text-[#1e3a2b] tracking-tight mt-1 flex items-center gap-2.5">
          Connect with Mentors <Users className="text-[#15803d] h-8 w-8" />
        </h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Find and connect with experienced mentors for specialized one-on-one setup advisory, business strategy, and long-term advice.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mentors.map(m => (
          <div key={m._id} className="relative bg-white border border-[#eae2d5] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Profile Card Header */}
              <div className="flex items-start justify-between gap-3.5 mb-4">
                <div className="flex items-center gap-3.5">
                  <img 
                    src={m.img || `https://api.dicebear.com/7.x/initials/svg?seed=${m.user?.name}`} 
                    alt={m.user?.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#15803d]/20 shrink-0" 
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#15803d]">
                      {m.user?.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium uppercase mt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> {m.location}
                    </div>
                  </div>
                </div>
                <button className="p-1.5 hover:bg-rose-50 text-gray-300 hover:text-rose-600 rounded-lg transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Tagging Metas */}
              <div className="flex items-center gap-2 bg-[#fdfbf7] border border-[#f0e8dc] px-3 py-2 rounded-xl text-xs font-bold text-[#1e3a2b] mb-4">
                <Briefcase className="w-4 h-4 text-[#15803d] shrink-0" />
                <span>{m.experienceYears} Years Enterprise Support</span>
              </div>

              {/* Bio summary */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                "{m.bio}"
              </p>

              {/* Categorization tag bubbles */}
              <div className="flex flex-wrap gap-2 mb-6">
                {m.expertiseArea?.map((area, i) => (
                  <span key={i} className="text-xs bg-[#f4eae0] text-[#7c2d12] font-semibold px-2.5 py-1 rounded-lg">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4 border-t border-gray-100 mt-auto">
              <button 
                onClick={() => handleRequest(m._id)}
                disabled={requestStatus[m._id] === 'sent'}
                className={`w-full font-bold text-sm py-3 px-4 rounded-xl transition duration-150 active:scale-[0.98] flex items-center justify-center gap-2 ${
                  requestStatus[m._id] === 'sent'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-inner'
                    : requestStatus[m._id] === 'requesting'
                    ? 'bg-gray-100 text-gray-400 border border-gray-200'
                    : 'bg-[#15803d] hover:bg-[#116630] text-white shadow-sm hover:shadow'
                }`}
              >
                {requestStatus[m._id] === 'sent' ? (
                  <>
                    <MessageSquareCheck className="w-4 h-4 text-emerald-700" />
                    Request Submitted!
                  </>
                ) : requestStatus[m._id] === 'requesting' ? (
                  'Submitting Request...'
                ) : (
                  <>
                    Connect to Consult
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}