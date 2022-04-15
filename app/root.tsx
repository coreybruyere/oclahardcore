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
  viewport: "width=device-width,initial-scale=1",
  title: "OC/LA HC",
  description:
    "Los Angeles and Orange County upcoming hardcore shows and events",
  "og:url": "https://oclahardcore.com/",
  "og:title": "Upcoming OC/LA Hardcore shows",
  "og:description":
    "OC/LA Hardcore Shows provides upcoming hardcore shows and events in the greater Los Angeles area (LA and OC).",
  "og:site_name": "OC/LA Hardcore",
  "twitter:card": "summary_large_image",
  "twitter:site": "OC/LA Hardcore",
  "twitter:domain": "oclahardcore.com",
  "twitter:title": "OC/LA Hardcore Shows",
  "twitter:description":
    "OC/LA Hardcore Shows provides upcoming hardcore shows and events in the greater Los Angeles area (LA and OC)..",
  "twitter:url": "https://oclahardcore.com/",
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
      <body className="𝔅𝔦𝔱𝔠𝔥 𝔞𝔰𝔰 𝔳𝔢𝔫𝔲𝔢𝔰 𝔥𝔞𝔳𝔢 𝔳𝔞𝔵 𝔯𝔢𝔮𝔲𝔦𝔯𝔢𝔪𝔢𝔫𝔱𝔰">
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}></script>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
