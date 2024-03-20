import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/Context'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      {console.log(props.category)}
      <div className="shopCategory-products">
        {all_products.map((e, i) => {
          console.log(e.category)
          if (props.category === e.category) {
            return (<Item key={e.id} id={e.id} image={e.image} name={e.name} new_price={e.new_price} old_price={e.old_price} />)

          }
          else
          return null
        })}

      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
