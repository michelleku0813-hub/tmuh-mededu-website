import type { Lang } from '@/i18n';
import { pick } from '@/i18n';

export interface SnqMember {
  unit: string;
  role: string;
  person: string;
}

export interface SnqProject {
  certYear: string;
  badgeLabel: string;
  title: string;
  renewal?: string;
  members: SnqMember[];
}

export interface NhqaRecord {
  year: string;
  event: string;
  awardNote: string;
  group: string;
  domain: string;
  project: string;
  leads: string[];
  keywords: string[];
}

const SNQ_YEAR_COUNTS = [
  { year: '2021', count: 1 },
  { year: '2022', count: 1 },
  { year: '2023', count: 1 },
  { year: '2024', count: 2 },
];

const SNQ_PROJECTS_ZH: SnqProject[] = [
  {
    certYear: '2021',
    badgeLabel: '2021年第一次通過（2020標章）',
    title: '能力評量，精準教學',
    renewal: '通過續審：2022、2023、2024年',
    members: [
      { unit: '院長室', role: '教學副院長', person: '張君照' },
      { unit: '教學部', role: '教學部主任', person: '陳建宇' },
      { unit: '護理部', role: '教師發展中心副主任', person: '郭淑柳' },
      { unit: '泌尿科', role: '教學型主治醫師', person: '吳政誠' },
    ],
  },
  {
    certYear: '2022',
    badgeLabel: '2022年第一次通過（2021標章）',
    title: '全人照護教育全啟動',
    renewal: '通過續審：2023、2024年',
    members: [
      { unit: '院長室', role: '教學副院長', person: '張君照' },
      { unit: '復健醫學部', role: '實證醫學中心主任', person: '侯文萱' },
      { unit: '泌尿科', role: '教學型主治醫師', person: '吳政誠' },
      { unit: '教學部', role: '教學型醫事人員', person: '廖若帆' },
    ],
  },
  {
    certYear: '2023',
    badgeLabel: '2023年第一次通過（2022標章）',
    title: '智慧手術教學平台之建置及虛擬實境手術教學之導入',
    renewal: '通過續審：2024、2025年',
    members: [
      { unit: '復健醫學部', role: '教學副院長', person: '曾頌惠' },
      { unit: '院長室', role: '醫品副院長', person: '魏柏立' },
      { unit: '外科部', role: '重症副院長', person: '吳玉琮' },
      { unit: '教學部', role: '教學部主任', person: '陳建宇' },
      { unit: '外科部', role: '教學型主治醫師', person: '邱欣怡' },
    ],
  },
  {
    certYear: '2024',
    badgeLabel: '2023年11月通過（2023標章）· 12/19 頒獎典禮',
    title: '「能力導向醫學教育」的治理與社會責任實踐',
    renewal: '通過續審：2024、2025年',
    members: [
      { unit: '院長室', role: '教學副院長', person: '曾頌惠' },
      { unit: '外科部', role: '教學型主治醫師', person: '邱欣怡' },
      { unit: '教學部', role: '教學部主任', person: '陳建宇' },
      { unit: '泌尿科', role: '教學型主治醫師', person: '吳政誠' },
      { unit: '護理部', role: '護理部', person: '郭淑柳' },
      { unit: '教學部', role: '事務員', person: '吳玉琳' },
    ],
  },
  {
    certYear: '2024',
    badgeLabel: '2023年11月通過（2023標章）· 12/19 頒獎典禮',
    title: '點亮復原之路：實踐全人醫療與共創照護品質',
    renewal: '通過續審：2025年',
    members: [
      { unit: '院長室', role: '教學副院長', person: '曾頌惠' },
      { unit: '院長室', role: '醫品副院長', person: '魏柏立' },
      { unit: '院長室', role: '教學副院長', person: '張君照' },
      { unit: '教學部', role: '教學部主任', person: '陳建宇' },
      { unit: '教學部', role: '教學型醫事人員', person: '廖若帆' },
      { unit: '泌尿科', role: '教學型主治醫師', person: '吳政誠' },
    ],
  },
];

