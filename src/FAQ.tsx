import { 
  GraduationCap, 
  ArrowLeft, 
  Plus, 
  Minus, 
  HelpCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "What is the age range for the WSL program?",
    questionKr: "WSL 프로그램의 참가 가능 연령대는 어떻게 되나요?",
    answer: "Our programs are primarily designed for middle and high school students (ages 12-18). However, we also offer specialized family programs and adult groups upon request.",
    answerKr: "저희 프로그램은 주로 중고등학생(12-18세)을 대상으로 설계되었습니다. 하지만 요청에 따라 특화된 가족 프로그램 및 성인 그룹 프로그램도 제공하고 있습니다."
  },
  {
    question: "Do I need a high level of English to participate?",
    questionKr: "참가하려면 높은 수준의 영어 실력이 필요한가요?",
    answer: "Not at all! We welcome students of all levels. Our immersive environment is designed to help you improve your English naturally through travel and daily interaction, regardless of your starting point.",
    answerKr: "전혀 그렇지 않습니다! 모든 수준의 학생들을 환영합니다. 저희의 몰입형 환경은 시작 지점과 상관없이 여행과 일상적인 상호작용을 통해 자연스럽게 영어 실력을 향상시킬 수 있도록 설계되었습니다."
  },
  {
    question: "How is safety managed during the trips?",
    questionKr: "여행 중 안전 관리는 어떻게 이루어지나요?",
    answer: "Safety is our #1 priority. We maintain a low student-to-staff ratio, use only certified transport, and our guides are trained in first aid. We also provide 24/7 emergency support for all participants.",
    answerKr: "안전은 저희의 최우선 과제입니다. 낮은 학생 대 직원 비율을 유지하고, 인증된 교통수단만을 사용하며, 가이드들은 응급처치 교육을 받았습니다. 또한 모든 참가자를 위해 24시간 비상 지원 서비스를 제공합니다."
  },
  {
    question: "What is included in the program fee?",
    questionKr: "프로그램 비용에는 무엇이 포함되어 있나요?",
    answer: "The fee typically includes all accommodations, local transportation, guided tours, English learning materials, and most meals. International airfare and personal spending money are usually separate.",
    answerKr: "비용에는 일반적으로 모든 숙박, 현지 교통, 가이드 투어, 영어 학습 교재 및 대부분의 식사가 포함됩니다. 국제선 항공권과 개인 용돈은 보통 별도입니다."
  },
  {
    question: "Can I choose between Summer and Winter programs?",
    questionKr: "여름과 겨울 프로그램 중 선택할 수 있나요?",
    answer: "Yes! We offer distinct experiences for both seasons. Summer focuses on national parks and outdoor adventures, while Winter combines city culture with snow activities like Lake Tahoe.",
    answerKr: "네! 두 시즌 모두 독특한 경험을 제공합니다. 여름은 국립공원과 야외 모험에 집중하며, 겨울은 도시 문화와 레이크 타호와 같은 눈 활동을 결합합니다."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-navy py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-navy" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-tight leading-none">WSL — WILLIAM'S SCHOOL OF LANGUAGES</span>
              <span className="text-blue-300 text-[10px] font-bold tracking-wider">ENGLISH TRAVEL ABROAD PROGRAM</span>
            </div>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white text-xs font-bold hover:text-wsl-orange transition-colors"
          >
            <ArrowLeft size={16} /> BACK TO HOME
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-wsl-orange/10 text-wsl-orange px-4 py-2 rounded-full mb-6">
              <HelpCircle size={18} />
              <span className="text-xs font-black uppercase tracking-widest">Support Center</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-navy tracking-tighter uppercase leading-none mb-6">
              FREQUENTLY ASKED <br />
              <span className="text-wsl-orange">QUESTIONS</span>
            </h1>
            <p className="text-slate-500 font-bold text-lg uppercase tracking-tight">
              자주 묻는 질문들 — 궁금한 점을 확인해보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-navy font-black text-lg uppercase tracking-tight mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-slate-400 font-bold text-xs uppercase">
                      {faq.questionKr}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-wsl-orange text-white' : 'bg-gray-100 text-navy'}`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 bg-gray-50/50">
                        <div className="w-12 h-1 bg-wsl-orange mb-6"></div>
                        <p className="text-slate-600 font-medium leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed italic">
                          {faq.answerKr}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
            Still Have Questions? <br />
            <span className="text-wsl-orange">Contact Us Today</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <Phone className="mx-auto mb-4 text-wsl-orange" size={32} />
              <p className="font-black text-lg">702-979-2438</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <Mail className="mx-auto mb-4 text-wsl-orange" size={32} />
              <p className="font-black text-lg">info@wslvegas.com</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <MapPin className="mx-auto mb-4 text-wsl-orange" size={32} />
              <p className="font-black text-sm">3101 Spring Mountain Rd.<br />Las Vegas NV 89102</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          © 2026 William's School of Languages. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
