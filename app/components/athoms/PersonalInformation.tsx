export function PersonalInformation() {
  /*
   * Antes usaba `max-w-fit`, que hace que la rejilla mida lo que su contenido
   * en lugar de ajustarse al contenedor. Ahora se estira hasta un maximo
   * razonable y los valores pueden partirse en varias lineas.
   */
  return <div className="grid w-full max-w-xs grid-cols-2 gap-x-4 gap-y-1 text-sm">
    <span>Age</span>
    <span className="justify-self-end text-stone-600">20</span>
    <span>Phone number</span>
    <span className="justify-self-end text-stone-600">318 967 9457</span>
    <span>Address</span>
    <span className="justify-self-end text-stone-600">Colombia</span>
  </div>
}
