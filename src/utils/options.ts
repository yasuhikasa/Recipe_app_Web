export interface Option {
  value: string;
  label: string;
}

// 料理時間
export const cookingTimeOptions: Option[] = [
  { label: '10分以内', value: '10分以内' },
  { label: '20分以内', value: '20分以内' },
  { label: '30分以内', value: '30分以内' },
  { label: '40分以内', value: '40分以内' },
  { label: '50分以内', value: '50分以内' },
  { label: '1時間以内', value: '1時間以内' },
  { label: '1時間以上', value: '1時間以上' },
];

// 手間
export const effortOptions: Option[] = [
  { label: '簡単な料理', value: '簡単な料理' },
  { label: '本格的な料理', value: '本格的な料理' },
  { label: '時短料理', value: '時短料理' },
  { label: '丁寧な作り方', value: '丁寧な作り方' },
  { label: '片付けが簡単', value: '片付けが簡単' },
  { label: '初心者向け', value: '初心者向け' },
  { label: '豪華な見た目', value: '豪華な見た目' },
];


// 目的
export const purposeOptions: Option[] = [
  { label: 'ダイエット中', value: 'ダイエット中' },
  { label: 'ダイエット効果を高めたい', value: 'ダイエット効果を高めたい' },
  { label: '筋トレ後', value: '筋トレ後' },
  { label: '筋肉をつけたい', value: '筋肉をつけたい' },
  { label: 'マッチョになりたい', value: 'マッチョになりたい' },
  { label: '子供が喜ぶ', value: '子供が喜ぶ' },
  { label: '彼氏（旦那）が喜ぶ', value: '彼氏（旦那）が喜ぶ' },
  { label: '彼女（嫁）が喜ぶ', value: '彼女（嫁）が喜ぶ' },
  { label: 'お弁当用（子供）', value: 'お弁当用（子供）' },
  { label: 'お弁当用 (大人)', value: 'お弁当用 （大人）' },
  { label: 'ピクニック', value: 'ピクニック' },
  { label: 'アウトドア、キャンプで作りたい', value: 'アウトドア、キャンプで作りたい' },
  { label: 'ホームパーティー', value: 'ホームパーティー' },
  { label: 'ヘルシー志向', value: 'ヘルシー志向' },
  { label: 'スタミナ重視', value: 'スタミナ重視' },
  { label: 'おもてなし', value: 'おもてなし' },
  { label: '節約料理', value: '節約料理' },
  { label: '特別な日のごちそう', value: '特別な日のごちそう' },
  { label: 'リラックスしたい時', value: 'リラックスしたい時' },
  { label: '忙しい日の簡単ご飯', value: '忙しい日の簡単ご飯' },
  { label: '季節感を取り入れたい', value: '季節感を取り入れたい' },
];

// 予算
export const budgetOptions: Option[] = [
  { label: "300円以下", value: "300円以下" },
  { label: "500円以下", value: "500円以下" },
  { label: "1000円以下", value: "1000円以下" },
  { label: "2000円以下", value: "2000円以下" },
  { label: "3000円以下", value: "3000円以下" },
  { label: "4000円以下", value: "4000円以下" },
  { label: "5000円以下", value: "5000円以下" },
  { label: "6000円以下", value: "6000円以下" },
  { label: "7000円以下", value: "7000円以下" },
  { label: "8000円以下", value: "8000円以下" },
  { label: "9000円以下", value: "9000円以下" },
  { label: "10000円以下", value: "10000円以下" },
  { label: "15000円以下", value: "15000円以下" },
  { label: "20000円以下", value: "20000円以下" },
  { label: "30000円以下", value: "30000円以下" },
  { label: "40000円以下", value: "40000円以下" },
  { label: "50000円以下", value: "50000円以下" },
  { label: "制限なし", value: "制限なし" },
];


// 気分
export const moodOptions: Option[] = [
  { label: 'さっぱり', value: 'さっぱり' },
  { label: 'ガッツリ', value: 'ガッツリ' },
  { label: 'おしゃれ', value: 'おしゃれ' },
];

// 調理器具
export const equipmentOptions = [
  { label: '電子レンジ', value: '電子レンジ' },
  { label: 'フライパン', value: 'フライパン' },
  { label: 'オーブン', value: 'オーブン' },
];

// 季節感
export const seasonOptions = [
  { label: '夏っぽい料理', value: '夏っぽい料理' },
  { label: '冬に温まるもの', value: '冬に温まるもの' },
];

// 食べる時間帯
export const mealTimeOptions: Option[] = [
  { label: "朝食", value: "朝食" },
  { label: "昼食", value: "昼食" },
  { label: "夕食", value: "夕食" },
  { label: "おやつ", value: "おやつ" },
  { label: "夜食", value: "夜食" },
];

// ジャンル
export const genreOptions: Option[] = [
  { label: "和食", value: "和食" },
  { label: "中華", value: "中華" },
  { label: "韓国", value: "韓国" },
  { label: "イタリアン", value: "イタリアン" },
  { label: "フレンチ", value: "フレンチ" },
  { label: "アジアン", value: "アジアン" },
  { label: "エスニック", value: "エスニック" },
  { label: "アメリカン", value: "アメリカン" },
];
