import { useState } from "react";
import Link from "next/link";

import GlobalStyles from "../components/GlobalStyles";

export default function App({ Component, pageProps }) {
  const [state, setState] = useState("text");
  return (
    <>
      <GlobalStyles />
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Component bla={state} setState={setState} {...pageProps} />
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
