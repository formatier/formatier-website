export const useReactiveValue = <T, V>(
	value: T,
	updater: (value: T) => V,
	interval?: number,
) => {
	const reactiveValue = ref(updater(value));

	setInterval(() => {
		reactiveValue.value = updater(value);
	}, interval || 500);

	return reactiveValue;
};

export const useTimer = () => {
	const timer = useState("reactive:toast-timer", () => 0);
	let timerInstance = useState<number | undefined>(
		"reactive:toast-instance",
		() => undefined,
	);

	onMounted(() => {
		if (!timerInstance.value) {
			timerInstance.value = setInterval(() => {
				timer.value = Math.floor(Date.now() / 1000);
			}, 500);
		}
	});

	onUnmounted(() => {
		clearInterval(timerInstance.value);
	});

	return timer;
};
