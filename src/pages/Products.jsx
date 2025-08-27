// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Products() {
//     const [products, setProducts] = useState([]);

//     // Fetch products from FakeStore API
//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//             .then((res) => res.json())
//             .then((data) => setProducts(data))
//             .catch((err) => console.log("Error fetching products:", err));
//     }, []);

//     return (
//         <div>
//             <h1>Our Products</h1>
//             <div className="products-list">
//                 {products.map((p) => (
//                     <div key={p.id} className="card">
//                         <img src={p.image} alt={p.title} className="product-img" />
//                         <h3>{p.title}</h3>
//                         <p>Price: ${p.price}</p>
//                         <Link to={`/products/${p.id}`}>View Details</Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Products.module.css";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1 className={styles.heading}>Our Products</h1>
            <div className={styles.productsList}>
                {products.map((p) => (
                    <div key={p.id} className={styles.card}>
                        <img src={p.image} alt={p.title} className={styles.productImg} />
                        <h3>{p.title}</h3>
                        <p>${p.price}</p>
                        <Link to={`/products/${p.id}`} className={styles.detailsBtn}>
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
