import { Icon } from "@iconify/react"

export type SkillCardProps = {
  title: string,
  description: string,
  icon: string
}

/**
 * `w-fit` se eliminó: dentro de una rejilla, hace que la tarjeta mida lo que
 * mida su texto y no el ancho de la pista, de modo que las descripciones largas
 * (150+ caracteres) desbordaban la columna. `w-full` + `h-full` permiten que
 * todas las tarjetas de una fila igualen altura y ancho.
 */
export function SkillCard({ title, description, icon }: SkillCardProps) {
  return <article className="flex h-full w-full min-w-0 flex-col gap-3 rounded-md
  bg-white p-5 shadow-md transition-transform delay-100 duration-300
  justify-center items-center hover:ring-2 hover:ring-indigo-500
  hover:scale-[1.02] sm:gap-4 sm:p-8">
    <Icon className="size-14 shrink-0 text-indigo-600 sm:size-26" icon={icon} />
    <span className="text-center text-lg font-semibold sm:text-xl">{title}</span>
    <span className="text-center text-sm text-stone-500">{description}</span>
  </article>
}
