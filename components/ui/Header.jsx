import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/productos/todos"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    },
]

const Header = () => {

    return (
        <header className="w-full bg-slate-50">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link href={"/"} className='basis-2/12'>
                    <Image
                        src={"/natural100.png"}
                        alt='Dietetica logo'
                        width={75}
                        height={75}
                    />
                </Link>
                <SearchBox className="text-center grow basis-6/12 w-full"/>
                <nav className="flex justify-between gap-2 basis-4/12">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                href={link.href}
                                className={`text-base p-3 text-gray-800`}
                            >
                                {link.label}
                            </Link>
                        })                        
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header