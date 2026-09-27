"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../athoms/Button";
import { Modal } from "../athoms/Modal";

const fieldClass =
  "w-full rounded-sm border border-stone-300 px-3 py-2 text-sm outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

/** Etiqueta + control, evita repetir el mismo marcado en cada campo del formulario. */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

/**
 * Disparador "Contratame" + diálogo de contacto.
 *
 * El formulario es una maqueta: al enviarlo solo se muestra la confirmación y
 * no se envía ningún correo, tal como se pidió. Para hacerlo real basta con
 * reemplazar el preventDefault por un fetch a un endpoint o servicio de email.
 */
export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function showDialog() {
    setSent(false);
    setOpen(true);
  }

  return (
    <>
      <Button
        message="Contratame"
        icon="akar-icons:arrow-right"
        onClick={showDialog}
        aria-haspopup="dialog"
        aria-expanded={open}
      />

      <Modal open={open} onClose={() => setOpen(false)} title="Contáctame">
        {sent ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <Icon className="size-12 text-indigo-600" icon="akar-icons:check" />
            <p className="font-semibold">¡Gracias por tu mensaje!</p>
            <p className="text-sm text-stone-600">
              Te responderé lo antes posible.
            </p>
            <Button message="Cerrar" onClick={() => setOpen(false)} />
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(event) => {
              // Maqueta: no se envía nada, solo se muestra la confirmación.
              event.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Nombre">
              <input name="name" type="text" required className={fieldClass} />
            </Field>

            <Field label="Correo electrónico">
              <input name="email" type="email" required className={fieldClass} />
            </Field>

            <Field label="Mensaje">
              <textarea
                name="message"
                required
                rows={4}
                className={`${fieldClass} resize-y`}
              />
            </Field>

            <p className="text-xs text-stone-500">
              Demo: el formulario no envía el correo a ningún servicio.
            </p>

            <div className="flex flex-wrap justify-end gap-2">
              <Button
                message="Cancelar"
                variant="secondary"
                onClick={() => setOpen(false)}
              />
              <Button type="submit" message="Enviar" icon="akar-icons:send" />
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}
