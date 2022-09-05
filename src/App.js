import React from "react";
import "./App.css";
import NewExpense from "./Component/NewExpense/NewExpense";
import Expenses from "./Component/Expenses/Expenses";


function App() {
    const expenses =[
      {title:'Car Insurance', amount:260, date: new Date(2022,1,12)},
      {title:'Grocery', amount:100, date: new Date(2022,3,28)},
      {title:'Medical', amount:360, date: new Date(2022,4,30)},
      {title:'House Rent', amount:460, date: new Date(2022,8,22)}
    ];
  return ( 
     <div>
      <NewExpense/>
      <Expenses items={expenses}/>
      
  
    </div>
    
  );
  };
export default App;
