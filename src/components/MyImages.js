// import { exportJsonPicture } from './fileManager';

// let imageList = exportJsonPicture();

export function MyImages(props){
    return(
        <figure key={props.alt}>
            <img src={props.src} alt={props.alt}/>
            <p>
                {props.description}
            </p>
        </figure>
    );
}