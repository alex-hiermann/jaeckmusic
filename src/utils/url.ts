// Astro's BASE_URL should have a trailing slash, but we guard defensively.
const raw = import.meta.env.BASE_URL;
/** Always ends with `/` - use instead of import.meta.env.BASE_URL directly. */
export const base: string = raw.endsWith('/') ? raw : raw + '/';