const SNQ_PROJECTS_EN: SnqProject[] = [
  {
    certYear: '2021',
    badgeLabel: 'First certified 2021 (2020 badge)',
    title: 'Competency Assessment & Precision Teaching',
    renewal: 'Renewed: 2022, 2023, 2024',
    members: [
      { unit: "Director's Office", role: 'VP · Medical Education', person: 'Chun-Chao Chang' },
      { unit: 'Medical Education', role: 'Department Director', person: 'Chien-Yu Chen' },
      { unit: 'Nursing', role: 'Deputy Dir. · Faculty Dev.', person: 'Shu-Liu Kuo' },
      { unit: 'Urology', role: 'Teaching Attending', person: 'Jeng-Cheng Wu' },
    ],
  },
  {
    certYear: '2022',
    badgeLabel: 'First certified 2022 (2021 badge)',
    title: 'Full Launch of Holistic Care Education',
    renewal: 'Renewed: 2023, 2024',
    members: [
      { unit: "Director's Office", role: 'VP · Medical Education', person: 'Chun-Chao Chang' },
      { unit: 'Rehab Medicine', role: 'EBM Center Director', person: 'Wen-Hsuan Hou' },
      { unit: 'Urology', role: 'Teaching Attending', person: 'Jeng-Cheng Wu' },
      { unit: 'Medical Education', role: 'Teaching Allied Health', person: 'Faith Ruofan Liao' },
    ],
  },
  {
    certYear: '2023',
    badgeLabel: 'First certified 2023 (2022 badge)',
    title: 'Smart Surgery Teaching Platform & VR Surgical Training',
    renewal: 'Renewed: 2024, 2025',
    members: [
      { unit: 'Rehab Medicine', role: 'VP · Medical Education', person: 'Sung-Hui Tseng' },
      { unit: "Director's Office", role: 'VP · Quality', person: 'Po-Li Wei' },
      { unit: 'Surgery', role: 'VP · Critical Care', person: 'Yu-Tsung Wu' },
      { unit: 'Medical Education', role: 'Department Director', person: 'Chien-Yu Chen' },
      { unit: 'Surgery', role: 'Teaching Attending', person: 'Hsin-Yi Chiu' },
    ],
  },
  {
    certYear: '2024',
    badgeLabel: 'Certified Nov 2023 (2023 badge) · Ceremony 12/19',
    title: 'Governance & Social Responsibility of Competency-Based Medical Education',
    renewal: 'Renewed: 2024, 2025',
    members: [
      { unit: "Director's Office", role: 'VP · Medical Education', person: 'Sung-Hui Tseng' },
      { unit: 'Surgery', role: 'Teaching Attending', person: 'Hsin-Yi Chiu' },
      { unit: 'Medical Education', role: 'Department Director', person: 'Chien-Yu Chen' },
      { unit: 'Urology', role: 'Teaching Attending', person: 'Jeng-Cheng Wu' },
      { unit: 'Nursing', role: 'Nursing Dept.', person: 'Shu-Liu Kuo' },
      { unit: 'Medical Education', role: 'Administrative Staff', person: 'Yu-Lin Wu' },
    ],
  },
  {
    certYear: '2024',
    badgeLabel: 'Certified Nov 2023 (2023 badge) · Ceremony 12/19',
    title: 'Lighting the Road to Recovery: Holistic Medicine & Co-created Care Quality',
    renewal: 'Renewed: 2025',
    members: [
      { unit: "Director's Office", role: 'VP · Medical Education', person: 'Sung-Hui Tseng' },
      { unit: "Director's Office", role: 'VP · Quality', person: 'Po-Li Wei' },
      { unit: "Director's Office", role: 'VP · Medical Education', person: 'Chun-Chao Chang' },
      { unit: 'Medical Education', role: 'Department Director', person: 'Chien-Yu Chen' },
      { unit: 'Medical Education', role: 'Teaching Allied Health', person: 'Faith Ruofan Liao' },
      { unit: 'Urology', role: 'Teaching Attending', person: 'Jeng-Cheng Wu' },
    ],
  },
];

const NHQA_ZH: NhqaRecord = {
  year: '112年',
  event: '2022/10/20–21 @ 臺北榮民總醫院',
  awardNote: '111年標章',
  group: '智慧醫療類 · 智慧解決方案組',
  domain: '教學研究領域',
  project: '智慧手術教學平台之建置及虛擬實境手術教學之導入',
  leads: ['曾頌惠', '魏柏立', '吳玉琮', '陳建宇', '邱欣怡'],
  keywords: ['虛擬實境', '教育平台', '外科教學', '人工智慧'],
};

const NHQA_EN: NhqaRecord = {
  year: 'AY112',
  event: 'Oct 20–21, 2022 @ Taipei Veterans General Hospital',
  awardNote: 'AY111 Badge',
  group: 'Smart Healthcare · Smart Solutions Track',
  domain: 'Teaching & Research',
  project: 'Smart Surgery Teaching Platform & VR Surgical Training',
  leads: ['Sung-Hui Tseng', 'Po-Li Wei', 'Yu-Tsung Wu', 'Chien-Yu Chen', 'Hsin-Yi Chiu'],
  keywords: ['Virtual Reality', 'Education Platform', 'Surgical Teaching', 'AI'],
};

export function buildDeptAwards(lang: Lang) {
  const isZh = lang === 'zh';
  return {
    eyebrow: pick(lang, 'Quality Honors', 'Quality Honors'),
    title: pick(lang, '品質榮譽', 'Quality Honors'),
    desc: pick(
      lang,
      '教學部推動之專案於國家品質標章（SNQ）與國家醫療品質獎（NHQA）的認證與獲獎紀錄。',
      'SNQ certifications and NHQA awards for projects led by the Department of Medical Education.',
    ),
    snqTitle: pick(lang, 'SNQ 國家品質標章', 'SNQ National Quality Symbol'),
    nhqaTitle: pick(lang, 'NHQA 國家醫療品質獎', 'NHQA National Healthcare Quality Award'),
    snqYearCounts: SNQ_YEAR_COUNTS,
    snqProjects: isZh ? SNQ_PROJECTS_ZH : SNQ_PROJECTS_EN,
    nhqa: isZh ? NHQA_ZH : NHQA_EN,
    colUnit: pick(lang, '部門', 'Unit'),
    colRole: pick(lang, '職稱', 'Role'),
    colPerson: pick(lang, '負責人', 'Lead'),
    renewalLabel: pick(lang, '續審', 'Renewal'),
    nhqaEbmLink: pick(lang, '實證醫學類競賽詳見實證醫學中心 →', 'EBM contest awards — see EBM Center →'),
    dataSource: pick(lang, '資料來源：教學部 績效管理組 BI 團隊', 'Source: Performance Mgmt · BI Team'),
  };
}
