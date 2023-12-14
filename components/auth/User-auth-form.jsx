"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/AuthContext"
import { useState } from "react"

export function UserAuthForm({ className, ...props }) {
	const [isLoading, setIsLoading] = useState(false);
  const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
    }


	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<form onSubmit={handleSubmit}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Input
							name="email"
							placeholder="nombre@ejemplo.com"
							type="email"
              value={values.email}
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
              onChange={handleChange}
						/>
						<Input
							name="password"
							placeholder="password"
							type="password"
              value={values.password}
							autoCapitalize="none"
							autoCorrect="off"
							disabled={isLoading}
              onChange={handleChange}
						/>
					</div>
					<Button onClick={() => loginUser(values)} disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
						)}
						Ingresar con Email
					</Button>
				</div>
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						No tenes cuenta? Registrate
					</span>
				</div>
			</div>
			<Button disabled={isLoading}>
				<Link href="/register">Registrarse</Link>
			</Button>
		</div>
	);
}
