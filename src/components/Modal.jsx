import Image from 'next/image'
import icon from '../../public/cross.svg'
import useCloseModal from '@/hooks/useCloseModal'

export default function Modal ({ isActive, setIsActive }) {
  const handleClick = () => {
    setIsActive(false)
  }

  useCloseModal(isActive, setIsActive)

  return (

    <div className='z-3 p-12  flex justify-center items-center left-0 z-20 right-0 top-0 bottom-0 fixed bg-black bg-opacity-70 w-screen h-screen'>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log('oa')
      }} >

        <div className="p-16 bg-slate-100 bg-opacity-90 relative rounded-3xl text-black justify-center items-center flex gap-4 flex-col">
          <button type='submit' onClick={handleClick} className='self-end '><Image width='25' alt='Cerrar' src={icon} /> </button>
          <h1 className="text-3xl">Formulario zarpado</h1>
          <input className='text-white rounded-lg' type="text" />
          <input className='text-white rounded-lg' type="text" />
          <button className='bg-blue-400 p-2 rounded-lg' >Submit</button>
        </div>
      </form>
    </div>
  )
}
