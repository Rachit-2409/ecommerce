import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/Context'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItem, removeCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <hr />
            </div>

            {all_product.map((e, i) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div  key={i}>
                            {console.log(e)}
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )

                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                           <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If You have a promo Code ENter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem
