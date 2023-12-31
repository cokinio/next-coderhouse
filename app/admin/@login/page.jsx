import React from "react";
import Link from "next/link";
import { UserAuthForm } from "@/components/auth/User-auth-form";

export const metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
	return (
		<>
			<div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid lg:px-0">
				<div className="lg:p-8 mx-auto">
					<div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Ingresa a tu cuenta
							</h1>
							<p className="text-sm text-muted-foreground">
								Ingresa tu email para loguearte
							</p>
						</div>
						<UserAuthForm />
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
