import { ROUTES } from "~/constants";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  console.log("Auth Middleware",to.path);

  // redirect the user to the LOGIN page
  if (!user) {
    // next route matches auth routes
    if (to.path === ROUTES.LOGIN || to.path === ROUTES.REGISTER) {
      return navigateTo(to);
    }

    return navigateTo({
      path: ROUTES.LOGIN,
      query: {
        redirect: to.fullPath,
      },
    });
  }

  // user logged in and next route matches auth routes
  if (user?.uid && (to.path === ROUTES.LOGIN || to.path === ROUTES.REGISTER)) {
    return navigateTo(ROUTES.HOME);
  }
});
