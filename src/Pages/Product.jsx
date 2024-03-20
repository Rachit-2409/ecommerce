import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const Product = all_product.find((e) => e.id === Number(ProductId));
  return (
    <div>
      <Breadcrums product={Product}/>
      <ProductDisplay product={Product}/>
    </div>
  )
}

export default Product
                                