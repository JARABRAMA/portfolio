export function ProfileCard() {
  /*
   * El `size-28` fijo se mantiene porque la foto vive en un contenedor centrado
   * y no competia con el ancho disponible; se anadio alt para accesibilidad.
   */
  return <article className="flex max-w-fit flex-col items-center gap-1">
    <img
      className="size-28  bg-blue-300 object-scale-down rounded-full border-4 border-indigo-800"
      src="/profile-image.png"
      alt="foto de Brayan Jaraba" />

    <span className="font-semibold">Brayan Jaraba</span>
    <span className="text-stone-600">Full-Stack Developer</span>

  </article>
}
