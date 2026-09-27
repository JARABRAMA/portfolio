import { PortfolioCard } from "../../athoms/PortfolioCard";
import { SectionTitle } from "../../athoms/SeccionTitle";
import { projects } from "@/app/data/projects";

/**
 * La sección de Portafolio usa desplazamiento horizontal con snap, tal como
 * pide el enunciado ("las tarjetas de proyectos se pueden desplazar
 * horizontalmente"). Antes era una rejilla de 3 columnas fijas con `px-16`,
 * que en móvil se salía de la pantalla; ahora el ancho de cada tarjeta se
 * adapta y siempre caben varias visibles.
 */
export function PortfolioSection() {
  return <section className="flex w-full min-w-0 flex-col gap-6 sm:gap-8">
    <SectionTitle
      title="Portafolio"
      description="Desarrollador Full-Stack
      especializado en backend con Java y Spring Boot, con experiencia 
      complementaria en React. Estudiante de Ingeniería de Sistemas 
      en la Universidad de Antioquia."
    />

    {/* scroll-px-* replica el padding lateral para que la tarjeta que "salta"
        al encajar quede alineada con el margen visible, no con el borde. */}
    <div className="flex w-full min-w-0 snap-x snap-mandatory gap-6 overflow-x-auto
    overscroll-x-contain px-4 pb-2 scroll-px-4 sm:gap-8 sm:px-6 sm:scroll-px-6
    lg:px-8 lg:scroll-px-8">
      {projects.map((e, index) => <PortfolioCard key={index} {...e} />)}
    </div>
  </section>
}
