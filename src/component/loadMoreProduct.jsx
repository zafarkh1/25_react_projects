import { useState, useEffect } from "react";
import "./load-more-product.css";

function LoadMoreProduct(props) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      setProducts([]);

      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // console.log(products);

  return (
    <div className="container">
      <div className="product-container">
        {products &&
          products.length > 0 &&
          products.map((item, index) => (
            <div className="product" key={index}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price} $</p>
            </div>
          ))}
      </div>
      <div className="button">
        <button onClick={() => setCount(count + 1)}>Load more product</button>
      </div>
    </div>
  );
}

export default LoadMoreProduct;
