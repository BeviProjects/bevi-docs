"use client";
import {
	type RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

interface ElementSize {
	width: number;
	height: number;
}

function useElementSize<T extends HTMLElement>(): [
	RefObject<T | null>,
	ElementSize,
] {
	const ref = useRef<T>(null);
	const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

	const updateSize = useCallback((entries: ResizeObserverEntry[]) => {
		const [entry] = entries;
		if (!entry) return;

		const { width, height } = entry.contentRect;
		setSize({ width, height });
	}, []);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new ResizeObserver(updateSize);
		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [updateSize]);

	return [ref, size];
}

export default useElementSize;
