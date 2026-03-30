import { 
  ShieldCheck, 
  ArrowLeft, 
  GraduationCap,
  CheckCircle2,
  Users,
  Clock,
  Heart,
  MessageSquare,
  Handshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Safety() {
  const safetyFeatures = [
    {
      icon: <Users className="text-jsl-orange" size={24} />,
      title: "Students are supervised at all times",
      desc: "모든 학생들은 항상 전문가의 감독 하에 안전하게 보호받습니다."
    },
    {
      icon: <Clock className="text-jsl-orange" size={24} />,
      title: "Clear daily schedules and expectations",
      desc: "명확한 일일 일정과 기대치를 통해 체계적인 활동이 이루어집니다."
    },
    {
      icon: <Handshake className="text-jsl-orange" size={24} />,
      title: "Trusted local U.S. partners and educators",
      desc: "신뢰할 수 있는 미국 현지 파트너 및 교육자들과 함께합니다."
    },
    {
      icon: <ShieldCheck className="text-jsl-orange" size={24} />,
      title: "Small group sizes",
      desc: "소규모 그룹 구성을 통해 개별 학생에게 더 깊은 관심과 케어를 제공합니다."
    },
    {
      icon: <Heart className="text-jsl-orange" size={24} />,
      title: "Focus on student well-being, safety, and support",
      desc: "학생의 웰빙, 안전, 그리고 정서적 지원을 최우선으로 생각합니다."
    },
    {
      icon: <MessageSquare className="text-jsl-orange" size={24} />,
      title: "Regular communication and updates",
      desc: "학부모님과 정기적인 소통을 통해 실시간 업데이트를 제공합니다."
    }
  ];

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
              <span className="text-white font-bold text-sm tracking-tight leading-none">JSL — JAMES'S SCHOOL OF LANGUAGES</span>
              <span className="text-blue-300 text-[10px] font-bold tracking-wider">ENGLISH TRAVEL ABROAD PROGRAM</span>
            </div>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white text-xs font-bold hover:text-jsl-orange transition-colors"
          >
            <ArrowLeft size={16} /> BACK TO HOME
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-jsl-orange/5 -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-jsl-orange -z-10 rounded-3xl"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/ssl-safety/800/600" 
                  alt="Students in snow" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-jsl-orange text-white p-8 rounded-3xl shadow-xl max-w-[240px] text-center transform rotate-3">
                <p className="font-black uppercase tracking-tighter text-xl leading-tight">
                  BOOK WITH US TO MAKE 2026 AMAZING!
                </p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-navy/5 text-navy px-4 py-2 rounded-full mb-6">
                <ShieldCheck size={18} className="text-jsl-orange" />
                <span className="text-xs font-black uppercase tracking-widest">Safety & Supervision</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-navy tracking-tighter uppercase leading-[0.8] mb-4">
                SAFETY, <br />
                SUPERVISION, <br />
                <span className="text-jsl-orange">AND CARE</span>
              </h1>

              <div className="space-y-5">
                {safetyFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-jsl-orange/10 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-navy font-black text-base md:text-lg uppercase tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 font-bold text-[11px] leading-snug mt-0.5">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-navy uppercase tracking-tighter mb-6">Our Commitment to You</h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
            JSL은 단순한 언어 교육을 넘어, 학생들이 낯선 환경에서도 안심하고 배움에 집중할 수 있도록 
            철저한 안전 관리 시스템을 구축하고 있습니다. 미국 현지의 전문 인력과 함께 24시간 밀착 케어를 제공하며, 
            모든 일정은 학생들의 안전을 최우선으로 설계되었습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <CheckCircle2 className="text-jsl-orange mb-4" size={32} />
              <h4 className="text-navy font-black uppercase mb-2">Emergency Response</h4>
              <p className="text-slate-500 text-sm font-medium">
                모든 인솔자는 응급처치 자격증을 보유하고 있으며, 현지 주요 의료기관과의 긴밀한 네트워크를 통해 비상 상황 발생 시 즉각적인 대응이 가능합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <CheckCircle2 className="text-jsl-orange mb-4" size={32} />
              <h4 className="text-navy font-black uppercase mb-2">Verified Transport</h4>
              <p className="text-slate-500 text-sm font-medium">
                모든 이동 수단은 정식 허가를 받은 안전한 차량만을 이용하며, 숙련된 전문 드라이버가 학생들의 이동을 책임집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          © 2026 James's School of Languages. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
