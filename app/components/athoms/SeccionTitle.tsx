export type SectionTitleProps = {
  title: string,
  description: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  /*
   * Se quitó `lg:max-w-140` para no depender de un ancho arbitrario: el título
   * se centra con text-center y la descripción se limita con max-w-2xl, con
   * padding lateral propio para no tocar los bordes en móvil.
   */
  return <div className="flex m-auto w-full min-w-0 flex-col items-center justify-center gap-3 px-2 text-center sm:gap-4">
    <span className="text-2xl font-bold sm:text-3xl">{title}</span>
    <span className="max-w-2xl text-sm text-stone-600 sm:text-base">{description}</span>
  </div>
}
