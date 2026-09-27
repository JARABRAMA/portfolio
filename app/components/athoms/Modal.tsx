"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { Icon } from "@iconify/react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

/**
 * Diálogo modal reutilizable basado en el elemento nativo <dialog>.
 *
 * Se prefirió el elemento nativo frente a un div con role="dialog" porque
 * showModal() resuelve sin código extra el foco inicial, el bloqueo de foco
 * (focus trap), el cierre con Escape, el inert del fondo y el ::backdrop,
 * además de situar el panel en el "top layer" para que no le afecte el
 * overflow del contenedor central con scroll.
 */
export function Modal({ open, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // showModal()/close() son imperativos: se sincronizan con el estado de React.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      // El evento close se dispara con Escape y también tras close() imperativo.
      onClose={onClose}
      onClick={(event) => {
        // Solo cierra si el clic cayó en el propio <dialog>, es decir, fuera del
        // panel: cualquier clic dentro del contenido alcanza el div hijo.
        if (event.target === event.currentTarget) onClose();
      }}
      className="w-[min(32rem,92vw)] rounded-lg bg-white p-0 text-stone-900
        shadow-2xl backdrop:bg-stone-900/50 backdrop:backdrop-blur-sm"
    >
      {/* El scroll vive aquí y no en el <dialog> para que la barra de scroll no
          se confunda con el fondo al detectar el clic de cierre. */}
      <div className="flex max-h-[85dvh] w-full flex-col gap-5 overflow-y-auto p-5 sm:p-6">
        <header className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-xl font-semibold">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="-mr-1 shrink-0 rounded-sm p-1 text-stone-500 transition-colors
              hover:bg-stone-100 hover:text-stone-800"
          >
            <Icon className="size-5" icon="akar-icons:cross" />
          </button>
        </header>

        {children}
      </div>
    </dialog>
  );
}
