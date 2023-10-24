'use client'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import themes from '../../../mock/response.js'
import Table from '../../../components/Table.jsx'
import Modal from '@/components/Modal.jsx'
import Link from 'next/link.js'
import { useState } from 'react'

export default function TablePage ({ params }) {
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
               <Link href={`/view/${params.table}/${Number(row.row.id) + 1}`} className='p-2 bg-orange-300 rounded-xl text-black'>View</Link>
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
        <h1 className= 'inline-block bold text-3xl'>Table {(params.table.charAt(0).toUpperCase() + params.table.slice(1))}</h1>
        <button className='inline-block ml-10 bg-green-500 p-2 rounded-md text-right' onClick={() => setIsActive(true)}>Add</button>
      </div>
      <Table table={table}></Table>
    {isActive ? (<Modal isActive={isActive} setIsActive={setIsActive}/>) : ''}
    </main>
  )
}
