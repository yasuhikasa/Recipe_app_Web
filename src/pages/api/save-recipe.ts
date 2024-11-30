import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { recipe, formData } = req.body;

  try {
    // DBに保存するロジック（Firebase, MongoDB, PostgreSQLなどを使用）
    console.log("保存データ:", { recipe, formData });
    res.status(200).json({ message: "レシピが保存されました。" });
  } catch (error) {
    res.status(500).json({ message: "レシピ保存中にエラーが発生しました。" });
  }
}
