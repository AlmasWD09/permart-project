
const About = () => {
  const values = [
    {
      image: ` <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1" />
                      <path d="M29 33V31C29 29.9391 28.5786 28.9217 27.8284 28.1716C27.0783 27.4214 26.0609 27 25 27H17C15.9391 27 14.9217 27.4214 14.1716 28.1716C13.4214 28.9217 13 29.9391 13 31V33M35 33V31C34.9993 30.1137 34.7044 29.2528 34.1614 28.5523C33.6184 27.8519 32.8581 27.3516 32 27.13M28 15.13C28.8604 15.3503 29.623 15.8507 30.1676 16.5523C30.7122 17.2539 31.0078 18.1168 31.0078 19.005C31.0078 19.8932 30.7122 20.7561 30.1676 21.4577C29.623 22.1593 28.8604 22.6597 28 22.88M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>`,
      title: "Care about our team",
      description: "Understand what matters to our employees. Give them what they need to do their best work."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M32.8401 16.6099C32.3294 16.0989 31.7229 15.6935 31.0555 15.417C30.388 15.1404 29.6726 14.998 28.9501 14.998C28.2276 14.998 27.5122 15.1404 26.8448 15.417C26.1773 15.6935 25.5709 16.0989 25.0601 16.6099L24.0001 17.6699L22.9401 16.6099C21.9084 15.5782 20.5092 14.9986 19.0501 14.9986C17.5911 14.9986 16.1918 15.5782 15.1601 16.6099C14.1284 17.6416 13.5488 19.0408 13.5488 20.4999C13.5488 21.9589 14.1284 23.3582 15.1601 24.3899L16.2201 25.4499L24.0001 33.2299L31.7801 25.4499L32.8401 24.3899C33.3511 23.8791 33.7565 23.2727 34.033 22.6052C34.3096 21.9378 34.4519 21.2224 34.4519 20.4999C34.4519 19.7774 34.3096 19.062 34.033 18.3945C33.7565 17.7271 33.3511 17.1206 32.8401 16.6099V16.6099Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Be excellent to each other",
      description: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M35 18L25.5 27.5L20.5 22.5L13 30M35 18H29M35 18V24" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Pride in what we do",
      description: "Value quality and integrity in everything we do. At all times. No exceptions."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M20 26C20 26 21.5 28 24 28C26.5 28 28 26 28 26M21 21H21.01M27 21H27.01M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Don't #!&$ the customer",
      description: "Understand customers' stated and unstated needs. Make them wildly successful."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M16 27C16 27 17 26 20 26C23 26 25 28 28 28C31 28 32 27 32 27V15C32 15 31 16 28 16C25 16 23 14 20 14C17 14 16 15 16 15V27ZM16 27V34" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Do the impossible",
      description: "Be energized by difficult problems. Revel in unknowns. Ask 'Why?'', but always question,'Why not?'"
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M25 14L15 26H24L23 34L33 22H24L25 14Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Sweat the small stuff",
      description: "We believe the best products come from the best attention to detail. Sweat the small stuff."
    },
  ]


  return (
    <div className="container mx-auto px-4 pt-20 md:pt-40 pb-[30px] md:pb-[40px] lg:pb-[96px]">
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="font-Poppins font-semibold text-[16px] text-secondery">About us</h1>
        <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4D]">About the product</h1>
        <p className="font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center">Learn more about the company and the team behind it.</p>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[96px]">
        <div>
          <img src="/about/photo01.png" alt="about photo" />
        </div>
        <div>
          <div className="max-w-[560px] pb-6 md:pb-0">
            <h2 className="font-Inter font-semibold text-[16px] text-secondery">We’ve helped hundreds of companies</h2>
            <h1 className="font-Poppins font-semibold md:text-[24px] lg:text-[36px] text-[#172B4D] pt-3 lg:pt-0">We’re only just getting started on our journey</h1>
          </div>


          <div className="flex justify-between py-6 lg:pb-[64px]">
            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery">8k+</h1>
              <p>Active users</p>
            </div>

            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery text-end lg:text-start">600%</h1>
              <p>Return on investment</p>
            </div>
          </div>


          <div className="flex justify-between">
            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery">10k</h1>
              <p>Global downloads</p>
            </div>

            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery text-end lg:text-start">200+</h1>
              <p>5-star reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[122px]">
        <h2 className="font-Poppins font-medium text-[16px] text-[#535862] text-center">From startups to the world’s largest companies</h2>

        <div className="flex justify-center items-center  pt-[32px]">
          <div className="flex flex-wrap lg:flex-row items-center gap-10 md:gap-6 lg:space-x-[92px]">
            <span className="flex items-center gap-2">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2778 20.3183C14.1 17.25 17.2539 14.0961 20.3222 13.2739L39.4512 8.14749C42.5194 7.32522 44.3402 9.14597 43.5179 12.2142L38.3916 31.3432C37.5693 34.4115 34.4154 37.5654 31.3471 38.3877L12.2181 43.514C9.14988 44.3363 7.32913 42.5155 8.15139 39.4473L13.2778 20.3183Z" fill="#A4A7AE" />
                <path d="M5.60882 12.6493C6.43108 9.58107 9.58498 6.42717 12.6533 5.60491L31.7822 0.47854C34.8505 -0.343725 36.6713 1.47702 35.849 4.54529L30.7226 23.6743C29.9004 26.7425 26.7465 29.8964 23.6782 30.7187L4.5492 35.8451C1.48093 36.6673 -0.339816 34.8466 0.482448 31.7783L5.60882 12.6493Z" fill="#717680" />
              </svg>
              <h2 className="text-[#535862] font-semibold font-Poppins">Layers</h2>
            </span>

            <span className="flex items-center gap-2">
              <svg width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="19.2002" width="9.59998" height="9.59999" fill="#717680" />
                <rect x="29.5498" y="28.7998" width="9.6" height="9.59999" transform="rotate(180 29.5498 28.7998)" fill="#717680" />
                <path d="M10.3501 19.2001L19.9501 9.6001V19.2001L10.3501 28.8001V19.2001Z" fill="#D5D7DA" />
                <path d="M19.9502 28.7999L10.3502 38.3999L10.3502 28.7999L19.9502 19.1999L19.9502 28.7999Z" fill="#A4A7AE" />
                <path d="M0.75 19.2L19.95 0V9.59999L10.35 19.2H0.75Z" fill="#717680" />
                <path d="M29.5498 28.8L10.3498 48L10.3498 38.4L19.9498 28.8L29.5498 28.8Z" fill="#717680" />
              </svg>

              <h2 className="text-[#535862] font-semibold font-Poppins">Sisyphus</h2>
            </span>

            <span className="flex items-center gap-2">
              <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2141 31.4284C24.8929 31.4284 31.9284 24.3929 31.9284 15.7141C31.9284 14.7306 31.8381 13.7681 31.6652 12.8345C30.7316 12.6617 29.7692 12.5713 28.7856 12.5713C20.1068 12.5713 13.0713 19.6068 13.0713 28.2856C13.0713 29.2692 13.1617 30.2317 13.3345 31.1652C14.2681 31.3381 15.2306 31.4284 16.2141 31.4284Z" fill="#717680" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3347 31.1653C6.03118 29.8127 0.5 23.4095 0.5 15.7143C0.5 7.03553 7.53553 0 16.2143 0C23.9095 0 30.3128 5.53118 31.6653 12.8347C30.7318 12.6618 29.7693 12.5714 28.7857 12.5714C20.107 12.5714 13.0714 19.607 13.0714 28.2857C13.0714 29.2693 13.1618 30.2318 13.3347 31.1653Z" fill="#717680" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2141 31.4284C24.8928 31.4284 31.9284 24.3928 31.9284 15.7141C31.9284 14.7305 31.838 13.768 31.6651 12.8345C38.9686 14.187 44.4998 20.5903 44.4998 28.2855C44.4998 36.9643 37.4643 43.9998 28.7855 43.9998C21.0903 43.9998 14.687 38.4686 13.3345 31.1651C14.268 31.338 15.2305 31.4284 16.2141 31.4284Z" fill="#A4A7AE" />
              </svg>

              <h2 className="text-[#535862] font-semibold font-Poppins">Circooles</h2>
            </span>


            <span className="flex items-center gap-2">
              <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.25 0C10.0997 0 0.25 9.84974 0.25 22C0.25 34.1503 10.0997 44 22.25 44C33.151 44 42.2002 36.0716 43.9458 25.6667H43.7879C42.1598 31.9925 36.4174 36.6667 29.5833 36.6667C21.4832 36.6667 14.9167 30.1002 14.9167 22C14.9167 13.8998 21.4832 7.33333 29.5833 7.33333C36.4174 7.33333 42.1598 12.0075 43.7879 18.3333H43.9458C42.2002 7.92838 33.151 0 22.25 0Z" fill="#A4A7AE" />
                <path d="M0.25 22C0.25 9.84974 10.0997 0 22.25 0C33.151 0 42.2002 7.92838 43.9458 18.3333H29.1213C27.4931 12.0075 21.7507 7.33333 14.9167 7.33333C6.81649 7.33333 0.25 13.8998 0.25 22Z" fill="#717680" />
                <path d="M0.25 22C0.25 34.1503 10.0997 44 22.25 44C33.151 44 42.2002 36.0716 43.9458 25.6667H29.1213C27.4931 31.9925 21.7507 36.6667 14.9167 36.6667C6.81649 36.6667 0.25 30.1002 0.25 22Z" fill="#717680" />
              </svg>
              <h2 className="text-[#535862] font-semibold font-Poppins">Catalog</h2>
            </span>

            <span className="flex items-center gap-2">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 34.4667C28.8851 34.4667 34.4667 28.8851 34.4667 22C34.4667 15.1149 28.8851 9.53333 22 9.53333C15.1148 9.53333 9.53333 15.1149 9.53333 22C9.53333 28.8851 15.1148 34.4667 22 34.4667ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84973 0 0 9.84974 0 22C0 34.1503 9.84973 44 22 44Z" fill="#717680" />
                <path d="M22.2515 22.4819C24.5426 20.1908 28.2572 20.1908 30.5483 22.4819L41.9562 33.8898C44.2473 36.1809 44.2473 39.8955 41.9562 42.1866C39.6652 44.4776 35.9506 44.4776 33.6595 42.1866L22.2515 30.7786C19.9605 28.4875 19.9605 24.7729 22.2515 22.4819Z" fill="#A4A7AE" />
                <path d="M25.4551 33.9816L32.7004 41.2269C36.1756 39.2887 39.0709 36.4357 41.0605 32.9936L33.8746 25.8076C32.6124 29.747 29.4441 32.8334 25.4551 33.9816Z" fill="#717680" />
              </svg>
              <h2 className="text-[#535862] font-semibold font-Poppins">Quotient</h2>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-3 pt-[122px] lg:pt-[212px]">
          <h1 className="font-Poppins font-semibold text-[16px] text-secondery">Our values</h1>
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4D]">How we work at Untitled</h1>
          <p className="font-Inter text-center text-[20px] text-[#3E4F6B] pt-[12px] pb-[64px]">Our shared values keep us connected and guide us as one team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {
            values.map((item, index) => {
              return (
                <div key={index} className="max-w-[384px] text-center pt-10 md:pt-[64px]">
                  <span className="flex justify-center pb-[20px]" dangerouslySetInnerHTML={{ __html: item.image }}>
                  </span>

                  <h2 className="font-Poppins font-medium text-[20px] text-[#172B4D]">{item.title}</h2>
                  <p className="font-Poppins text-[#3E4F6B]">{item.description}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default About 