import React from "react";
import { Link } from "react-router-dom";

export default function ButtonSell() {
  return (
    <>
            <div className='main-container w-[272px] h-[168px] rounded-[10px] border-solid border border-[#ece7e2] relative mx-auto my-0'>
      <div className="w-[208px] h-[30px] text-[10px] font-extrabold leading-[16px] relative text-center mt-[23px] mr-0 mb-0 ml-[31px]">
        <span className=" text-[10px] font-extrabold leading-[16px] text-[#f89c0e] relative text-center">
          SÉLECTIONNEZ UN PRODUIT À ACHETER /
        </span>
        <span className=" text-[10px] font-extrabold leading-[16px] text-[#3f6341] relative text-center">
          VENDRE
        </span>
      </div>
      <button className='w-[208px] h-[40px] bg-[#3f6341] rounded-[5px] border-none relative z-[1] pointer mt-[32px] mr-0 mb-0 ml-[31px]'>
        <Link to="/articleForm" className="flex w-[192px] h-[40px] justify-center items-center text-[13px] font-bold leading-[27px] text-[#fff] absolute top-0 left-[8px] text-center uppercase whitespace-nowrap z-[2]">
          Je vends ma production
        </Link>
      </button>
    </div>
    </>
  );
}
