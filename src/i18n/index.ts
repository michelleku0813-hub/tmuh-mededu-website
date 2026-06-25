import { zh, type Strings } from './zh';
import { en } from './en';

export type Lang = 'zh' | 'en';

export const strings: Record<Lang, Strings> = { zh, en };

export type { Strings };

/** Pick a localized value: zh string when lang is 'zh', otherwise en. */
export const pick = <T,>(lang: Lang, zhVal: T, enVal: T): T =>
  lang === 'zh' ? zhVal : enVal;
