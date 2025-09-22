import React from "react";
import { Box, Text, Card, CardBody, IconButton } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import type { Video } from "../types";
import { DeleteIcon } from "@chakra-ui/icons";

interface VideoCardProps {
  video: Video;
  onDelete?: (id: number) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onDelete }) => {
  return (
    <Card w="100%" maxW="600px" shadow="md" borderWidth="1px">
      <CardBody>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mb={3}>
            {video.title}
          </Text>
          {onDelete && (
            <IconButton
              aria-label="Supprimer"
              icon={<DeleteIcon />}
              size="sm"
              colorScheme="red"
              onClick={() => onDelete ? onDelete(video.id) : undefined}
            />
          )}
        </Box>
        <Box borderRadius="md" overflow="hidden">
          <ReactPlayer url={video.url} controls width="100%" />
        </Box>
      </CardBody>
    </Card>
  );
};
