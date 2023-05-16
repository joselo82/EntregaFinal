import { Link } from 'react-router-dom'
export const Item = ({ item }) => {
    return (
        <div className="col-md-3">
        <div className="card" style={{ width: '19rem' }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} </h5>
                <p className="card-text">Description: {item.short}</p>
                <p className="card-text">Price: {item.precio} ETH</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-dark">See Piece</button></Link>
            </div>
        </div>
        </div>
    )
}