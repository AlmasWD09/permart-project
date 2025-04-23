
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
    </div>
  )
}

export default Blogs