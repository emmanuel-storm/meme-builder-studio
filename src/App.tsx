import React, { useState } from "react";
import { Container, Heading } from "@chakra-ui/react"
import { AddVideoForm } from "./components/AddVideoForm";
import { VideoList } from "./components/VideoList";
import { useVideos } from "./hooks/useVideos.tsx";

export const App: React.FC = () => {
  const { videos, addVideo, deleteVideo } = useVideos();

  return (
    <Container maxW="container.md" py={16}>
      <Heading mb={4}>🎥 Mes vidéos</Heading>
      <AddVideoForm onAdd={addVideo} />
      <VideoList videos={videos} onDelete={deleteVideo} />
    </Container>
  );
};

export default App;
