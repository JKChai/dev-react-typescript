import React from "react"

// wrapping html elements
// restrict children component to string
type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: string;
} & Omit<React.ComponentProps<'button'>, "children">

export const CustomButton = ({ variant, children, ...rest }: ButtonProps ) => {
    return (
    <button className={`class-with-${variant}`} {...rest}>
        { children }
    </button>
    )
}