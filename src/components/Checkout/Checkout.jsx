import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"
import { toast } from "react-toastify" 
export const Checkout = () => {
    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    let navigate = useNavigate() //Devuelve la localizacion actual
    const consultarForm = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) 
        const cliente = Object.fromEntries(datosFormulario) 
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) { 
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD.id, prodBBD) 
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                }
            })
        })
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));
        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast(`💀 Thank you so much for buying with us. Your purchase ID is "${ordenCompra.id}" for a total of ${totalPrice()} ETH. We will contact you shortly for the shipment !!!`, {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                emptyCart()
                e.target.reset() 
                navigate("/") 
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>To complete the purchase you must have products in the cart</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Keep Buying</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Name and Surname</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repeat Email</label>
                                <input type="email" className="form-control" name="repeatEmail" id="repeatEmail" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">Identification Number</label>
                                <input type="number" className="form-control" name="dni" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" name="celular" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Address</label>
                                <input type="text" className="form-control" name="direccion" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Purchase</button>
                        </form>
                        
                    </div>                    
            }
        </>
    )
}
