import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border border-white h-10 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'bg-lime-400 text-neutral-900 border-lime-400 hover:bg-orange hover:text-black',
            secondary: 'border-white text-white bg-transparent hover:bg-white hover:text-black',
        },
        size: {
            sm: "h-10",
        },
    },
}  
)

export default function Button(props: {variant: "primary" | "secondary"; size?: "sm"} & ButtonHTMLAttributes<HTMLButtonElement>) { const { variant , className , size, ...otherprops} = props;
    return <button className={classes({ variant, size, className})} {...otherprops}/>
}