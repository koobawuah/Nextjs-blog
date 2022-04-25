import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl font-semibold tracking-tighter text-red-700">
        {" "}
        Page Not Found!{" "}
      </h1>
      <p className="pt-6 text-base tracking-normal">
        Nextjs Blog found no page :({" "}
      </p>
      <Link href="/">
        <a className="font-semibold tracking-tighter underline text-md">
          Go back home{" "}
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
