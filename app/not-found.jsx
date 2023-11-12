"use client"

import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

import React from 'react'

const notfound = () => {
    const router = useRouter()

    return (
        <div>
            <h1 className="text-4xl text-center my-6 ">Lo sentimos. Esta página no fue encontada </h1>
            <div className="flex justify-center">
                <Boton className="my-5" onClick={() => router.back()}>Volver</Boton>
            </div>
        </div>
    )
}

export default notfound