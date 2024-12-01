import { NextApiRequest, NextApiResponse } from "next";

type RecipeRequestBody = {
  mood?: string;
  time?: string;
  effort?: string[];
  season?: string[];
  preferredIngredients?: string;
  avoidedIngredients?: string;
  additionalNotes?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      mood,
      time,
      effort = [],
      season = [],
      preferredIngredients = "",
      avoidedIngredients = "",
      additionalNotes = "",
    } = req.body as RecipeRequestBody;

    // ダミーレシピを作成
    const dummyRecipe = `
    レシピ名: ${mood || "おすすめレシピ"}の一品
    必要な材料リスト:
    - 材料1: 鶏肉 200g
    - 材料2: トマト 2個
    - 材料3: 塩 小さじ1
    - 材料4: オリーブオイル 大さじ1

    調理手順:
    1. 材料を全て適当な大きさに切ります。
    2. フライパンにオリーブオイルを熱し、鶏肉を炒めます。
    3. トマトを加え、塩で味付けをします。
    4. 中火で5分間煮込み、盛り付けて完成です。

    完成までの時間: 約20分
    料理のポイント:
    トマトの酸味を活かし、シンプルながら味わい深い一品に仕上げました。
    `;

    // ダミーレシピをレスポンスとして返却
    res.status(200).json({ recipe: dummyRecipe });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error generating recipe:", errorMessage);
    res.status(500).json({ message: "レシピ生成中にエラーが発生しました。", error: errorMessage });
  }
}


// import { NextApiRequest, NextApiResponse } from "next";
// import { OpenAI } from "openai";

// // OpenAI API の設定
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY || "", // .env.localにAPIキーを保存
// });

// type RecipeRequestBody = {
//   mood?: string;
//   time?: string;
//   effort?: string[];
//   season?: string[];
//   preferredIngredients?: string;
//   avoidedIngredients?: string;
//   additionalNotes?: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const {
//       mood,
//       time,
//       effort = [],
//       season = [],
//       preferredIngredients = "",
//       avoidedIngredients = "",
//       additionalNotes = "",
//     } = req.body as RecipeRequestBody;

//     // プロンプトの生成
//     const prompt = `
//     あなたはプロの料理アドバイザーです。以下の条件を元にレシピを考えてください:
//     - 今日の気分: ${mood || "指定なし"}
//     - 調理時間: ${time || "指定なし"}
//     - 手間: ${effort?.length ? effort.join(", ") : "指定なし"}
//     - 季節感: ${season?.length ? season.join(", ") : "指定なし"}
//     - 好きな食材: ${preferredIngredients || "指定なし"}
//     - 避けたい食材: ${avoidedIngredients || "指定なし"}
//     - その他特記事項: ${additionalNotes || "なし"}

//     条件に合ったレシピを1つだけ提案してください。レシピには以下を含めてください:
//     1. レシピ名
//     2. 必要な材料リスト
//     3. 調理手順
//     4. 完成までの時間
//     5. 料理のポイント
//     `;

//     // ChatCompletion API を呼び出し
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "あなたはプロの料理アドバイザーです。" },
//         { role: "user", content: prompt },
//       ],
//       max_tokens: 500,
//       temperature: 0.7,
//     });

//     const recipe = response.choices && response.choices.length > 0
//       ? response.choices[0].message?.content?.trim()
//       : null;

//     if (!recipe) {
//       return res.status(500).json({ message: "AIからのレシピが空です。" });
//     }

//     res.status(200).json({ recipe });
//   } catch (error: unknown) {
//     const errorMessage = error instanceof Error ? error.message : "Unknown error";
//     console.error("Error generating recipe:", errorMessage);
//     res.status(500).json({ message: "レシピ生成中にエラーが発生しました。", error: errorMessage });
//   }
// }
