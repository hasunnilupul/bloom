export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  // redirect the user to the login page
  if (!user) {
    // next route matches auth routes
    if (to.path === "/login" || to.path === "/register") {
      return navigateTo(to);
    }

    return navigateTo({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
