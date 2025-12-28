
import React, { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  REVENUE_PLAN, 
  COMPETITORS,
  OCCUPATIONAL_DETAILS,
  TEACHER_GOALS
} from './constants';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Cpu,
  Coffee,
  Zap,
  Globe,
  Rocket,
  ShieldCheck,
  Award,
  BarChart3,
  Monitor,
  Building2,
  Briefcase,
  Layers,
  Search,
  MessageSquare,
  Star,
  ArrowUpRight,
  UserPlus,
  BookOpen,
  Eye,
  Settings,
  PieChart
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 24));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slides = [
    // 1. Hero Title
    () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden slide-content-animate">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-blue-600/[0.04] rounded-full blur-[200px] -z-10"></div>
        <div className="flex items-center space-x-3 mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 shadow-2xl">
           <Zap size={16} className="text-blue-400" />
           <span className="text-blue-300 font-black tracking-[0.4em] text-[10px] uppercase">TIC Strategic Vision 2026</span>
        </div>
        <h1 className="text-6xl md:text-[7.5rem] font-black mb-8 leading-[0.85] tracking-tighter text-white text-shadow-strong">
          THE NEXT<br/>
          <span className="text-gradient">STANDARD</span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-slate-400 max-w-4xl leading-relaxed mb-16">
          기술적 우위를 넘어, <span className="text-white font-bold italic underline decoration-blue-500 underline-offset-4">성공의 표준</span>을 다시 정의합니다.
        </p>
        <div className="grid grid-cols-3 gap-12 md:gap-24 opacity-90">
           <div className="flex flex-col items-center"><span className="text-white font-black text-3xl md:text-5xl mb-2 tabular-nums tracking-tighter">23.8 억</span><span className="text-slate-500 text-[10px] font-black tracking-widest uppercase">Target Revenue</span></div>
           <div className="flex flex-col items-center"><span className="text-white font-black text-3xl md:text-5xl mb-2 tabular-nums tracking-tighter">7.1 억</span><span className="text-slate-500 text-[10px] font-black tracking-widest uppercase">Profit Goal</span></div>
           <div className="flex flex-col items-center"><span className="text-white font-black text-3xl md:text-5xl mb-2 tabular-nums tracking-tighter">2,432 명</span><span className="text-slate-500 text-[10px] font-black tracking-widest uppercase">Total Students</span></div>
        </div>
      </div>
    ),

    // 2. 매출 계획 총괄
    () => (
      <Slide title="매출 계획 총괄" subtitle="2025년 실적 대비 56% 성장을 목표로 카테고리별 전략적 배치" pageNumber={2}>
        <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                <th className="py-4 px-6">구분</th>
                <th className="py-4 px-6">총정원</th>
                <th className="py-4 px-6">모집률</th>
                <th className="py-4 px-6">2025 실적</th>
                <th className="py-4 px-6 text-blue-400">2026 목표 (만원)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {REVENUE_PLAN.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6 text-xl font-black text-white group-hover:text-blue-400">{row.category}</td>
                  <td className="py-4 px-6 text-lg text-slate-400">{row.capacity}명</td>
                  <td className="py-4 px-6 text-lg text-blue-300 font-black">{row.rate}</td>
                  <td className="py-4 px-6 text-lg text-slate-600 font-bold tabular-nums">{row.rev2025.toLocaleString()}</td>
                  <td className="py-4 px-6 text-2xl text-blue-400 font-black tabular-nums">{row.rev2026.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-blue-600/10">
                <td className="py-6 px-6 text-xl font-black text-white italic">TOTAL</td>
                <td className="py-6 px-6 text-lg text-blue-100 font-bold">4,414명</td>
                <td className="py-6 px-6 text-lg text-blue-100 font-bold">74%</td>
                <td className="py-6 px-6 text-lg text-slate-400 font-bold">152,999</td>
                <td className="py-6 px-6 text-4xl text-blue-400 font-black tabular-nums">238,410</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>
    ),

    // 3. 실습실 운영 인프라
    () => (
      <Slide title="실습실 운영 인프라" subtitle="분야별 최적화된 총 16개 실습 공간 가동" pageNumber={3}>
        <div className="grid grid-cols-2 gap-8 h-full items-center">
           <div className="space-y-6">
             <div className="p-8 glass-panel rounded-[2.5rem] border-l-[10px] border-blue-600 relative group">
               <div className="flex items-center space-x-6 mb-4">
                 <div className="p-4 bg-blue-600/20 rounded-xl text-blue-400"><Monitor size={48} /></div>
                 <h4 className="text-3xl font-black text-white tracking-tighter">IT 실습실 <span className="text-blue-400 text-4xl ml-2">11</span></h4>
               </div>
               <div className="flex flex-wrap gap-3 text-slate-400 font-bold text-sm">
                 <span className="px-3 py-1 bg-white/5 rounded-full">일반고 3</span>
                 <span className="px-3 py-1 bg-white/5 rounded-full">국기 4</span>
                 <span className="px-3 py-1 bg-white/5 rounded-full">계좌제 3</span>
                 <span className="px-3 py-1 bg-white/5 rounded-full">외부 1</span>
               </div>
             </div>
             <div className="p-8 glass-panel rounded-[2.5rem] border-l-[10px] border-indigo-600 relative group">
               <div className="flex items-center space-x-6 mb-4">
                 <div className="p-4 bg-indigo-600/20 rounded-xl text-indigo-400"><Coffee size={48} /></div>
                 <h4 className="text-3xl font-black text-white tracking-tighter">전문 실습실 <span className="text-indigo-400 text-4xl ml-2">05</span></h4>
               </div>
               <div className="flex flex-wrap gap-3 text-slate-400 font-bold text-sm">
                 <span className="px-3 py-1 bg-white/5 rounded-full">제과제빵 2</span>
                 <span className="px-3 py-1 bg-white/5 rounded-full">바리스타 2</span>
                 <span className="px-3 py-1 bg-white/5 rounded-full">미용 1</span>
               </div>
             </div>
           </div>
           <div className="p-12 bg-blue-600/5 rounded-[4rem] text-center border border-white/5">
              <Building2 size={80} className="text-blue-500 mx-auto mb-6 opacity-40" />
              <span className="text-blue-400 font-black text-sm tracking-[0.3em] uppercase mb-2 block">Regional Best</span>
              <h4 className="text-6xl font-black text-white mb-4">16 Rooms</h4>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">광산구 최대 규모의<br/>직업 교육 인프라 확보</p>
           </div>
        </div>
      </Slide>
    ),

    // 4. 직종별 목표 상세 (1/2)
    () => (
       <Slide title="직종별 목표 분석" subtitle="설계 및 디자인 부문의 핵심 성과 목표" pageNumber={4}>
          <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="py-4 px-6">직종명</th>
                  <th className="py-4 px-6">사업구분</th>
                  <th className="py-4 px-6">목표 모집</th>
                  <th className="py-4 px-6 text-blue-400">목표 매출 (만원)</th>
                  <th className="py-4 px-6">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {OCCUPATIONAL_DETAILS.slice(1, 7).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-lg font-black text-white">{row.name}</td>
                    <td className="py-4 px-6 text-sm text-slate-500 font-bold italic">{row.type}</td>
                    <td className="py-4 px-6 text-lg text-white font-bold">{row.count}명</td>
                    <td className="py-4 px-6 text-2xl text-blue-400 font-black tabular-nums">{row.revenue.toLocaleString()}</td>
                    <td className="py-4 px-6 text-xs text-slate-600 font-medium">{(row.revenue/10000).toFixed(1)} 억 규모</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </Slide>
    ),

    // 5. 직종별 목표 상세 (2/2)
    () => (
       <Slide title="직종별 목표 분석" subtitle="회계, 사무 및 F&B 부문 성과 목표" pageNumber={5}>
          <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="py-4 px-6">직종명</th>
                  <th className="py-4 px-6">사업구분</th>
                  <th className="py-4 px-6">목표 모집</th>
                  <th className="py-4 px-6 text-blue-400">목표 매출 (만원)</th>
                  <th className="py-4 px-6">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {OCCUPATIONAL_DETAILS.slice(7).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-lg font-black text-white">{row.name}</td>
                    <td className="py-4 px-6 text-sm text-slate-500 font-bold italic">{row.type}</td>
                    <td className="py-4 px-6 text-lg text-white font-bold">{row.count}명</td>
                    <td className="py-4 px-6 text-2xl text-blue-400 font-black tabular-nums">{row.revenue.toLocaleString()}</td>
                    <td className="py-4 px-6 text-xs text-slate-600 font-medium">{(row.revenue/10000).toFixed(1)} 억 규모</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </Slide>
    ),

    // 6. 운영 계획 - 일반고
    () => (
      <Slide title="일반고 과정 운영 전략" subtitle="전담 강사진 배치를 통한 고품질 관리 체계 확립" pageNumber={6}>
        <div className="grid grid-cols-2 gap-8 h-full items-center">
           <div className="space-y-4">
              {[
                { field: "전담 관리", text: "신혜정(총괄), 김단미, 박신희, 강연우 배치", icon: <ShieldCheck size={18}/> },
                { field: "교육 과정", text: "ERP, 건축설계, 멀티미디어 등 실무 6개 과정", icon: <Layers size={18}/> },
                { field: "운영 목표", text: "120명 모집 및 중도탈락률 5% 미만 유지", icon: <Target size={18}/> },
                { field: "대외 협력", text: "광주/전남 20개 거점 고교 파트너십 강화", icon: <Globe size={18}/> }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-panel rounded-2xl border-l-[6px] border-blue-500 group hover:bg-blue-600/5 transition-colors">
                  <div className="flex items-center space-x-3 mb-2 text-blue-400">
                    {item.icon}
                    <h5 className="text-xs font-black uppercase tracking-widest">{item.field}</h5>
                  </div>
                  <p className="text-lg text-slate-300 font-medium leading-tight">{item.text}</p>
                </div>
              ))}
           </div>
           <div className="p-12 glass-panel rounded-[3rem] text-center border-none flex flex-col items-center justify-center">
              <UserPlus size={80} className="text-blue-500 mb-6" />
              <span className="text-slate-500 font-black text-sm mb-2 tracking-[0.3em] uppercase">Recruitment Goal</span>
              <h4 className="text-8xl font-black text-white mb-4">120</h4>
              <p className="text-2xl text-blue-400 font-black italic">Active Students</p>
           </div>
        </div>
      </Slide>
    ),

    // 7. 운영 계획 - 국기
    () => (
      <Slide title="국가기초 과정 고도화" subtitle="4개 핵심 전략 직종 중심의 취업 성과 창출" pageNumber={7}>
        <div className="grid grid-cols-2 gap-8 h-full items-center">
           <div className="grid grid-cols-2 gap-6">
              {[
                { t: "물류회계", v: "염숙", d: "ERP 융합" },
                { t: "BIM 설계", v: "강기환", d: "3D 통합" },
                { t: "실내건축", v: "최규남", d: "실무 중심" },
                { t: "XR 개발", v: "김종수", d: "미래 기술" }
              ].map((item, i) => (
                <div key={i} className="p-8 glass-panel rounded-2xl text-center border border-white/5">
                  <h6 className="text-blue-400 font-black text-xl mb-1">{item.t}</h6>
                  <p className="text-white font-bold text-base mb-1">{item.v} 강사</p>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{item.d}</span>
                </div>
              ))}
           </div>
           <div className="p-10 glass-panel rounded-[3rem] space-y-6 shadow-xl relative overflow-hidden">
              <h5 className="text-2xl font-black text-white border-b border-white/10 pb-4 italic">Core KPI</h5>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-400 font-medium">모집 목표</span><span className="text-2xl text-white font-black">140명</span></div>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-400 font-medium">취업률 목표</span><span className="text-3xl text-blue-400 font-black">70% <span className="text-base">↑</span></span></div>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-400 font-medium">수강 만족도</span><span className="text-2xl text-indigo-400 font-black">4.8 / 5.0</span></div>
           </div>
        </div>
      </Slide>
    ),

    // 8. 운영 계획 - 외부사업
    () => (
      <Slide title="외부사업 파트너십 강화" subtitle="기관 협업을 통한 수익 모델 다각화 전략" pageNumber={8}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="space-y-4">
              {[
                { t: "새일센터 협력", d: "광산/서구/장성 센터 기반 연계" },
                { t: "광주권 대학 연계", d: "호남대, 광주여대, RISE 사업 등" },
                { t: "특화 인재 사업", d: "청년드림수당 등 지자체 사업" }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-panel rounded-2xl border border-white/5">
                   <h6 className="text-xl font-black text-blue-400 mb-1">{item.t}</h6>
                   <p className="text-base text-slate-400 font-medium">{item.d}</p>
                </div>
              ))}
           </div>
           <div className="text-center p-16 bg-blue-900/10 rounded-[4rem] shadow-lg">
              <p className="text-blue-400 font-black text-xl mb-4 tracking-[0.4em] uppercase">Target Revenue</p>
              <h4 className="text-8xl font-black text-white leading-none mb-6">1.0 억</h4>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-500 font-black italic">Business Lead: <span className="text-white">이영규 강사</span></p>
           </div>
        </div>
      </Slide>
    ),

    // 9. 채용 및 승진
    () => (
      <Slide title="인적 자원 고도화" subtitle="책임 경영 및 전문성 강화를 위한 조직 리뉴얼" pageNumber={9}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 glass-panel rounded-[3rem] border-l-[10px] border-emerald-500 shadow-lg">
              <h5 className="text-2xl font-black text-white mb-6 italic text-emerald-400">책임 관리자 선임</h5>
              <ul className="space-y-4 text-xl text-slate-300 font-black">
                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-3 text-emerald-500"/> 박한별 주임 선임</li>
                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-3 text-emerald-500"/> 신혜정, 이자영 주임 선임</li>
                 <li className="flex items-center"><UserPlus size={20} className="mr-3 text-blue-500"/> 핵심강사 3인 신규 영입</li>
              </ul>
           </div>
           <div className="p-10 glass-panel rounded-[3rem] border-l-[10px] border-blue-500">
              <h5 className="text-2xl font-black text-white mb-8 italic">TIC Organization <span className="text-blue-400 text-3xl ml-2">19</span></h5>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { p: "학교장", c: "1명" }, { p: "팀장", c: "1명" },
                   { p: "주임", c: "1명" }, { p: "사원", c: "11명" }
                 ].map((hr, i) => (
                   <div key={i} className="bg-white/5 p-4 rounded-2xl text-center border border-white/5">
                     <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest block mb-1">{hr.p}</span>
                     <span className="text-2xl text-white font-black">{hr.c}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 10. 직원 양성 및 직무
    () => (
      <Slide title="직무 전문성 및 KPI 관리" subtitle="파트별 전문가 배치를 통한 성과 책임제 강화" pageNumber={10}>
        <div className="grid grid-cols-3 gap-6 h-full items-center">
           {[
             { name: "이세아", job: "상담/모집 총괄", kpi: "60%↑", icon: <MessageSquare size={28}/> },
             { name: "나수진", job: "취업/운영 관리", kpi: "70%↑", icon: <Briefcase size={28}/> },
             { name: "김단미", job: "F&B 전략 수립", kpi: "2.7억↑", icon: <TrendingUp size={28}/> }
           ].map((item, i) => (
             <div key={i} className="p-10 glass-panel rounded-[3rem] text-center border-none relative overflow-hidden hover:bg-blue-600/5 transition-all">
                <div className="text-blue-500 mb-6 flex justify-center">{item.icon}</div>
                <h5 className="text-2xl font-black text-white mb-2 tracking-tighter">{item.name} 선생님</h5>
                <p className="text-blue-400 font-bold text-lg mb-6 leading-tight">{item.job}</p>
                <div className="bg-blue-600/10 py-3 rounded-xl border border-blue-500/10">
                  <span className="text-[10px] text-blue-300 font-black uppercase tracking-widest block mb-1">Target KPI</span>
                  <span className="text-xl text-white font-black italic">{item.kpi}</span>
                </div>
             </div>
           ))}
        </div>
      </Slide>
    ),

    // 11. 시설 및 장비 투자
    () => (
      <Slide title="시설 및 인프라 혁신" subtitle="고사양 장비 및 리모델링을 통한 교육 경쟁력 확보" pageNumber={11}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="space-y-6">
              <div className="p-8 glass-panel rounded-[2.5rem] flex items-center space-x-6 group hover:bg-white/5 transition-all">
                 <div className="p-5 bg-blue-600/10 text-blue-400 rounded-2xl"><Monitor size={40} /></div>
                 <div>
                    <h6 className="text-2xl font-black text-white mb-1">PC 40대 추가 도입</h6>
                    <p className="text-lg text-slate-500 font-medium italic">노후 장비 전면 교체 및 확충</p>
                 </div>
              </div>
              <div className="p-8 glass-panel rounded-[2.5rem] flex items-center space-x-6 group hover:bg-white/5 transition-all">
                 <div className="p-5 bg-indigo-600/10 text-indigo-400 rounded-2xl"><Building2 size={40} /></div>
                 <div>
                    <h6 className="text-2xl font-black text-white mb-1">환경 리모델링</h6>
                    <p className="text-lg text-slate-500 font-medium italic">교무실 및 강의실 최적화</p>
                 </div>
              </div>
           </div>
           <div className="p-12 glass-panel rounded-[4rem] text-center shadow-2xl flex flex-col justify-center items-center">
              <Zap size={56} className="text-blue-500 mb-6 animate-pulse" />
              <span className="text-blue-400 font-black text-sm mb-3 tracking-[0.4em] uppercase">Operational Launch</span>
              <div className="text-6xl font-black text-white leading-tight mb-6">12월 29일<br/>OPEN</div>
              <p className="text-xl text-slate-500 font-bold italic font-medium leading-relaxed">2026년 신년 대비<br/>완벽한 교육 환경 구축</p>
           </div>
        </div>
      </Slide>
    ),

    // 12. 2025 결산 및 2026 비전
    () => (
      <Slide title="재무 비전 및 경영 목표" subtitle="매출 24억, 순이익 7억 시대의 개막" pageNumber={12}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 glass-panel rounded-[3.5rem] space-y-5">
              <h5 className="text-xl font-black text-slate-500 mb-6 tracking-tighter">2025 실적 추정</h5>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-500 font-bold">추정 매출</span><span className="text-2xl text-white font-black">12.2 억</span></div>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-500 font-bold">추정 지출</span><span className="text-2xl text-white font-black">10.4 억</span></div>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                 <span className="text-xl text-slate-400 font-black">순이익</span>
                 <span className="text-4xl text-emerald-400 font-black">1.8 억</span>
              </div>
           </div>
           <div className="p-10 bg-blue-600/5 rounded-[3.5rem] space-y-5 relative overflow-hidden">
              <h5 className="text-xl font-black text-blue-400 mb-6 italic">2026 공격적 목표</h5>
              <div className="flex justify-between items-center"><span className="text-lg text-slate-400 font-bold">목표 매출</span><span className="text-3xl text-white font-black">24.0 억</span></div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                 <span className="text-xl text-blue-400 font-black">목표 순이익</span>
                 <span className="text-6xl text-blue-400 font-black tabular-nums">7.0 억</span>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 13. 첨단점 개선 - 벤치마킹
    () => (
      <Slide title="경쟁기관 분석 및 개선" subtitle="타사 우수 사례 도입을 통한 운영 차별화" pageNumber={13}>
        <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                <th className="py-4 px-8">기관명</th>
                <th className="py-4 px-8">내용 (Benchmarking)</th>
                <th className="py-4 px-8 text-blue-400">TIC 개선 방안</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-8 px-8 text-xl font-black text-white">광산그린<br/><span className="text-[10px] text-slate-500 font-bold tracking-widest">ART CENTER</span></td>
                <td className="py-8 px-8 text-lg text-slate-400 font-medium">밴드 활용 소통 채널 및<br/>취업 포트폴리오 상시 공개</td>
                <td className="py-8 px-8 text-xl text-blue-400 font-black italic">상담 교육 시스템 강화 및<br/>전용 온라인 갤러리 운영</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-8 px-8 text-xl font-black text-white">광주컴퓨터<br/><span className="text-[10px] text-slate-500 font-bold tracking-widest">TECH ACADEMY</span></td>
                <td className="py-8 px-8 text-lg text-slate-400 font-medium">단기 실무 과정 중심의<br/>빠른 개강 회전율 및 모집</td>
                <td className="py-8 px-8 text-xl text-blue-400 font-black italic">수시 계좌제 가동 확대 및<br/>집중 모집 캠페인 가동</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>
    ),

    // 14. 운영인력 경쟁력 강화
    () => (
      <Slide title="운영 인력 경쟁력 강화" subtitle="강사진 전문성 확보를 위한 역량 개발 지원" pageNumber={14}>
        <div className="grid grid-cols-3 gap-6 h-full items-center">
           {[
             { name: "강민기 강사", desc: "건축 설계 전문성", action: "캐드 자격교육 이수", c: "blue" },
             { name: "채수훈 강사", desc: "AI 특성화 과정", action: "유료 AI 교육 지원", c: "indigo" },
             { name: "운영팀 (4인)", desc: "NCS 전문 요건", action: "3월 내 자격 취득", c: "emerald" }
           ].map((item, i) => (
             <div key={i} className={`p-8 glass-panel rounded-[2.5rem] text-center border-t-[6px] border-${item.c}-500 shadow-lg group hover:bg-white/5 transition-all`}>
                <Award size={40} className={`text-${item.c}-500 mx-auto mb-6`} />
                <h5 className="text-2xl font-black text-white mb-1">{item.name}</h5>
                <p className="text-xs text-slate-500 font-black uppercase mb-6 tracking-widest">{item.desc}</p>
                <div className={`p-4 bg-${item.c}-500/10 rounded-xl text-${item.c}-400 text-base font-black italic`}>{item.action}</div>
             </div>
           ))}
        </div>
      </Slide>
    ),

    // 15. 일일 점검 및 강사 관리
    () => (
      <Slide title="밀착 현장 관리 시스템" subtitle="디테일한 관리를 통한 교육 품질 표준화" pageNumber={15}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="space-y-6">
              <div className="flex items-start space-x-6 group">
                 <div className="p-4 bg-blue-500/20 text-blue-500 rounded-2xl shrink-0"><Eye size={36}/></div>
                 <div>
                    <h6 className="text-2xl font-black text-white mb-2">강의실 일일 점검</h6>
                    <p className="text-lg text-slate-400 font-medium leading-tight">매일 5분 참관을 통한<br/>학습 분위기 및 시설 체크</p>
                 </div>
              </div>
              <div className="flex items-start space-x-6 group">
                 <div className="p-4 bg-indigo-500/20 text-indigo-500 rounded-2xl shrink-0"><Settings size={36}/></div>
                 <div>
                    <h6 className="text-2xl font-black text-white mb-2">시간강사 고도화</h6>
                    <p className="text-lg text-slate-400 font-medium leading-tight">개별 미팅 및 역량 평가 후<br/>정규직 전환 및 채용 확대</p>
                 </div>
              </div>
           </div>
           <div className="p-16 bg-white/5 rounded-[4rem] text-center shadow-xl border border-white/5">
              <p className="text-2xl text-slate-400 leading-relaxed font-bold italic mb-6">
                "성공적인 교육은<br/><span className="text-white font-black text-4xl">디테일한 관리</span>에서<br/>완성됩니다."
              </p>
              <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
           </div>
        </div>
      </Slide>
    ),

    // 16. 브랜드 설계 및 특화과정 (Updated Layout)
    () => (
      <Slide title="브랜드 포지셔닝 및 특화 전략" subtitle="첨단점 정체성 확립과 맞춤형 수강생 관리" pageNumber={16}>
        <div className="grid grid-cols-2 gap-8 h-full">
           <div className="p-10 glass-panel rounded-[3rem] border-l-[10px] border-blue-600 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6 text-blue-400">
                <Rocket size={40} />
                <h5 className="text-3xl font-black text-white">브랜드 마케팅</h5>
              </div>
              <ul className="space-y-4 text-lg text-slate-400 font-bold italic">
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-blue-500 mr-4 shrink-0"/> 물류/건축 전문 교육 이미지</li>
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-blue-500 mr-4 shrink-0"/> 영수증 리뷰 1,000건 확보</li>
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-blue-500 mr-4 shrink-0"/> 카카오 채널 3,000명 목표</li>
              </ul>
           </div>
           <div className="p-10 glass-panel rounded-[3rem] border-l-[10px] border-indigo-600 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6 text-indigo-400">
                <Target size={40} />
                <h5 className="text-3xl font-black text-white">일반고 특화</h5>
              </div>
              <ul className="space-y-4 text-lg text-slate-400 font-bold italic">
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-indigo-500 mr-4 shrink-0"/> 방과후 자격증 계좌제반 운영</li>
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-indigo-500 mr-4 shrink-0"/> 고교 연계 취득률 향상 관리</li>
                 <li className="flex items-center"><CheckCircle2 size={24} className="text-indigo-500 mr-4 shrink-0"/> 2026년 정규 승격 사전 대비</li>
              </ul>
           </div>
           <div className="col-span-2 p-6 bg-blue-600/5 rounded-3xl flex items-center justify-around shadow-inner">
              <div className="flex items-center space-x-3"><Star className="text-yellow-500" size={24}/><span className="text-xl text-white font-black italic">리뷰 1,000+</span></div>
              <div className="flex items-center space-x-3"><Users className="text-blue-400" size={24}/><span className="text-xl text-white font-black italic">채널 3,000명</span></div>
              <div className="flex items-center space-x-3"><Award className="text-indigo-400" size={24}/><span className="text-xl text-white font-black italic">취득률 85%↑</span></div>
           </div>
        </div>
      </Slide>
    ),

    // 17. 운영 성과 지표 (KPI) (High Impact)
    () => (
      <Slide title="핵심 운영 품질 지표" subtitle="데이터 기반의 정량적 교육 품질 관리" pageNumber={17}>
        <div className="grid grid-cols-4 gap-6 h-full items-center">
           {[
             { l: "모집률", v: "60%", d: "Target", i: <Users size={48}/>, c: "blue" },
             { l: "수료율", v: "93%", d: "Standard", i: <ShieldCheck size={48}/>, c: "indigo" },
             { l: "수강평", v: "4.8", d: "Satisfaction", i: <Star size={48}/>, c: "yellow" },
             { l: "매출총액", v: "15.0억", d: "Revenue", i: <PieChart size={48}/>, c: "emerald" }
           ].map((kpi, i) => (
             <div key={i} className="p-10 glass-panel rounded-[3rem] text-center flex flex-col items-center shadow-xl border-none group hover:bg-white/5 transition-all">
                <div className={`mb-6 text-${kpi.c}-500 opacity-60`}>{kpi.i}</div>
                <h6 className="text-slate-500 text-[10px] font-black uppercase mb-3 tracking-widest">{kpi.l}</h6>
                <span className="text-5xl font-black text-white mb-1 tracking-tighter tabular-nums">{kpi.v}</span>
                <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest">{kpi.d}</p>
             </div>
           ))}
        </div>
      </Slide>
    ),

    // 18. 시장 경쟁 기관 분석
    () => (
      <Slide title="시장 경쟁 기관 분석" subtitle="광산구 권역별 주요 기관 성과 분석 및 대응 전략" pageNumber={18}>
        <div className="h-full flex flex-col justify-center">
           <div className="grid grid-cols-2 gap-6 mb-6 overflow-hidden">
              {COMPETITORS.map((c, i) => (
                 <div key={i} className="p-8 glass-panel rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group hover:bg-blue-600/5 transition-all border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-[9px] font-black uppercase rounded-full tracking-widest mb-2 block w-fit">{c.mainField}</span>
                          <h5 className="text-3xl font-black text-white tracking-tighter">{c.name}</h5>
                       </div>
                       <div className="text-right">
                          <span className="text-slate-500 text-[10px] font-black uppercase block mb-1">REVENUE</span>
                          <span className="text-2xl font-black text-white">{(c.revenue2025 / 100000000).toFixed(1)} 억</span>
                       </div>
                    </div>
                    <div className="flex justify-between items-end pt-4 border-t border-white/5">
                       <div className="space-y-1">
                          <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Growth</span>
                          <p className="text-3xl font-black text-blue-500 tabular-nums">{c.achievement}%</p>
                       </div>
                       <div className="text-right space-y-1">
                          <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Students</span>
                          <p className="text-xl font-black text-white">{c.recruitment2025.toLocaleString()}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="p-8 bg-indigo-950/20 rounded-[3rem] border border-indigo-500/10 flex items-center space-x-12 shrink-0">
              <div className="shrink-0 flex items-center space-x-4">
                 <div className="w-16 h-16 bg-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-lg"><ArrowUpRight size={32}/></div>
                 <h6 className="text-2xl font-black text-white tracking-tighter leading-tight italic">TIC 핵심<br/>우위 전략</h6>
              </div>
              <div className="grid grid-cols-2 gap-8 w-full">
                 <p className="text-slate-400 text-base leading-snug font-medium"><span className="text-white font-black italic mr-2 underline underline-offset-4 decoration-indigo-500">인프라 초격차</span> 노후 장비 대비 압도적 고사양 환경 및 리모델링 인프라 확보</p>
                 <p className="text-slate-400 text-base leading-snug font-medium"><span className="text-white font-black italic mr-2 underline underline-offset-4 decoration-indigo-500">성과 중심 관리</span> 자격증 취득 85% 및 취업률 70% 보장하는 실무 매칭 시스템</p>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 19. 훈련비 손실률 감소 (Updated Style)
    () => (
      <Slide title="운영 효율성 극대화" subtitle="손실률 최소화(10% → 6%)를 통한 재무 건전성 제고" pageNumber={19}>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-10 glass-panel rounded-[4rem] space-y-8 shadow-2xl relative overflow-hidden">
             <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <span className="text-xl text-slate-500 font-black italic uppercase">Current <span className="text-xs">2025</span></span>
                <span className="text-4xl font-black text-slate-400">10 % <span className="text-sm text-slate-500">(1,275만원)</span></span>
             </div>
             <div className="flex justify-between items-end pt-4">
                <span className="text-2xl text-blue-400 font-black italic uppercase">Target <span className="text-xs">2026</span></span>
                <span className="text-[6rem] font-black text-blue-400 leading-none tabular-nums tracking-tighter">06 %</span>
             </div>
          </div>
          <div className="space-y-4">
             {['일반고 부문 5% 절대 방어', '장기과정 10% 내외 밀착 관리', '단기과정 5% 이내 성과 관리'].map((v, i) => (
               <div key={i} className="p-6 glass-panel rounded-2xl flex items-center space-x-6 group hover:bg-blue-600/5 transition-colors border border-white/5 shadow-md">
                  <div className="p-3 bg-blue-500/20 text-blue-500 rounded-xl"><CheckCircle2 size={24} /></div>
                  <span className="text-xl font-black text-white leading-tight">{v}</span>
               </div>
             ))}
          </div>
        </div>
      </Slide>
    ),

    // 20. 이월률 증가 목표
    () => (
      <Slide title="지속 성장 기반 구축" subtitle="안정적 수강생 확보를 위한 이월률 및 연계 전략" pageNumber={20}>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
           <div className="text-center p-16 glass-panel rounded-full aspect-square flex flex-col justify-center items-center shadow-2xl bg-gradient-to-br from-blue-600/5 to-transparent relative group">
              <span className="text-slate-500 font-black text-xl mb-4 tracking-[0.4em] uppercase">Carry-over</span>
              <h4 className="text-[10rem] font-black text-white leading-none mb-4 tracking-tighter tabular-nums">20 <span className="text-4xl">%</span></h4>
              <p className="text-2xl text-blue-400 font-black italic">Next Target</p>
           </div>
           <div className="space-y-6">
              <h5 className="text-3xl font-black text-white mb-6 italic underline decoration-blue-500 decoration-[4px] underline-offset-8">Strategy Focus</h5>
              <div className="p-8 glass-panel rounded-[2.5rem] border border-white/5 shadow-lg">
                <h6 className="text-2xl font-black text-blue-400 mb-2">과정 연계 시스템</h6>
                <p className="text-lg text-slate-400 leading-snug font-medium">기초 수료생의 심화 과정 로드맵 제시 및 조기 등록 프로모션 가동</p>
              </div>
              <div className="p-8 glass-panel rounded-[2.5rem] border border-white/5 shadow-lg">
                <h6 className="text-2xl font-black text-indigo-400 mb-2">상시 진로 컨설팅</h6>
                <p className="text-lg text-slate-400 leading-snug font-medium">종강 2주 전부터 전담 행정 지원 인력의 1:1 후속 과정 매칭 상담</p>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 21. 일반고 특화 마일스톤 (High Impact Title)
    () => (
       <Slide title="일반고 특화 마일스톤" subtitle="조기 인재 발굴에서 전문 기술인 양성까지의 핵심 단계" pageNumber={21}>
          <div className="grid grid-cols-3 gap-8 h-full items-center">
             {[
               { p: "PHASE 01", t: "선점 및 홍보", k: "MARKET LEAD", d: "방문 설명회 및 학부모 안심 캠프 운영", icon: <Search size={48}/>, c: "blue" },
               { p: "PHASE 02", t: "몰입 교육", k: "QUALITY CORE", d: "실기 80% 이상의 흥미 유발 교육과 상담", icon: <BookOpen size={48}/>, c: "indigo" },
               { p: "PHASE 03", t: "성과 확산", k: "SUCCESS IMPACT", d: "자격증 취득 및 취업 성공 사례 집중 홍보", icon: <TrendingUp size={48}/>, c: "emerald" }
             ].map((step, i) => (
               <div key={i} className={`p-10 glass-panel rounded-[4rem] h-full flex flex-col items-center justify-center text-center border-t-[12px] border-${step.c}-600 group shadow-2xl relative overflow-hidden`}>
                  <span className={`text-${step.c}-400 font-black text-xl mb-6 tracking-[0.3em] uppercase`}>{step.p}</span>
                  <div className={`mb-8 p-6 bg-white/5 rounded-full group-hover:bg-${step.c}-600/10 transition-all text-${step.c}-400 shadow-md`}>{step.icon}</div>
                  <h6 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none italic">{step.t}</h6>
                  <span className={`px-5 py-2 bg-${step.c}-500/10 text-${step.c}-400 text-[10px] font-black uppercase rounded-full tracking-[0.3em] mb-8`}>{step.k}</span>
                  <p className="text-xl text-slate-400 leading-relaxed font-medium px-2">{step.d}</p>
               </div>
             ))}
          </div>
       </Slide>
    ),

    // 22. 훈련교사 수업량 목표
    () => (
       <Slide title="훈련 교사별 퍼포먼스 목표" subtitle="교육 전문성 및 수업 효율성 확보를 위한 역량 관리" pageNumber={22}>
          <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="py-4 px-8">성명 / 직책</th>
                  <th className="py-4 px-8">전문 담당 분야</th>
                  <th className="py-4 px-8">2025 실적</th>
                  <th className="py-4 px-8 text-blue-400">2026 목표 (M/H)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {TEACHER_GOALS.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="py-3 px-8 text-xl font-black text-white">{row.name} <span className="text-[10px] text-slate-500 font-bold uppercase ml-2">{row.role}</span></td>
                    <td className="py-3 px-8 text-lg text-slate-400 font-bold italic">{row.field}</td>
                    <td className="py-3 px-8 text-lg text-slate-600 font-bold tabular-nums">{row.m2025 === 0 ? 'NEW' : row.m2025.toLocaleString()}</td>
                    <td className="py-3 px-8 text-3xl text-blue-400 font-black tabular-nums tracking-tighter">{row.m2026.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </Slide>
    ),

    // 23. 광주 경쟁기관 비교분석 (Updated Agencies)
    () => (
       <Slide title="광주 지역 주요 경쟁사 분석" subtitle="광산구 핵심 권역별 교육 기관 매출 및 모집 분석" pageNumber={23}>
          <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="py-4 px-8">경쟁 기관명</th>
                  <th className="py-4 px-8">주요 특화 직종</th>
                  <th className="py-4 px-8">25년 매출</th>
                  <th className="py-4 px-8">연간 모집 인원</th>
                  <th className="py-4 px-8 text-blue-400">달성률</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPETITORS.map((c, i) => (
                  <tr key={i} className="hover:bg-white/5 group">
                    <td className="py-6 px-8 text-2xl font-black text-white leading-tight">{c.name}<br/><span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{c.region}</span></td>
                    <td className="py-6 px-8 text-lg text-slate-400 font-bold italic">{c.mainField}</td>
                    <td className="py-6 px-8 text-xl text-slate-500 font-black">{(c.revenue2025 / 100000000).toFixed(1)} 억</td>
                    <td className="py-6 px-8 text-xl text-white font-black">{c.recruitment2025.toLocaleString()} 명</td>
                    <td className="py-6 px-8 text-4xl font-black text-blue-500 tabular-nums">{c.achievement}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </Slide>
    ),

    // 24. 전직종 종합 분석
    () => (
       <Slide title="직종별 시장 경쟁력 분석" subtitle="점유율 데이터를 통한 시장 내 TIC 포지셔닝 분석" pageNumber={24}>
          <div className="flex-1 overflow-hidden glass-panel rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="py-4 px-10">분석 직종명</th>
                  <th className="py-4 px-10">매출 규모</th>
                  <th className="py-4 px-10">모집 인원</th>
                  <th className="py-4 px-10">시장 점유율</th>
                  <th className="py-4 px-10 text-blue-400">매출 순위</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { n: "세무회계", r: "1.9 억", c: "138명", p: "16.0%", rk: "1" },
                  { n: "건축설계", r: "1.3 억", c: "64명", p: "12.9%", rk: "3" },
                  { n: "바리스타", r: "0.8 억", c: "219명", p: "10.8%", rk: "4" },
                  { n: "제과제빵", r: "0.9 억", c: "136명", p: "9.7%", rk: "2" },
                  { n: "일반사무", r: "1.3 억", c: "255명", p: "9.1%", rk: "3" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-10 text-xl font-black text-white">{row.n}</td>
                    <td className="py-5 px-10 text-lg text-slate-400 font-bold">{row.r}</td>
                    <td className="py-5 px-10 text-lg text-slate-400 font-bold">{row.c}</td>
                    <td className="py-5 px-10 text-lg text-indigo-400 font-black italic">{row.p}</td>
                    <td className="py-5 px-10 text-4xl font-black text-blue-500 tabular-nums">{row.rk} <span className="text-xl font-bold uppercase">위</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </Slide>
    ),

    // 25. Closing
    () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden slide-content-animate">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] bg-blue-500/[0.04] rounded-full blur-[250px] -z-20"></div>
        
        <h2 className="text-7xl md:text-[10rem] font-black text-white mb-10 tracking-[-0.06em] leading-[0.85] text-shadow-strong">
          WE TRANSFORM<br/>
          <span className="text-gradient">FUTURES.</span>
        </h2>
        <div className="h-2 w-48 bg-gradient-to-r from-blue-500 to-transparent mb-16 rounded-full shadow-lg"></div>
        
        <p className="text-3xl md:text-5xl font-light text-slate-400 leading-tight mb-20 max-w-6xl font-medium tracking-tight">
          2026년, <span className="text-white font-black italic underline decoration-blue-500 underline-offset-8 decoration-4">더국제직업전문학교</span>가<br/>
          대한민국 직업 교육의 새로운 표준이 됩니다.
        </p>
        
        <button 
           onClick={() => setCurrentSlide(0)}
           className="px-14 py-6 bg-white/5 border border-white/10 text-white rounded-full text-2xl md:text-3xl font-black hover:bg-white/10 hover:border-blue-500/30 transition-all hover:scale-105 group flex items-center space-x-8 shadow-2xl relative overflow-hidden"
        >
          <span className="z-10 tracking-tighter">프레젠테이션 다시보기</span>
          <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform duration-500 z-10" />
        </button>
      </div>
    )
  ];

  return (
    <div className="w-full h-full bg-[#020617] overflow-hidden relative selection:bg-blue-500/30">
      {slides[currentSlide]()}
      
      {/* Floating Controls */}
      <div className="absolute bottom-10 right-10 flex space-x-4 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all ${currentSlide === 0 ? 'opacity-5 pointer-events-none' : 'hover:bg-blue-600 hover:text-white shadow-2xl active:scale-90'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === 24}
          className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all ${currentSlide === 24 ? 'opacity-5 pointer-events-none' : 'hover:bg-blue-600 hover:text-white shadow-2xl active:scale-90'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress */}
      <div className="absolute top-10 right-10 z-50 flex items-center space-x-4 opacity-50 hover:opacity-100 transition-opacity">
         <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
           <div 
             className="h-full bg-blue-500 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)" 
             style={{ width: `${((currentSlide + 1) / 25) * 100}%` }}
           />
         </div>
         <div className="text-slate-400 font-black text-sm tracking-tighter tabular-nums">
           {currentSlide + 1} / 25
         </div>
      </div>
    </div>
  );
};

export default App;
