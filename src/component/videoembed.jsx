import React from "react";

const VideoEmbed = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/GfBHLVtbG6U?si=Xpen6rhCai57Dg1S"
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
