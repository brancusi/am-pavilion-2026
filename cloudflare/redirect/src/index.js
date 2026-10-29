const PRIMARY_ORIGIN = "https://armenianpavilion.org";

export default {
  fetch(request) {
    const { pathname, search } = new URL(request.url);
    return Response.redirect(PRIMARY_ORIGIN + pathname + search, 301);
  },
};
