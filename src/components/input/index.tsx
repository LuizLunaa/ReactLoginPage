import React, {FC} from "react";
import './input.override.scss';

interface IInput {
  type:'password'|'text';
  
}


export const Input:FC < IInput > = ({type}) =>  {

  return (
       <input type={type} className={`input-${type}`}/>
  )

}