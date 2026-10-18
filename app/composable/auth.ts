export const useAuth = () => {
  const authState = useAsyncData(
    "auth:auth-state",
    async (_app, { signal }) => {
      const account = await $fetch("/auth/v1/", { signal });
    },
  );
  return {
    authState,
  };
};
