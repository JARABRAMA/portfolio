import { PercentageChip, PercentageChipProps } from "../../athoms/PercentageChip"

export type PercentageChipSectionProps = {
  title: string,
  percentageChips: PercentageChipProps[]
}

export function PercentageChipSection({ title, percentageChips }: PercentageChipSectionProps) {
  return <section className="w-full min-w-0">
    <span className="font-semibold">{title}</span>
    <div className="flex flex-col gap-2">
      {percentageChips.map((chip, i) => <PercentageChip key={i} {...chip} />)}
    </div>
  </section>
}
