// eslint-disable-next-line react/prop-types
import './Product.css'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect ,useState} from "react";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/plant/${id}`);
                if (res.data.success) {
                    setProduct(res.data.product);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [id]);
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="product-container">
            <h1>Product Details</h1>
            <div className="product-content">
                <div className="product-details">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-category"><strong>Category:</strong> {product.category}</p>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price"><strong>Price:</strong> ₹{product.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                    <div className="quantity-control">
                        <button className="quantity-button">-</button>
                        <span className="quantity">1</span>
                        <button className="quantity-button">+</button>
                    </div>
                </div>
                <div className="product-image">
                    <img src={"http://localhost:8000/images/" + product.image} alt={product.name} />
                </div>
            </div>
        </div>
    );
}
