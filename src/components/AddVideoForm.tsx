import React, { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import type { Video } from "../types";

interface AddVideoFormProps {
  onAdd: (video: Omit<Video, "id">) => void;
}

export const AddVideoForm: React.FC<AddVideoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (!title || !url) return;
    onAdd({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <VStack spacing={3} align="start">
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
      <Button colorScheme="teal" onClick={handleSubmit} width="full">
        Ajouter
      </Button>
    </VStack>
  );
};
