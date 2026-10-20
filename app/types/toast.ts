export type ToastAction = ToastCallbackAction | ToastLinkAction

export type ToastCallbackAction = {
    kind: "callback",
    title: string,
    action: () => void,
    highlight?: boolean
}

export type ToastLinkAction = {
    kind: "link",
    title: string,
    path: string,
    highlight?: boolean
}

export type ToastAppearance = {
    type: "notification" | "success" | "warn" | "fail",
    blynk?: boolean,
    icon?: string
}

export type ToastConfig = {
    alwaysOnTop?: boolean,
    timeoutMs?: number,
    trafficLights?: boolean
}