import Logo from '../../assets/svg/Logo'
import Menu from '../../assets/svg/Menu'
import Heart from '../../assets/svg/HeartSvg'
import Search from '../../assets/svg/Search'
import CloseSvg from '../../assets/svg/CloseSvg'
import './NavBar.css'

function NavBar(){
    return(
        <div className='navBar'>
            <div id='menuIcon'>
                <Menu fill='#FBFCF8' width={30} heigth={10} />
                <span>MENÚ</span>     
            </div>
            <Logo id='NavLogo' fill='#FBFCF8' width={60} heigth={40} />
            <div className='options'>
                <Search fill='#FBFCF8' width={25} heigth={10} />
                <Heart fill='#FBFCF8' width={25} heigth={10} />
            </div>
            <div id='menu'>
                <div id='menu__container'>
                    <div id='menu__close'>
                        <CloseSvg fill='#FBFCF8' width={25} heigth={10}/>
                    </div>
                    <div id='menu__options'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;