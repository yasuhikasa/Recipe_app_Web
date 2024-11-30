import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import {
  moodOptions,
  cookingTimeOptions,
  effortOptions,
  seasonOptions,
  mealTimeOptions,
  genreOptions,
  purposeOptions,
  budgetOptions,
  peopleOptions,
  preferenceOptions,
  cookingGenreOptions,
} from "../../../utils/options";

type FormData = {
  mood: string;
  time: string;
  mealTime: string;
  genre: string;
  budget: string;
  purpose: string;
  effort: string[];
  season: string[];
  preferredIngredients: string; // 使いたい食材
  avoidedIngredients: string;  // 避けたい食材
  additionalNotes: string;     // その他特記事項
  people: string; // 人数
  preference: string; // 趣向
  cookingGenre: string; // 料理ジャンル
};

const RecipeFormExtended = () => {
  const [formData, setFormData] = useState<FormData>({
    mood: "",
    time: "",
    mealTime: "",
    genre: "",
    purpose: "",
    budget: "",
    effort: [],
    season: [],
    preferredIngredients: "",
    avoidedIngredients: "",
    additionalNotes: "",
    people: "", // 人数
  preference: "", // 趣向
  cookingGenre: "", // 料理ジャンル
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => {
      const updatedValues = checked
        ? [...(prev[name as keyof FormData] as string[]), value]
        : (prev[name as keyof FormData] as string[]).filter((item) => item !== value);
      return { ...prev, [name]: updatedValues };
    });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 800,
        mx: "auto",
        mt: 5,
        bgcolor: "linear-gradient(to bottom right, #ffe5d5, #fffaf0)",
        borderRadius: 3,
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#ff6347",
          mb: 4,
          fontFamily: "cursive",
        }}
      >
        🍳 あなたのこだわりレシピを探そう
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {/* 気分セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="mood-label">今日の気分😃</InputLabel>
              <Select
                labelId="mood-label"
                id="mood"
                name="mood"
                value={formData.mood}
                onChange={handleSelectChange}
              >
                {moodOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* 調理時間セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="time-label">調理時間⏰</InputLabel>
              <Select
                labelId="time-label"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleSelectChange}
              >
                {cookingTimeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* 食べる時間帯セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="meal-time-label">食べる時間帯🍽️</InputLabel>
              <Select
                labelId="meal-time-label"
                id="mealTime"
                name="mealTime"
                value={formData.mealTime}
                onChange={handleSelectChange}
              >
                {mealTimeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* 国ジャンルセクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="genre-label">国ジャンル🌏</InputLabel>
              <Select
                labelId="genre-label"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleSelectChange}
              >
                {genreOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

            {/* 料理ジャンルセクション */}
  <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
      <InputLabel id="cooking-genre-label">料理ジャンル🍲</InputLabel>
      <Select
        labelId="cooking-genre-label"
        id="cookingGenre"
        name="cookingGenre"
        value={formData.cookingGenre}
        onChange={handleSelectChange}
      >
        {cookingGenreOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

          {/* 目的セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="purpose-label">目的💪</InputLabel>
              <Select
                labelId="purpose-label"
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleSelectChange}
              >
                {purposeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* 予算セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="budget-label">予算💰</InputLabel>
              <Select
                labelId="budget-label"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleSelectChange}
              >
                {budgetOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>


  {/* 人数セクション */}
  <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
      <InputLabel id="people-label">人数👨‍👩‍👧‍👦</InputLabel>
      <Select
        labelId="people-label"
        id="people"
        name="people"
        value={formData.people}
        onChange={handleSelectChange}
      >
        {peopleOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

  {/* 趣向セクション */}
  <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
      <InputLabel id="preference-label">趣向🍽️</InputLabel>
      <Select
        labelId="preference-label"
        id="preference"
        name="preference"
        value={formData.preference}
        onChange={handleSelectChange}
      >
        {preferenceOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>


          {/* 手間セクション */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "#555" }}>
              手間
            </Typography>
            {effortOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    name="effort"
                    value={option.value}
                    onChange={handleCheckboxChange}
                    checked={formData.effort.includes(option.value)}
                  />
                }
                label={option.label}
              />
            ))}
          </Grid>

          {/* 季節感セクション */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "#555" }}>
              季節感
            </Typography>
            {seasonOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    name="season"
                    value={option.value}
                    onChange={handleCheckboxChange}
                    checked={formData.season.includes(option.value)}
                  />
                }
                label={option.label}
              />
            ))}
          </Grid>

          {/* テキストフィールドセクション */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "#555", mb: 2 }}>
              詳細設定
            </Typography>

            {/* 使いたい食材 */}
            <TextField
              fullWidth
              multiline
              label="使いたい食材 🥕"
              name="preferredIngredients"
              value={formData.preferredIngredients}
              onChange={handleInputChange}
              placeholder="例: 鶏肉, トマト　（50文字以内）"
              inputProps={{ maxLength: 50 }}
              sx={{ mb: 2 }}
            />

            {/* 避けたい食材 */}
            <TextField
              fullWidth
              multiline
              label="避けたい食材 🚫"
              name="avoidedIngredients"
              value={formData.avoidedIngredients}
              onChange={handleInputChange}
              placeholder="例: パクチー, ナス　（50文字以内）"
              inputProps={{ maxLength: 50 }}
              sx={{ mb: 2 }}
            />

            {/* その他特記事項 */}
            <TextField
              fullWidth
              multiline
              label="その他特記事項 ✍️"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="例: 油控えめで　（50文字以内）"
              inputProps={{ maxLength: 50 }}
            />
          </Grid>


          {/* 提出ボタン */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#ff6347",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                py: 1.5,
                ":hover": { bgcolor: "#e55347" },
              }}
            >
              レシピを探す 🚀
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RecipeFormExtended;
