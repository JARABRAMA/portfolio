import { Icon } from "@iconify/react"

export type PortfolioCardProps = {
  title: string,
  description: string,
  github: string,
  icon: string
}

/**
 * Tarjeta del carrusel horizontal de Portafolio. El ancho se fija con un
 * máximo relativo al viewport (w-[min(...)]) para que en un teléfono entre una
 * tarjeta y un fragmento de la siguiente, y en pantallas grandes se vean
 * varias a la vez. `shrink-0` evita que el flex las aplaste.
 */
export function PortfolioCard({
  title,
  description,
  github,
  icon
}: PortfolioCardProps) {
  return <article className="flex h-full w-[min(20rem,80vw)] shrink-0 flex-col gap-4
  rounded-md bg-white p-5 shadow-md transition-transform delay-100 duration-300
  items-center sm:w-96 sm:p-8 hover:ring-2 hover:ring-indigo-500
  hover:scale-[1.02]">
    <Icon className="size-20 shrink-0 text-indigo-700 sm:size-28" icon={icon} />
    <span className="text-center text-lg font-semibold sm:text-xl">{title}</span>
    <span className="text-sm text-stone-600">{description}</span>
    <a className="mt-auto flex items-center gap-2 self-end rounded-sm bg-indigo-700
    px-2 py-1 text-sm text-white hover:bg-indigo-600" href={github}
    target="_blank" rel="noreferrer">
      <Icon icon="akar-icons:github-fill" />
      Github
    </a>
  </article>
}
