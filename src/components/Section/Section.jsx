import React from 'react';
import Cta from '../Cta/CallToAction.jsx'
import './Section.css'


export default function Section(props){   
    let {video, image, title, description, ctaLink, ctaTitle, category, 
    primaryColor, hoverColor, extraCta, extraCtaTitle, extraCtaLink} = props

    const getBackground= () => video 
    ? <video className='background' autoPlay muted loop><source src={video} type="video/mp4" /></video> 
    : <img className='background' src={image} alt="background" />;
    
    return (
            <section className='section'>
                <div style={ {color: primaryColor} } className='content'>
                    <p className='category'>{ category }</p>
                    <div>
                        <h1 className='title'>{ title }</h1>
                        <p className='description'>{ description }</p>
                    </div>
                    <div className='div__cta'>
                        <Cta ctaLink = {ctaLink} ctaTitle= { ctaTitle } primaryColor = { primaryColor } hoverColor = { hoverColor } />
                        {extraCta && (
                            <Cta ctaLink = { extraCtaLink } ctaTitle= { extraCtaTitle } primaryColor = { primaryColor } hoverColor = { hoverColor }/>
                        )}
                    </div>              
                </div> 
                {getBackground()}
                <span className='shadow'></span>
            </section>
        
    );
    
}