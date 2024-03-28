import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faSearch,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const goToLogin = () => {
        navigate('/login');
    };
    const goToLogout = () => {
        setAuthenticate(false);
        navigate('/');
    };
    const goToHome = () =>{
        navigate('/')
    }
    const menuEvent = () => {
        menuActive === false ? setMenuActive(true) : setMenuActive(false)
    }
    const searchEvent = () => {
        searchActive === false ? setSearchActive(true) : setSearchActive(false);
        setSearchValue("");
    }
    const closeEvent = () => {
        setMenuActive(false)
    }
    const search = (event) => {
        if(event.key === "Enter"){
           let keyword = event.target.value
           navigate(`/?q=${keyword}`)
           setSearchActive(false)
        }

    }
  return (
    <div className="header_wrap">
        <div>
            <div className="login-button"  onClick={authenticate ? goToLogout : goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>{authenticate ? "로그아웃" : "로그인"}</div>
            </div>
        </div>
        <div className="nav-section">
            <div className='logo' onClick={goToHome}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="h&amp;m"/></div>
        </div>
        <div className="menu-area">
            <button className="nav-button" onClick={() => menuEvent()}>
               <FontAwesomeIcon icon={faBars}/>
            </button>
            <button className="search-button" onClick={() => searchEvent()}>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            <nav className={`menu-list ${menuActive? "active" : ""}`}>
                <button className='close-button' onClick={() => closeEvent()}>
                      <FontAwesomeIcon icon={faXmark}/>
                </button>
                <ul>
                    {menuList.map(menu =>
                    <li key={menu}>{menu}</li>
                    )}
                </ul>
            </nav>
            
        </div>
        <div className={`search-wrap ${searchActive? "active" : ""}`}>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={(event) => search(event)}/>
            </div>            
        </div>
    </div>
  )
}

export default Navbar