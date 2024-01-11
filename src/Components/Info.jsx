import React from "react";

export default function Info() {
  return (
    <div className="flex flex-col bg-[#fafafa] w-[380px] max-sm:mx-auto">
      <div className="flex flex-row h-[100px] mx-[2rem] mt-[2rem]">
        <div className="flex items-center justify-center">
          <img
            className=" rounded-full h-[64px] w-[64px]"
            src="/Images/men.jpg"
            alt="no"
          />
        </div>
        <div className="flex  ml-[2rem] justify-center flex-col">
          <div className="flex font-new text-[22px] font-[600]">
            <h1>Hi Tarang,</h1>
          </div>
          <div className="flex text-[12px] fot-[550]">
            <p>Welcome back.</p>
          </div>
        </div>
      </div>
      <div className="flex text-[18px] font-[600] mt-[2rem] mx-[2rem]">
        <h1>Today</h1>
      </div>
      <div className="flex text-[18px] font-[600] mt-[1rem] mx-[2rem]">
        <h1 className="font-[650] text-[22px]">$19,250.88</h1>
      </div>
      <div className="flex text-[12px] fot-[550] mx-[2rem]">
        <p className="text-[#B0A695]">Account Balance</p>
      </div>
      <div className="flex text-[18px] font-[600] mt-[1rem] mx-[2rem]">
        <h1 className=" text-[16px]">$4548</h1>
      </div>
      <div className="flex text-[12px] fot-[550] mx-[2rem]">
        <p className="text-[#B0A695]">Year-to-Date Contribution</p>
      </div>
      <div className="flex text-[18px] font-[600] mt-[1rem] mx-[2rem]">
        <h1 className=" text-[16px]">$2040</h1>
      </div>
      <div className="flex text-[12px] fot-[550] mx-[2rem]">
        <p className="text-[#B0A695]">Total Interest</p>
      </div>

      <div class="dropdown flex flex-row items-center text-[#fff] mt-[2rem] mx-[2rem]">
        <button
          class="btn text-[14px] bg-[#4a35ff] dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          I want to
        </button>
        <div class="  dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="abc">
            Action
          </a>
        </div>
      </div>

      <div className="flex mt-[2rem] mx-[2rem] flex-col">
        <div><h1 className="font-[600] text-[18px]">Recent Transactions</h1></div>
        <div className=" mt-[1rem] ">
          <p className="text-[#B0A695] text-[14px]">20-08-2020</p>
          <h2 className="pb-[1rem] text-[16px] border-b-[1px] border-[#B0A695]">Withdrawal Trasfer to Bank-XXX22</h2>
        </div>
        <div className=" mt-[1rem]">
          <p className="text-[#B0A695] text-[14px]">01-09-2020</p>
          <h2 className="pb-[1rem] text-[16px] border-b-[1px] border-[#B0A695]">Withdrawal Trasfer to Bank-XXX22</h2>
        </div>
        <div className=" mt-[1rem] ">
          <p className="text-[#B0A695] text-[14px]">05-10-2021</p>
          <h2 className="pb-[1rem] text-[16px] border-b-[1px] border-[#B0A695]">Withdrawal Trasfer to Bank-XXX22</h2>
        </div>

      </div>

    </div>
  );
}
