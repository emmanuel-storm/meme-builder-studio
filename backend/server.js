const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
const FILE_PATH = "./videos.json";

// Get all videos
app.get("/api/videos", async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const videos = JSON.parse(data);
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de lire les vidéos" });
  }
});

// POST a new video
app.post("/api/videos", async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const videos = JSON.parse(data);

    const newVideo = { id: Date.now(), ...req.body };
    videos.push(newVideo);

    await fs.writeFile(FILE_PATH, JSON.stringify(videos, null, 2));
    res.status(201).json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible d'ajouter la vidéo" });
  }
});

// Delete a video
app.delete("/api/videos/:id", async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const videos = JSON.parse(data);

    const filteredVideos = videos.filter(
      (video) => video.id !== Number(req.params.id)
    );

    await fs.writeFile(FILE_PATH, JSON.stringify(filteredVideos, null, 2));
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de supprimer la vidéo" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
