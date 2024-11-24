import logo from '/LOGO.png';
import { Link } from 'react-router-dom';


/// app logo with title
const Logo =()=>{
    return(
        <Link to='/' className='flex gap-1 items-center w-fit leading-none' >
            <img src={logo} alt="our logo" className='w-8 h-auto' />
            <h4
                className='font-medium  tracking-widest text-high-l dark:text-high-d leading-none'
            >RBC</h4>
        </Link>
    )
}

export default Logo