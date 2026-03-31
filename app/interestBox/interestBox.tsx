

export default function InterestBox( {hobby}: {hobby: {id: number, name: string, img: string }} ) {
  return (
    <div className="items-center text-center w-32 md:w-48 lg:w-60 xl:w-65 h-32 md:h-48 lg:h-60 xl:h-65 
    dark:bg-gray-500 rounded-lg outline outline-1 outline-black/50 dark:outline-white/25 margin-2 
    shadow-xl/55 shadow-orange-500/80 ring ring-orange-500 ">
        Box
        My hobby for this box is: {hobby.name}
        <div className="place-items-center-safe ">
            <img className="max-h-8/10 max-w-8/10 object-contain object-scale-down"
            src={hobby.img}/>
        </div>

    </div>
  );
}

const resources = [
    {}
];
