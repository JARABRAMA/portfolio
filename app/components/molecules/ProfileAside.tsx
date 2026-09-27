"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { ProfileDetails } from "./ProfileDetails";

/**
 * Menú lateral del perfil, desplegable en pantallas pequeñas.
 *
 * - En escritorio (lg+) es la primera columna fija de la rejilla, siempre visible.
 * - En móvil y tablet se convierte en un cajón (drawer): una barra superior fija
 *   con el botón "Perfil" lo abre, y se cierra con el botón de cerrar, tocando el
 *   fondo oscurecido o pulsando Escape.
 *
 * Detalle de layout: la barra, el fondo y el propio cajón usan position: fixed, por
 * lo que NO participan en el cálculo de pistas del grid (quedan fuera de flujo) y
 * en móvil la rejilla queda con una sola pista ocupada por <main>. En escritorio el
 * aside recupera lg:static y vuelve a ocupar la primera columna.
 *
 * La barra mide h-14 y <main> compensa con pt-14 en móvil para no quedar tapada.
 */
export function ProfileAside() {
  const [open, setOpen] = useState(false);

  // Cerrar el cajón con la tecla Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Barra superior: solo visible por debajo de lg. */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between
        gap-3 border-b border-stone-300 bg-white px-4 shadow-sm lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="profile-drawer"
          className="flex items-center gap-2 rounded-sm px-2 py-1 text-sm font-medium
            text-stone-700 transition-colors hover:bg-stone-100 active:bg-stone-200"
        >
          <Icon className="size-5" icon="akar-icons:hamburger-menu" />
          Perfil
        </button>

        <span className="truncate text-sm font-semibold">Brayan Jaraba</span>
      </header>

      {/* Fondo oscurecido: solo por debajo de lg y con el cajón abierto. */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-stone-900/50 transition-opacity duration-300
          lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        id="profile-drawer"
        aria-label="Información del perfil"
        className={`fixed inset-y-0 left-0 z-40 flex w-[85vw] max-w-80 flex-col items-center
          gap-6 overflow-y-auto overscroll-contain bg-white p-4 shadow-xl
          transition-[visibility,transform] duration-300 ease-out
          lg:static lg:z-auto lg:h-full lg:w-auto lg:max-w-none lg:visible
          lg:translate-x-0 lg:shadow-md
          ${open ? "visible translate-x-0" : "invisible -translate-x-full"}`}
      >
        {/* Cerrar: solo tiene sentido en el modo móvil, por eso se oculta en lg. */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
          className="absolute right-2 top-2 rounded-sm p-1 text-stone-500 transition-colors
            hover:bg-stone-100 hover:text-stone-800 lg:hidden"
        >
          <Icon className="size-5" icon="akar-icons:cross" />
        </button>

        <ProfileDetails />
      </aside>
    </>
  );
}
