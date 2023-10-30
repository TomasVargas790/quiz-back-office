'use client'
import themes from '@/mock/response'
import Link from 'next/link'

export default function View ({ params }) {
  const headers = Object.keys(themes[0])

  return (
    <div style={{ zIndex: '1', marginTop: '5em', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">

      <div style={{ gridColumn: '1/2', gridRow: '1/3' }} className=" text-center flex justify-evenly items-center gap-6 flex-col bg-opacity-50 bg-green-600 rounded-xl">
        <h2 className='text-4xl font-bold '>Titulo</h2>
        <h3>Subtitulo</h3>
        <Link className='bg-orange-300 p-2 rounded-lg inline ' href={'question/2'}>Siguiente pregunta</Link>
      </div>
      <div style={{ gridColumn: '2/4', gridRow: '1/3' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50 bg-green-600 rounded-xl">
        <table className='bg-slate-500 rounded-xl'>
          <thead className='bg-orange-300'>
            <tr>
              {headers.map(header => (<th style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4' key={header}>{header}</th>))}
              <th style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4'>actions</th>
            </tr>
          </thead>
          <tbody >
            {themes.map(row => (
              <tr key={row.id}>
                {Object.entries(row).map(item => (
                  <td style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4' key={`${item[0]}-${row.id}`}>{item[1]}</td>
                ))}
                <td style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} ><Link href={`${'/individuo/themes/1'}`} className='bg-orange-300 rounded-lg p-2'>view</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/*    <>
      <h1>{params.id}</h1>
      <h1>{params.table}</h1>

      <div style={{ zIndex: '1', marginTop: '5em', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">

        <div style={{ gridColumn: '1/4', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50 bg-green-600 rounded-xl">
          <div className="flex justify-center ">
            <h2 className=" self-end font-semibold  text-4xl">Individuo</h2>
          </div>
          <div className="flex gap-6 text-xl items-center justify-center text-center">
            <p className=" ">createdAt: {'2023-10-24 01:52:34'}</p>
            <p className=" ">updatedAt: {'2023-10-24 01:52:34'}</p>
            <p className=" ">createdBy: {'Tuco'}</p>
            <p className=" ">updatedBy: {'Tuco'}</p>
          </div>
        </div>
        <div style={{ gridColumn: '1/2', gridRow: '2/3' }} className="p-4 bg-blue-300 bg-opacity-50  rounded-xl">
          <div className="flex justify-start items-start flex-col descriptions">
            <h1 className="mb-4 self-center text-xl font-medium">Pagina 1 </h1>
            <p>Quiero cobrar mas... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque facere laudantium eveniet in. Consectetur perspiciatis molestias accusamus architecto amet quidem aliquam nisi animi, nesciunt temporibus culpa praesentium aperiam rerum. Eum!</p>
          </div>
        </div>
        <div style={{ gridColumn: '2/3', gridRow: '2/3' }} className="p-4 bg-blue-300 bg-opacity-50  rounded-xl">
          <div className="flex justify-start items-start flex-col descriptions">
            <h1 className="mb-4 self-center text-xl font-medium">Pagina 2 </h1>
            <p>Quiero cobrar mas... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque facere laudantium eveniet in. Consectetur perspiciatis molestias accusamus architecto amet quidem aliquam nisi animi, nesciunt temporibus culpa praesentium aperiam rerum. Eum!</p>
          </div>
        </div>
        <div style={{ gridColumn: '3/4', gridRow: '2/3' }} className="p-4 bg-blue-300 bg-opacity-50  rounded-xl">
          <div className="flex justify-start items-start flex-col descriptions">
            <h1 className="mb-4 self-center text-xl font-medium">Pagina 3 </h1>
            <p>Quiero cobrar mas... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque facere laudantium eveniet in. Consectetur perspiciatis molestias accusamus architecto amet quidem aliquam nisi animi, nesciunt temporibus culpa praesentium aperiam rerum. Eum!</p>
          </div>
        </div>

        <button style={{ gridColumn: '2/3', gridRow: '3/4' }} className="text-2xl font-medium bg-orange-400 rounded-xl text-neutral-800">Pregutnas</button>
      </div>
    </> */
