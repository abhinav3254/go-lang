const Home = () => {
    const getExperience = (): string => {
        const firstDate: Date = new Date('2023-06-15');
        const secondDate: Date = new Date();
        let years: number = secondDate.getFullYear() - firstDate.getFullYear();
        let months: number = secondDate.getMonth() - firstDate.getMonth();
        // Adjust if months are negative
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        if (months > 0) {
            return `${years}.${months}`;
        } else return `${years}`

    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/4 lg:gap-20 gap-5">
                <img className="h-56 w-56 lg:h-72 lg:w-72 object-cover rounded-full" src="../src/assets/img.png" alt="" />
                <div className="flex flex-col text-center lg:text-start lg:items-start items-center justify-center">
                    <span> <span className="lg:text-2xl text-xl text-red-800">#1</span> International Rank Holder
                        <span className="text-[8px]">(SOF)</span>
                    </span>
                    <span className="text-4xl">Abhinav Jha</span>
                    <p className="my-2 lg:text-[16px] text-xs">
                        I am a software engineer, tech enthusiast, and problem solver worldwide, specializing in developing innovative solutions and delivering seamless digital experiences.
                    </p>
                    <p className="my-2 lg:text-[16px] text-xs text-pink-500 job">
                        I even rejected a government job opportunity to wholeheartedly pursue my passion for coding and software development.
                    </p>
                    <p className="my-2 lg:text-[16px] text-xs">
                        With {getExperience()} years of professional experience, I have expertise in a wide range of technologies.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Home