import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-900 text-2xl">
          Muhammad Eshareeb Rajput
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter">
          DOSC.
        </h1>
      </div>
    </>
  );
}

export default Background;
