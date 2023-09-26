import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 h-[70vh]">
      <h1 className="text-5xl font-bold text-[#FF5733] ">Oops</h1>
      <h1 className="text-3xl font-bold">404 Your page is not found.</h1>
      <Link to="/">
        <button className="border border-gray p-2 bg-[#FF5733] text-1xl font-semibold text-white rounded-xl">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
