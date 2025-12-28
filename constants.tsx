
import { RevenueData, CompetitorData } from './types';

export const REVENUE_PLAN: RevenueData[] = [
  { category: '일반고', capacity: 174, rate: '70%', targetCount: 120, sessions: 6, rev2025: 66413, rev2026: 92284 },
  { category: '장기과정', capacity: 148, rate: '60%', targetCount: 60, sessions: 5, rev2025: 25339, rev2026: 61410 },
  { category: '단기과정', capacity: 500, rate: '60%', targetCount: 400, sessions: 60, rev2025: 56247, rev2026: 74716 },
  { category: '외부사업', capacity: 210, rate: '100%', targetCount: 210, sessions: 12, rev2025: 5000, rev2026: 10000 },
];

export const OCCUPATIONAL_DETAILS = [
  { no: 1, name: 'SW개발', type: '장기', count: 0, revenue: 0, prevCount: 8, prevRev: 4316 },
  { no: 2, name: '설계', type: '일반고', count: 30, revenue: 25542, prevCount: 20, prevRev: 16450 },
  { no: 2, name: '설계', type: '장기', count: 110, revenue: 49011, prevCount: 22, prevRev: 11931 },
  { no: 2, name: '설계', type: '단기', count: 84, revenue: 5401, prevCount: 43, prevRev: 1991 },
  { no: 3, name: '디자인/영상', type: '일반고', count: 20, revenue: 14865, prevCount: 24, prevRev: 17418 },
  { no: 3, name: '디자인/영상', type: '단기', count: 194, revenue: 10596, prevCount: 137, prevRev: 12663 },
  { no: 4, name: '회계', type: '장기', count: 30, revenue: 12398, prevCount: 22, prevRev: 9092 },
  { no: 4, name: '회계', type: '단기', count: 204, revenue: 14547, prevCount: 120, prevRev: 10544 },
  { no: 5, name: '사무', type: '단기', count: 336, revenue: 16675, prevCount: 257, prevRev: 13781 },
  { no: 6, name: '바리스타', type: '일반고', count: 40, revenue: 36521, prevCount: 20, prevRev: 17552 },
  { no: 6, name: '바리스타', type: '단기', count: 216, revenue: 11753, prevCount: 224, prevRev: 8609 },
  { no: 7, name: '이미용', type: '일반고', count: 20, revenue: 15356, prevCount: 20, prevRev: 14994 },
  { no: 7, name: '이미용', type: '단기', count: 48, revenue: 1708, prevCount: 5, prevRev: 194 },
  { no: 8, name: '제과제빵', type: '단기', count: 216, revenue: 14035, prevCount: 126, prevRev: 8369 },
];

export const COMPETITORS: CompetitorData[] = [
  { name: '국제첨단점', region: '광산구', mainField: '전체', revenue2025: 835590364, recruitment2025: 995, revenue2024: 962320000, recruitment2024: 1064, achievement: 86.8 },
  { name: '그린광산점', region: '광산구', mainField: '설계디자인', revenue2025: 642023080, recruitment2025: 818, revenue2024: 616229000, recruitment2024: 734, achievement: 104.2 },
  { name: '광주컴퓨터기술학원', region: '광산구', mainField: 'SW개발/사무', revenue2025: 395182560, recruitment2025: 861, revenue2024: 76675920, recruitment2024: 451, achievement: 515.4 },
  { name: '궁전제과', region: '광산구', mainField: '제과제빵', revenue2025: 377454400, recruitment2025: 496, revenue2024: 381888000, recruitment2024: 489, achievement: 98.8 },
];

export const TEACHER_GOALS = [
  { name: '박한별', role: '주임', field: '사무', m2025: 1430, m2026: 2000 },
  { name: '강민기', role: '직원', field: '시각디자인', m2025: 2354, m2026: 3000 },
  { name: '염숙', role: '직원', field: '회계', m2025: 1098, m2026: 3000 },
  { name: '채수훈', role: '직원', field: '시각디자인', m2025: 1757, m2026: 2500 },
  { name: '김단미', role: '직원', field: '제과제빵', m2025: 1678, m2026: 3000 },
  { name: '강연우', role: '직원', field: '이미용', m2025: 2085, m2026: 2500 },
  { name: '최규남', role: '직원', field: '건축설계', m2025: 0, m2026: 3000 },
  { name: '전수향', role: '직원', field: '제과제빵', m2025: 0, m2026: 2500 },
  { name: '박신희', role: '직원', field: '바리스타', m2025: 0, m2026: 2500 },
];
