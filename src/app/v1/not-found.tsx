import Image from "next/image";
import Link from "next/link";

const V1NotFound = () => {
  return (
    <div className="text-primary flex h-full w-full flex-col items-center justify-center gap-4 bg-black p-6">
      <Image src={"/not-found.svg"} alt="404-Error" width={360} height={360} />
      <h1 className="text-primary text-center text-4xl">Page Not Found</h1>
      <p className="text-primary text-center">
        The page you are looking for does not exist in v1.
      </p>
      <Link
        href="/v1"
        className="border-primary text-primary hover:bg-primary hover:text-shadow rounded-3xl border px-4 py-2 text-sm font-semibold transition-colors"
      >
        Back to v1 Home
      </Link>
    </div>
  );
};

export default V1NotFound;
