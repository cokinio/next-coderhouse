import React from 'react'
import EditForm from '@/components/admin/EditForm'



const getProductInfo = async (product) =>{
  let fixedSlug=decodeURI(product)
  const item = await fetch(`http://localhost:3000/api/product/${fixedSlug}`, {
      cache: 'no-store'
  }).then(res => res.json())}


const page = ({params}) => {
const {product} = params
useEffect(()=>{let datos= getProductInfo(product)
},[]);

return (
    <div>
        <EditForm item={datos} />
    </div>
  )
}

export default page