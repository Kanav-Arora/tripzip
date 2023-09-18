import React from 'react'
import { ImgWithFallback } from '../../assets/utilities';

export default function Team() {
    let team = [
        {
            name: "Kanav Arora",
            img: "/images/src/kanav.webp",
            fallbackimg: "/images/fallback/kanav.jpeg",
            desc: "Currently working at Deloitte. Kanav is currently pursuing his undergrad degree from Bennett University. He has worked on various industry level projects.",
            instagram: "https://www.instagram.com/_kanavarora/",
            twitter: "https://twitter.com/Beardy_Weird",
            github: "https://github.com/Kanav-Arora",
            linkedin: "https://www.linkedin.com/in/kanavarora1505/"
        },
        {
            name: "Aadi Jain",
            img: "/images/src/aadi.webp",
            fallbackimg: "/images/fallback/aadi.jpeg",
            desc: "Currently working at Scaler by InterviewBit. Aadi is currently pursuing his undergrad degree from Bennett University. He has worked on various industry level projects.",
            instagram: "",
            twitter: "",
            github: "",
            linkedin: ""
        },
    ]

    return (
        <div className="mt-20 mb-10 mx-auto tablet:mx-20 laptop:mx-40 xlaptop:mx-60">
            <div className="landing-section-title text-center text-2xl">Our Team</div>
            <div className='py-10'>
                <div className="flex flex-col items-center space-y-10 laptop:space-y-0 laptop:flex-row laptop:justify-center laptop:items-stretch laptop:space-x-10  xlaptop:space-y-0  xlaptop:items-stretch xlaptop:flex-row xlaptop:justify-center xlaptop:space-x-10 ">
                    {team.map((e, index) => {
                        return (
                            <div className="bg-white rounded-lg shadow-lg w-8/12 tablet:w-6/12 relative" key={index}>
                                <div className="relative h-80 overflow-hidden rounded-t-lg mb-4">
                                    <ImgWithFallback className="absolute top-0 left-0 w-full h-full object-cover" src={e.img} fallback={e.fallbackimg}
                                        alt={e.name + " Image"} />
                                </div>
                                <div className="text-left px-5 pb-10 h-max flex flex-col">
                                    <div className='mb-5'>
                                        <h2 className="text-xl font-bold mb-2">{e.name}</h2>
                                        <p className="text-gray-700 mb-6">
                                            {e.desc}
                                        </p>
                                        <ul className="mt-8 flex justify-center gap-6 absolute bottom-5 left-5 right-5 w-fit">
                                            <li>
                                                <a
                                                    href={e.instagram}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    <span className="sr-only">Instagram</span>

                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={e.twitter}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    <span className="sr-only">Twitter</span>

                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={e.github}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    <span className="sr-only">GitHub</span>

                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={e.linkedin}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    <span className="sr-only">LinkedIn</span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true">
                                                        <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    )
}
