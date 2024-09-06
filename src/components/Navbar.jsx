
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
 
  return (
    <div  >
      <div className="h-12 bg-white border-b-2 border-blue-500 flex justify-between items-center px-4 md:px-8">
        <Link href={'/'}  className="text-blue-600 text-lg uppercase md:text-xl ">
          <span>shi</span>
          <span className="text-orange-400">ro</span>
        </Link>
        <Menu/>
        
      </div>
    </div>
  );
};

export default Navbar;
