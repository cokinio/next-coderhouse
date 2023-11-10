import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
	{
		label: "Frutos Secos",
		href: "/productos/Frutos-Secos",
		img: "/frutas-secas.webp",
	},
	{
		label: "Mix de Frutos Secos",
		href: "/productos/Mix-de-Frutos-Secos",
		img: "/mixes.webp",
	},
	{ label: "Semillas", href: "/productos/Semillas", img: "/semillas.webp" },
	{
		label: "Harinas - Féculas - Avenas",
		href: "/productos/Harinas-Feculas-Avenas",
		img: "/harinas.webp",
	},
	{
		label: "Legumbres - Arroz",
		href: "/productos/Legumbres-Arroz",
		img: "/legumbres.webp",
	},
	{ label: "Cereales", href: "/productos/Cereales", img: "/cereales.webp" },
	{
		label: "Repostería",
		href: "/productos/Reposteria",
		img: "/reposteria.webp",
	},
	{ label: "Especias", href: "/productos/Especias", img: "/especias.webp" },
];

const CategoriesMainPage = () => {
	return (
		<div className="flex flex-wrap justify-center justify-items-center	">
			{links.map((link) => (
				<Link href={link.href} className="basis-auto">
                    <div>
					<Image
						src={link.img}
						alt={link.label}
						width={300}
						height={300}
					/>
                    <h2 className="mx-auto text-center text-xl font-bold">{link.label}</h2>
                    </div>
				</Link>
			))}
		</div>
	);
};

export default CategoriesMainPage;
