export function HeroDescription({ description }: { description: string }) {
  /*
   * Se alinea al centro en móvil porque el texto vive en un contenedor flex con
   * items-center, y se alinea a la izquierda cuando la sección pasa a rejilla
   * de dos columnas en escritorio.
   */
  return <div className="max-w-prose text-center text-sm font-light text-stone-900 text-balance lg:text-left">
    <p>{description}</p>
  </div>
}
