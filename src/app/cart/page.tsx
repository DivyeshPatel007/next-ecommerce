import { getCart } from "@/lib/db/cart"
import { Metadata } from "next"
import CartEntry from "./CartEntry"
import { setProductQuantity } from "./action"
import { formatPrice } from "@/lib/format"

export const metadata: Metadata = {
    title: "Your Cart - Flowmazon",
}
export default async function Cart() {
    const cart = await getCart()
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cart?.items.map(cartItem=>(
          <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity} />
        ))}
        { !cart?.items.length  && <p className='mt-4'>No items in your shopping cart.</p> }
        <div className="flex flex-col items-end sm:items-center ">
          <p className="mb-3 font-bold">
            Total:{formatPrice(cart?.subtotal || 0 )}
          </p>
          <button className="btn btn-primary sm:w-[200px]">Checkout</button>
        </div>
    </div>
  )
}
