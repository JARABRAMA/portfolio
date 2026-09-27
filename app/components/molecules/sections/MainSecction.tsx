import { Footer } from "../../athoms/Footer";
import { EducationSection } from "./EducationSection";
import { HeroSection } from "./HeroSection";
import { PortfolioSection } from "./PortfolioSection";
import { SkillSection } from "./SkillSection";

/**
 * Contenido central con scroll vertical independiente del menú lateral.
 * min-w-0/min-h-0 son necesarios para que este hijo pueda encogerse hasta el
 * ancho de la columna y hacer scroll en lugar de desbordar la pista de grid.
 *
 * pt-14 en móvil deja libre la barra superior fija (h-14) que abre el cajón del
 * perfil; en escritorio esa barra no existe y el padding se anula con lg:pt-0.
 */
export function MainSection() {
  return (
    <main className="flex min-h-0 min-w-0 flex-col gap-6 overflow-y-auto bg-stone-200 pt-14 sm:gap-8 lg:pt-0">
      <HeroSection />
      <SkillSection />
      <EducationSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
