import { useRouteError } from "react-router-dom";
import NotFound from "../Images/NotFound.jpg";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div class="text-center">
        <img
          src={NotFound}
          class="w-3/4 mx-auto mb-8 sm:w-2/5 md:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4"
          alt="Error Image"
        />
        <h1 class="text-4xl font-bold text-red-500">Error 404</h1>
        <p class="text-lg text-gray-700">
          Oops! The page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
};

export default Error;
