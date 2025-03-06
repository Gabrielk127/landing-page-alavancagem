"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

interface YoutubeVideoProps {
  video: string;
}

const TestimonialsYouTubeVideo = ({ video }: YoutubeVideoProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marca como true quando o componente é montado no cliente
  }, []);

  if (!isClient) {
    // Evita renderização no lado do servidor para evitar erro de hidratação
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "300px",
          aspectRatio: "9 / 16",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          url={video}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
          style={{ borderRadius: "15px" }}
        />
      </div>
    </div>
  );
};

export default TestimonialsYouTubeVideo;
