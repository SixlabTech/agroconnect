import React from "react";
import { BarLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="flex absolute ml-96 text-center mt-96  justify-center">
      <BarLoader color={"#3F6341"} loading={loading} />
    </div>
  );
};

export default Loader;
