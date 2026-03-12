import { useEffect, useState } from "react";

type UseScrollProps = {
  threshold?: number;
  throttleMs?: number;
};

/**
 * Retorna a posição do scroll vertical da página em tempo real
 *
 * @param threshold - Valor limite que pode ser usado para lógica extra (opcional)
 * @param throttleMs - Intervalo de tempo em ms para limitar a atualização
 * @returns scrollY: número com a posição atual
 */
const useScroll = ({ threshold = 0, throttleMs = 16 }: UseScrollProps = {}) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setScrollY(window.scrollY);
      }, throttleMs);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Atualiza imediatamente ao montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [throttleMs]);

  return scrollY;
};

export default useScroll;
