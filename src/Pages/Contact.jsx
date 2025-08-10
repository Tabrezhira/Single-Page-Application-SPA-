import pic from "/public/hero.png";
import pic1 from'/public/Frame1.png'
import pic2 from '/public/Frame2.png'

function Contact() {
  return (
    <section className=' mt-13 md:mt-24 xl:mt-20 h-38  w-[383px] md:w-[711px] md:h-[255px] xl:h-78 container mx-auto xl:w-full relative '>
      <div className=" absolute md:h-[192px] md:w-[164px] z-2 top-0 left-5 xl:left-15 h-26 w-22 xl:h-68 xl:w-58 rounded">
        <img src={pic} alt="computer on desk" />
      </div>
      <div className="md:w-[712px] md:h-[155px] w-[383px] h-[113px]  xl:w-full bottom-0 left-0 xl:h-45 rounded bg-[#A87ff3] absolute"> 
        <img className=" absolute md:h-[107px] md:w-[129px] xl:h-[125px] xl:w-[150px] bottom-0 left-0 h-[58px] w-[70px]  " src={pic1} alt="" srcset="" />
        <p className="ml-30 mt-5 md:ml-50 md:mt-10  xl:ml-80 xl:mt-15 tracking-tighter font-poppins text-sm md:text-base xl:text-2xl text-white font-normal">Thanks for visit my website</p>
        <p className=" ml-30 md:ml-50 xl:ml-80 font-poppins md:text-base tracking-tighter text-sm xl:text-2xl text-white font-normal">If you have any questions you can write me to any of my social networks, I am sure I will answer you.</p>
        <img className=" absolute  md:h-[107px] md:w-[129px] xl:h-[125px] xl:w-[150px] top-0 right-0 h-[58px] w-[70px]" src={pic2} alt="" />
      </div>
    </section>
  )
}

export default Contact