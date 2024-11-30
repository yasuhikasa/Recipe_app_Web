export interface Option {
  value: string;
  label: string;
}

export const cookingTimeOptions: Option[] = [
  { label: '10分以内', value: '10分以内' },
  { label: '30分以内', value: '30分以内' },
  { label: '1時間以内', value: '1時間以内' },
];

export const effortOptions: Option[] = [
  { label: '簡単な料理', value: '簡単な料理' },
  { label: '本格的な料理', value: '本格的な料理' },
];

export const purposeOptions: Option[] = [
  { label: 'ダイエット中', value: 'ダイエット中' },
  { label: '筋トレ後', value: '筋トレ後' },
  { label: '子供が喜ぶ', value: '子供が喜ぶ' },
];

export const moodOptions: Option[] = [
  { label: 'さっぱり', value: 'さっぱり' },
  { label: 'ガッツリ', value: 'ガッツリ' },
  { label: 'おしゃれ', value: 'おしゃれ' },
];

export const equipmentOptions = [
  { label: '電子レンジ', value: '電子レンジ' },
  { label: 'フライパン', value: 'フライパン' },
  { label: 'オーブン', value: 'オーブン' },
];

export const seasonOptions = [
  { label: '夏っぽい料理', value: '夏っぽい料理' },
  { label: '冬に温まるもの', value: '冬に温まるもの' },
];
