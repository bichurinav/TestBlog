import { usePageStore } from "~/stores/pageStore";

export default defineNuxtRouteMiddleware(async (to, _) => {
  const store = usePageStore();

  try {
    await store.fetchPage(to.path);
  } catch {
    return navigateTo('/notfound')
  }

})