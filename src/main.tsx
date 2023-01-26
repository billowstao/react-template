import * as React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement: HTMLElement = globalThis.document.querySelector('#root')!;

createRoot(rootElement).render(<React.StrictMode />);
