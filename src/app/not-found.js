import Image from "next/image";

const NotFound = () => {
  return (
    <div className="text-primary flex h-full w-full flex-col items-center justify-center gap-4 bg-black">
      <Image src={"/not-found.svg"} alt="404-Error" width={500} height={500} />
      <h1 className="text-primary text-center text-4xl">Page Not Found</h1>
      <p className="text-primary text-center">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
