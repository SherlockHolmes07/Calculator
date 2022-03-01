import './App.css';
import Button from "./Component/Button.js"
import Display from "./Component/Display.js"
import React from "react"

function App() {

  const [que,setQue] = React.useState("0");
  const operators = /[+/*-]/;
  const opArray = ["+","-","*","/"];
  
  function update(val){
    if(que.length === 1 && que === "0"){
      setQue(val);
    }
    else if(val === "."){
      const arr = que.split(operators);
      if(arr[arr.length-1].includes(".")){
        return;
      }
       setQue((que) => que+val);
    }
    else if(opArray.includes(val) && opArray.includes(que.charAt(que.length-1)) && val !== "-"){
       setQue(que.replace(/[+|*|/|-]+$/,val));
    }
    else if(val === "-" && que.charAt(que.length-1) === "-"){
      return;
    }
    else
    { 
    setQue((que) => que+val);
    }
    //console.log(que);
  }

  function clear(){
    setQue("0");
  }

  function final(){
    setQue(eval(que).toString());
  }

  function del(){
    setQue(que.substring(0, que.length - 1));
  }

  return (
    <div>
      <Display que={que}/>
      <div  className="App">
      <Button update={update} clear={clear} final={final} del={del}/>
      </div>
    </div>
  );
}

export default App;
