// pages/api/save-recipe.ts
import { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Firebase設定ファイルをインポート

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { recipe, formData, title } = req.body;

  // データのバリデーション
  if (!recipe || typeof recipe !== "string") {
    return res.status(400).json({ message: "レシピ内容が不正です。" });
  }

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "タイトルが不正です。" });
  }

  if (!formData || typeof formData !== "object") {
    return res.status(400).json({ message: "フォームデータが不正です。" });
  }

  try {
    // Firestoreにデータを保存
    const docRef = await addDoc(collection(db, "recipes"), {
      title: title.trim() || "未設定", // ユーザーが設定したタイトル（未設定の場合は "未設定"）
      recipe: recipe.trim(),           // レシピ内容（マークダウン）
      formData,                        // フォームデータ
      createdAt: serverTimestamp(),    // 作成日時
    });

    console.log("保存データ:", { title, recipe, formData });
    res.status(200).json({ message: "レシピが保存されました。", id: docRef.id });
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).json({ message: "レシピ保存中にエラーが発生しました。" });
  }
}
