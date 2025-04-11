"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div className="text-primary flex h-full w-full flex-col items-center justify-center gap-4 bg-black">
      <Image src={"/error.svg"} alt="500-Error" width={500} height={500} />
      <h1 className="text-primary text-center text-4xl">
        Internal Server Error
      </h1>
      <p className="text-primary text-center">
        Something went wrong on our end. Please try again later.
      </p>
    </div>
  );
};

export default Error;
