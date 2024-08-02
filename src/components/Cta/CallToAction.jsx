import React, {useState} from 'react';
import './Cta.css'

export default function Cta( props ){
    let {ctaLink, ctaTitle,
    primaryColor, hoverColor} = props
    
    const [isHovered, setIsHovered] = useState(false);

    return(
        <a className='cta' href={ ctaLink }
            style={{ 
                color: isHovered ? hoverColor : primaryColor, 
                backgroundColor: isHovered ? primaryColor : 'transparent', 
                borderColor: primaryColor
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >{ ctaTitle }</a>
    );
}