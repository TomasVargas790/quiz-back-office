'use client'
export default function View ({ params }) {
  return (
    <>
      <h1>{params.id}</h1>
      <h1>{params.table}</h1>

      <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">

        <div style={{ gridColumn: '1/2', gridRow: '1/4', opacity: '0.5' }} className="bg-green-600 rounded-xl">
        </div>
        <div style={{ gridColumn: '2/4', gridRow: '1/4', opacity: '0.5' }} className="bg-blue-300  rounded-xl">
        </div>
{/*
       <div  className="bg-blue-300 col-">
        </div>
 <div style={{ gridColumn: '1/3', gridRow: '3/4', opacity: '0.5' }} className="bg-blue-300 ">
        </div> */}
      </div>
    </>
  )
}
