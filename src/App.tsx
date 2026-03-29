/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MapPin, 
  ShieldCheck, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  Navigation, 
  Calendar, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  Mountain,
  Sun,
  Snowflake,
  GraduationCap,
  Compass,
  Heart,
  Camera,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Quote,
  Send
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { Routes, Route, Link, useLocation } from 'react-router-dom';
import FAQ from './FAQ';
import Safety from './Safety';
import Contact from './Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden p-10 md:p-14"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-slate-300 hover:text-navy transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-navy text-3xl font-black tracking-tight">교육 상담 신청</h2>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('상담 신청이 완료되었습니다.'); onClose(); }}>
              <div>
                <input
                  type="text"
                  placeholder="성함"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="연락처"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="문의 내용을 적어주세요."
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-xl p-4 text-navy font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-navy/5 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-navy/90 transition-all shadow-lg mt-6"
              >
                상담 보내기 <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<null | 'summer' | 'winter'>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'WHY', href: '#about' },
    { name: 'EXPLORE', href: '#locations' },
    { name: 'PARTICIPANTS', href: '#participants' },
    { name: 'SAFETY', href: '/safety' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-md py-2' : 'bg-navy/90 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <GraduationCap className="text-navy" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-tight leading-none">WSL — WILLIAM'S SCHOOL OF LANGUAGES</span>
              <span className="text-blue-300 text-[10px] font-bold tracking-wider">ENGLISH TRAVEL ABROAD PROGRAM</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => {
                    if (link.name === 'HOME' && window.location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-white text-xs font-bold hover:text-wsl-orange transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    if (link.name === 'CONTACT') {
                      e.preventDefault();
                      setIsContactModalOpen(true);
                    }
                  }}
                  className="text-white text-xs font-bold hover:text-wsl-orange transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-wsl-orange text-white px-5 py-2 rounded text-xs font-black hover:brightness-110 transition-all"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-white font-black text-2xl"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.name === 'HOME' && window.location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white font-black text-2xl"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (link.name === 'CONTACT') {
                      e.preventDefault();
                      setIsContactModalOpen(true);
                    }
                  }}
                >
                  {link.name}
                </a>
              )
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsContactModalOpen(true);
              }}
              className="bg-wsl-orange text-white px-10 py-4 rounded font-black text-xl"
            >
              BOOK NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Flyer Inspired Design */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-navy pt-16">
        {/* Background: Las Vegas Night View */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=1920" 
            alt="Las Vegas Night" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent"></div>
        </div>

        {/* Right Side: Orange Curve & Students */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 z-10 pointer-events-none">
          {/* Orange Curve Shape */}
          <div 
            className="absolute inset-0 bg-wsl-orange hidden lg:block"
            style={{ 
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 15% 100%, 40% 50%)',
              opacity: 0.95
            }}
          ></div>
          
          {/* Students Image Overlay */}
          <div className="absolute bottom-0 right-0 w-full h-3/4 flex items-end justify-end p-12">
            <motion.img 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800" 
              alt="Students" 
              className="max-h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Floating Paper Plane Animation */}
        <motion.div 
          animate={{ 
            x: [0, 100, 200, 300], 
            y: [0, -50, -20, -100],
            rotate: [0, -10, 10, -20]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/2 z-20 text-wsl-orange opacity-80 hidden md:block"
        >
          <Send size={40} className="rotate-45" />
          <div className="absolute top-10 left-0 w-40 h-20 border-t-2 border-dashed border-wsl-orange/30 rounded-full -rotate-12"></div>
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Institution Name Tag */}
            <div className="inline-block bg-wsl-orange px-6 py-2 rounded-md mb-8 shadow-lg">
              <span className="text-white font-black text-sm md:text-lg tracking-wider uppercase">
                WILLIAM'S SCHOOL OF LANGUAGES
              </span>
            </div>

            {/* Main Bilingual Title */}
            <div className="space-y-2 mb-8">
              <h1 className="text-white text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase">
                ENGLISH<br />
                TRAVEL ABROAD<br />
                PROGRAM
              </h1>
              <div className="h-2 w-32 bg-wsl-orange"></div>
              <h2 className="text-blue-100 text-2xl md:text-4xl font-bold tracking-tight">
                미국 어학연수 프로그램
              </h2>
            </div>

            {/* Slogan */}
            <div className="flex flex-col gap-2">
              <p className="text-white/90 text-xl md:text-2xl font-medium italic">
                "Where language meets culture"
              </p>
              <p className="text-wsl-orange text-lg font-bold">
                언어와 문화가 만나는 곳
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white text-navy px-10 py-4 rounded-full font-black text-lg shadow-xl hover:bg-wsl-orange hover:text-white transition-all flex items-center gap-3"
              >
                BOOK NOW / 지금 예약하기 <ArrowRight size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4 text-white/50">
          <div className="w-12 h-px bg-white/30"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll Down</span>
        </div>
      </section>

      {/* Why WSL? Section - Professional Editorial Style */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-wsl-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Core Excellence / 핵심 가치</span>
              <h2 className="text-navy text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                WHY CHOOSE <br /><span className="text-slate-200">OUR PROGRAM?</span>
              </h2>
              <h3 className="text-navy/40 text-2xl md:text-3xl font-bold mt-4 uppercase">왜 WSL 프로그램을 선택해야 할까요?</h3>
            </div>
            <div className="w-32 h-2 bg-wsl-orange hidden lg:block mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { 
                icon: <Compass size={36} />, 
                title: "Expert Guides",
                titleKo: "전문 가이드",
                desc: "10 years of excellence since 2017. Our bilingual instructors provide personalized attention in real-world settings.",
                descKo: "2017년부터 시작된 10년의 노하우. 이중 언어 강사진이 실전 환경에서 개별 맞춤 교육을 제공합니다.",
                num: "01",
                color: "text-wsl-orange",
                bgColor: "group-hover:bg-wsl-orange"
              },
              { 
                icon: <ShieldCheck size={36} />, 
                title: "Safety & Care",
                titleKo: "안전 및 케어",
                desc: "Your safety is our priority. We provide 24/7 supervision and carefully selected accommodations for peace of mind.",
                descKo: "여러분의 안전이 최우선입니다. 24시간 밀착 관리와 엄선된 숙소를 통해 안심할 수 있는 환경을 제공합니다.",
                num: "02",
                color: "text-blue-600",
                bgColor: "group-hover:bg-blue-600"
              },
              { 
                icon: <Globe size={36} />, 
                title: "Authentic Culture",
                titleKo: "생생한 문화 체험",
                desc: "Go beyond textbooks. Immerse yourself in American culture through curated local experiences and daily excursions.",
                descKo: "교과서를 넘어선 경험. 엄선된 로컬 체험과 일일 탐방을 통해 미국 문화에 깊이 몰입해 보세요.",
                num: "03",
                color: "text-emerald-600",
                bgColor: "group-hover:bg-emerald-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-gray-100 font-black text-[10rem] absolute -top-16 -left-8 z-0 transition-colors group-hover:text-orange-50 select-none leading-none opacity-50">
                  {item.num}
                </div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-navy text-white rounded-2xl flex items-center justify-center mb-10 shadow-2xl transition-all duration-500 transform group-hover:-rotate-12 ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-black uppercase mb-1 tracking-tight ${item.color}`}>{item.title}</h3>
                  <h4 className="text-navy/60 text-lg font-bold mb-6">{item.titleKo}</h4>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium mb-4">
                    {item.desc}
                  </p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                    {item.descKo}
                  </p>
                  {item.title === "Safety & Care" && (
                    <Link 
                      to="/safety" 
                      className="inline-flex items-center gap-2 text-navy font-black text-xs uppercase tracking-widest hover:text-wsl-orange transition-colors"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Seasonal Destinations - Editorial Layout */}
      <section id="locations" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <span className="text-wsl-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Seasonal Journeys / 시즌별 여정</span>
              <h2 className="text-navy text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                EXPLORE <br /><span className="text-slate-300">DESTINATIONS</span>
              </h2>
              <h3 className="text-navy/40 text-2xl md:text-3xl font-bold mt-4 uppercase">시즌별 목적지 탐험</h3>
            </div>
            <p className="text-slate-500 max-w-md text-lg font-medium leading-relaxed">
              We offer unique programs tailored to the best experiences each season has to offer in the United States.<br />
              <span className="text-sm text-slate-400">미국의 각 계절이 제공하는 최고의 경험을 위해 맞춤화된 특별한 프로그램을 제공합니다.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Summer Card */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group bg-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                alt="Summer in Canyon" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
              <div className="absolute top-10 left-10 bg-wsl-orange text-white px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-lg">
                Summer Season
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-white text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight leading-none">CANYON<br />ADVENTURE</h3>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {["Grand Canyon", "Red Rock Canyon", "Joshua Tree", "Zion Park"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-white/90 font-bold text-sm">
                      <div className="w-2 h-2 bg-wsl-orange rounded-full"></div> {item}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProgram('summer')}
                  className="w-full bg-white text-navy py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-wsl-orange hover:text-white transition-all duration-500 shadow-xl"
                >
                  View Program Details
                </button>
              </div>
            </motion.div>

            {/* Winter Card */}
            <motion.div 
              whileHover={{ y: -15 }}
              className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group bg-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200" 
                alt="Winter in San Francisco" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent"></div>
              <div className="absolute top-10 left-10 bg-navy text-white px-8 py-3 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-lg">
                Winter Season
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-white text-4xl md:text-5xl font-black uppercase mb-8 tracking-tight leading-none">CITY &<br />SNOW ADVENTURE</h3>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {["San Francisco", "Lake Tahoe", "Silicon Valley", "Yosemite"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-white/90 font-bold text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div> {item}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProgram('winter')}
                  className="w-full bg-white text-navy py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-500 shadow-xl"
                >
                  View Program Details
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For All Ages Section */}
      <section id="participants" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-wsl-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Inclusive Learning / 모두를 위한 교육</span>
            <h2 className="text-navy text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">FOR ALL AGES</h2>
            <h3 className="text-navy/40 text-2xl font-bold uppercase">모든 연령대를 위한 프로그램</h3>
            <p className="text-slate-500 font-bold mt-6 max-w-xl mx-auto">Adaptable for middle & high school students, adults, and families.<br />중·고등학생, 성인, 그리고 가족 단위까지 모두 참여 가능합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <GraduationCap size={32} className="text-white" />, 
                title: "Middle & High School", 
                desc: "Korean students aged 12–18 seeking language immersion",
                bgColor: "bg-navy"
              },
              { 
                icon: <BookOpen size={32} className="text-white" />, 
                title: "Adult Learners", 
                desc: "English learners of all levels ready for new challenges",
                bgColor: "bg-orange-500"
              },
              { 
                icon: <Users size={32} className="text-white" />, 
                title: "Families", 
                desc: "Looking for meaningful short-term international experiences",
                bgColor: "bg-emerald-800"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50/50 p-12 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:bg-white border border-transparent hover:border-slate-100">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-8 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-navy mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-[240px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-wsl-orange font-black tracking-[0.4em] uppercase text-xs mb-6 block">Success Stories / 성공 사례</span>
            <h2 className="text-navy text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">TESTIMONIALS</h2>
            <h3 className="text-navy/40 text-2xl font-bold uppercase">수강 후기</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                name: "Sarah J.",
                role: "High School Student",
                text: "William's School of Languages was a life-changing experience. I gained so much confidence in my English and made lifelong friends."
              },
              {
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                name: "Marco R.",
                role: "Adult Learner",
                text: "The cultural immersion was incredible. Visiting the Grand Canyon while practicing English with expert guides was the highlight of my year."
              },
              {
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
                name: "Elena M.",
                role: "Parent",
                text: "Our family program was perfectly organized. The safety and care provided by WSL allowed us to focus on learning and exploring together."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-navy transition-all duration-500 shadow-xl hover:shadow-navy/20">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-wsl-orange shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <img src={item.img} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-navy group-hover:text-white font-black text-xl mb-1 transition-colors">{item.name}</h4>
                <p className="text-wsl-orange font-bold text-xs uppercase tracking-widest mb-6">{item.role}</p>
                <p className="text-slate-500 group-hover:text-slate-300 italic font-medium leading-relaxed transition-colors">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Logo & Slogan */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-navy font-black text-2xl tracking-tighter">WSL</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase">William's School of Languages</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">ENGLISH TRAVEL ABROAD PROGRAM</p>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-navy font-black text-sm uppercase tracking-widest">CONTACT</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <Phone size={16} className="text-wsl-orange" /> 702-979-2438
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <Mail size={16} className="text-wsl-orange" /> info@wslvegas.com
                  </div>
                  <div className="flex items-start gap-3 text-slate-600 font-bold text-sm">
                    <MapPin size={16} className="text-wsl-orange mt-1 flex-shrink-0" /> 
                    <span>3101 Spring Mountain Rd. Ste 1<br />Las Vegas NV 89102</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="mt-6 bg-navy text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-wsl-orange transition-all shadow-md"
                >
                  Request Consultation
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 mb-6">
                  <Facebook className="text-navy hover:text-wsl-orange cursor-pointer" size={20} />
                  <Twitter className="text-navy hover:text-wsl-orange cursor-pointer" size={20} />
                  <Instagram className="text-navy hover:text-wsl-orange cursor-pointer" size={20} />
                </div>
                <div className="space-y-2">
                  <Link to="/faq" className="block text-navy font-black text-sm uppercase hover:text-wsl-orange">F.A.Q.</Link>
                  <Link to="/contact" className="block text-navy font-black text-sm uppercase hover:text-wsl-orange">REGISTRATION</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-8 right-8 text-navy/20 hover:text-navy transition-colors z-20"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
                {/* Modal Sidebar/Image */}
                <div className={`w-full md:w-1/3 p-12 flex flex-col justify-between text-white ${selectedProgram === 'summer' ? 'bg-wsl-orange' : 'bg-navy'}`}>
                  <div>
                    <span className="font-black tracking-[0.3em] uppercase text-[10px] opacity-70 block mb-4">
                      {selectedProgram === 'summer' ? 'Summer Season' : 'Winter Season'}
                    </span>
                    <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">
                      {selectedProgram === 'summer' ? 'CANYON ADVENTURE' : 'CITY & SNOW'}
                    </h2>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-1 bg-white/30 mb-6"></div>
                    <p className="text-sm font-bold opacity-80 leading-relaxed">
                      {selectedProgram === 'summer' 
                        ? "Explore the majestic landscapes of the American Southwest." 
                        : "Experience the perfect blend of city culture and mountain nature."}
                    </p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-2/3 p-12 md:p-16 bg-white overflow-y-auto">
                  <div className="mb-12">
                    <h3 className="text-navy text-2xl font-black uppercase tracking-tight mb-2">Program Options</h3>
                    <div className="w-12 h-1 bg-wsl-orange"></div>
                  </div>

                  <div className="space-y-10">
                    {selectedProgram === 'summer' ? (
                      <>
                        <div className="group">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-wsl-orange/10 text-wsl-orange w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">01</span>
                            <h4 className="text-navy font-black text-xl uppercase tracking-tight">Option 1: Red Rock Canyon, Nevada</h4>
                          </div>
                          <p className="text-slate-500 font-medium leading-relaxed pl-14">
                            Located just 30 minutes outside of the Las Vegas Strip, this destination is perfect for a long day trip.
                          </p>
                        </div>
                        <div className="group">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-wsl-orange/10 text-wsl-orange w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">02</span>
                            <h4 className="text-navy font-black text-xl uppercase tracking-tight">Option 2: Joshua Tree, California</h4>
                          </div>
                          <p className="text-slate-500 font-medium leading-relaxed pl-14">
                            Only 3 hours south of Las Vegas is the perfect playground to explore rock formations and beautiful wildlife.
                          </p>
                        </div>
                        <div className="group">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-wsl-orange/10 text-wsl-orange w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">03</span>
                            <h4 className="text-navy font-black text-xl uppercase tracking-tight">Option 3: Grand Canyon, Arizona</h4>
                          </div>
                          <p className="text-slate-500 font-medium leading-relaxed pl-14">
                            Enjoy the incredible views from the South Rim. Take excursions in the canyon or enjoy from the edge.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="group">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-navy/10 text-navy w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">A</span>
                            <h4 className="text-navy font-black text-xl uppercase tracking-tight">Option A: San Francisco + Lake Tahoe</h4>
                          </div>
                          <ul className="text-slate-500 font-medium leading-relaxed pl-14 list-disc list-inside">
                            <li>Classic American city experience</li>
                            <li>Nature, mountains, and coastal scenery</li>
                          </ul>
                        </div>
                        <div className="group">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="bg-navy/10 text-navy w-10 h-10 rounded-full flex items-center justify-center font-black text-sm">B</span>
                            <h4 className="text-navy font-black text-xl uppercase tracking-tight">Option B: Salt Lake City + Mountain Region</h4>
                          </div>
                          <ul className="text-slate-500 font-medium leading-relaxed pl-14 list-disc list-inside">
                            <li>Snow activities and scenic mountain towns</li>
                            <li>Optional short extension to Las Vegas or San Francisco</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-16 pt-10 border-t border-slate-100 flex justify-end">
                    <button 
                      onClick={() => setSelectedProgram(null)}
                      className="bg-navy text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-wsl-orange transition-all shadow-lg"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
