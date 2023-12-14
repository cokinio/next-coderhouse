"use client"
import { cn } from "@/lib/utils"
import { Icons } from "@/lib/icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useAuthContext } from "@/context/AuthContext"

export function UserRegisterForm({ className, ...props }) {
    
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false)
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
    }

  
    async function onSubmit(event) {
      event.preventDefault()
      setIsLoading(true)
  
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  
    return (
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={onSubmit}>
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
            <Button onClick={() => registerUser(values)} disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Registrarse
            </Button>
          </div>
        </form>
      </div>
    )
  }