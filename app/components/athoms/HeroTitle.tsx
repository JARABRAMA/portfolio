export function HeroTitle() {
  /*
   * `text-4xl` fijo provocaba overflow horizontal en teléfonos: "Soy Brayan
   * Jaraba" a 2.25rem mide más que el ancho útil de un móvil de 320-375px.
   * La escala sube por breakpoint y el texto se centra en móvil.
   */
  return <div className="flex min-w-0 flex-col text-center text-2xl font-extrabold text-balance sm:text-3xl lg:flex-row lg:gap-2 lg:text-4xl lg:text-left">
    <span>Soy Brayan Jaraba</span>
    <span className="text-indigo-600">FullStack</span>
    <span>Developer</span>
  </div>
}
