import { ProfileAside } from "./components/molecules/ProfileAside";
import { MainSection } from "./components/molecules/sections/MainSecction";

export default function Home() {
  /*
   * Shell de dos columnas en escritorio (menú fijo + contenido con scroll
   * vertical independiente) y de una sola columna en móvil/tablet, donde el
   * menú lateral se convierte en un cajón deslizable controlado desde la barra
   * superior (ver ProfileAside).
   *
   * h-dvh en lugar de h-screen: en móviles 100vh no equivale a la altura
   * visible real, por lo que la barra de direcciones recortaba el pie del
   * contenedor con scroll. min-w-0/min-h-0 permiten que el hijo pueda
   * encogerse y hacer scroll en vez de desbordar su pista de grid.
   */
  return (
    <div className="grid h-dvh grid-cols-1 overflow-hidden lg:grid-cols-[auto_1fr]">
      <ProfileAside />
      <MainSection />
    </div>
  );
}
