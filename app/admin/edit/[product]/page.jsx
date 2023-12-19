import React from 'react'
import EditForm from '@/components/admin/EditForm'

const page = async ({params}) => {
const {product} = params
let fixedSlug=decodeURI(product)
let item={}

try{
  let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/product/${fixedSlug}`, {
        cache: 'no-store'
    })
    item= await res.json();
}catch(error){
  console.log(error)
}


return (
    <div>
        <EditForm item={item[0]} />
    </div>
  )
}

export default page