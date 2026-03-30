import { 
  GraduationCap, 
  ArrowLeft, 
  Handshake,
  School,
  Building2,
  Library,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function MOU() {
  const partnerships = [
      {
      title: "Liahona Preparatory Academy",
      titleKr: "리아호나 프리페어트리 아카데미 협약 (MOU)",
      desc: "Liahona Preparatory Academy is a prestigious private school in Pleasant Grove, Utah. Our exclusive partnership allows students to experience their unique curriculum and vibrant campus life directly.",
      descKr: (
        <>
          유타주 플레전트 그로브에 위치한 <span className="text-blue-600 font-bold">리아호나 프리페어트리 아카데미</span>는 독특하고 우수한 교육 과정을 제공하는 <span className="text-blue-600 font-bold">명문 사립학교</span>입니다. JSL과의 독점 협약을 통해 학생들은 현지 학생들과 함께 공부하며 생생한 미국 학교 생활을 경험할 수 있습니다.
        </>
      ),
      icon: <School className="text-jsl-orange" size={40} />,
      tags: ["Private Education", "Utah, USA", "Direct Enrollment"],
      website: "https://www.liahonaeducation.com/"
    },
    {
      title: "US Middle & High Schools",
      titleKr: "미국 우수 중·고등학교 협약",
      desc: "We maintain strong partnerships with top-tier private and public middle and high schools across Nevada and California, providing students with authentic classroom experiences.",
      descKr: "네바다와 캘리포니아 전역의 우수 사립 및 공립 중·고등학교와 강력한 파트너십을 유지하며, 학생들에게 실제 미국 교실 경험을 제공합니다.",
      icon: <School className="text-jsl-orange" size={40} />,
      tags: ["Classroom Immersion", "Student Exchange", "Cultural Integration"],
      website: undefined
    },
    {
      title: "Prestigious Universities",
      titleKr: "미국 명문 대학교 협약",
      desc: "Our collaboration with leading universities allows our students to explore campus life, attend workshops, and gain insights into higher education in the United States.",
      descKr: "주요 명문 대학교와의 협력을 통해 학생들은 캠퍼스 생활을 체험하고, 워크숍에 참여하며, 미국의 고등 교육에 대한 통찰력을 얻을 수 있습니다.",
      icon: <Library className="text-jsl-orange" size={40} />,
      tags: ["Campus Tours", "Academic Workshops", "University Pathways"],
      website: undefined
    },
    {
      title: "Specialized Institutions",
      titleKr: "전문 교육 기관 협약",
      desc: "We partner with specialized language and vocational institutions to provide diverse learning opportunities beyond traditional academic settings.",
      descKr: "전문 어학 및 직업 교육 기관과 파트너십을 맺어 전통적인 학업 환경을 넘어선 다양한 학습 기회를 제공합니다.",
      icon: <Building2 className="text-jsl-orange" size={40} />,
      tags: ["Vocational Training", "Language Research", "Global Networking"],
      website: undefined
    }
  ];

  const ceremonyImages = [
    {
      url: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
      caption: "Official MOU Signing Ceremony",
      captionKr: "공식 MOU 체결 및 악수"
    },
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      caption: "Partnership Discussion",
      captionKr: "파트너십 세부 협의"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      caption: "Global Education Network",
      captionKr: "글로벌 교육 네트워크 구축"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      caption: "International Collaboration",
      captionKr: "국제 교육 협력 강화"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      caption: "Institutional Agreement",
      captionKr: "기관 간 상호 협력 협약"
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      caption: "Strategic Partnership",
      captionKr: "전략적 파트너십 미팅"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-navy py-3 sticky top-0 z-50 shadow-lg">
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
      <section className="relative py-12 md:py-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
            alt="Campus" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-jsl-orange/20 text-jsl-orange px-4 py-2 rounded-full mb-8 border border-jsl-orange/30">
              <Handshake size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Global Network</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
              GLOBAL <br />
              <span className="text-jsl-orange">PARTNERS</span>
            </h1>
            <p className="text-blue-200 font-bold text-xl uppercase tracking-[0.3em] mb-8">
              미국 명문 교육 기관과의 공식 협력
            </p>
            <div className="w-32 h-2 bg-jsl-orange mb-10"></div>
            <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl">
              James's School of Languages는 미국 현지의 다양한 교육 기관과 공식적인 MOU(업무협약)를 체결하여 
              학생들에게 더욱 풍부하고 전문적인 교육 환경을 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOU Sections - Text Centric Layout */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-slate-100 hover:border-jsl-orange/30 transition-all hover:shadow-xl group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
                      {item.tags.map(tag => (
                        <span key={tag} className="bg-navy/5 text-navy px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-navy text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <h3 className="text-jsl-orange text-base font-bold uppercase tracking-widest">
                      {item.titleKr}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-jsl-orange/20 rounded-full"></div>
                      <p className="text-slate-600 text-base font-medium leading-relaxed pl-4">
                        {item.desc}
                      </p>
                    </div>
                    <div className="bg-white/50 p-5 rounded-2xl border border-slate-100">
                      <div className="text-slate-800 text-sm font-medium leading-relaxed italic">
                        {item.descKr}
                      </div>
                    </div>

                    {item.website && (
                      <div className="pt-2">
                        <a 
                          href={item.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-jsl-orange text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg group/btn"
                        >
                          <ArrowLeft size={16} className="rotate-180 group-hover/btn:translate-x-2 transition-transform" />
                          VISIT WEBSITE
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-4">
                      {["Official MOU", "Verified"].map(feature => (
                        <div key={feature} className="flex items-center gap-2 text-navy font-black text-[9px] uppercase tracking-widest">
                          <CheckCircle2 className="text-jsl-orange" size={12} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signing Ceremony Gallery */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-jsl-orange font-black tracking-[0.4em] uppercase text-xs mb-4 block">MOU Ceremony / 협약 체결 현장</span>
            <h2 className="text-navy text-5xl font-black tracking-tighter uppercase leading-none mb-4">SIGNING CEREMONY</h2>
            <div className="w-24 h-1.5 bg-jsl-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceremonyImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl mb-6 aspect-[4/5]">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-navy/80 to-transparent">
                    <div className="text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest text-jsl-orange mb-1">Ceremony {idx + 1}</p>
                      <h4 className="font-black text-sm uppercase leading-tight">{img.caption}</h4>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left px-2">
                  <h4 className="text-navy font-black text-base uppercase tracking-tight mb-1">{img.caption}</h4>
                  <p className="text-jsl-orange font-bold text-xs">{img.captionKr}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920" 
            alt="Collaboration" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            TRUSTED BY <br />
            <span className="text-jsl-orange">GLOBAL INSTITUTIONS</span>
          </h2>
          <p className="text-blue-100 text-lg font-medium leading-relaxed mb-12">
            JSL은 검증된 파트너십을 통해 학생들에게 가장 안전하고 전문적인 미국 연수 경험을 보장합니다. 
            우리의 네트워크는 매년 확장되고 있으며, 더 많은 기회를 창출하고 있습니다.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-white text-navy px-10 py-4 rounded-full font-black text-lg shadow-xl hover:bg-jsl-orange hover:text-white transition-all"
          >
            PARTNERSHIP INQUIRY
          </Link>
        </div>
      </section>

      {/* Partner Logos Placeholder */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <School size={48} className="text-navy" />
            <Library size={48} className="text-navy" />
            <Building2 size={48} className="text-navy" />
            <GraduationCap size={48} className="text-navy" />
            <Handshake size={48} className="text-navy" />
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
