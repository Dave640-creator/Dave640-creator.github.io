// Resolves a path inside /public so it also works when the site is
// deployed under a sub-path (e.g. username.github.io/repo-name/).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
