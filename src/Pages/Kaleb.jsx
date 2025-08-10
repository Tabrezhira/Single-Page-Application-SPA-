import { IoShield } from "react-icons/io5";

function Kaleb() {
  return (
    <div className='w-full h-88 md:h-90 xl:h-159  mt-20 flex items-center justify-center animated-gradient'>
        <div className=' container mx-auto w-107 h-61 h- md:w-199 md:h-68 xl:w-273 xl:h-111 flex flex-col items-center justify-between  '>
            <h3 className='text-white font-poppins  leading-[105%] tracking-[0] text-[26px] xl:text-5xl md:text-4xl font-semibold'>Kaleb Lechtenberg</h3>
            <p className=' text-white font-poppins leading-[120%] tracking-[0] text-center text-base md:text-base align-middle xl:text-4xl font-medium'>"Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."</p>
            <div className='w-[39px] h-[45px] md:w-[72px] md:h-[86px] xl:w-18 xl:h-21 '>
              <IoShield  className="text-white w-full h-full"/>
            </div>
        </div>
    </div>
  )
}

export default Kaleb