import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header
      role="banner"
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>OC / LA Hardcore</h1>
      <ThemeToggle />
    </header>
  );
};
