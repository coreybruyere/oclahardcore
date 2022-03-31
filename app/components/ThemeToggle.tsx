import { useState, useEffect } from "react";
import * as BaseSwitch from "@radix-ui/react-switch";
import useSound from "use-sound";

import song from "../assets/pay-the-toll.mp3";

export const ThemeToggle = () => {
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
