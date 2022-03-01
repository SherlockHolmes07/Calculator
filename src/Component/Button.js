import React from "react"
const reg = "<-";
export default function Button(props){
  return (
    <div class="butt">
     <div className="row">
       <button type="button" class="btn btn-danger col-2" id="clear" onClick={props.clear}>AC</button>
      <button type="button" class="btn btn-danger col-2" id="back">{reg}</button>
           <button type="button" class="btn btn-info col-2 " id="divide" onClick={() => props.update("/")}>/</button>

       <button type="button" class="btn btn-info col-2 " id="multiply" onClick={() => props.update("*")}>x</button>
     </div>

    <div className="row">
       <button type="button" class="btn btn-secondary col-2 " id="seven" onClick={() => props.update("7")}>7</button>
           <button type="button" class="btn btn-secondary col-2 " id="eight" onClick={() => props.update("8")}>8</button>

       <button type="button" class="btn btn-secondary col-2 " id="nine"  onClick={() => props.update("9")}>9</button>
        <button type="button" class="btn btn-info col-2 " id="subtract"  onClick={() => props.update("-")}>-</button>
     </div>
    <div className="row">
       <button type="button" class="btn btn-secondary col-2 " id="four" onClick={() => props.update("4")}>4</button>
           <button type="button" class="btn btn-secondary col-2 " id="five" onClick={() => props.update("5")}>5</button>

       <button type="button" class="btn btn-secondary col-2 " id="six" onClick={() => props.update("6")}>6</button>
        <button type="button" class="btn btn-info col-2 " id="add" onClick={() => props.update("+")}>+</button>
     </div>

    <div className="row">
       <button type="button" class="btn btn-secondary col-2 " id="one" onClick={() => props.update("1")}>1</button>
           <button type="button" class="btn btn-secondary col-2 " id="two" onClick={() => props.update("2")}>2</button>

       <button type="button" class="btn btn-secondary col-2 " id="three"  onClick={() => props.update("3")}>3</button>   
         <button type="button" class="btn btn-secondary col-2 "
    id="decimal" onClick={() => props.update(".")}>.</button>
     </div>

     <div className="row">
       <button type="button" class="btn btn-secondary col-4" id="zero" onClick={() => props.update("0")}>0</button>
        <button type="button" class="btn btn-success col-4" id="equals" onClick={props.final}>=</button>
     </div>
    
    </div>
  );
}