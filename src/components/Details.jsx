import { useLocation, useNavigate } from "react-router-dom";
import back_arrow_icon from '../assets/back_arrow_icon.svg';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location);

  return (
    <div className="p-4 relative">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="absolute top-4 left-4 w-8 h-8 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="flex">
        <img
          src={location?.state?.data?.image}
          alt="Product"
          className="w-1/3 rounded-lg shadow-md"
        />
        <div className="ml-6">
          <h1 className="font-bold text-3xl text-gray-800">$ {location?.state?.data?.price}</h1>
          <h1 className="mt-5 text-gray-700">
            <span className="font-semibold">Category</span> : {location?.state?.data?.category}
          </h1>
          <h1 className="mt-5 text-gray-700">
            <span className="font-semibold">Title</span> : {location?.state?.data?.title}
          </h1>
          <h1 className="mt-5 text-gray-700">
            <span className="font-semibold">Description</span> : {location?.state?.data?.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
