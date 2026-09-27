import { ContactDialog } from "../ContactDialog";
import { HeroDescription } from "../../athoms/HeroDescription";
import { HeroImage } from "../../athoms/HeroImage";
import { HeroTitle } from "../../athoms/HeroTitle";

export function HeroSection() {
  /*
   * Antes el `ps-8` fijo y el `m-auto` competían con el `w-full` de la sección
   * y el `gap-8` era excesivo en móvil. Ahora el padding y el gap escalan con
   * el viewport, y el texto se limita con max-w para no desbordar su columna
   * en la versión de dos columnas.
   */
  return <section className="flex w-full min-w-0 flex-col-reverse items-center justify-center gap-6 bg-white px-4 py-8 sm:gap-8 sm:px-6 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:px-8">
    <div className="flex w-full min-w-0 max-w-2xl flex-col items-center gap-4 lg:items-start">
      <HeroTitle />
      <HeroDescription description="Systems Engineering student at the University of Antioquia (Colombia), currently in my 8th semester. Full-stack developer 
    experienced in Java, Spring Boot, React, and PostgreSQL. Interested in software architecture, backend development, and 
    building solutions to real-world problem" />
      <ContactDialog />
    </div>
    <HeroImage />
  </section>
}
