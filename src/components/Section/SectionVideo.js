import React from 'react';
import './SectionVideo.css'
import video_1 from "../../assets/videos/0721.mp4"
import video_2 from "../../assets/videos/0725.mp4"

export default function SectionVideo(props){   
    let {startVideo, title, description, ctaLink, ctaTitle} = props
    console.log( props )
    const getVideo = () => startVideo ? <source src={video_1} type="video/mp4" /> : <source src={video_2} type="video/mp4" />
    return (
            <section className='section-video'>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <a href={ ctaLink }>{ ctaTitle }</a>
                <video className='video-bg' autoPlay muted loop> 
                    {getVideo()}
                </video>
            </section>
        
    );
    
}