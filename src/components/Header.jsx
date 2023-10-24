import Link from 'next/link'

export default function Header () {
  return (
        <header className='z-0 fixed top-0 left-0 m-6 p-0'>
            <nav style={{ boxShadow: '0 0 10em rgb(148 163 184 0.1)' }} className='m-0 flex gap-12 items-center bg-slate-400 bg-opacity-10  rounded-lg p-4 ' >
            <Link href='/'><h1 className='text-4xl font-semibold consol p-0 m-0'>CO2 BACK-OFFICE</h1></Link>
                <ul className='flex text-xl gap-4'>
                    <li><Link href='/table/questions'>Questions</Link></li>
                    <li><Link href='/table/answers'>Answers</Link></li>
                    <li><Link href='/table/themes'>Themes</Link></li>
                    <li><Link href='/table/descriptions'>Descriptions</Link></li>
                </ul>
            </nav>
        </header>
  )
}
