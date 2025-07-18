
import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  const resumePath = "/Surya_Prakash_Infosys_Resume.pdf";
  return (
    <a 
    href={resumePath}

    download
    target="_blank"
    className='px-4 py-2 rounded-full text-m font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>Download Resume
    <div className='sm:hidden md:block'>
      <LuArrowDownRight />
    </div>
    </a>
  )
}

export default NavbarBtn
