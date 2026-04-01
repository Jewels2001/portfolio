import logoDark from "../welcome/logo-dark.svg";

import InterestBox from "../components/interestBox";
import UniversalLink from "~/components/universalLink";


export function MyHome() {
    // const hobbies = temp_list.map(hobby => hobby.name);

    // interface Hobby {
    //     id: number,
    //     name: string,
    //     img: string
    // }

    // function func1(temp_list: Hobby[]) {
    //     for (const hobby of temp_list) {
    //         return <InterestBox hobby={hobby} />
    //     }

    // };

    const test1 = temp_list.map((hobby) => (
        <UniversalLink key={hobby.name} to={hobby.mylink} className="no-underline text-inherit contents">
            <InterestBox hobby={hobby} /> 
        </UniversalLink>
    ));

    const hobbies = temp_list.map(hobby => <InterestBox hobby={hobby} key={hobby.id} />)

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
            The Landing Point

        </header>
        <div className="max-w-[1300px] px-6 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-5">
            This div is here

            {test1}
            {hobbies}

       
            
            <InterestBox hobby={{id:5, name:"1", img:logoDark, mylink:"/about"}}/>
            <InterestBox hobby={{id:6, name:"2", img:logoDark, mylink:"/about"}}/>
            <InterestBox hobby={{id:7, name:"3", img:logoDark, mylink:"/about"}}/>

        </div>
      </div>
    </main>
  );
}



const resources = [
    {}
];

type ExternalLink = `http://${string}` | `https://${string}`;
type InternalLink = `/${string}`;

type HobbyItem = {
    id: number,
    name: string;
    img: ExternalLink | InternalLink;
    mylink: ExternalLink | InternalLink;
};




const temp_list: HobbyItem[] = [
    {
        id: 0,
        name: "crochet",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/Birch_Log_%28texture%29_JE3_BE2.png",
        mylink: "/about"
    },
    {
        id: 1,
        name: "board games",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Cherry_Planks_%28pre-release_texture%29.png",
        mylink: "https://www.google.com"
    },
    {
        id: 3,
        name: "programming / coding",
        img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/28/Blue_Orchid_%28texture%29_JE2_BE2.png",
        mylink: "https://www.leetcode.com"
    }
]

