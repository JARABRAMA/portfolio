import Image from "next/image"

export function HeroImage() {
  /*
   * La imagen tenía un tamaño intrínseco fijo de 250x300 sin escalado por CSS,
   * así que en móviles ocupaba casi todo el ancho útil. Se mantiene el tamaño
   * original como máximo y se reduce en pantallas pequeñas; `sizes` y
   * `priority` evitan que Next descargue la imagen a resolución completa.
   */
  return (
    <Image
      width={250}
      height={300}
      priority
      sizes="(min-width: 1024px) 250px, (min-width: 640px) 224px, 160px"
      className="h-auto w-40 shrink-0 object-contain bg-white
      mask-b-from-50 
      mask-l-from-50 mask-r-from-50 sm:w-56 lg:w-[250px]"
      src="/profile-image.png"
      alt="foto de Brayan Jaraba"
    />
  )
}
