


const Privacy = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 md:pt-40">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="font-Poppins font-semibold text-[16px] text-secondery">Privacy</h1>
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4] text-center">Learn about our privacy & policy</h1>
          <p className="font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center">We care about our user’s privacy. We do not sell any users data.</p>
        </div>
      </div>


      {/* privacy content */}
      <div className="bg-[#FFFFFF] mb-8 lg:mb-[49px] lg:py-[64px]">
        <div className="w-full flex justify-center">
          <img src="/privacy/photo01.png" alt="privacy photo" />
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-[64px]">
          <div className="pb-[32px]">
            <p className="text-base text-[#3E4F6B] font-medium font-Poppins">Effective privacy from 6 jan, 2025</p>
            <p className="text-base text-[#3E4F6B] font-medium font-Poppins">Our privacy policy has been updated.</p>
          </div>

          <div className="pb-[32px]">
            <p className="text-base text-[#172B4D] font-Poppins max-w-[720px]">Welcome to Pet & Beyond! Your privacy is important to us, and we are committed to protecting the personal information you share with us. Please read our Privacy Policy carefully to understand how we collect, use, and protect your data.</p>
          </div>

          <div className="pb-[24px]">
            <h2 className="text-[20px] text-[#172B4D] font-semibold font-Poppins pt-[16px]">Information We Collect</h2>
            <p className="text-base text-[#172B4D] font-Poppins">We may collect the following types of information:</p>
          </div>

          <div className="pb-[24px]">
            <h2 className="text-base text-[#172B4D] font-medium font-Poppins pb-[8px]">Personal Information:</h2>
            <p className="text-base text-[#172B4D] font-medium font-Poppins ">Name, email address, phone number, and location when you sign up.</p>
          </div>


          <div className="pb-[24px]">
            <h2 className="text-base text-[#172B4D] font-medium font-Poppins pb-[8px]">Transaction Data:</h2>
            <p className="text-base text-[#172B4D] font-medium font-Poppins ">Payment details, purchase history, and seller information for order processing.</p>
          </div>

          <div className="pb-[24px]">
            <h2 className="text-base text-[#172B4D] font-medium font-Poppins pb-[8px]">Device & Usage Data:</h2>
            <p className="text-base text-[#172B4D] font-medium font-Poppins "> IP address, browser type, app usage statistics, and cookies for improving user experience.</p>
          </div>


          <div className="pb-[32px]">
            <h2 className="text-[20px] text-[#172B4D] font-semibold font-Poppins pb-[40px]">How We Use Your Information</h2>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">We use your data to:</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">Provide and improve our marketplace services.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">Process transactions securely.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">Communicate with you regarding orders, support, or promotional updates.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">Prevent fraudulent activity and ensure platform security.</p>
          </div>

          <div className="pb-[32px]">
            <h2 className="text-[20px] text-[#172B4D] font-semibold font-Poppins pb-[40px]">Data Sharing & Protection</h2>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">We do not sell your personal information to third parties.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">Some data may be shared with trusted partners for payment processing, delivery, and customer support.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">We implement encryption and security measures to protect your data from unauthorized access.</p>
          </div>

          <div className="pb-[32px]">
            <h2 className="text-[20px] text-[#172B4D] font-semibold font-Poppins pb-[40px]">Your Rights & Choices</h2>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">You can update or delete your account information at any time.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">You can opt out of marketing communications.</p>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">You may request access to the personal data we hold about you.</p>
          </div>

          <div className="pb-[32px]">
            <h2 className="text-[20px] text-[#172B4D] font-semibold font-Poppins pb-[40px]">Changes to This Policy</h2>
            <p className="text-base text-[#172B4D] font-Poppins pb-[24px]">We may update this policy periodically. Any changes will be communicated through the app or website. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy