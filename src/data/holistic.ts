import { person, type RawPerson } from './people';
import type { Lang } from '@/i18n';
import { pick } from '@/i18n';

export const HOLISTIC_INSTRUCTORS: RawPerson[] = [
  person('廖若帆', 'Faith Ruofan Liao', 'instructor', '護理 · 副教授<br>教學部 全人中心', 'Nursing · Assoc. Prof.<br>Holistic Center', 'faith-ruofan-liao', 'faith-ruofan-liao'),
  person('吳忠哲', 'Chung-Che Wu', 'instructor', '西醫 · 副教授<br>神經外科', 'Physician · Assoc. Prof.<br>Neurosurgery', 'chung-che-wu', 'chung-che-wu'),
];

export const HOLISTIC_SEED: RawPerson[] = [
  person('丁禮莉', 'Lai-Lei Ting', 'seed', '西醫<br>放射腫瘤科', 'Physician<br>Radiation Oncology', 'lai-lei-ting'),
  person('吳政誠', 'Jeng-Cheng Wu', 'seed', '西醫 · 助理教授<br>泌尿科', 'Physician · Asst. Prof.<br>Urology', 'jeng-cheng-wu'),
  person('彭思媛', 'Szu-Yuan Peng', 'seed', '社工<br>社工室', 'Social Work<br>Social Work Office'),
  person('王莉萱', 'Li-Hsuan Wang', 'seed', '藥劑 · 教授<br>藥劑部', 'Pharmacy · Prof.<br>Pharmacy', 'li-hsuan-wang'),
  person('范芳郡', 'Fang-Chun Fan', 'seed', '放射<br>影像醫學部', 'Radiology<br>Medical Imaging', 'fang-chun-fan'),
  person('曹念萱', 'Nien-Hsuan Tsao', 'seed', '護理<br>護理部', 'Nursing<br>Nursing Dept.', 'nien-hsuan-tsao'),
  person('曲天尚', 'Tien-Shang Chu', 'seed', '護理<br>護理部', 'Nursing<br>Nursing Dept.', 'tien-shang-chu'),
  person('高倩琪', 'Chien-Chi Kao', 'seed', '關懷師<br>員工關懷中心', 'Chaplain<br>Staff Care'),
  person('蔡宜庭', 'Yi-Ting Tsai', 'seed', '臨床心理<br>精神科', 'Clinical Psych.<br>Psychiatry'),
  person('葉雅文', 'Ya-Wen Yeh', 'seed', '語言治療<br>復健醫學部', 'Speech Therapy<br>Rehab Medicine'),
  person('王怡文', 'Yi-Wen Wang', 'seed', '行政<br>教學部', 'Administration<br>Medical Education'),
];

export const HOLISTIC_AI_TEAM: RawPerson[] = [
  person('廖若帆', 'Faith Ruofan Liao', 'pm', '副主任 · 副教授', 'Deputy Director · Assoc. Prof.', 'faith-ruofan-liao', 'faith-ruofan-liao'),
  person('邵軒磊', 'Hsuan-Lei Shao', 'ai', '教授', 'Professor'),
  person('Diana Gonzalez', 'Diana Gonzalez', 'eng', 'MD · 範疇二團隊', 'MD · Scope 2 Team'),
];

interface AlgeeStep {
  letter: string;
  zh: [string, string];
  en: [string, string];
}

export const ALGEE: AlgeeStep[] = [
  { letter: 'A', zh: ['接近、評估與協助危機', '主動關懷，留意潛在的自傷或危機徵兆，在安全前提下評估狀況並適時介入。'], en: ['Approach, assess & assist', 'Reach out with care, watch for signs of self-harm or crisis, and step in safely when needed.'] },
  { letter: 'L', zh: ['不帶批判地聆聽', '放下評價，給予一個安全、被理解的傾訴空間，讓對方願意說出感受。'], en: ['Listen non-judgmentally', 'Set judgment aside and offer a safe, understanding space so the person feels heard.'] },
  { letter: 'G', zh: ['給予支持與資訊', '提供正確、實用的身心健康資訊，並表達理解與支持。'], en: ['Give support & information', 'Share accurate, practical mental-health information alongside understanding and support.'] },
  { letter: 'E', zh: ['鼓勵尋求專業協助', '協助對方連結醫療與專業資源，跨出求助的第一步。'], en: ['Encourage professional help', 'Help the person connect with medical and professional resources, and take the first step.'] },
  { letter: 'E', zh: ['鼓勵其他支持', '善用家庭、同儕與社區的支持網絡，讓關懷持續發生。'], en: ['Encourage other supports', 'Draw on family, peer and community networks so support continues over time.'] },
];

export interface HolisticKpi {
  num: number;
  display: string;
  isStatic: boolean;
  label: string;
  color: string;
}

export function holisticKpis(lang: Lang): HolisticKpi[] {
  const raw = [
    { num: 2, label: pick(lang, 'MHFA 指導員', 'MHFA Instructors'), color: '#5E7A8C' },
    { num: 11, label: pick(lang, 'MHFA 種子教師', 'MHFA Seed Teachers'), color: '#B69B66' },
    { num: 142, label: pick(lang, '全人種子教師', 'Holistic Seed Teachers'), color: '#4f8c7d' },
    { display: '?', label: pick(lang, '發表論文', 'Publications'), color: '#A87A6B' },
  ];
  return raw.map((k) => ({
    num: 'num' in k ? (k.num as number) : 0,
    display: 'display' in k ? (k.display as string) : '',
    isStatic: 'display' in k,
    label: k.label,
    color: k.color,
  }));
}

export interface HolisticFeature {
  iconId: string;
  title: string;
  desc: string;
  delay: number;
}

export function holisticFeatures(lang: Lang): HolisticFeature[] {
  return [
    { iconId: 'brain', title: pick(lang, '心理健康急救', 'Mental Health First Aid'), desc: pick(lang, '引進國際 MHFA 課程，培訓同仁辨識、陪伴並適時轉介需要協助的人。', 'International MHFA training to recognize, accompany and refer those who need help.'), delay: 0 },
    { iconId: 'sprout', title: pick(lang, '種子教師培育', 'Seed Teacher Cultivation'), desc: pick(lang, '集結護理、醫師、藥劑、社工、心理、語言治療等跨領域人才，將關懷文化向下扎根。', 'Bringing together nursing, medicine, pharmacy, social work, psychology and more to root a culture of care.'), delay: 100 },
    { iconId: 'network', title: pick(lang, '跨科部協作', 'Cross-Department Collaboration'), desc: pick(lang, '串連臨床各單位與校園資源，打造彼此支持、能即時伸出援手的健康職場。', 'Linking clinical units and campus resources into a supportive, responsive, healthy workplace.'), delay: 200 },
    { iconId: 'team', title: pick(lang, '全人教育小組', 'Holistic Education Working Group'), desc: pick(lang, '跨越西醫、中醫、牙醫與各醫事職類，組成專責團隊，共同鑽研全人照護教案設計與教學發展，讓全人精神在每個專業領域生根。', 'A dedicated cross-professional team — uniting Western medicine, TCM, dentistry and all allied-health roles — to co-develop holistic-care teaching cases and curricula across every discipline.'), delay: 300 },
  ];
}

export interface AiFlowStep {
  role: string;
  title: string;
  text: string;
  color: string;
}
export interface AiStep {
  n: string;
  title: string;
  text: string;
}

