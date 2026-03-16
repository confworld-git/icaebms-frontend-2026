import { useState } from "react";
import { 
  Users, 
  Globe, 
  BookOpen, 
  Mic, 
  Settings, 
  Share2, 
  Award, 
  GraduationCap,
} from 'lucide-react';

export default function WhyJoin() {
  return (
    <div className="min-h-screen ">
          <div className="w-full px-4 py-3">
           
            
    
            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-4">
                  
                  <h3 className="text-4xl font-bold mb-6">Why Join Us?</h3>
                  <p className="text-xl mb-4 text-blue-50 max-w-4xl mx-auto leading-relaxed">
                    The International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026) is more than just an academic event, it's a global platform for innovation, collaboration and growth.
                  </p>
                </div>
    
                <div className="">
                  <h4 className="text-2xl font-bold mb-8 text-center">Benefits of Joining ICAEBMS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Mic className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Present Your Research</h5>
                      <p className="text-sm text-blue-50">Share your ideas, findings and innovations with a global audience.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Get Published</h5>
                      <p className="text-sm text-blue-50">Opportunities to publish in reputed journals with high impact factor and indexed conference proceedings.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Learn from Experts</h5>
                      <p className="text-sm text-blue-50">Gain insights from keynote addresses, workshops and panel discussions by leading scholars and professionals.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Expand Your Network</h5>
                      <p className="text-sm text-blue-50">Connect with academicians, industry leaders, policymakers and fellow researchers worldwide.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Interdisciplinary Exposure</h5>
                      <p className="text-sm text-blue-50">Explore diverse perspectives by engaging with multiple fields of study.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Award className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Recognition & Awards</h5>
                      <p className="text-sm text-blue-50">Compete for Best Paper and Best Presentation awards.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Global Visibility</h5>
                      <p className="text-sm text-blue-50">Enhance your academic profile and contribute to international collaborations.</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                        <Settings className="w-6 h-6" />
                      </div>
                      <h5 className="font-bold mb-2">Empower the Future</h5>
                      <p className="text-sm text-blue-50">Inspire and be inspired by young researchers, innovators and thought leaders.</p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
  );
}
