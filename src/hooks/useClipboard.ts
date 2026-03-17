import { useState, useCallback } from "react";

type ClipboardStatus = "idle" | "success" | "error";

interface UseClipboardReturn {
  copy: (text: string) => Promise<void>;
  status: ClipboardStatus;
  isCopied: boolean;
}

/**
 * Hook para copiar texto para o clipboard do usuário.
 *
 * @returns `copy` — função para copiar o texto
 * @returns `status` — estado atual: "idle" | "success" | "error"
 * @returns `isCopied` — atalho booleano para checar se foi copiado com sucesso
 *
 * @example
 * const { copy, status, isCopied } = useClipboard();
 * await copy("Texto copiado!");
 */
export function useClipboard(): UseClipboardReturn {
  const [status, setStatus] = useState<ClipboardStatus>("idle");

  const copy = useCallback(async (text: string): Promise<void> => {
    if (!navigator?.clipboard) {
      console.warn("useClipboard: Clipboard API não está disponível.");
      setStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus("success");
    } catch (error) {
      console.error("useClipboard: Falha ao copiar para o clipboard.", error);
      setStatus("error");
    }
  }, []);

  const isCopied = status === "success";

  return { copy, status, isCopied };
}