export function buildAiEcosystem(lang: Lang) {
  return {
    title: pick(lang, 'AI 全人照護教學模擬生態系', 'AI Holistic-Care Teaching Simulation Ecosystem'),
    body: pick(
      lang,
      '本計畫的核心不是單一工具，而是一個可以反覆練習、即時回饋、持續累積案例的教學模擬生態系。以全人臨床情境為主軸，串接 AI 病人、教案 AI 化、平板與 VR 模擬練習、全人學習成效回饋，以及 Line AI ChatBot 隨身助教，讓教師設計情境、學生進入情境，AI 協助互動與回饋。',
      'The core is not a single tool but a teaching-simulation ecosystem for repeated practice, instant feedback and an accumulating case library — connecting AI patients, AI-authored cases, tablet & VR simulation, holistic learning feedback and a Line AI ChatBot assistant.',
    ),
    problemsTitle: pick(lang, '生態系要解決什麼問題？', 'What does the ecosystem solve?'),
    teamLabel: pick(lang, '範疇二团隊', 'Scope 2 Team'),
    flow: [
      { role: pick(lang, '教師端', 'Faculty'), title: pick(lang, '教案 AI 化', 'AI-authored cases'), text: pick(lang, '把全人照護目標、臨床任務與討論問題轉成可互動的情境教案。', 'Turn holistic-care goals, clinical tasks and discussion prompts into interactive case scenarios.'), color: '#4f8c7d' },
      { role: pick(lang, '情境內容', 'Scenario'), title: pick(lang, '全人臨床情境', 'Whole-person clinical context'), text: pick(lang, '以醫學、人文、心理、倫理與照護脈絡設計案例。', 'Cases designed across medical, humanistic, psychological, ethical and care contexts.'), color: '#6E8A77' },
      { role: pick(lang, '學生端', 'Student'), title: pick(lang, '平板與 VR 模擬練習', 'Tablet & VR simulation'), text: pick(lang, '學生透過問診、判斷、醫令與治療計畫練習臨床推理。', 'Students practice clinical reasoning through history-taking, judgment, orders and treatment plans.'), color: '#5E7A8C' },
      { role: pick(lang, '回饋端', 'Feedback'), title: pick(lang, '即時回饋與 Line AI ChatBot', 'Instant feedback & Line AI ChatBot'), text: pick(lang, '提供學習歷程回饋與全人臨床隨身助教，支援課後延伸學習。', 'Learning-process feedback plus an on-the-go holistic clinical assistant for after-class study.'), color: '#B69B66' },
    ] as AiFlowStep[],
    steps: [
      { n: '01', title: pick(lang, '情境設計', 'Scenario design'), text: pick(lang, '教師將全人照護能力指標轉為臨床任務與討論問題', 'Faculty translate holistic-care competencies into clinical tasks and prompts') },
      { n: '02', title: pick(lang, 'AI 病人互動', 'AI patient interaction'), text: pick(lang, '學生與 AI 病人進行問診、診斷說明與治療溝通', 'Students conduct history-taking, diagnosis and treatment communication with an AI patient') },
      { n: '03', title: pick(lang, '模擬練習導入', 'Simulation practice'), text: pick(lang, '結合平板、VR 與小組討論，讓課程更貼近臨床現場', 'Tablet, VR and group discussion bring courses closer to the clinical floor') },
      { n: '04', title: pick(lang, '回饋與延伸', 'Feedback & extension'), text: pick(lang, '以即時回饋與 ChatBot 協助學生整理學習成效', 'Instant feedback and the ChatBot help students consolidate learning outcomes') },
    ] as AiStep[],
    problems: pick(
      lang,
      [
        '讓全人照護不只停留在理念，而是變成可操作、可練習、可回饋的教學流程。',
        '讓學生在進入真實臨床前，先透過 AI 病人練習問診、判斷、溝通與治療計畫。',
        '讓教師能快速產出情境教案，並透過學習成效回饋持續修正課程。',
      ],
      [
        'Make holistic care operational, practiceable and measurable — not just an ideal.',
        'Let students rehearse history-taking, judgment, communication and treatment with AI patients before real clinics.',
        'Help faculty rapidly produce case scenarios and refine courses through learning-outcome feedback.',
      ],
    ),
  };
}
