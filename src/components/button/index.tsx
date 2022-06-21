import React, {FC} from "react";
import './button.override.scss';

interface IButton  {
  type: 'submit' | 'reset' | 'button';
  
}


export const Button:FC < IButton > = ({type}) =>  {

  return (
       <button type={type} className={`button-${type}`}/>
  )

}