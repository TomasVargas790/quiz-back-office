import { flexRender } from '@tanstack/react-table'

export default function Table ({ table }) {
  return (
        <div className="table" style={{ width: table.getTotalSize() }} >
        {table.getHeaderGroups().map(headerGroup => (<div className="tr" key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (<div className='th' style={{ width: header.column.getSize() + header.column.getSize() * 0.3, backgroundColor: '#cac5d9', color: 'black', opacity: '.7' }} key={header.id}>
            { header.column.columnDef.header}
          </div>
            )
          })}
        </div>
        ))}
        {
          table.getRowModel().rows.map(row => <div key={row.id} className="tr">
            {row.getVisibleCells().map(cell => {
              return (<div key={cell.id} style={{ padding: '.5em', width: cell.column.getSize() + cell.column.getSize() * 0.3, display: 'flex', alignItems: 'center', textAlign: 'center', textJustify: 'center', justifyContent: 'center' }} className="td">
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext())}
            </div>)
            })}
          </div>)}
      </div>
  )
}
