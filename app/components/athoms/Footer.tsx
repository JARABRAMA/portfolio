export function Footer() {
  /*
   * `flex-1` competía con el gap de la columna central; se cambió por mt-auto,
   * que sí empuja el pie al final cuando el contenido es más corto que la
   * pantalla. El padding evita que el texto quede pegado a los bordes en móvil.
   */
  return <footer
    className="mt-auto flex w-full items-center justify-center border border-stone-400
    px-4 py-4 text-center text-sm text-stone-600 font-normal">
    Todos los derechos reservados Brayan Jaraba @2026
  </footer>
}
