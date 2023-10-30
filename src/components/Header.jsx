import Link from 'next/link'
import { useTheme } from '@/context/ProvideTheme'
import { useRouter } from 'next/navigation'

export default function Header () {
  const router = useRouter()
  const { theme } = useTheme()
  return theme === ''
    ? ''// router.push('/')
    : (
        <header style={{ backdropFilter: 'blur(3px)' }} className='w-full bg-black z-10 fixed top-0 left-0 p-2 bg-opacity-20'>
            <nav className='m-0 flex gap-12 items-center justify-start bg-opacity-80 w-full  rounded-lg p-4' >
                <Link href='/'><h1 className='text-4xl font-semibold  p-0 m-0'>CO2 BACK-OFFICE</h1></Link>

                <ul className='flex w-full justify-start items-center text-xl gap-4'>
                    <li><Link href='/descriptions'>Descriptions</Link></li>
                    <li><Link href='/questions'>Questions</Link></li>
                    <li><Link href='/answers'>Answers</Link></li>
                    <li className='ml-auto'><h5 className='bg-sky-500 text-2xl p-2 rounded-lg'>{theme}</h5></li>
                </ul>
            </nav>
        </header>
      )
}
