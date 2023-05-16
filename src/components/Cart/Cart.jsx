import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Empty Cart</h1>
                        <button className="btn btn-dark"><Link to={"/"} className="nav-link">Keep Buying</Link></button>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                        <div className="cartButtons">
                            <p>Summary: {totalPrice()} ETH</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Empty Cart</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Keep Buying</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Purchase</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}