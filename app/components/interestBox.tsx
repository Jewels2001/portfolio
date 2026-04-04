
import { Link } from "react-router";


export default function InterestBox( {hobby}: {hobby: {id: number, name: string, img: string, mylink: string }} ) {
  return (
    // <Link to="/about">
    <div className="items-center text-center aspect-square w-auto h-auto min-w-1/4 min-h-1/4
    dark:bg-gray-500 rounded-lg outline outline-1 outline-black/50 dark:outline-white/25 p-2 
    shadow-xl/55 shadow-orange-500/80 ring ring-orange-500 m-1
    box-border place-items-center-safe relative"> 
        <div className="h-1/4 w-full relative overflow-clip">
            <div className="text-sm lg:text-lg text-balance text-white dark:text-orange-250">
            Box
            My hobby for this box is: {hobby.name}
            </div>
        </div>
        <div className="h-3/4 w-full place-items-center-safe p-2 cursor-pointer">
          <img className="max-h-full max-w-full h-auto w-auto object-fill md:object-fill md:h-fill md:w-fill" // max-h-8/10 max-w-8/10
          src={hobby.img}/>
        </div>

    </div>
  );
}

const resources = [
    {}
];
