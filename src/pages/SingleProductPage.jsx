import { useParams } from "react-router";

function SingleProductPage() {
  const { id } = useParams();
  return (
    <div className="h-full bg-green-500 text-white">Single page {id} </div>
  );
}

export default SingleProductPage;
