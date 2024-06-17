import { HTMLAttributes } from 'react';

interface CardMediaPropsType extends HTMLAttributes<HTMLElement> {
    image: { src: string; alt?: string };
}
//TODO Achar uma solução para usar esse subcomponente da mesma forma que o DaisyUI
export default function CardMedia({ className, image, ...props }: CardMediaPropsType) {
    return (
        <div>IMPLEMENTAR FUTURAMENTE ESSE SUBCOMPONENTE</div>
        // <figure className={` ${className}`} {...props}>
        //     <img src={image.src} alt={image.alt} />
        // </figure>
    );
}
