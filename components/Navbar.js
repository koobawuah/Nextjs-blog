import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row p-2 mb-6 text-white bg-red-500 rounded-lg gap-6">
        <Link href="/">
          <a className="text-base font-semibold tracking-tighter">Nextjs Blog Home</a>
        </Link>
        <Link href="/about">
            <a className="text-base font-semibold tracking-tighter">About Nextjs Blog</a>
        </Link>
        <Link href="/posts">
          <a className="text-base font-semibold tracking-tighter"> Nextjs Blog Posts</a>
        </Link>
    </div>
  );
};

export default Navbar;
