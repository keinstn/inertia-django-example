import "vite/modulepreload-polyfill";
import { createInertiaApp } from "@inertiajs/react";
import DefaultLayout from "./Layouts/DefaultLayout.jsx";
import { createRoot } from "react-dom/client";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

    let page = pages[`./Pages/${name}.jsx`];
    return { default: page.default, layout: page.layout || DefaultLayout };
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
