import { useState, useEffect, useRef } from "react";
import * as BaseSwitch from "@radix-ui/react-switch";

import { setTheme } from "../utils";

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

  console.log(audioRef);

  const play = () => {
    setPlaying(true);
    audioRef.current?.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current?.pause();
  };

  const [toggleClass, setToggleClass] = useState("dark");
  let theme = typeof window !== "undefined" && localStorage.getItem("theme");

  const handleOnChange = () => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === "theme-dark"
    ) {
      setTheme("theme-light");
      setToggleClass("light");
      play();
    } else {
      setTheme("theme-dark");
      setToggleClass("dark");
      pause();
    }
  };
  // const [audio] = useState(typeof Audio !== "undefined" && new Audio(song));

  // console.log(audio);

  // const playAudio = () => {
  //   audio && audio.play();
  // };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === "theme-dark"
    ) {
      setToggleClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setToggleClass("light");
    }
  }, [theme]);

  return (
    <>
      {/* <button onClick={playing ? pause : play}>hi</button>
      <audio src={url} controls>
        <source src={url} type="audio/mpeg"></source>
      </audio> */}
      <BaseSwitch.Root
        onCheckedChange={handleOnChange}
        className={`theme-toggle ${toggleClass === "light" ? "light" : "dark"}`}
      >
        <BaseSwitch.Thumb className="switch">
          {toggleClass === "light" ? "☀️" : "🌙"}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
    </>
  );
};
