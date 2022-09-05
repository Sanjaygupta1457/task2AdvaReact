import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem =(props)=>{
    const [title,setTitle]  = useState(props.title);
    const clickhandler =()=>{
      console.log("Clicked");
      setTitle("New Value");
    }
    

    
    return(
    <Card className='expense-item '>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>{props.title}</div>
        <div>
            <h2>{title}</h2>
            <div className='expense-item__price '>${props.amount}</div>
        </div>
        <button onClick={clickhandler}>Change Title</button>
       
    </Card>
       
    );
}
export default ExpenseItem;