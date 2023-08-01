
import "./PageWaiters.css"
import product from "../../../images/Group 8(1).png"
import AddOrder from "./AddOrder"
import { useState } from "react";

const PageWaiters = () => {

    
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    {}

    return (
        <section className="container">
            <div className="menuButtons">
                <button className="button">DESAYUNO</button>
                <button className="button">ALMUERZO Y CENA</button>
            </div>

            <div className="container-products">
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
                <div className="product">
                    <img className="img-products" src={product} alt="meals" />
                    <p className="item-product">Café americano
                        <span> $19</span></p>
                </div>
            </div>
            <div className="menuButtons">
                <input
                    onClick={() => Toggle()}
                    type="submit"
                    className="button"
                    value="VER CARRITO"
                />
            </div>
        </section>
    )
}

export default PageWaiters