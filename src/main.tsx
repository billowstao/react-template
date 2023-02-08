import * as React from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from 'styles/global-style/global-style.js';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement: HTMLElement = globalThis.document.querySelector('#root')!;

createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>
);
