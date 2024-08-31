// eslint-disable-next-line react/prop-types
import './Product.css'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect ,useState} from "react";

export default function Product()
{
    const {id}=useParams();
    // console.log(id)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct=async ()=>
        {
            try {
                const res=await axios.get(`http://localhost:8000/api/food/${id}`);
                console.log(res)
                if(res.data.success) 
                {
                    console.log(res.data.product)
                    setProduct(res.data.product)
                }
            } catch (error) {
            console.log(error)
            }
        }
        getProduct();
    }, [id]);
    return(
        <div className="product-container">
            <h1>Product Details</h1>
            <div className="product-image">
                <img src={"http://localhost:8000/images/"+product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-category"><strong>Category:</strong> {product.category}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-price"><strong>Price:</strong> ₹{product.price}</p>
            </div>
        </div>
    )
}