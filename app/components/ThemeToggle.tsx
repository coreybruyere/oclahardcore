import { useState, useEffect, useRef } from "react";
import * as BaseSwitch from "@radix-ui/react-switch";
import useSound from "use-sound";

// const song = require("../pay-the-toll.mp3");
import song from "../assets/pay-the-toll.mp3";

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
  const url = song;

  const [activeTheme, setActiveTheme] = useState("light");
  const [playing, setPlaying] = useState(false);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const [play, { stop }] = useSound(song, { volume: 0.25 });

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
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );

  const playSong = () => {
    setPlaying(true);
    play();
  };

  const stopSong = () => {
    setPlaying(false);
    stop();
  };

  const handleOnChange = () => {
    setActiveTheme(inactiveTheme);
    playing ? stopSong() : activeTheme === "light" && playSong();
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
