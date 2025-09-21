import { Box, Heading, Text, Button, VStack, SimpleGrid } from '@chakra-ui/react'
import * as React from "react"
import { AddVideoForm } from "./components/AddVideoForm"
import { VideoCard } from "./components/VideoCard"
import type { Video } from "./types";

const App: React.FC = () => {
  const [videos, setVideos] = React.useState<Video[]>([]);

  const handleAddVideo = (video: Video) => {
    setVideos((prev) => [...prev, video]);
  }

  return (
    <Box p={6}>
      <Heading mb={4}>🎥 Mes vidéos</Heading>
      <AddVideoForm onAdd={handleAddVideo}/>

      <SimpleGrid columns={3} spacing={4} mt={6}>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video}/>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default App
