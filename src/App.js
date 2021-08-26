import React from 'react'
import CartContainer from './CartContainer'
import { useGlobalContext} from './AppProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";



function App() {
    const { loading, amount } = useGlobalContext();
    return (
    <>
    <nav className="nav">
        <div><h2>UseReducer</h2></div>
        <div>
            <p className="icon"><FontAwesomeIcon icon={faShoppingBag} /></p>
            <div className="amount-container">{amount}
            </div>
        </div>
     </nav>
     <CartContainer />
      </>
    )
}

export default App
