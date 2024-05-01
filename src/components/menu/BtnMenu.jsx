import React, { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

const BtnMenu = ({link, title, href, focus = 0}) => {
    const click = useRef(null);
    const handleClick = () => {
        click.current.focus();
        focus=1;
    }

    return (
        <Link to={`/${href}`}>
            {focus != 0 ?
            <button onClick={handleClick} ref={click} className="menu-btn" autoFocus>
            <img src={`img/${link}.svg`} alt={link} /> 
            <img src={`img/${link}-gr.svg`} alt={link} className='btn-gr'/> 
            {title}
        </button> :
            <button onClick={handleClick} ref={click} className="menu-btn">
                <img src={`img/${link}.svg`} alt={link} /> 
                <img src={`img/${link}-gr.svg`} alt={link} className='btn-gr'/> 
                {title}
            </button>}
        </Link>
    );
};

export default BtnMenu;