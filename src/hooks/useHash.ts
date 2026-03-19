"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useHash = () => {
	const _pathname = usePathname();
	const _searchParams = useSearchParams();
	const [hash, setHash] = useState("");

	const readHash = useCallback(() => {
		if (typeof window !== "undefined") {
			setHash(window.location.hash.replace("#", ""));
		}
	}, []);

	// Relê o hash sempre que a rota do Next.js mudar
	useEffect(() => {
		readHash();
	}, [readHash]);

	// Escuta eventos nativos do browser (clique em <a href="#...">)
	useEffect(() => {
		readHash();

		window.addEventListener("hashchange", readHash);
		window.addEventListener("popstate", readHash);

		return () => {
			window.removeEventListener("hashchange", readHash);
			window.removeEventListener("popstate", readHash);
		};
	}, [readHash]);

	return hash;
};

export default useHash;
