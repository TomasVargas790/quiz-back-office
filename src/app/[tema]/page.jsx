import Link from 'next/link'

export default function Tema ({ params }) {
  return (
    <div className='w-11/12 ' style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(10em, auto)' }}>

      <Link style={{ gridColumn: '1/2', gridRow: '1/3' }} className="text-4xl rounded-3xl flex justify-center items-center bg-yellow-500" href={`${params.tema}/descriptions`} >Descripciones</Link>

      <Link style={{ gridColumn: '2/3', gridRow: '1/3' }} className="text-4xl rounded-3xl flex justify-center items-center bg-orange-500" href={`${params.tema}/questions`} >Preguntas</Link>

      <Link style={{ gridColumn: '3/4', gridRow: '1/3' }} className="text-4xl rounded-3xl flex justify-center items-center bg-sky-500" href={`${params.tema}/answers`} >Respuestas</Link>

    </div>
  )
}
