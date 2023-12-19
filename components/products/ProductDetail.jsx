import { mockData } from "@/data/diet";
import Image from "next/image";
import QuantSel from "./QuantSel";
import GoBack from "../ui/GoBack";

const ProductDetail = async ({ slug }) => {
	let itemFound;
	let fixedSlug = decodeURI(slug);
	console.log(fixedSlug);
	try {
		let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/product/${fixedSlug}`, {
			cache: "no-store",
		});
		itemFound = await res.json();
	} catch (error) {
		console.log(error);
	}

	console.log(itemFound);
	let item = itemFound[0];
	return (
		<div className="max-w-4xl m-auto">
			<GoBack className="text-sm text-blue-500 underline mb-6" />
			<section className="flex gap-6">
				<div className="relative basis-1/2">
					<Image src={item.image} alt={item.title} width={860} height={860} />
				</div>
				<div className="basis-1/2 h-full">
					<h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">
						{item.title}
					</h2>
					<p className="text-4xl"> {item.price}</p>
					<p className="text-2xl"> stock: {item.stock}</p>

					<QuantSel className="my-auto" item={item} />
				</div>
			</section>
			<section className="mt-12">
				<h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">
					Descripcion
				</h3>
				<p className="text-gray-600">
					{item.description ? item.description : item.category}
				</p>
			</section>
		</div>
	);
};

export default ProductDetail;
