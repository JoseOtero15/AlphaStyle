
export default function CloseSvg(props){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width={ props.width } height={ props.height } 
            viewBox="0 0 256 256"  fill={ props.fill } style={{cursor: 'pointer'}}>
                <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
            </svg>
        </div>
    );
}