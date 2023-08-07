const Product = ({id, name, image, price, type}) => {
   
    return (
        <div className="product" key={id}>
            <img className="img-products" src={image} alt={name} />
            <p className="item-product">Producto: {name}
            <span> ${price}</span></p>
        </div>
    )

}

export default Product