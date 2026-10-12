import gsap from "gsap";

export const useGsap = (fn: gsap.ContextFunc, scope?: Element | null) => {
  let ctx = ref<gsap.Context>();
  onMounted(() => {
    ctx.value = gsap.context(fn, scope || undefined);
  });

  onUnmounted(() => {
    ctx.value?.revert();
  });

  return ctx;
};
