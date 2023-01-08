import * as React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement: HTMLElement = globalThis.document.querySelector('#root')!;

createRoot(rootElement).render(<React.StrictMode></React.StrictMode>);
