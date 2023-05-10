import './botones.css'

export default function Boton(props){
    return (
        <button className={props.clase}>
          {props.text}
        </button>
    );
}