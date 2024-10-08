import Link from "next/link"
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* {logo} */}
        <Link href="/">
          <h1 className="text-6xl font-semibold">
            dariush <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex ">
          <Nav/>
          <Link href="/contact">
            <Button className="text-2xl font-semibold tracking-widest">hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
