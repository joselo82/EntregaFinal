import { Link } from "react-router-dom";
export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Fthecreep.jpg?alt=media&token=e80448a0-46ad-41a3-9368-50099ec2c09e" width="80" height="75" class="rounded mx-auto d-block" alt="foundation"></img>
                        TheCreep
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Fopensea.jpg?alt=media&token=5a393a73-de9f-45c7-8509-22e636c1d406" width="80" height="75" class="rounded mx-auto d-block" alt="opensea"></img>
                        Opensea
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Fmakersplace.jpg?alt=media&token=b9dc3a14-441a-487c-be86-bec4c55ca687" width="80" height="75" class="rounded mx-auto d-block" alt="makersplace"></img>
                        Makersplace
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Fknownorigin.jpg?alt=media&token=6a5a7a55-41c8-41fa-8260-a7336fbd7eb3" width="80" height="75" class="rounded mx-auto d-block" alt="knownorigin"></img>
                        KnownOrigin
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/4"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Ffoundation.jpg?alt=media&token=fbd88d03-ebab-42a8-baef-fa2ac0bf7440" width="80" height="75" class="rounded mx-auto d-block" alt="foundation"></img>
                        Foundation
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/5"}>
                    <button className='btn btn-secondary'>
                        <i className=""></i>
                        <img src="https://firebasestorage.googleapis.com/v0/b/thecreep-1e66c.appspot.com/o/navbar%2Fexchange.jpg?alt=media&token=e6676b7f-af07-4977-9085-15d4b35fc02a" width="80" height="75" class="rounded mx-auto d-block" alt="exchange"></img>
                        Exchange
                    </button>
                </Link>
            </li>
        </ul>
    );
}