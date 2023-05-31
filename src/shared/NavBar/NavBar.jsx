import Container from "../../components/Container";
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import {BiSearch} from 'react-icons/bi';
import MenuDropdown from "./MenuDropdown";


const NavBar = () => {
    return (
        <>
            <div className="fixed w-full bg-white z-10 shadow-sm py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link to='/'><img src={logo} width='100' height='100' alt="logo" /></Link>
                        </div>
                        <div>
                            <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
                                <div className='flex flex-row items-center justify-between'>
                                    <div className='text-sm font-semibold px-6'>Anywhere</div>
                                    <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                                        Any Week
                                    </div>
                                    <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                                        <div className='hidden sm:block'>Add Guests</div>
                                        <div className='p-2 bg-rose-500 rounded-full text-white'>
                                            <BiSearch size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <MenuDropdown />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NavBar;