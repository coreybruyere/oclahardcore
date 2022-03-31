import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./styles/style.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "LA/OC HC",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const setInitialTheme = `
function getUserPreference() {
  if(window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}
document.body.dataset.theme = getUserPreference();
document.documentElement.className = getUserPreference();
`;

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}></script>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
