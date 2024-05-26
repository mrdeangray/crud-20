import React from 'react'


type Color = "red" | "blue" | "green" | "yellow" | "purple";

type ButtonProps = {
backgroundColor: Color; textColor: Color;
fontSize: number;
pillShape?: boolean;
padding: [number, number, number, number];
};



const Button = () => {
  return (
    <div>Button</div>
  )
}

export default Button