import React from 'react'
import './RelatedProducts.css'
import data_products from '../assets/data'
import Item from '../Items/Item';
const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
        {data_products.map((e,i)=>{  return <Item key={i} image={e.image} old_price={e.old_price} new_price={e.new_price} name={e.name} id={e.id} />})}
        </div>
    </div>
  )
}

export default RelatedProducts
