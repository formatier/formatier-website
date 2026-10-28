import type { ToastAction, ToastAppearance, ToastConfig } from "~/types/toast";

const toastsStore = defineStore("toasts", {
  state() {
    const toasts: {
      title: string;
      message: string;
      actions: ToastAction[];
      appearance: ToastAppearance;
      config?: ToastConfig;
      createdAt: number;
    }[] = [];
    return { toasts };
  },

  actions: {
    addToast(
      title: string,
      message: string,
      actions: ToastAction[],
      appearance: ToastAppearance = {
        type: "success",
      },
      config?: ToastConfig,
    ) {
      this.toasts.unshift({
        title,
        message,
        actions,
        appearance,
        config,
        createdAt: Math.floor(Date.now() / 1000),
      });
    },

    removeToast(idx: number) {
      this.toasts.splice(idx, 1);
    },
  },
});

const toastStateStore = defineStore("toast-state", {
  state() {
    return {
      lastActionEmittedAt: 0,
      isUpdated: false,
    };
  },
  actions: {
    emit() {
      this.lastActionEmittedAt = Math.floor(Date.now() / 1000);
      this.isUpdated = true;
    },
    reset() {
      this.lastActionEmittedAt = 0;
      this.isUpdated = false;
    },
  },
});

export const useToastHook = () => {
  const createToast = (
    title: string,
    message: string,
    actions: ToastAction[],
    appearance: ToastAppearance = {
      type: "success",
    },
    config?: ToastConfig,
  ) => {
    toastsStore().addToast(title, message, actions, appearance, config);
    toastStateStore().emit();
  };

  return {
    createToast,
  };
};

export const useToast = () => {
  const timer = useTimer();
  const state = storeToRefs(toastStateStore());
  const toasts = storeToRefs(toastsStore());

  const resetState = () => {
    toastStateStore().reset();
  };

  const removeToast = (idx: number) => {
    toastsStore().removeToast(idx);
    toastStateStore().emit();
  };

  return {
    timer,
    state,
    resetState,
    removeToast,
    toasts,
  };
};
