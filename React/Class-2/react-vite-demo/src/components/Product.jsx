
const Product = (props) => {

    const productClickHandler = () => {
        console.log('Product Clicked');
    }


    return <figure onClick={productClickHandler} className="product">
        <img src={props.image} alt="" />
        <figcaption>
            <h3>{ props.name }</h3>
            <h3>Price: ${props.price}</h3>
            <p>{ props.description }</p>
        </figcaption>
    </figure>
}

export default Product;

