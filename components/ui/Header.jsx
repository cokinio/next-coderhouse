"use client";
import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { useCartContext } from "@/context/CartContext";

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
        label: "Contacto",
        href: "/contacto"
    }
]

const Header = () => {

    const { itemsInCart } = useCartContext();

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
                    <div className='d-flex'>
                        <Link
                            href="/carrito"
                        >
                            <Image
                            alt="cart"
                            src="./cart.svg"
                            width={50}
                            height={50}
                            style={{objectFit: "contain"}}
                            />
                        </Link>
                        {itemsInCart()==0 ?
                        <p></p>
                        :
                        <p className='text-right text-xs text-red-600'>{itemsInCart()}</p>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header