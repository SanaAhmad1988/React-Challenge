import {Link} from "react-router-dom"

const Navbar = () => {

    return(
        <nav>
        <h1>seed theory</h1>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/shop">Shop</Link>
            </li>
        </ul>

        </nav>




    )
}
export default Navbar

