import Logo from '../../assets/svg/Logo'
import Menu from '../../assets/svg/Menu'
import Heart from '../../assets/svg/HeartSvg'
import Search from '../../assets/svg/Search'
import './NavBar.css'

function NavBar(){
    return(
        <div className='navBar'>
            <div className='menu'>
                <Menu fill='#FBFCF8' width={30} heigth={10} />
                <span>MENÚ</span>     
            </div>
            <Logo fill='#FBFCF8' width={60} heigth={40} />
            <div className='options'>
                <Search fill='#FBFCF8' width={25} heigth={10} />
                <Heart fill='#FBFCF8' width={25} heigth={10} />
            </div>
            
        </div>
    );
}

export default NavBar;