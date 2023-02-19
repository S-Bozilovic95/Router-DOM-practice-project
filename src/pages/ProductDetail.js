import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <button onClick={navigateHandler}>Back</button>
    </>
  );
};

export default ProductDetail;
