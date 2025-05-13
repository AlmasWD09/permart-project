
const Blogs = () => {
  return (
    <div className="pt-20 md:pt-40 pb-[30px] md:pb-[40px] lg:pb-[96px]">
      <div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="font-Poppins font-semibold text-[16px] text-secondery">Blog posts</h1>
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4] text-center">
            To get knowledge about the pet's world read our blogs
          </h1>
          <p className="font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center text-wrap px-4 md:px-0">Helps you to keep update about your pet’s fitness.</p>
        </div>



        {/* blogs images */}
        <div className="space-y-5 px-4 lg:px-0 pt-20 lg:pt-0">
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="relative">
              <img src='/blogs/photo01.png' alt="blog photo" className="object-cover" />

              <div className="absolute left-6 bottom-6 max-w-[353px]">
                <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">Tips to keep your pet healthy</h1>
                <p className="font-Poppins text-[14px] text-[#3E4F6B]">Learn about the tips for your pet to keep it fit & healthy.</p>
                <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">Read more</button>
              </div>
            </div>
            <div className="relative">
              <img src='/blogs/photo02.png' alt="blog photo" className="object-cover" />

              <div className="absolute left-6 bottom-6 max-w-[353px]">
                <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">10 essential foods for your puppy</h1>
                <p className="font-Poppins text-[14px] text-[#3E4F6B]">If you’re having a pet then you must should try these 10 foods for it.</p>
                <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">Read more</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="relative">
              <img src='/blogs/photo03.png' alt="blog photo" className="object-cover" />

              <div className="absolute left-6 bottom-6 max-w-[353px]">
                <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">Why your pet become angry</h1>
                <p className="font-Poppins text-[14px] text-[#3E4F6B]">If you’re having trouble with your pet’s anger what kind of steps you should take on it.</p>
                <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">Read more</button>
              </div>
            </div>

            <div className="relative">
              <img src='/blogs/photo04.png' alt="blog photo" className="object-cover" />

              <div className="absolute left-6 bottom-6 max-w-[353px]">
                <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">To know symptoms can enhance fitness</h1>
                <p className="font-Poppins text-[14px] text-[#3E4F6B]">Learn about your pet’s symptoms to keep away it from germs attack.</p>
                <button className="font-Poppins text-[14px] text-[#073F40] pt-[22px] pl-3">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>






      <section className="">
        <div className="text-center flex flex-col justify-center items-center pt-10 lg:pt-20">
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-secondery">Our Popular Blogs</h1>
          <p className=" font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center text-wrap px-4 md:px-0">Explore our most-read and loved blogs, packed with helpful tips, expert advice, and heartwarming pet stories.</p>
        </div>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <img src="/blogs/photo10.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl font-Poppins">Your Cat Mentally Stimulated Indoors</h3>
              <span className="text-xs dark:text-gray-600">February 19, 2025</span>
              <p>Indoor cats need fun too! Discover toys, games, and creative enrichment ideas to prevent boredom and support your cat’s mental well-being.</p>
            </div>
          </a>




          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/blogs/photo08.jpg" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold font-Poppins">Healthy Homemade Treats for Your Pets</h3>
                <span className="text-xs dark:text-gray-600">January 21, 2025</span>
                <p>the store-bought snacks! Discover easy, nutritious, and pet-safe homemade treat recipes that your dog or cat will absolutely love.</p>
              </div>
            </a>



            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/blogs/photo07.jpg" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold font-Poppins">How to Create a Pet-Friendly Home</h3>
                <span className="text-xs dark:text-gray-600">February 22, 2024</span>
                <p>Ensure your home is safe and welcoming for your pets. This blog covers pet-proofing tips, cozy spaces, and fun enrichment ideas for a happier environment.</p>
              </div>
            </a>

            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
              <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="/blogs/photo06.jpg" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold font-Poppins">Essential Tips for First-Time Pet Owners</h3>
                <span className="text-xs dark:text-gray-600">January 13, 2025</span>
                <p>Bringing a new pet home? This blog will guide you through the must-know tips to ensure your furry friend feels safe, happy, and loved from day one.</p>
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Blogs