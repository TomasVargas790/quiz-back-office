'use client'
import Link from 'next/link'
export default function themePage ({ params }) {
  console.log(params)
  return (
    <div style={{ zIndex: '1', marginTop: '5em', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">
      <Link style={{ gridColumn: '1/2', gridRow: '1/3' }} className='flex justify-center items-center text-3xl bg-opacity-50 bg-green-600 rounded-xl' href={'descriptions/1'}>Pagina 1</Link>
      <Link style={{ gridColumn: '2/3', gridRow: '1/3' }} className='flex justify-center items-center text-3xl bg-opacity-50 bg-green-600 rounded-xl' href={'descriptions/2'}>Pagina 2</Link>
      <Link style={{ gridColumn: '3/4', gridRow: '1/3' }} className='flex justify-center items-center text-3xl bg-opacity-50 bg-green-600 rounded-xl' href={'descriptions/3'}>Pagina 3</Link>
    </div>

  )
  /* const headers = Object.keys(data[0])
  return (
    <main className='text-center flex flex-col items-center w-full gap-6 h-full mt-20'>
      <table className='bg-slate-500 rounded-xl'>
        <thead className='bg-orange-300'>
          <tr>
            {headers.map(header => (<th style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4' key={header}>{header}</th>))}
            <th style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4'>actions</th>
          </tr>
        </thead>
        <tbody >
          {data.map(row => (
            <tr key={row.id}>
              {Object.entries(row).map(item => (
                <td style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} className='p-4' key={`${item[0]}-${row.id}`}>{item[1]}</td>
              ))}
              <td style={{ borderLeft: '2px solid black', borderRight: '2px solid black' }} ><Link href={`${'/individuo/themes/1'}`} className='bg-orange-300 rounded-lg p-2'>view</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      {isActive ? (<Modal isActive={isActive} setIsActive={setIsActive} />) : ''}

    </main>
  ) */
}
/* export default function TablePage () {
  const [data, setData] = useState(themes)
  const [isActive, setIsActive] = useState()
  const columns = [

    {
      accessorKey: 'id',
      header: 'id',
      size: '50',
      cell: (props) => (<p>{props.getValue()}</p>)
    },
    {
      accessorKey: 'description',
      header: 'description',
      cell: (props) => (<p>{props.getValue()}</p>)
    },
    {
      accessorKey: 'createdAt',
      header: 'createdAt',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'updatedAt',
      header: 'updatedAt',
      cell: (props) => <p>{props.getValue()}</p>
    },
    {
      accessorKey: 'action',
      header: 'action',
      cell: row => {
        return (
          <div>
            <Link href={`/${TABLE}/${Number(row.row.id) + 1}`} className='p-2 bg-orange-300 rounded-xl text-black'>View</Link>
          </div>
        )
      }
    }
  ]

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
  // console.log(table.getRowModel().rows.forEach(row => console.log(row === undefined ? 'row' : row.getVisibleCells())))
  return (
    <main className={'text-center flex flex-col items-center w-full gap-6 h-full mt-20'}>
      <div className='inline-block w-full'>

        <button className='inline-block ml-10 bg-green-500 p-2 rounded-md text-right' onClick={() => setIsActive(true)}>Add</button>
      </div>
      <Table table={table}></Table>
    </main>
  )
} */
