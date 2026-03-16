import React from 'react';
import { Users, FileText, AlertCircle, Star, CheckCircle, Award, DollarSign, Calendar } from 'lucide-react';

export default function ConferenceCards() {
  return (
    <div className="min-h-screen w-full px-4 py-6">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
        }
        .item-hover {
          transition: all 0.3s ease;
        }
        .item-hover:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>

      <div className="w-full space-y-8">
        {/* Group Discount Card */}
        <div className="card-hover relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-300/10 rounded-full blur-2xl pulse-glow"></div>
          
          <div className="relative p-10">
            <div className="flex items-center gap-4 mb-8 slide-in">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-2xl blur-xl"></div>
                <div className="relative p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-1">Group Discount</h1>
                <p className="text-emerald-100 text-md">Save more when you register together</p>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-transparent rounded-full mb-8 slide-in"></div>
            
            <div className="mb-6 slide-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-yellow-300" />
                <h2 className="text-xl text-white font-semibold">Eligibility Criteria</h2>
              </div>
              <p className="text-emerald-50 text-md">You qualify for a discounted registration fee if:</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.2s'}}>
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <p className="text-white">You are a group of <span className="font-bold text-yellow-200">5 members or more</span> individuals.</p>
              </div>
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.3s'}}>
                <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                <p className="text-white">You are a <span className="font-bold text-yellow-200">co-author</span> of a paper presentation.</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 p-6 shadow-xl slide-in" style={{animationDelay: '0.4s'}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold mb-2 text-lg">Special Offer for Large Groups</p>
                  <p className="text-amber-50 text-sm leading-relaxed">
                    If your group consists of more than <span className="font-semibold">10 members</span>, please reach out to our Academic Partnership Team to discuss a higher discount percentage on the registration fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Papers Card */}
        <div className="card-hover relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 shadow-2xl">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-300/10 rounded-full blur-2xl pulse-glow" style={{animationDelay: '1s'}}></div>
          
          <div className="relative p-10">
            <div className="flex items-center gap-4 mb-8 slide-in">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-400/30 rounded-2xl blur-xl"></div>
                <div className="relative p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-1">Multiple Paper Submissions</h1>
                <p className="text-indigo-100 text-md">Guidelines for presenting multiple papers</p>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-transparent rounded-full mb-8 slide-in"></div>
            
            <div className="space-y-3 mb-8">
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.1s'}}>
                <div className="p-2 bg-purple-400/30 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-200" />
                </div>
                <p className="text-white">An author may submit and present a maximum of <span className="font-bold text-purple-200">three papers</span> at the conference.</p>
              </div>
              
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.2s'}}>
                <div className="p-2 bg-indigo-400/30 rounded-lg">
                  <DollarSign className="w-5 h-5 text-indigo-200" />
                </div>
                <p className="text-white">If you are presenting more than one paper, <span className="font-bold text-indigo-200">full payment is required</span> for the first paper.</p>
              </div>
              
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.3s'}}>
                <div className="p-2 bg-violet-400/30 rounded-lg">
                  <DollarSign className="w-5 h-5 text-violet-200" />
                </div>
                <p className="text-white">Additional oral or poster presentations incur an <span className="font-bold text-violet-200">additional fee of $150 USD</span> for each paper.</p>
              </div>
              
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.4s'}}>
                <div className="p-2 bg-purple-400/30 rounded-lg">
                  <Award className="w-5 h-5 text-purple-200" />
                </div>
                <p className="text-white">If any paper requires Scopus publication, you must pay the <span className="font-bold text-purple-200">publication fee</span> for each paper.</p>
              </div>
              
              <div className="item-hover flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 slide-in" style={{animationDelay: '0.5s'}}>
                <div className="p-2 bg-pink-400/30 rounded-lg">
                  <Users className="w-5 h-5 text-pink-200" />
                </div>
                <p className="text-white">If you have more than 3 papers, additional papers can be presented by a <span className="font-bold text-pink-200">co-author on full registration</span>.</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 p-6 shadow-xl slide-in" style={{animationDelay: '0.6s'}}>
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold mb-2 text-lg">Important Deadline</p>
                  <p className="text-blue-50 text-md leading-relaxed">
                    Confirmation on the number of papers should be given to the Conference Coordinator <span className="font-semibold">3 weeks prior</span> to the final payment deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}