// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   // Fetch single product details
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.log("Error fetching product:", err));
//   }, [id]);

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div className="product-details">
//       <img src={product.image} alt={product.title} className="product-detail-img" />
//       <div>
//         <h1>{product.title}</h1>
//         <p><strong>Price:</strong> ${product.price}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p>{product.description}</p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.title} className={styles.img} />
            <div>
                <h1>{product.title}</h1>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p className={styles.desc}>{product.description}</p>
            </div>
        </div>
    );
}
