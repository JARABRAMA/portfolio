import { PersonalInformation } from "../athoms/PersonalInformation";
import { ProfileCard } from "../athoms/ProfileCard";
import { languages } from "@/app/data/languajes";
import { programmingLanguages } from "@/app/data/programmingLanguages";
import { PercentageChipSection } from "./sections/PercentageChipsSection";

/**
 * Contenido del perfil: foto, datos de contacto, idiomas y lenguajes con su
 * porcentaje de dominio.
 *
 * Se extrajo como molécula reutilizable porque antes vivía dentro de
 * ProfileAside, que estaba oculto por debajo de `lg`; eso hacía que en móvil y
 * tablet la foto, el nombre y los datos de contacto fueran inaccesibles.
 * Ahora el mismo bloque se renderiza en el menú lateral de escritorio y en la
 * cabecera de la columna central en pantallas pequeñas.
 */
export function ProfileDetails() {
  return (
    <div className="flex w-full min-w-0 flex-col items-center gap-6 sm:gap-8">
      <ProfileCard />
      <PersonalInformation />

      {/* Dos columnas cuando hay ancho disponible (móvil/tablet) y una sola
          dentro del menú lateral estrecho de escritorio. */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <PercentageChipSection title="Lenguajes" percentageChips={languages} />
        <PercentageChipSection
          title="Lenguajes de programación"
          percentageChips={programmingLanguages}
        />
      </div>
    </div>
  );
}
