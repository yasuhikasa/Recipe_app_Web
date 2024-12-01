import React, { useState } from "react";
import { Box, Typography, Button, Modal, Grid, TextField } from "@mui/material";

type RecipeModalProps = {
  open: boolean;
  recipe: string;
  onClose: () => void;
  onSave: (title: string) => void; // タイトルを渡す
};

const RecipeModal: React.FC<RecipeModalProps> = ({ open, recipe, onClose, onSave }) => {
  const [title, setTitle] = useState<string>("");

  const handleSave = () => {
    if (!title.trim()) {
      alert("タイトルを入力してください。");
      return;
    }
    onSave(title.trim());
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="recipe-modal-title"
      aria-describedby="recipe-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="recipe-modal-title" variant="h5" sx={{ mb: 2, color: "#ff6347" }}>
          AIが提案したレシピ 🍴
        </Typography>
        <Typography
          id="recipe-modal-description"
          variant="body1"
          sx={{ whiteSpace: "pre-line", mb: 3 }}
        >
          {recipe}
        </Typography>
        <TextField
          fullWidth
          label="レシピタイトルを入力してください"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#ff6347", ":hover": { bgcolor: "#e55347" } }}
              onClick={handleSave}
            >
              保存する
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={onClose}>
              保存しない
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default RecipeModal;
