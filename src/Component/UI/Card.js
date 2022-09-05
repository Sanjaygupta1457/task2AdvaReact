import './Card.css';

function Card(props){
    const classes ='Card'+ props.className;
  return <div className="Card">{props.children}</div>
}

export default Card;