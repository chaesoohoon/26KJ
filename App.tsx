
import React, { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { 
  REVENUE_PLAN, 
  COMPETITORS,
  HIGH_SCHOOL_SUBJECTS,
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
  Zap,
  Globe,
  Rocket,
  ShieldCheck,
  Award,
  Monitor,
  Building2,
  Layers,
  Search,
  MessageSquare,
  Star,
  ArrowUpRight,
  UserPlus,
  Eye,
  Settings,
  Megaphone,
  Video,
  Sparkles,
  Smartphone,
  ClipboardCheck,
  Layout,
  UserCheck,
  FileText,
  Lightbulb,
  Activity,
  BarChart3
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
    // 1. Hero
    () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vh] bg-blue-600/[0.1] rounded-full blur-[150px] -z-10 animate-pulse"></div>
        <div className="flex items-center space-x-3 mb-6 bg-white/10 px-6 py-2 rounded-full border border-white/20">
           <Zap size={16} className="text-blue-400" />
           <span className="text-blue-300 font-black tracking-[0.4em] text-[10px] uppercase">Strategic Roadmap 2026</span>
        </div>
        <h1 className="text-4xl md:text-[7rem] font-black mb-6 leading-[0.9] tracking-tighter text-white uppercase text-shadow-strong">
          THE NEXT<br/><span className="text-gradient">STANDARD</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-slate-400 max-w-4xl leading-relaxed mb-12 tracking-tight">
          매출 <span className="text-white font-bold">22.3억</span> · 순이익 <span className="text-blue-400 font-bold">6.6억</span><br/>
          성공의 새로운 지평을 열다.
        </p>
        <div className="grid grid-cols-2 gap-10 opacity-80">
           <div className="flex flex-col items-center"><span className="text-white font-black text-4xl mb-1 tabular-nums">1,456<span className="text-lg">명</span></span><span className="text-blue-500 text-[10px] font-black tracking-widest uppercase">Target Students</span></div>
           <div className="flex flex-col items-center"><span className="text-white font-black text-4xl mb-1 tabular-nums">228<span className="text-lg">회</span></span><span className="text-emerald-500 text-[10px] font-black tracking-widest uppercase">Course Opens</span></div>
        </div>
      </div>
    ),

    // 2. Vision
    () => (
      <Slide title="2026 경영 비전" subtitle="실적 달성을 위한 핵심 재무 목표 재설정" pageNumber={2}>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-10 bg-blue-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <TrendingUp size={120} className="absolute right-[-20px] bottom-[-20px] opacity-20" />
             <h4 className="text-3xl font-black mb-4">매출 목표</h4>
             <h3 className="text-7xl font-black mb-2 tracking-tighter">22<span className="text-2xl ml-1">억 3,000만</span></h3>
             <p className="text-blue-100 font-bold opacity-80">전년 대비 압도적 성장 실현</p>
          </div>
          <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden border border-white/5">
             <BarChart3 size={120} className="absolute right-[-20px] bottom-[-20px] opacity-20" />
             <h4 className="text-3xl font-black mb-4 text-blue-400">순이익 목표</h4>
             <h3 className="text-7xl font-black mb-2 tracking-tighter text-blue-400">6.6<span className="text-2xl ml-1 text-white">억</span></h3>
             <p className="text-slate-400 font-bold">운영 효율 최적화를 통한 수익성 극대화</p>
          </div>
        </div>
      </Slide>
    ),

    // 3. 매출 계획 상세
    () => (
      <Slide title="매출 계획 상세" subtitle="부문별 정밀 모집 목표 수립 (총 1,456명)" pageNumber={3}>
        <div className="flex-1 overflow-hidden glass-panel rounded-2xl p-1 border border-white/5 shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-blue-600/10">
              <tr className="text-blue-400 text-[9px] uppercase font-black tracking-widest border-b border-white/5">
                <th className="py-3 px-6">사업 부문</th>
                <th className="py-3 px-6 text-center">모집인원</th>
                <th className="py-3 px-6 text-center">개강횟수</th>
                <th className="py-3 px-6 text-right opacity-50">2025 실적</th>
                <th className="py-3 px-6 text-right text-blue-400">2026 목표</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {REVENUE_PLAN.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-6 text-lg font-black text-white">{row.category}</td>
                  <td className="py-3 px-6 text-center text-lg text-white font-bold">{row.targetCount}명</td>
                  <td className="py-3 px-6 text-center text-lg text-slate-400">{row.sessions}회</td>
                  <td className="py-3 px-6 text-right text-slate-500 font-bold tabular-nums">{row.rev2025.toLocaleString()}</td>
                  <td className="py-3 px-6 text-right text-2xl text-blue-400 font-black tabular-nums">{row.rev2026.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-blue-900/30">
                <td className="py-6 px-6 text-xl font-black text-white uppercase">Grand Total</td>
                <td colSpan={2} className="py-6 px-6 text-right text-slate-500 font-bold">1,456명 유치</td>
                <td className="py-6 px-6 text-right text-slate-500 font-bold">152,999</td>
                <td className="py-6 px-6 text-right text-5xl text-blue-400 font-black tabular-nums tracking-tighter">223,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>
    ),

    // 4. 일반고 매출
    () => (
      <Slide title="핵심 동력: 일반고 특화" subtitle="모집인원 120명 기반의 탄탄한 매출 구조" pageNumber={4}>
         <div className="grid grid-cols-2 gap-10 h-full items-center">
            <div className="p-12 glass-panel rounded-[4rem] text-center border border-white/5 h-full flex flex-col justify-center shadow-inner">
               <span className="text-slate-500 font-black text-xs mb-4 tracking-[0.4em] uppercase">Target Revenue</span>
               <h4 className="text-[7rem] font-black text-white leading-none mb-4 tracking-tighter">10<span className="text-3xl"> 억</span></h4>
               <p className="text-xl text-blue-400 font-black">모집률 70% 기반 전략 모집</p>
            </div>
            <div className="p-10 bg-blue-600 rounded-[3.5rem] text-white shadow-2xl flex flex-col justify-center">
               <h5 className="text-2xl font-black mb-6 border-b border-white/20 pb-4">핵심 전략</h5>
               <ul className="space-y-4 text-xl font-bold">
                  <li>● 지역 고교 방과후 계좌제 전면 선점</li>
                  <li>● 자격증 취득률 향상을 위한 집중 교육</li>
                  <li>● 2027 본 과정 승인을 위한 성과 확보</li>
               </ul>
            </div>
         </div>
      </Slide>
    ),

    // 5. 장기/단기 과정 전략
    () => (
      <Slide title="장기 및 단기 과정 성과" subtitle="모집 목표 정밀화 (장기 96명 / 단기 500명)" pageNumber={5}>
        <div className="grid grid-cols-2 gap-8 h-full">
           <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                 <h5 className="text-2xl font-black text-white mb-4">장기 과정 (96명)</h5>
                 <p className="text-5xl font-black text-blue-400 mb-2">4,112<span className="text-xl ml-1 text-slate-500">만원</span></p>
              </div>
              <p className="text-slate-400 font-bold">고단가 BIM/물류 과정 중심 수익 모델 강화</p>
           </div>
           <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                 <h5 className="text-2xl font-black text-white mb-4">단기 과정 (500명)</h5>
                 <p className="text-5xl font-black text-blue-400 mb-2">7,168<span className="text-xl ml-1 text-slate-500">만원</span></p>
              </div>
              <p className="text-slate-400 font-bold">60회 이상 상시 개강을 통한 모집수 극대화</p>
           </div>
        </div>
      </Slide>
    ),

    // 6. 시장 경쟁 구도 분석
    () => (
      <Slide title="시장 점유율 현황" subtitle="권역별 주요 경쟁 기관 성과 데이터 비교" pageNumber={6}>
        <div className="flex-1 overflow-hidden glass-panel rounded-2xl p-1 border border-white/5 shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr className="text-slate-500 text-[9px] font-black uppercase tracking-widest border-b border-white/10">
                <th className="py-4 px-8">기관명</th>
                <th className="py-4 px-8 text-right">매출 현황</th>
                <th className="py-4 px-8 text-right">모집 인원 (명)</th>
                <th className="py-4 px-8 text-center">특징</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {COMPETITORS.map((c, i) => (
                <tr key={i} className={`hover:bg-white/5 transition-colors ${c.name === '국제첨단점' ? 'bg-blue-600/10' : ''}`}>
                  <td className={`py-4 px-8 text-xl font-black ${c.name === '국제첨단점' ? 'text-blue-400' : 'text-white'}`}>{c.name}</td>
                  <td className="py-4 px-8 text-right text-lg text-slate-400 font-bold tabular-nums">
                    {c.revenue2025.toLocaleString()}원
                  </td>
                  <td className="py-4 px-8 text-right text-2xl font-black text-white tabular-nums">{c.recruitment2025.toLocaleString()}</td>
                  <td className="py-4 px-8 text-center">
                    {c.name === '국제첨단점' ? <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest">Market Leader</span> : <span className="text-slate-500">Competitor</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>
    ),

    // 7. 국제첨단점 초격차 전략
    () => (
      <div className="h-full w-full bg-slate-950 text-white flex flex-col p-12 slide-content-animate">
        <div className="flex justify-between items-end mb-8 border-b-4 border-blue-600 pb-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">Market Leadership<br/><span className="text-blue-600">국제첨단점의 독보적 위상</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-10 bg-blue-600 rounded-[3rem] text-white shadow-2xl flex flex-col justify-center">
             <div className="p-3 bg-white/20 rounded-2xl w-fit mb-6 shadow-lg"><Award size={48}/></div>
             <h5 className="text-3xl font-black mb-6 tracking-tighter uppercase">Performance</h5>
             <p className="text-4xl font-black mb-2 tabular-nums">835,590,364원</p>
             <p className="text-xl font-bold opacity-80">995명 모집 (권역 내 압도적 1위)</p>
          </div>
          <div className="p-8 glass-panel rounded-[2.5rem] border border-white/10">
             <h4 className="text-2xl font-black mb-6 text-blue-400">초격차 핵심 요인</h4>
             <ul className="space-y-4 text-xl text-slate-300 font-bold">
                <li>● 물류 / 건축 / AI 특화 교육 인프라 완비</li>
                <li>● 수료생 취업 연계 DB 및 사후 관리 시스템</li>
                <li>● 지역 최대 규모의 공식 수검장 운영</li>
             </ul>
          </div>
        </div>
      </div>
    ),

    // 8. 경쟁사 분석: 그린광산점
    () => (
      <div className="h-full w-full bg-white text-slate-950 flex flex-col p-12 slide-content-animate">
        <div className="flex justify-between items-end mb-8 border-b-4 border-slate-950 pb-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">Competitor Matchup<br/><span className="text-blue-600">더국제첨단 VS 그린광산점</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-8 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] shadow-xl">
             <h4 className="text-2xl font-black mb-6">그린광산점 현황</h4>
             <p className="text-3xl font-black text-slate-900 mb-2">642,023,080원 / 818명</p>
             <ul className="space-y-2 text-lg text-slate-500 font-bold mt-4">
                <li>● 밴드 소통 및 상담 마케팅에 주력</li>
                <li>● 건축 설계 분야의 탄탄한 로컬 기반</li>
             </ul>
          </div>
          <div className="p-10 bg-slate-950 rounded-[3rem] text-white shadow-2xl flex flex-col justify-center">
             <div className="p-3 bg-blue-600 rounded-2xl w-fit mb-6"><Building2 size={32}/></div>
             <h5 className="text-3xl font-black mb-6 text-blue-400 tracking-tighter">더국제첨단 우위 전략</h5>
             <p className="text-xl font-bold mb-4 underline decoration-blue-500 underline-offset-8">하이테크 BIM 전문 교육 전개</p>
             <p className="text-slate-400 font-medium">단순 설계를 넘어선 하이테크 건축 BIM 과정 개설 및 자사 전용 포트폴리오 디지털 센터 구축</p>
          </div>
        </div>
      </div>
    ),

    // 9. 경쟁사 분석: 광주컴퓨터
    () => (
      <div className="h-full w-full bg-slate-100 text-slate-950 flex flex-col p-12 slide-content-animate">
        <div className="flex justify-between items-end mb-8 border-b-4 border-slate-900 pb-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">Competitor Matchup<br/><span className="text-indigo-600">더국제첨단 VS 광주컴퓨터</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-200 shadow-2xl flex flex-col justify-center">
             <div className="p-3 bg-indigo-600 rounded-2xl w-fit mb-6 text-white"><Cpu size={32}/></div>
             <h5 className="text-3xl font-black mb-6 text-indigo-600 tracking-tighter">더국제첨단 우위 전략</h5>
             <p className="text-xl font-bold mb-4 underline decoration-indigo-500 underline-offset-8">AI 융합 교육 모듈 선제적 도입</p>
             <p className="text-slate-500 font-medium">단순 자격증 취득을 넘어선 생성형 AI 활용 실무 커리큘럼으로 미래 교육 시장 선점</p>
          </div>
          <div className="p-8 bg-slate-200 rounded-[2.5rem] shadow-inner">
             <h4 className="text-2xl font-black mb-6">광주컴퓨터 현황</h4>
             <p className="text-3xl font-black text-slate-800 mb-2">395,182,560원 / 861명</p>
             <ul className="space-y-2 text-lg text-slate-600 font-bold mt-4">
                <li>● 정보처리 및 단기 실무 위주의 상시 개강</li>
                <li>● 지역 내 다수의 소규모 수시 개강반 보유</li>
             </ul>
          </div>
        </div>
      </div>
    ),

    // 10. 경쟁사 분석: 한울전산세무
    () => (
      <div className="h-full w-full bg-white text-slate-950 flex flex-col p-12 slide-content-animate">
        <div className="flex justify-between items-end mb-8 border-b-4 border-slate-900 pb-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">Competitor Matchup<br/><span className="text-emerald-600">더국제첨단 VS 한울전산세무</span></h2>
        </div>
        <div className="grid grid-cols-2 gap-12 h-full items-center">
          <div className="p-8 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] shadow-xl">
             <h4 className="text-2xl font-black mb-6">한울전산세무 현황</h4>
             <p className="text-3xl font-black text-slate-900 mb-2">149,418,580원 / 129명</p>
             <ul className="space-y-2 text-lg text-slate-500 font-bold mt-4">
                <li>● 최근 리모델링 시설 및 KPC 수검장 확보</li>
                <li>● 세무회계 분야 특화 교육 및 자격 취득 중심</li>
             </ul>
          </div>
          <div className="p-10 bg-slate-950 rounded-[3rem] text-white shadow-2xl flex flex-col justify-center">
             <div className="p-3 bg-emerald-600 rounded-2xl w-fit mb-6 shadow-lg"><Award size={32}/></div>
             <h5 className="text-3xl font-black mb-6 text-emerald-400 tracking-tighter">더국제첨단 우위 전략</h5>
             <p className="text-xl font-bold mb-4 underline decoration-emerald-500 underline-offset-8">한국세무사회 공식 수검장 지정</p>
             <p className="text-slate-400 font-medium">강의실 전면 최신화 및 한국세무사회 공식 수검장 지위 확보로 '홈그라운드 합격' 신뢰도 완성</p>
          </div>
        </div>
      </div>
    ),

    // 11. 운영인력 전문성 강화
    () => (
      <Slide title="운영인력 전문성 로드맵" subtitle="강사진 전문성 고도화 및 전담 교육 역량 확보" pageNumber={11}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-12 glass-panel rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center">
              <UserCheck size={80} className="text-blue-500 mb-8" />
              <h4 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">Elite Faculty</h4>
              <p className="text-slate-500 text-xs font-black tracking-widest uppercase opacity-60">Human Capital Strategy</p>
           </div>
           <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-white mb-2">건축 설계 특화 교육</h6>
                 <p className="text-slate-400 font-medium">강기환 마스터 강사의 노하우를 직접 전수받은 정예 강사진 양성</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-white mb-2">AI 교수 모듈 도입</h6>
                 <p className="text-slate-400 font-medium">미드저니, 구글 AI 스튜디오 등 최신 기술 활용 교수법 내재화</p>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 12. 교강사 육성: 강민기
    () => (
      <Slide title="강민기 선생님: 건축 마스터" subtitle="실전 BIM 및 CAD 전문 교수법 양성" pageNumber={12}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 bg-blue-900/40 rounded-[4rem] border border-blue-500/30 flex flex-col items-center justify-center text-center">
              <div className="p-6 bg-blue-600 text-white rounded-full mb-8 shadow-2xl"><Building2 size={64} /></div>
              <h4 className="text-4xl font-black text-white">강민기 선생님</h4>
           </div>
           <div className="space-y-8">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-blue-400 mb-2 underline underline-offset-4">마스터 참관 교육 이수</h6>
                 <p className="text-slate-400 font-bold">강기환 강사의 필기/실기 전 과정 참관을 통한 마스터급 노하우 전수</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-blue-400 mb-2 underline underline-offset-4">건축 설계 전담 투입</h6>
                 <p className="text-slate-400 font-bold">2026년 건축설계 및 디자인 핵심 강사진으로 편성 및 성과 창출</p>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 13. 교강사 육성: 채수훈
    () => (
      <Slide title="채수훈 선생님: AI 프론티어" subtitle="생성형 AI 활용 기술 교육의 선두 주자 양성" pageNumber={13}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="space-y-8">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-indigo-400 mb-2 underline underline-offset-4">AI 유료 교육 참여 중</h6>
                 <p className="text-slate-400 font-bold">구글 AI 스튜디오, 미드저니 등 하이테크 과정 선제적 이수 중</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                 <h6 className="text-xl font-black text-indigo-400 mb-2 underline underline-offset-4">커리큘럼 혁신 주도</h6>
                 <p className="text-slate-400 font-bold">일반고 및 장기과정 전반에 AI 융합 교육 모듈 전면 설계 및 도입</p>
              </div>
           </div>
           <div className="p-10 bg-indigo-900/40 rounded-[4rem] border border-indigo-500/30 flex flex-col items-center justify-center text-center">
              <div className="p-6 bg-indigo-600 text-white rounded-full mb-8 shadow-2xl"><Cpu size={64} /></div>
              <h4 className="text-4xl font-black text-white">채수훈 선생님</h4>
           </div>
        </div>
      </Slide>
    ),

    // 14. 운영지원팀 역량 강화
    () => (
      <Slide title="운영지원팀 4인 역량 강화" subtitle="행정과 강의를 병행하는 멀티플레이어 조직 혁신" pageNumber={14}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-12 glass-panel rounded-[4rem] border border-white/5 flex flex-col items-center">
              <UserPlus size={64} className="text-emerald-400 mb-6" />
              <h4 className="text-3xl font-black text-white mb-4">NCS 확인강사 100%</h4>
              <p className="text-slate-500 font-bold">팀원 전원 강사 자격 신청 및 핵심 자격증 취득 추진</p>
           </div>
           <div className="p-10 bg-emerald-600/10 rounded-[3rem] border border-emerald-500/20">
              <h6 className="text-2xl font-black text-emerald-400 mb-4 uppercase">Action Plan</h6>
              <p className="text-lg text-slate-300 font-bold leading-relaxed">
                1~2월 자격증 취득 집중 기간 운영 후, 3월부터 정규 수업 및 특강 지원 전면 투입
              </p>
           </div>
        </div>
      </Slide>
    ),

    // 15. 브랜드 Identity 설계
    () => (
      <Slide title="브랜드 Identity 재설계" subtitle="물류·건축 특화 교육의 독보적 위상 구축" pageNumber={15}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">Empire of<br/><span className="text-blue-600">Core Industry</span></h2>
              <p className="text-2xl text-slate-400 font-bold">"더국제첨단 = 물류·건축 전문 브랜드 인식이 지역 내 수강생에게 즉각 부각되도록 설계"</p>
           </div>
           <div className="p-10 bg-blue-600 rounded-[5rem] shadow-2xl relative overflow-hidden">
              <Smartphone size={120} className="absolute right-[-20px] bottom-[-20px] opacity-10" />
              <h5 className="text-3xl font-black text-white mb-6">Digital Branding</h5>
              <div className="space-y-4 text-white font-bold">
                 <div className="flex justify-between border-b border-white/20 pb-2"><span>네이버 영수증 리뷰</span><span>1,000건+</span></div>
                 <div className="flex justify-between border-b border-white/20 pb-2"><span>카카오 채널 친구</span><span>3,000명+</span></div>
              </div>
           </div>
        </div>
      </Slide>
    ),

    // 16. 데이터 기반 마케팅
    () => (
      <Slide title="데이터 기반 마케팅" subtitle="수료생 전수 조사를 통한 실질적 신뢰 확보" pageNumber={16}>
         <div className="grid grid-cols-3 gap-6 h-full">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center">
               <Search size={48} className="text-blue-500 mb-4" />
               <h6 className="text-xl font-black text-white mb-2">취업처 전수 조사</h6>
               <p className="text-slate-500 text-sm">구글폼 활용 수료생 취업 DB 체계화</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center">
               <Star size={48} className="text-yellow-500 mb-4" />
               <h6 className="text-xl font-black text-white mb-2">리뷰 마케팅 강화</h6>
               <p className="text-slate-500 text-sm">실제 인증 기반의 검색 인지도 장악</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center">
               <MessageSquare size={48} className="text-emerald-500 mb-4" />
               <h6 className="text-xl font-black text-white mb-2">카카오 마케팅</h6>
               <p className="text-slate-500 text-sm">DB 기반 상시 소통 및 모집 시스템</p>
            </div>
         </div>
      </Slide>
    ),

    // 17. 일반고 특화: 건축설계
    () => (
      <Slide title="일반고 특화: 건축설계" subtitle="담당: 최규남 선생님 (20H) / 필기 합격률 85% 목표" pageNumber={17}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 bg-blue-600 rounded-[3rem] text-white shadow-2xl">
              <h5 className="text-2xl font-black mb-4 uppercase tracking-wider">Architecture BIM Master</h5>
              <div className="space-y-2">
                 <p className="text-lg font-bold opacity-80">전산응용건축제도 기능사 필기 집중반</p>
                 <p className="text-4xl font-black">자격 취득 85%+</p>
              </div>
           </div>
           <div className="p-10 glass-panel rounded-[3rem] border border-white/10">
              <p className="text-xl text-slate-300 font-bold leading-relaxed">
                "필기 핵심 요약 및 BIM 실무 기초 교육을 통해 학생들의 전문성 조기 확보에 주력합니다."
              </p>
           </div>
        </div>
      </Slide>
    ),

    // 18. 일반고 특화: 멀티미디어
    () => (
      <Slide title="일반고 특화: 멀티미디어" subtitle="담당: 강민기 선생님 (20H) / 시각 디자인 실무 완성" pageNumber={18}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl">
              <h5 className="text-2xl font-black mb-4 uppercase tracking-wider">Visual Design Pro</h5>
              <div className="space-y-2">
                 <p className="text-lg font-bold opacity-80">컴퓨터그래픽스 필기 마스터</p>
                 <p className="text-4xl font-black">실무 디자인 강화</p>
              </div>
           </div>
           <div className="p-10 glass-panel rounded-[3rem] border border-white/10">
              <p className="text-xl text-slate-300 font-bold leading-relaxed">
                "학생들의 창의적 디자인 감각을 자격증으로 증명할 수 있는 필기 핵심 커리큘럼을 제공합니다."
              </p>
           </div>
        </div>
      </Slide>
    ),

    // 19. 일반고 특화: 생산정보시스템
    () => (
      <Slide title="일반고 특화: 생산정보" subtitle="담당: 염 숙 선생님 (30H) / ERP 실무 역량 고도화" pageNumber={19}>
        <div className="grid grid-cols-2 gap-10 h-full items-center">
           <div className="p-10 bg-emerald-600 rounded-[3rem] text-white shadow-2xl">
              <h5 className="text-2xl font-black mb-4 uppercase tracking-wider">ERP & Accounting</h5>
              <div className="space-y-2">
                 <p className="text-lg font-bold opacity-80">전산회계 2급 필기 완벽 대비</p>
                 <p className="text-4xl font-black">30시간 정밀 특강</p>
              </div>
           </div>
           <div className="p-10 glass-panel rounded-[3rem] border border-white/10">
              <p className="text-xl text-slate-300 font-bold leading-relaxed">
                "회계 기초부터 시스템 활용까지 탄탄한 기초 교육으로 자격증 합격을 견인합니다."
              </p>
           </div>
        </div>
      </Slide>
    ),

    // 20. 온라인 콘텐츠 제작 전략
    () => (
      <Slide title="온라인 콘텐츠 플랫폼" subtitle="자격증 취득률 향상을 위한 2월 사전 촬영 및 활용" pageNumber={20}>
         <div className="grid grid-cols-2 gap-10 h-full items-center">
            <div className="p-12 bg-red-600/10 rounded-[4rem] border border-red-500/20 text-center group">
               <Video size={80} className="text-red-500 mx-auto mb-8 group-hover:scale-110 transition-transform" />
               <h4 className="text-3xl font-black text-white mb-4">자격증 필기 요약</h4>
               <p className="text-slate-500 font-bold">2학기 방과후 및 계좌제반 수강생 대상 무상 제공 및 반복 학습 유도</p>
            </div>
            <div className="p-10 bg-white/5 rounded-[4rem] border border-white/10 h-full flex flex-col justify-center">
               <h6 className="text-2xl font-black text-blue-400 mb-6 uppercase">Platform Action</h6>
               <p className="text-xl text-slate-400 font-bold">
                 "디지털 콘텐츠 마케팅을 통한 수강생 유입 및 수료 후 사후 관리 시스템과 연계 가동"
               </p>
            </div>
         </div>
      </Slide>
    ),

    // 21. 품질 관리: 5분 점검 시스템
    () => (
      <Slide title="현장 밀착 품질 관리" subtitle="매일 오전 전체 강의실 5분 참관 및 환경 점검" pageNumber={21}>
         <div className="h-full flex flex-col items-center justify-center">
            <div className="w-56 h-56 bg-blue-600/10 rounded-full flex items-center justify-center mb-16 border border-blue-500/30 animate-pulse">
               <Eye size={100} className="text-blue-400" />
            </div>
            <div className="grid grid-cols-3 gap-16 text-center">
               <div className="space-y-2">
                  <h6 className="text-2xl font-black text-white uppercase">Teacher Audit</h6>
                  <p className="text-slate-500">강사 수업 태도 및 몰입도</p>
               </div>
               <div className="space-y-2">
                  <h6 className="text-2xl font-black text-white uppercase">Facility Audit</h6>
                  <p className="text-slate-500">기자재 가동 및 강의실 청결</p>
               </div>
               <div className="space-y-2">
                  <h6 className="text-2xl font-black text-white uppercase">Student Audit</h6>
                  <p className="text-slate-500">수강생 불편사항 즉시 해결</p>
               </div>
            </div>
         </div>
      </Slide>
    ),

    // 22. 시간강사 인력 관리
    () => (
      <Slide title="시간강사 운영 및 인적 쇄신" subtitle="성과 평가 기반 정규직 전환 및 쇄신 로드맵" pageNumber={22}>
         <div className="grid grid-cols-2 gap-10 h-full items-center">
            <div className="p-10 glass-panel rounded-[3.5rem] border border-white/5 h-full flex flex-col justify-center">
               <h6 className="text-2xl font-black text-blue-400 mb-6 underline underline-offset-4">2025 성과 점검 완료</h6>
               <p className="text-xl text-slate-400 font-bold">
                 개별 면담 및 평가 완료. 성과 기반 인적 구성 재편 및 검증 완료.
               </p>
            </div>
            <div className="p-10 bg-blue-600 rounded-[3.5rem] text-white shadow-2xl h-full flex flex-col justify-center">
               <h6 className="text-2xl font-black mb-8 border-b border-white/20 pb-4 uppercase">2026 HR Plan</h6>
               <ul className="space-y-6 text-xl font-bold">
                  <li>● 우수 강사 정규직 전환 확대로 소속감 고취</li>
                  <li>● 분야별 1급 신규 강사진 영입 가속화</li>
                  <li>● 강사별 교육 성과 KPI 상시 모니터링</li>
               </ul>
            </div>
         </div>
      </Slide>
    ),

    // 23. 교강사 수업량 목표 테이블
    () => (
      <Slide title="교강사 성과 관리 (M/H)" subtitle="책임 수업제 도입 및 연간 목표 관리 시스템" pageNumber={23}>
        <div className="flex-1 overflow-hidden glass-panel rounded-3xl p-1 shadow-xl border border-white/5">
           <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                 <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    <th className="py-4 px-6">성명 / 직책</th>
                    <th className="py-4 px-6">전문 분야</th>
                    <th className="py-4 px-6 text-right">2025 실적</th>
                    <th className="py-4 px-6 text-right text-blue-400">2026 목표 (M/H)</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {TEACHER_GOALS.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                       <td className="py-3 px-6 text-base font-black text-white">{row.name} {row.role}</td>
                       <td className="py-3 px-6 text-sm text-slate-400 font-bold">{row.field}</td>
                       <td className="py-3 px-6 text-right text-sm text-slate-600 font-bold tabular-nums">{row.m2025.toLocaleString()}</td>
                       <td className="py-3 px-6 text-right text-3xl text-blue-400 font-black tracking-tighter tabular-nums">{row.m2026.toLocaleString()}</td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </Slide>
    ),

    // 24. 시설 인프라 리모델링
    () => (
      <Slide title="시설 리모델링 & 인프라" subtitle="회계/사무 전용 강의실 최신화 및 공식 수검장 확보" pageNumber={24}>
         <div className="grid grid-cols-2 gap-10 h-full items-center">
            <div className="p-12 bg-indigo-900/30 rounded-[4rem] border border-indigo-500/20 text-center">
               <Monitor size={64} className="text-indigo-400 mx-auto mb-6" />
               <h6 className="text-2xl font-black text-white mb-4 uppercase">Modern Class</h6>
               <p className="text-slate-500 font-bold">강의실 전면 리모델링 및 고사양 PC 40대 전격 교체</p>
            </div>
            <div className="p-12 bg-emerald-900/30 rounded-[4rem] border border-emerald-500/20 text-center">
               <ShieldCheck size={64} className="text-emerald-400 mx-auto mb-6" />
               <h6 className="text-2xl font-black text-white mb-4 uppercase">Official Test Site</h6>
               <p className="text-slate-500 font-bold">한국세무사회 공식 수검장 지위 확보로 브랜드 신뢰도 완성</p>
            </div>
         </div>
      </Slide>
    ),

    // 25. Closing
    () => (
      <div className="h-full w-full flex flex-col items-center justify-center text-center p-8 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-indigo-950/20 pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] bg-blue-500/[0.05] rounded-full blur-[250px] -z-20"></div>
        
        <div className="mb-10 animate-pulse">
           <Award size={80} className="text-blue-500 mx-auto opacity-70"/>
        </div>
        
        <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-[-0.08em] leading-[0.8] text-shadow-strong uppercase">
          Forge the<br/>
          <span className="text-gradient underline decoration-blue-600 underline-offset-[16px] decoration-8">Future.</span>
        </h2>
        <div className="h-2 w-48 bg-gradient-to-r from-blue-600 to-transparent mb-12 rounded-full shadow-2xl"></div>
        
        <p className="text-2xl md:text-4xl font-light text-slate-400 leading-tight mb-16 max-w-5xl font-medium tracking-tight">
          2026년, <span className="text-white font-black underline decoration-blue-600 underline-offset-[12px] decoration-4">더국제직업전문학교</span>가<br/>
          성공의 역사를 다시 씁니다.
        </p>
        
        <button 
           onClick={() => setCurrentSlide(0)}
           className="px-12 py-6 bg-blue-600 text-white rounded-full text-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all group flex items-center space-x-8 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
        >
          <span className="tracking-tighter uppercase">Back to Start</span>
          <ChevronRight size={32} className="group-hover:translate-x-3 transition-transform duration-500" />
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
          className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all ${currentSlide === 0 ? 'opacity-5 pointer-events-none' : 'hover:bg-blue-600 hover:border-blue-500 shadow-2xl active:scale-90'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === 24}
          className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all ${currentSlide === 24 ? 'opacity-5 pointer-events-none' : 'hover:bg-blue-600 hover:border-blue-500 shadow-2xl active:scale-90'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modern Progress Line */}
      <div className="absolute top-10 left-10 right-10 z-50 h-1 bg-white/5 rounded-full overflow-hidden flex">
         {Array.from({length: 25}).map((_, i) => (
           <div 
             key={i} 
             className={`flex-1 h-full transition-all duration-700 ${i <= currentSlide ? (i === currentSlide ? 'bg-blue-400 shadow-[0_0_10px_#60a5fa]' : 'bg-blue-600/40') : 'bg-transparent border-r border-white/5'}`}
           />
         ))}
      </div>
    </div>
  );
};

export default App;