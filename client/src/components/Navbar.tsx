import { Bell, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md  tracking-wider font-bold ">
          វើតស្ទរ
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href={"/"}>
          <Home className="w-4 h-4 text-gray-600  " />
        </Link>
        <Bell className="w-4 h-4 text-gray-600  " />
        <Link href={`/cart`}>
          <ShoppingCartIcon />
        </Link>

        <Link href="/login" className="text-gray-600 font-bold  ">
          ចូលគណនី
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
