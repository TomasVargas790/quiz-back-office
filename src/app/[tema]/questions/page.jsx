'use client'
import Link from 'next/link'

export default function QuestionsPages () {
  return (
    <div style={{ zIndex: '1', marginTop: '5em', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(5, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">

      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '1/2', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '2/3', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '3/4', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '4/5', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '5/6', gridRow: '1/2' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '1/2', gridRow: '2/3' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '2/3', gridRow: '2/3' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '3/4', gridRow: '2/3' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
      <Link href={'questions/1'} style={{ border: '2px solid white', gridColumn: '4/5', gridRow: '2/3' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        ¿Cuantos viajes realizaste para ir al trabajo?
      </Link>
    </div>
  )
}
/* import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import themes from '@/mock/response.js'
import Table from '@/components/Table.jsx'
import Modal from '@/components/Modal.jsx'
import Link from 'next/link.js'
import { useState } from 'react'

const TABLE = 'questions'

export default function TablePage () {
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
    {isActive ? (<Modal isActive={isActive} setIsActive={setIsActive}/>) : ''}
    </main>
  )
}
 */
