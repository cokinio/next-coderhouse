import Boton from "../ui/Boton";
import Image from "next/image";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const CartItem = ({ item }) => {
	return (
		<TableRow>
			<TableCell className="text-center">
				<Image className="mx-auto"
					src={item.Image1}
					alt={item.Title1}
					width={80}
					height={80}
				/>
			</TableCell>
			<TableCell className="text-center">
				<h3>{item.Title1}</h3>
				<p className="text-sm font-semibold">{item.Price1}</p>
				<p className="text-sm">Cantidad: {item.quantity}</p>
			</TableCell>
			<TableCell className="text-center">{item.subtotal1}</TableCell>
			<TableCell className="text-center">
				<Boton className="bg-red-600">
					<Image
						src={"/icons/trash-icon.svg"}
						alt="Trash icon"
						width={30}
						height={30}
					/>
				</Boton>
			</TableCell>
		</TableRow>
	);
};

export default CartItem;
