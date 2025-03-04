
const Banner = () => {
    return (
        <div className="bg-[#ECE9D8]">
            <div className="container mx-auto px-4">
                <div className="flex  items-center gap-8">
                    {/* left side */}
                    <div>
                        <div className="">
                            <img src="/banner/photo01.png" alt="banner photo" className="" />
                        </div>
                    </div>

                    {/* right side */}
                    <div>
                        <h1 className="text-[72px] text-[#0E1A2F] font-bold landscape:[72px] font-Poppins">Buy & sell your <br /> pet’s essentials!</h1>
                        <p className="font-Poppins text-[18px] text-[#3E4F6B] pt-[24px] pb-[10px]">Your trusted marketplace for buying & selling pet essentials.</p>
                        <button className="bg-primary text-white rounded-full px-3 py-1 text-[16px] font-Poppins flex items-center">
                            Download the app
                            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52864 5.52876C3.78899 5.26841 4.2111 5.26841 4.47145 5.52876L8.00004 9.05735L11.5286 5.52876C11.789 5.26841 12.2111 5.26841 12.4714 5.52876C12.7318 5.78911 12.7318 6.21122 12.4714 6.47157L8.47145 10.4716C8.2111 10.7319 7.78899 10.7319 7.52864 10.4716L3.52864 6.47157C3.26829 6.21122 3.26829 5.78911 3.52864 5.52876Z" fill="white" />
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>




                {/* banner image */}
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative">
                            <img src="/banner/photo02.png" alt="banner photo" className="" />
                            <div className="absolute top-[73px] right-[32px] z-30">
                                <h2 className="font-Poppins text-[30px] max-w-[339px] text-end">Meet our <span className="text-primary">Pet & beyond</span> mobile app.</h2>
                                <p className="text-end">Smooth transactions with</p>
                                <p className="text-end">better experience.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="/banner/photo03.png" alt="banner photo" />
                            <div className="absolute w-full flex justify-center bottom-6 z-30">
                                <p className="font-Poppins lg:text-[30px] text-white">Easy to find essentials.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative">
                            <img src="/banner/photo04.png" alt="banner photo" />
                            <div className="absolute top-1/2 z-30 left-6">
                                <p className="font-Poppins lg:text-[30px] text-white  max-w-[229px]">Discover the best for your furry friend.</p>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <img src="/banner/photo05.png" alt="banner photo" />
                            <div className="absolute w-[40%]">
                                <img src="/banner/extra.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner