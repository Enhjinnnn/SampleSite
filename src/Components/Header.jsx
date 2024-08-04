import React from 'react';
import { useNavigate} from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div id='main'>
       <div className='name'>
          {/* <h2> CREATE QUALITY AND REPUTATION </h2> */}
          {/* <p className='details'> ТҮРҮҮЛЖ АЛХАНА </p> */}
          <div className='header-btns'>
            {/* <a href='/#' className='header-btn'> БЭЛГЭЭ НЭЭ </a> */}
            <button className='header-btn' onClick={() => handleButtonClick('/characters')}> БЭЛГЭЭ НЭЭ
        </button>
          </div>
       </div>
    </div>
  )
}

export default Header;