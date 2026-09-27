export type EducationCardProp = {
  institution: string,
  title: string,
  date: string,
  description: string
}

/**
 * Antes usaba `grid-cols-2` fijo, que en un teléfono ponía institución y título
 * uno al lado del otro a text-xl sin espacio para partirse. Ahora se apilan en
 * móvil y pasan a dos columnas desde `sm`.
 */
export function EducationCard({
  institution, title, date, description
}: EducationCardProp) {
  return <article
    className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
    <span className="text-lg font-semibold sm:text-xl">{institution}</span>
    <span className="text-lg font-semibold sm:text-xl">{title}</span>
    <span className="h-fit w-fit rounded-sm bg-indigo-700 px-2 text-sm text-white">{date}</span>
    <span className="text-sm text-stone-600 sm:text-base">{description}</span>
  </article>
}
