import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header role="banner" className="container">
      <h1 className="logo">OC/LA Hardcore Shows</h1>
      <ThemeToggle />
    </header>
  );
};
