import  { useState, useEffect } from "react";
import type {Video} from "../types"
import { useToast } from "@chakra-ui/react"

const API_URL = "http://localhost:4000/api/videos";

export const useVideos = () => {
  const toast = useToast();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setVideos(data))
  }, [])

  async function addVideo(video: Omit<Video, "id">) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(video),
      });

      const newVideo = await res.json();
      setVideos((prev) => [...prev, newVideo]);

      toast({
        title: "Ajout de la vidéo.",
        description: "La vidéo a été ajoutée avec succes",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }
    catch (err) {
      toast({
        title: "erreur lors de l'ajour de vidéo.",
        status: "error",
        description: "Impossible d'ajouter la vidéo",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  async function deleteVideo(id: number) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setVideos((prev) => prev.filter((v) => v.id !== id));
  }

  return { videos, addVideo, deleteVideo };
}
