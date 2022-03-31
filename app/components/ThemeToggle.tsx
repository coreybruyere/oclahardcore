import { useState, useEffect, useRef } from "react";
import * as BaseSwitch from "@radix-ui/react-switch";

// const song = require("../assets/pay-the-toll-2.mp3");

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
  // const url = song;

  const [activeTheme, setActiveTheme] = useState("light");
  const [playing, setPlaying] = useState(false);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    document.documentElement.className = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

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

  const handleOnChange = () => {
    setActiveTheme(inactiveTheme);
    playing ? pause() : activeTheme === "light" && play();
  };

  return (
    <>
      {/* <button onClick={playing ? pause : play}>hi</button>
      <audio src={url} controls>
        <source src={url} type="audio/mpeg"></source>
      </audio> */}
      <BaseSwitch.Root
        checked={activeTheme === "light" ? false : true}
        onCheckedChange={handleOnChange}
        aria-label={`Change to ${inactiveTheme} mode`}
        title={`Change to ${inactiveTheme} mode`}
        className={`theme-toggle ${activeTheme === "light" ? "light" : "dark"}`}
      >
        <BaseSwitch.Thumb className="switch">
          <div aria-hidden>☀️</div> <div aria-hidden>🤘</div>
          {/* {inactiveTheme === "light" ? "☀️" : "🌙"} */}
        </BaseSwitch.Thumb>
      </BaseSwitch.Root>
    </>
  );
};
