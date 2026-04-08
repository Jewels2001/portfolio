
import type React from "react";
import { Link } from "react-router";



export default function InterestBox( {hobby, lightColor="#f70", darkColor="#f70"}: {hobby: {id: number, name: string, img: string, mylink: string }, lightColor?: string, darkColor?: string} ) {
  return (
    // <Link to="/about">
    <div className="items-center text-center aspect-square w-auto h-auto min-w-1/4 min-h-1/4
    bg-gray-600 dark:bg-gray-500 rounded-lg outline outline-1 outline-black/50 dark:outline-white/25 p-2 
    place-items-center-safe relative neon-box " style={{'--neon-dark-color': darkColor, '--neon-light-color': lightColor } as React.CSSProperties}> 
        <div className="h-1/5 w-full relative overflow-clip">
            <div className="py-4 text-sm lg:text-lg text-balance text-white dark:text-orange-250">
              {hobby.name}
            </div>
        </div>
        <div className="h-4/5 w-full place-items-center-safe p-2 cursor-pointer">
          <img className="max-h-full max-w-full h-auto w-auto object-fill md:object-fill md:h-fill md:w-fill" // max-h-8/10 max-w-8/10
          src={hobby.img}/>
        </div>

    </div>
  );
}

const resources = [
    {}
];
