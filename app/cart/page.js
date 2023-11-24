"use client";

import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/context/CartContext";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const CartPage = () => {
	const { cart } = useCartContext();
	consoloe.log(cart)
	return (
		<main className="container m-auto">
			<h2 className="text-2xl my-10 pb-4 text-center">Tu compra</h2>

			<Table className="h-full">
				<TableCaption>Items agregados a tu carrito de Compras</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="text-center">Imagen</TableHead>
						<TableHead className="text-center">Titulo</TableHead>
						<TableHead className="text-center">Total</TableHead>
						<TableHead className="text-center">Editar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{cart.map((item) => (
						<CartItem item={item} key={item.slug} />
					))}
				</TableBody>
			</Table>
		</main>
	);
};

export default CartPage;
