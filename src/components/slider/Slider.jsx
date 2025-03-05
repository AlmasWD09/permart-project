
// import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Slider = () => {
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         // Force Swiper to recalculate after the component has mounted
//         if (swiperRef.current) {
//             swiperRef.current.update();
//         }
//     }, []); // This ensures Swiper recalculates on first render

//     const goToSlide = (index) => {
//         if (swiperRef.current) {
//             swiperRef.current.slideTo(index);
//             setActiveIndex(index); // Update active index when button is clicked
//         }
//     };

//     const sliderData = [
//         {
//             image: "/blogs/photo01.png",
//             name: "Tips to keep your pet healthy",
//             description: "Learn about the tips for your pet to keep it fit & healthy.",
//         },
//         {
//             image: "/blogs/photo02.png",
//             name: "Healthy food for your dog",
//             description: "Discover what food keeps your dog happy and healthy.",
//         },
//         {
//             image: "/blogs/photo03.png",
//             name: "Training your pet effectively",
//             description: "Best practices for training your pet to behave well.",
//         },
//         {
//             image: "/blogs/photo03.png",
//             name: "Training your pet effectively",
//             description: "Best practices for training your pet to behave well.",
//         },
//     ];

//     return (
//         <div className='px-4 lg:px-0 pt-6 relative text-center'>
//             <Swiper
//                 ref={swiperRef}
//                 slidesPerView={2}
//                 spaceBetween={24}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
//                 modules={[Pagination]}
//                 className="max-w-7xl mx-auto px-8"
//                 breakpoints={{
//                     320: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 2,
//                     },
//                 }}
//             >
//                 {sliderData.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="relative h-[350px] flex flex-col justify-between"> 
//                             <img src={slide.image} alt={slide.name} className="object-cover h-full w-full rounded-xl" />
//                             <div className="absolute left-6 bottom-6 max-w-[353px] text-white">
//                                 <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">
//                                     {slide.name}
//                                 </h1>
//                                 <p className="font-Poppins text-[14px] text-[#3E4F6B]">
//                                     {slide.description}
//                                 </p>
//                                 <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">
//                                     Read more
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Custom Buttons Below Pagination */}
//             <div className="flex justify-center mt-4 space-x-4">
//                 {sliderData.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`px-4 py-2 rounded text-white transition ${activeIndex === index ? "" : ""}`}
//                     >
//                         <svg
//                             width="44"
//                             height="8"
//                             viewBox="0 0 44 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <rect
//                                 x="0.666687"
//                                 width="42.6667"
//                                 height="8"
//                                 rx="4"
//                                 fill={activeIndex === index ? "#4A9935" : "gray"}
//                             />
//                         </svg>
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slider;


import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slider = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Force Swiper to recalculate after the component has mounted
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    }, []); // This ensures Swiper recalculates on first render

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            swiperRef.current.update(); // Ensure swiper updates after slide change
            setActiveIndex(index); // Update active index when button is clicked
        }
    };

    const sliderData = [
        {
            image: "/blogs/photo01.png",
            name: "Tips to keep your pet healthy",
            description: "Learn about the tips for your pet to keep it fit & healthy.",
        },
        {
            image: "/blogs/photo02.png",
            name: "Healthy food for your dog",
            description: "Discover what food keeps your dog happy and healthy.",
        },
        {
            image: "/blogs/photo03.png",
            name: "Training your pet effectively",
            description: "Best practices for training your pet to behave well.",
        },
    ];

    return (
        <div className='px-4 lg:px-0 pt-6 relative text-center'>
            <Swiper
                ref={swiperRef}
                slidesPerView={2}
                spaceBetween={24}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
                modules={[Pagination]}
                className="max-w-7xl mx-auto px-8"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[350px] flex flex-col justify-between">
                            <img src={slide.image} alt={slide.name} className="object-cover h-full w-full rounded-xl" />
                            <div className="absolute left-6 bottom-6 max-w-[353px] text-white">
                                <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">
                                    {slide.name}
                                </h1>
                                <p className="font-Poppins text-[14px] text-[#3E4F6B]">
                                    {slide.description}
                                </p>
                                <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Buttons Below Pagination */}
            <div className="flex justify-center mt-4 space-x-4">
                {["1", "2", "3"].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`px-4 py-2 rounded text-white transition ${activeIndex === index ? "" : ""}`}
                    >
                        <svg
                            width="44"
                            height="8"
                            viewBox="0 0 44 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.666687"
                                width="42.6667"
                                height="8"
                                rx="4"
                                fill={activeIndex === index ? "#4A9935" : "gray"}
                            />
                        </svg>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Slider;

