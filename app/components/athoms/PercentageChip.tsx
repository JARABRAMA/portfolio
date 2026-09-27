export type PercentageChipProps = {
  text: string,
  percentage: number
}

export function PercentageChip({ text, percentage }: PercentageChipProps) {
  /*
   * `max-w-60` limitaba la barra a 240px incluso en movil, donde hay mas
   * espacio disponible. Se cambio por `w-full` para que la barra ocupe toda la
   * columna, y el texto largo se recorta con truncate en vez de desbordar.
   */
  return <div className="grid w-full min-w-0 grid-cols-2 gap-2 text-sm text-stone-700">
    <span className="truncate" title={text}>{text}</span>
    <span className="justify-self-end">{percentage * 100}%</span>
    <div className="col-span-2 flex h-2 w-full items-center overflow-hidden rounded-full bg-gray-100 ring-1 ring-indigo-600">
      <div
        className="mx-0.5 h-1 rounded-full bg-indigo-700 transition-all duration-500"
        style={{ width: `${percentage * 100}%` }}
      />
    </div>
  </div>
}
