import { skillCards } from '@/app/data/skills'
import { SkillCard } from '../athoms/SkillCard'

/**
 * Rejilla de habilidades con auto-llenado: el número de columnas se calcula a
 * partir del ancho disponible en lugar de fijar `grid-cols-3`, que obligaba a
 * mostrar 3 tarjetas en un teléfono aunque no cupieran.
 */
export function SkillGird() {

  return (
    <div className='responsive-grid grid w-full min-w-0 gap-6 sm:gap-8'>
      {skillCards.map(s => <SkillCard key={s.title} {...s} />)}
    </div>
  )
}
