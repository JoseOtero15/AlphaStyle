import React from 'react'
import Cta from '../Cta/CallToAction.jsx'
import './BrandOptions.css'

export default function BrandOptions( props ){
    const { titleSection, descriptionSection, info, ctaLink, ctaTitle,
        primaryColor, hoverColor } = props
    
        // Arreglo donde cada posición es un objeto con información para la opción
        // Cada objeto tendrá 
        for (let i = 0; i < info.lenght; i++){

        } 

    return(
        <div>
            <h2 className='title'>{ titleSection }</h2>
            <p className='descitpion'>{ descriptionSection }</p>
            <div className='options'>
            </div>
            <Cta ctaLink = {ctaLink} ctaTitle= { ctaTitle } primaryColor = { primaryColor } hoverColor = { hoverColor } />                       
        </div>
    );
}