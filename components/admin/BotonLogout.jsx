"use client"
import React from 'react'
import { useAuthContext } from "@/context/AuthContext"

const BotonLogouot = ({children}) => {
    const { logout } = useAuthContext()
  return (
    <button onClick={()=>logout()} className="m-5 bg-slate-700 text-white font-xl p-3 rounded-xl">{children}</button>
  )
}

export default BotonLogouot