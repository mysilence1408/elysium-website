import Lazy from "@/utils/Lazy";
import React from "react";

const Video = () => {
  return (
    <div className=" bg-black">
      <h2 className=" sr-only">Elysium Video Reel</h2>
      <Lazy
        rootMargin="1500px"
        className=" h-screen relative overflow-hidden md:aspect-video md:h-auto"
      >
        <iframe
          src="https://www.youtube.com/embed/gYO1uk7vIcc?autoplay=1&mute=1&loop=1&playlist=gYO1uk7vIcc&controls=0&modestbranding=1&playsinline=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
        />
      </Lazy>
    </div>
  );
};

export default Video;
