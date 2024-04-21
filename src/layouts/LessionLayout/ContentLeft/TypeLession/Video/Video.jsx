import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";

const Video = ({ info }) => {
  const [link, setLink] = useState("");
  const [img, setImg] = useState("/image/lession/maxresdefault.jpg");
  const videoRef = useRef(null);

  useEffect(() => {
    setLink(info?.link);
    setImg('/image/lession/maxresdefault.jpg')
  }, [info]);

  return (
    <>
      <ReactPlayer
        controls={true}
        ref={videoRef}
        url={link}
        className={`w-full h-[100%]`}
        width="100%"
        height="100%"
        light={img}
        onEnded={() => {
          console.log("đã hết");
        }}
        onReady={() => {
          setLink(videoRef.current?.player?.player?.player?.currentSrc);
        }}
      />
    </>
  );
};

export default Video;
