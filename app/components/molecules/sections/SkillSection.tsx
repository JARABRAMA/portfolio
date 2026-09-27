import { SectionTitle } from "../../athoms/SeccionTitle";
import { SkillGird } from "../SkillsGrid";

export function SkillSection() {
  /*
   * `w-full` en lugar de `w-screen`: 100vw incluye el ancho de la barra de
   * desplazamiento vertical y siempre era más ancha que su columna, lo que
   * generaba scroll horizontal en escritorio. El margen de 4rem que tenía la
   * rejilla (`mx-16`) se sustituyó por padding lateral sensible al viewport.
   */
  return <section className="flex w-full min-w-0 flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:px-8">
    <SectionTitle
      title='Mi Conocimiento'
      description="Tecnologías y herramientas que uso para
      construir soluciones full-stack, desde arquitecturas backend
      robustas hasta interfaces de usuario modernas." />

    <SkillGird />
  </section>
}
