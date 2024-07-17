import { Plugin } from 'vue';
import { defineCustomElements } from 'stencil-library/loader';

export const ComponentLibrary: Plugin = {
  install() {
    defineCustomElements();

    // applyPolyfills().then(() => {
    // });
  },
};

