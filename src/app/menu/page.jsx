import { menu } from "@/data";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-7 md:p-24   lg:p-30 h-[calc(100vh-4.5rem)] w-full ">
      {menu.map((item) => (
        <Link className="h-1/3 w-full bg-cover md:h-[80%] md:p-6   " key={item.id} href={`menu/${item.slug}`} style={{backgroundImage:`url(${item.img}) `}}>
          <div className={`flex flex-col md:gap-4 p-3  bg-${item.color}-400 text-start  text-${item.color}`}>
            <h1 className={` text-sm md:text-3xl w-1/2 uppercase font-bold`}>{item.title}</h1>
            <p className={` text-[10px] md:text-[15px] w-1/2`}>{item.desc}</p>
            <button className={`text-${item.color} text-sm md:text-lg hidden md:block text-start hover:cursor-pointer bg-green-400 rounded-md w-max p-2 `}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
