// example of event props

import React from "react";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}; //more specific by telling that React type is a HTMLButtonElement

export const Button = (props: ButtonProps) => {
    return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
}