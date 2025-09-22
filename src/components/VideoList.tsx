import React from "react";
import { VStack, Text, SimpleGrid } from "@chakra-ui/react"
import { VideoCard } from "./VideoCard";
import type { Video } from "../types";

interface VideoListProps {
  videos: Video[];
  onDelete?: (id: number) => void;
}

export const VideoList: React.FC<VideoListProps> = ({ videos, onDelete }) => {
  if (!Array.isArray(videos) || videos.length === 0) {
    return <Text color="gray.500">Aucune vidéo pour le moment</Text>;
  }

  return (
    <SimpleGrid columns={2} spacing={6} mt={6}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onDelete={onDelete} />
      ))}
    </SimpleGrid>
  );
};
