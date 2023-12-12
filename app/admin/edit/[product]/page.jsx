import React from 'react'
import EditForm from '@/components/admin/EditForm'

const page = async ({params}) => {
const {product} = params
let fixedSlug=decodeURI(product)
const item = await fetch(`http://localhost:3000/api/product/${fixedSlug}`, {
      cache: 'no-store'
  }).then(res => res.json());


return (
    <div>
        <EditForm item={item[0]} />
    </div>
  )
}

export default page