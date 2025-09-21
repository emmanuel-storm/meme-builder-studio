import React from "react";
import { Box, Input, Button, VStack } from "@chakra-ui/react";
import type { Video } from "../types";

export const AddVideoForm: React.FC<AddVideoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) return;

    onAdd({ title, url });
    setTitle("");
    setUrl("");
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4} mb={4}>
        <Input
          placeholder="Titre de la vidéo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="URL de la vidéo"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </VStack>
      <Button type="submit" colorScheme="teal" w="100%">Ajouter</Button>
    </Box>
  )
}

interface AddVideoFormProps {
  onAdd: (video: Video) => void;
}
