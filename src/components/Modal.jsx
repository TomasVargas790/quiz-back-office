import Image from 'next/image'
import icon from '../../public/cross.svg'
import useCloseModal from '@/hooks/useCloseModal'

export default function Modal ({ isActive, setIsActive }) {
  const handleClick = () => {
    setIsActive(false)
  }

  useCloseModal(isActive, setIsActive)

  return (

        <div onClick={handleClick} className='z-3 p-12 l-0 r-0 top-0 bottom-0 fixed bg-black bg-opacity-70 w-screen h-screen'>
            <form onSubmit={(e) => e.preventDefault()} >

                <div className="p-12 bg-slate-100 relative rounded-3xl bg-opacity-90 text-black m-auto w-4/12 justify-center items-center flex gap-4 flex-col">
                    <button style={{ left: '85%', top: '10%' }} onClick={handleClick} className='absolute '><Image width='25' alt='Cerrar' src={icon} /> </button>
                    <h1 className="text-3xl">Formulario zarpado</h1>
                    <input className='' type="text" />
                    <input className='' type="text" />
                </div>
            </form>
        </div>
  )
}
