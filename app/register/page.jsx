import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserRegisterForm } from "@/components/auth/User-register-form";

export const metadata = {
	title: "Registro",
	description: "Registro de usuarios",
};

export default function RegisterPage() {
	return (
		<>
			<div className="container relative hidden h-[400px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid lg:px-0">
				<Link
					href="/examples/authentication"
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8"
					)}
				>
					Login
				</Link>
				<div className="lg:p-8 mx-auto">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Crea tu cuenta
							</h1>
							<p className="text-sm text-muted-foreground">
								Ingresa tu email parar crea tu cuenta
							</p>
						</div>
						<UserRegisterForm />
						<p className="px-8 text-center text-sm text-muted-foreground">
							Clickeando aceptas nuestros{" "}
							<Link
								href="/terms"
								className="underline underline-offset-4 hover:text-primary"
							>
								Terminos y condiciones
							</Link>{" "}
							y{" "}
							<Link
								href="/privacy"
								className="underline underline-offset-4 hover:text-primary"
							>
								Politicas de privacidad
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
