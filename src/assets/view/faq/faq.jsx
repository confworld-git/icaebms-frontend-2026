import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Sparkles, UserCheck, PenTool, Wallet, Clock, Newspaper, Search, Gift, XCircle, Phone, Lightbulb, Upload, CheckCircle, DollarSign } from 'lucide-react';
import Hero from '../commonhero/common-hero';
const FAQPage = () => {
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const faqData = [
    {
      question: "What is ICAEBMS-2026?",
      answer: "The International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS-2026) is a premier event designed to bring together researchers, professionals, students and scholars from diverse fields.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "Who can attend the conference?",
      answer: "The conference is open to faculty members, academic scholars, students, industry professionals, and anyone interested in the fields of science, technology, engineering, education and social sciences.",
      icon: <UserCheck className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "How do I register for the conference?",
      answer: "You can register for ICAEBMS-2026 through our online registration portal. Choose your category, fill out the registration form, select your sessions and complete the payment process.",
      icon: <PenTool className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "What are the registration fees?",
      answer: "The registration fees vary based on the category and registration period. Detailed fee information is available on the Registration Page.",
      icon: <Wallet className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "Can I submit my paper for presentation?",
      answer: "Yes, you can submit your abstract or full paper through our submission portal. All submissions will be reviewed, and accepted papers will be presented at the conference.",
      icon: <Upload className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "Will my paper be published?",
      answer: "High-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals. Submit now",
      icon: <Newspaper className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "What is the review process for submitted papers?",
      answer: "All submitted papers will undergo a rigorous peer-review process conducted by experts in the respective fields. Reviewers will assess the originality, significance, and technical quality of the papers. Authors will be notified of the review results and any required revisions.",
      icon: <Search className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "What is included in the registration fee?",
      answer: "The registration fee includes access to all sessions and workshops, conference materials, refreshments and lunch during conference days, a certificate of participation and networking opportunities.",
      icon: <Gift className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Yes, cancellations made 50 Days Before Conference: 40% refundable. 30-40 Days Before Conference: 35% refundable. Less Than 30 Days Before Conference: No refunds will be issued.",
      icon: <XCircle className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "How do I contact the conference organizers?",
      answer: "For general inquiries, please email info@confworld.org. For registration-related queries info@icaebms.com. For sponsorship opportunities, reach out to collaboration@confworld.org",
      icon: <Phone className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "Will my presented paper be published?",
      answer: "Yes, high-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "How do I submit my paper for publication?",
      answer: "After presenting at the conference, you will receive detailed instructions on how to submit your paper for publication consideration in the indexed journals.",
      icon: <Upload className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "What is the review process for publication?",
      answer: "All submitted papers undergo a rigorous peer-review process by experts in the relevant field to ensure the quality and relevance of the research.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue"
    },
    {
      question: "Are there any additional fees for publication?",
      answer: "There may be additional fees for publication in certain journals. Detailed information will be provided after your paper is accepted for presentation at the conference.",
      icon: <DollarSign className="w-6 h-6" />,
      color: "orange"
    },
    {
      question: "When will I know if my paper is accepted for publication?",
      answer: "You will be notified about the acceptance of your paper for publication after the review process is complete, typically within 5 months post-conference.",
      icon: <Clock className="w-6 h-6" />,
      color: "blue"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='w-full'>
      <Hero
                    title="FAQs"
                    breadcrumbs={[{ label: "Home", link: "#" }]}
                    backgroundImage="/images/commonheroimages/commonhero16.webp"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
       

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 ${
                  faq.color === 'blue' ? 'border-blue-600' : 'border-orange-500'
                } ${openIndex === index ? 'ring-2 ring-blue-300' : ''}`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center flex-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                      faq.color === 'blue' ? 'from-blue-600 to-blue-700' : 'from-orange-500 to-orange-600'
                    } flex items-center justify-center text-white mr-4 flex-shrink-0 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-12 scale-110' : ''
                    }`}>
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`text-lg font-bold ${
                        faq.color === 'blue' ? 'text-blue-600' : 'text-orange-500'
                      }`}>
                        {faq.question}
                      </span>
                      
                    </div>
                  </div>
                  <div className={`ml-4 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className={`w-6 h-6 ${
                        faq.color === 'blue' ? 'text-blue-600' : 'text-orange-500'
                      }`} />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Answer Section */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className={`p-6 pt-0 ml-16 border-t ${
                    faq.color === 'blue' ? 'border-blue-100' : 'border-orange-100'
                  }`}>
                    <div className={`mt-4 p-4 rounded-lg ${
                      faq.color === 'blue' ? 'bg-blue-50' : 'bg-orange-50'
                    }`}>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        
      </div>
    </div>
    </section>
    
  );
};

export default FAQPage;