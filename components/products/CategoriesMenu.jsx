"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/todos", },
    { label: "Frutos Secos", href: "/productos/Frutos-Secos", },
    { label: "Mix de Frutos Secos", href: "/productos/Mix-de-Frutos-Secos", },
    { label: "Frutas Desecadas", href: "/productos/Frutas-Desecadas", },
    { label: "Semillas", href: "/productos/Semillas", },
    { label: "Harinas - Féculas - Avenas", href: "/productos/Harinas-Feculas-Avenas", },
    { label: "Legumbres - Arroz", href: "/productos/Legumbres-Arroz", },
    { label: "Chocolatoso", href: "/productos/Chocolatoso", },
    { label: "Repostería", href: "/productos/Reposteria", },
    { label: "Envasados", href: "/productos/Envasados", },
    { label: "Cereales", href: "/productos/Cereales", },
    { label: "Especias", href: "/productos/Especias", },
    { label: "Otros", href: "/productos/Otros", }
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold border-b" :''} py-2`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default CategoriesMenu