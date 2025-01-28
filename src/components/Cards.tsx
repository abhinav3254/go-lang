import CardItem from "./CardItem"

const Cards = () => {
    return (
        <div className="w-full h-fit flex items-center justify-center flex-wrap py-5">

            <CardItem
                name={"Web Development"}
                description={"Crafting modern and responsive websites, from concept to deployment, tailored to your needs."}
            />
            <CardItem
                name={"Mobile Application Development"}
                description={"Designing and building innovative mobile applications for Android and iOS platforms."}
            />

            <CardItem
                name={"Server and Cloud"}
                description={"Providing scalable server and cloud solutions to ensure seamless and secure operations."}
            />


            {/* <div className="h-60 w-56 flex flex-col items-center justify-center text-center p-4 rounded-md shadow-md m-4">
                <img className="h-12 w-12" src="../src/assets/web.svg" alt="web" />
                <span className="text-xl my-4">Web Development</span>
                <p className="text-gray-400 text-xs">Crafting modern and responsive websites, from concept to deployment, tailored to your needs.</p>
            </div> */}

            {/* <div className="h-60 w-56 flex flex-col items-center justify-center text-center p-4 rounded-md shadow-md m-4">
                <img className="h-12 w-12" src="../src/assets/mobile.svg" alt="mobile" />
                <span className="text-xl my-4">Mobile Application Development</span>
                <p className="text-gray-400 text-xs">Designing and building innovative mobile applications for Android and iOS platforms.</p>
            </div> */}

            {/* <div className="h-60 w-56 flex flex-col items-center justify-center text-center p-4 rounded-md shadow-md m-4">
                <img className="h-12 w-12" src="../src/assets/server.svg" alt="server" />
                <span className="text-xl my-4">Server and Cloud</span>
                <p className="text-gray-400 text-xs">Providing scalable server and cloud solutions to ensure seamless and secure operations.</p>
            </div> */}
        </div>
    )
}

export default Cards