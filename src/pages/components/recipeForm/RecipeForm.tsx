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
import { SelectChangeEvent } from '@mui/material';
import { moodOptions, cookingTimeOptions, effortOptions, purposeOptions, seasonOptions } from "../../../utils/options";

type FormData = {
  mood: string;
  time: string;
  effort: string[];
  purpose: string;
  season: string[];
};

const RecipeFormExtended = () => {
  const [formData, setFormData] = useState<FormData>({
    mood: "",
    time: "",
    effort: [],
    purpose: "",
    season: [],
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof FormData]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const updatedValues = checked
        ? [...(prev[name as keyof FormData] as string[]), value]
        : (prev[name as keyof FormData] as string[]).filter((item) => item !== value);
      return { ...prev, [name as keyof FormData]: updatedValues };
    });
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

          {/* 時間セクション */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="time-label">調理時間🍳</InputLabel>
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
