
import { RevenueData, CompetitorData } from './types';

// 2026년 매출 계획 (사용자 요청 수치 반영: 총 1,456명)
export const REVENUE_PLAN: RevenueData[] = [
  { category: '일반고', capacity: 174, rate: '69%', targetCount: 120, sessions: 6, rev2025: 66413, rev2026: 100798 },
  { category: '장기과정', capacity: 148, rate: '65%', targetCount: 96, sessions: 5, rev2025: 25339, rev2026: 41121 },
  { category: '단기과정', capacity: 500, rate: '100%', targetCount: 500, sessions: 60, rev2025: 56247, rev2026: 71681 },
  { category: '외부사업', capacity: 210, rate: '100%', targetCount: 210, sessions: 12, rev2025: 5000, rev2026: 10000 },
];

// 일반고 특화과정 과목
export const HIGH_SCHOOL_SUBJECTS = [
  { subject: '건축설계', content: '전산응용건축제도 기능사 필기', teacher: '최규남', hours: '20H' },
  { subject: '멀티미디어', content: '컴퓨터그래픽스 필기', teacher: '강민기', hours: '20H' },
  { subject: '생산정보시스템', content: '전산회계 2급 필기', teacher: '염 숙', hours: '30H' },
];

// 경쟁기관 분석 데이터 (사용자 요청 수치 반영)
export const COMPETITORS: CompetitorData[] = [
  { name: '국제첨단점', region: '광산구', mainField: '물류/건축/AI', revenue2025: 835590364, recruitment2025: 995, revenue2024: 0, recruitment2024: 0, achievement: 100 },
  { name: '그린광산점', region: '광산구', mainField: '건축설계/디자인', revenue2025: 642023080, recruitment2025: 818, revenue2024: 0, recruitment2024: 0, achievement: 0 },
  { name: '광주컴퓨터 기술학원', region: '광산구', mainField: '정보처리/단기', revenue2025: 395182560, recruitment2025: 861, revenue2024: 0, recruitment2024: 0, achievement: 0 },
  { name: '한울전산세무회계학원', region: '광산구', mainField: '세무회계/사무', revenue2025: 149418580, recruitment2025: 129, revenue2024: 0, recruitment2024: 0, achievement: 0 },
];

// 교강사 수업량 및 육성 목표
export const TEACHER_GOALS = [
  { name: '강민기', role: '직원', field: '건축설계/멀티', m2025: 2354, m2026: 3000 },
  { name: '채수훈', role: '직원', field: 'AI 특성화', m2025: 1757, m2026: 2500 },
  { name: '염숙', role: '직원', field: '생산정보/회계', m2025: 1098, m2026: 3000 },
  { name: '최규남', role: '직원', field: '건축설계', m2025: 0, m2026: 3000 },
  { name: '운영팀(4명)', role: '운영', field: '행정/강의병행', m2025: 0, m2026: 1500 },
];
