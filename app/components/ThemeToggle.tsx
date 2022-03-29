import { useState, useEffect, useRef } from "react";
import * as BaseSwitch from "@radix-ui/react-switch";

const song = require("../assets/pay-the-toll-2.mp3");

// const useAudio = (url: any) => {
//   const [audio, setAudio] = useState<HTMLAudioElement>();
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     if (typeof Audio !== "undefined" && url) {
//       const audio = new Audio(url);
//       setAudio(audio);
//     }
//     playing ? audio?.play() : audio?.pause();
//   }, [playing, url]);

//   useEffect(() => {
//     audio?.addEventListener("ended", () => setPlaying(false));
//     return () => {
//       audio?.removeEventListener("ended", () => setPlaying(false));
//     };
//   });

//   return [playing, toggle];
// };

export const ThemeToggle = () => {
  // const [playing, toggle] = useAudio(song);

  const [playing, setPlaying] = useState(false);

  const url = song;

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio("https://www.w3schools.com/html/horse.ogg")
      : undefined
  );

  const play = () => {
    setPlaying(true);
    audioRef.current?.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current?.pause();
  };

  // const [audio] = useState(typeof Audio !== "undefined" && new Audio(song));

  // console.log(audio);

  // const playAudio = () => {
  //   audio && audio.play();
  // };

  console.log(url.default);
  return (
    <>
      {/* <button onClick={playing ? pause : play}>hi</button>
      <audio src={url} controls>
        <source src={url} type="audio/mpeg"></source>
      </audio> */}
      <BaseSwitch.Root onCheckedChange={playing ? pause : play}>
        <BaseSwitch.Thumb />
      </BaseSwitch.Root>
    </>
  );
};
