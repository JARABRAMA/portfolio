import { EducationCard } from "../../athoms/EducationCard";
import { SectionTitle } from "../../athoms/SeccionTitle";
import { educationCards } from "@/app/data/education";
export function EducationSection() {
  /*
   * El contenedor tenía la clase `px-16m-auto`, que no existe en Tailwind
   * (parece un `px-16` y un `m-auto` pegados), por lo que la lista quedaba
   * sin margen lateral ni centrado. Se separa en padding responsivo y ancho
   * máximo para que respire también en móvil.
   */
  return <section className="flex w-full min-w-0 flex-col gap-6 sm:gap-8">
    <SectionTitle
      title='Educación'
      description="Formación académica que respalda mi desarrollo como Ingeniero de
      Sistemas, con énfasis en desarrollo de software y arquitectura de sistemas."
    />

    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-md bg-white px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
      {educationCards.map(e =>
        <EducationCard key={e.title} {...e} />
      )}
    </div>
  </section>
}
