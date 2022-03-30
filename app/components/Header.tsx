import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header role="banner" className="container">
      <h1 className="u-m-0">
        <Logo />
      </h1>
      <ThemeToggle />
    </header>
  );
};
