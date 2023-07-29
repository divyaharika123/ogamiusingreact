import "../styles/ProductCard.css"
const ProductCard = ({product}) => {
    return (
        <>
        <div className="product-card">
            <img className="pc" src={"https://ogami-react.vercel.app"+product.coverImage}/> 
            <p>{product.category}</p>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
        </div>
        </>
    )
}
export default ProductCard