import logoDark from "../welcome/logo-dark.svg";

import InterestBox from "../interestBox/interestBox";


export function MyHome() {
    const hobbies = temp_list.map(hobby => hobby.name);

    interface Hobby {
        id: number,
        name: string,
        img: string
    }

    function func1(temp_list: Hobby[]) {
        for (const hobby of temp_list) {
            return <InterestBox hobby={hobby} />
        }

    };

    const test1 = temp_list.map(name => <InterestBox hobby={name} />)

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
            The Landing Point

        </header>
        <div className="max-w-[1300px] px-5 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-5">
            This div is here

            {/* {func1(temp_list)} */}
            { test1 }

            
            <InterestBox hobby={{id:5, name:"1", img:logoDark}}/>
            <InterestBox hobby={{id:6, name:"2", img:logoDark}}/>
            <InterestBox hobby={{id:7, name:"3", img:logoDark}}/>

        </div>
      </div>
    </main>
  );
}



const resources = [
    {}
];


const temp_list = [
    {
        id: 0,
        name: "crochet",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/Birch_Log_%28texture%29_JE3_BE2.png"

    },
    {
        id: 1,
        name: "board games",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Cherry_Planks_%28pre-release_texture%29.png"
    },
    {
        id: 3,
        name: "programming / coding",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/28/Blue_Orchid_%28texture%29_JE2_BE2.png"
    }
]

