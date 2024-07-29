
export default function Logo(props){
    const svgStyle = {
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd'
    };

    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
            width={ props.width } height={ props.height }  
            style= { svgStyle } fill={ props.fill }
            viewBox="0 0 450 381"
            >
                <g><path   d="M 223.5,5.5 C 225.074,5.93709 226.241,6.93709 227,8.5C 272.914,89.9958 319.08,171.329 365.5,252.5C 365.167,252.833 364.833,253.167 364.5,253.5C 336.917,231.542 305.917,216.209 271.5,207.5C 256,180.5 240.5,153.5 225,126.5C 209.707,153.586 194.54,180.753 179.5,208C 144.183,215.578 112.683,230.744 85,253.5C 84.4795,251.711 84.8129,250.044 86,248.5C 132.364,167.77 178.197,86.7699 223.5,5.5 Z"/></g>
                <g><path   d="M 209.5,233.5 C 239.87,231.895 269.203,236.562 297.5,247.5C 297.575,276.199 285.575,298.032 261.5,313C 225.413,328.602 193.913,322.102 167,293.5C 156.522,279.903 152.022,264.569 153.5,247.5C 171.629,240.147 190.295,235.48 209.5,233.5 Z M 173.5,253.5 C 175.288,253.215 176.955,253.548 178.5,254.5C 176.998,259.631 178.998,262.131 184.5,262C 182.886,267.621 179.22,269.954 173.5,269C 168.931,266.459 167.431,262.625 169,257.5C 170.397,255.93 171.897,254.596 173.5,253.5 Z"/></g>
                <g><path   d="M 139.5,252.5 C 141.225,252.843 141.725,253.843 141,255.5C 122.597,294.876 104.097,334.209 85.5,373.5C 63.5,374.833 41.5,374.833 19.5,373.5C 44.1579,317.842 84.1579,277.509 139.5,252.5 Z"/></g>
                <g><path   d="M 307.5,253.5 C 307.735,252.903 308.235,252.57 309,252.5C 365.487,276.987 405.987,317.487 430.5,374C 408.5,374.667 386.5,374.667 364.5,374C 345.597,333.697 326.597,293.531 307.5,253.5 Z"/></g>
            </svg>
        </div>
    );
}
