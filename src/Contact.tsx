import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
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

      <main className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-wsl-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Get in Touch / 문의하기</span>
              <h1 className="text-navy text-5xl font-black tracking-tighter uppercase leading-none mb-8">
                CONTACT US
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed mb-12">
                Have questions about our programs? We're here to help you plan your perfect language learning journey in the USA.
                <br />프로그램에 대해 궁금한 점이 있으신가요? 미국에서의 완벽한 어학 연수 여행을 계획하실 수 있도록 도와드리겠습니다.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    <Phone className="text-wsl-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy font-black text-sm uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-slate-600 font-bold text-lg">702-979-2438</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    <Mail className="text-wsl-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy font-black text-sm uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-slate-600 font-bold text-lg">info@wslvegas.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-wsl-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy font-black text-sm uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-slate-600 font-bold text-lg leading-tight">
                      3101 Spring Mountain Rd. Ste 1<br />Las Vegas NV 89102
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
            >
              <div className="mb-10">
                <h2 className="text-navy text-3xl font-black tracking-tight mb-2">교육 상담 신청</h2>
                <div className="w-12 h-1 bg-wsl-orange"></div>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-navy font-black text-2xl mb-2">신청 완료!</h3>
                  <p className="text-slate-500 font-medium">빠른 시일 내에 연락드리겠습니다.</p>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-navy font-black text-xs uppercase tracking-widest mb-2 ml-1">Name / 성함</label>
                    <input
                      type="text"
                      placeholder="성함을 입력해주세요"
                      className="w-full bg-gray-50 border-none rounded-2xl p-5 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-black text-xs uppercase tracking-widest mb-2 ml-1">Phone / 연락처</label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        className="w-full bg-gray-50 border-none rounded-2xl p-5 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-black text-xs uppercase tracking-widest mb-2 ml-1">Email / 이메일</label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full bg-gray-50 border-none rounded-2xl p-5 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-navy font-black text-xs uppercase tracking-widest mb-2 ml-1">Message / 문의 내용</label>
                    <textarea
                      placeholder="문의 내용을 적어주세요."
                      rows={5}
                      className="w-full bg-gray-50 border-none rounded-2xl p-5 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-wsl-orange transition-all shadow-lg mt-8 group"
                  >
                    상담 보내기 
                    <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer Simple */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 WSL — WILLIAM'S SCHOOL OF LANGUAGES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
