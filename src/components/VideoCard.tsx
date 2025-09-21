import { Box, Text, Card, CardBody } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import type { Video } from "../types";
import React from "react"

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Card w="100%" maxW="600px" shadow="md" borderWidth="1px">
      <CardBody>
        <Text fontSize="lg" fontWeight="bold" mb={3}>
          {video.title}
        </Text>
        <Box borderRadius="md" overflow="hidder">
          <ReactPlayer url={video.url} controls width="100%"/>
        </Box>
      </CardBody>
    </Card>
  )
}

interface VideoCardProps {
  video: Video;
}
