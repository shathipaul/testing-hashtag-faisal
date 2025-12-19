"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loader from "../../../public/Cosmos.json";
import Lottie from "lottie-react";

const LottieLoader = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center gap-4">
      {/* <DotLottieReact
        height={"100"}
        width={"500"}
        src="/Cosmos.lottie"
        loop
        autoplay
      /> */}
      <Lottie
        animationData={loader}
        loop
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default LottieLoader;
