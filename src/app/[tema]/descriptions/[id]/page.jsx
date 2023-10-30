'use client'
export default function View ({ params }) {
  return (
    <div style={{ zIndex: '1', marginTop: '5em', display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: 'minmax(10em, auto)' }} className="p-24 w-11/12 h-w-11/12">

      <div style={{ border: '2px solid white', gridColumn: '1/2', gridRow: 'auto' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
        <div className=" bg-orange-200 flex flex-col justify-start items-center">
          <h2 className=" text-black font-semibold">¿Cuanto tiempo necesito para calcular mi huella?</h2>
          <p className="text-black ">Entre 10 y 15 minutos. Per si necesitas mas tiempo, no te preocupas, podes remotar en otro momento si usas el mismo dispositivo(celular, tablet o computador) y la misma conexion a internet, tus respuestas quedan guardadas para cuando vuelvas a ingresar</p>
          <h2 className=" text-black font-semibold">¿Que period estoy midiendo?</h2>
          <p className="text-black ">Tene en cuenta que estas midiendo/compensando tu huella del ultimo año, es decir los ultimos 12 meses</p>
        </div>
      </div>
      <div style={{ border: '2px solid white', gridColumn: '2/3', gridRow: 'auto' }} className=" text-center flex justify-center gap-6 flex-col bg-opacity-50  rounded-xl">
      </div>
    </div>

  )
}

/*
    <>
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
