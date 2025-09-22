import React, { useState } from "react";
import { Container, Heading, Toast } from "@chakra-ui/react"
import { AddVideoForm } from "./components/AddVideoForm";
import { VideoList } from "./components/VideoList";
import type { Video } from "./types";

export const App: React.FC = () => {
  const [videos, setVideos] = useState([]);

  React.useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("http://localhost:4000/api/videos");
        const data = await res.json();
        setVideos(Array.isArray(data) ? data : []);
      } catch (err) {
        return <Toast>Erreur lors de la récupération des videos, {err}</Toast>
      }
    }

    fetchVideos();
  }, []);

  React.useEffect(() => {
    console.log("Videos updated:", videos);
  }, [videos]);

  const handleAddVideo = (video: Omit<Video, "id">) => {
    setVideos((prev) => [
      ...prev,
      { ...video, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
  };

  const handleDeleteVideo = (id: number) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <Container maxW="container.md" py={16}>
      <Heading mb={4}>🎥 Mes vidéos</Heading>
      <AddVideoForm onAdd={handleAddVideo} />
      <VideoList videos={videos} onDelete={handleDeleteVideo} />
    </Container>
  );
};

export default App;
