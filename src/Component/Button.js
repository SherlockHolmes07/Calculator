import React from "react"

export default function Button(){
  return (
    <div class="butt">
     <div className="row">
       <button type="button" class="btn btn-danger col-4">AC</button>
           <button type="button" class="btn btn-info col-2 ">/</button>

       <button type="button" class="btn btn-info col-2 ">x</button>
     </div>

    <div className="row">
       <button type="button" class="btn btn-secondary col-2 ">7</button>
           <button type="button" class="btn btn-secondary col-2 ">8</button>

       <button type="button" class="btn btn-secondary col-2 ">9</button>
        <button type="button" class="btn btn-info col-2 ">-</button>
     </div>
    <div className="row">
       <button type="button" class="btn btn-secondary col-2 ">4</button>
           <button type="button" class="btn btn-secondary col-2 ">5</button>

       <button type="button" class="btn btn-secondary col-2 ">6</button>
        <button type="button" class="btn btn-info col-2 ">+</button>
     </div>

    <div className="row">
       <button type="button" class="btn btn-secondary col-2 ">1</button>
           <button type="button" class="btn btn-secondary col-2 ">2</button>

       <button type="button" class="btn btn-secondary col-2 ">3</button>   
         <button type="button" class="btn btn-secondary col-2 ">.</button>
     </div>

     <div className="row">
       <button type="button" class="btn btn-secondary col-4">0</button>
        <button type="button" class="btn btn-success col-4">=</button>
     </div>
    
    </div>
  );
}