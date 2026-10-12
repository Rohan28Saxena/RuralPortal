import React, { useState } from 'react';
import { Award, Calendar, CircleDollarSign, CheckCircle2, SlidersHorizontal, ExternalLink } from 'lucide-react';

export default function Grants() {
  // Pre-loaded with premium dummy data for immediate rendering
  const [grants] = useState([
    {
      _id: 'g1',
      schemeName: 'Prime Minister’s Employment Generation Programme (PMEGP)',
      description: 'A major credit-linked subsidy scheme to generate self-employment ventures through setting up of micro-enterprises in non-farm sectors.',
      eligibilityCriteria: [
        'Age above 18 years', 
        'At least 8th standard pass for project above 10 Lakhs', 
        'Rural and urban areas'
      ],
      fundingAmount: '₹5,00,000 - ₹50,00,000',
      applicationDeadline: '2026-12-15',
      sector: 'Micro Enterprise'
    },
    {
      _id: 'g2',
      schemeName: 'Agricultural Clinic & Business Scheme (ACABC)',
      description: 'Financial support for rural agriculture extension ventures, focusing on soil testing, tech advisory, and cold chain services.',
      eligibilityCriteria: [
        'Degree/Diploma in Agriculture', 
        'Rural setup focus', 
        'Ages 18-50'
      ],
      fundingAmount: '₹20,00,000',
      applicationDeadline: '2026-11-30',
      sector: 'Agriculture & Allied'
    },
    {
      _id: 'g3',
      schemeName: 'Pradhan Mantri Mudra Yojana (Kishor)',
      description: 'Designed specifically for entrepreneurs who have started their business and are looking to expand their operations and buy equipment.',
      eligibilityCriteria: [
        'Existing business operational for 1+ years', 
        'No previous loan defaults', 
        'Valid business registration/Udyam'
      ],
      fundingAmount: '₹50,000 - ₹5,00,000',
      applicationDeadline: '2027-03-31',
      sector: 'General / Retail'
    },
    {
      _id: 'g4',
      schemeName: 'Rural Women Entrepreneurship Micro-Grant',
      description: 'State-sponsored seed funding to encourage women in rural clusters to set up handicraft, textile, and food processing units.',
      eligibilityCriteria: [
        'Women-led enterprise (51%+ ownership)', 
        'Must be part of a local SHG', 
        'Focus on local employment'
      ],
      fundingAmount: '₹2,50,000',
      applicationDeadline: '2026-10-25',
      sector: 'Women-Led / Handicrafts'
    }
  ]);

  return (
    <div className="pb-10 animate-in fade-in duration-500">
      {/* Page Heading & Filters Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[#c2410c] text-xs font-bold tracking-wider uppercase">Financial Support</span>
          <h1 className="text-3xl font-extrabold text-[#1e3a2b] tracking-tight mt-1 flex items-center gap-2.5">
            Discover Micro-Grants <Award className="text-[#15803d] h-8 w-8" />
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Explore, bookmark, and apply to government programs and private grants tailored for rural and small-scale businesses.
          </p>
        </div>

        <button className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-[#e8ded1] bg-white text-sm font-semibold text-[#1e3a2b] rounded-xl hover:bg-gray-50 transition shadow-sm self-start md:self-auto">
          <SlidersHorizontal className="w-4 h-4 text-gray-500" /> Filter Options
        </button>
      </div>

      {/* Active Grants Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {grants.map((grant) => {
          // Check if deadline is within 30 days for urgent styling
          const deadlineDate = new Date(grant.applicationDeadline);
          const isUrgent = (deadlineDate - new Date()) / (1000 * 60 * 60 * 24) <= 30;

          return (
            <div key={grant._id} className="relative bg-white border border-[#eae2d5] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden">
              {/* Corner visual embellishment */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#15803d]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold bg-[#15803d]/10 text-[#15803d] rounded-lg tracking-wide uppercase">
                    {grant.sector}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md ${
                    isUrgent ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-gray-50 text-gray-600 border border-gray-100'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" /> 
                    {isUrgent ? 'Closing Soon: ' : 'Apply by '} 
                    {deadlineDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#15803d] transition-colors leading-tight">
                  {grant.schemeName}
                </h2>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {grant.description}
                </p>
                
                {/* Requirements Layout */}
                <div className="mt-5 pt-4 border-t border-dashed border-[#eae2d5]">
                  <h4 className="text-[11px] font-bold text-[#7c2d12] uppercase tracking-wider mb-3">Key Requirements</h4>
                  <ul className="space-y-2">
                    {grant.eligibilityCriteria.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Call to Action & Funding Amount */}
              <div className="mt-6 pt-5 border-t border-[#f3efe8] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Max Funding</span>
                  <span className="text-xl font-black text-[#1e3a2b] flex items-center gap-1">
                    <CircleDollarSign className="w-5 h-5 text-[#15803d]" />
                    {grant.fundingAmount}
                  </span>
                </div>
                <button className="px-5 py-2.5 bg-[#1e3a2b] hover:bg-[#15803d] text-white font-bold text-sm rounded-xl transition shadow-sm hover:shadow active:scale-95 flex items-center gap-2">
                  View & Apply <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}