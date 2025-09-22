import React, { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import type { Video } from "../types";

export const AddVideoForm: React.FC<AddVideoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const isValidUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

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
        isInvalid={!title}
        errorBorderColor="red.300"
      />
      <Input
        placeholder="URL de la vidéo"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        isInvalid={url !== "" && !isValidUrl(url)}
        errorBorderColor="red.300"
      />
      <Button
        colorScheme="teal"
        onClick={handleSubmit}
        width="full"
        isDisabled={!title || !isValidUrl(url)}
      >
        Ajouter
      </Button>
    </VStack>
  );
};

interface AddVideoFormProps {
  onAdd: (video: Omit<Video, "id">) => void;
}
