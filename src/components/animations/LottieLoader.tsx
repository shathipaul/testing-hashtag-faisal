"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieLoader = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center gap-4">
      <DotLottieReact
        height={"100"}
        width={"500"}
        src="/Cosmos.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LottieLoader;
