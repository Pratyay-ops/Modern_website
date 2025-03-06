import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
}

export default function Avatar(props: AvatarProps) {
    const { className, children, name, ...otherProps } = props;
    return (
        <div 
            className={twMerge(
                "size-20 rounded-full overflow-hidden border-4 border-blue-900 bg-neutral-900 ", 
                className
            )} 
            { ...otherProps }
            data-name={name}
        >
            {children}
        </div>
    );
}