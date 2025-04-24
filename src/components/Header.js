import React from "react";

function Header({ title, posssition = "center" }) {
  return (
    <div
      className={`flex flex-col justify-start items-${posssition} mt-6 mb-4`}
    >
      <h3 className="font-semibold text-gray-600 text-3xl"> {title}</h3>
      <span className="bg-green-600 w-[100px] h-[4px] rounded-3xl mt-2"></span>
    </div>
  );
}

export default Header;
