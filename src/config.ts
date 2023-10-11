// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "MOCO'24";
export const SITE_DESCRIPTION =
  "9th International Conference on Movement and Computing.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Captain Awesome";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
