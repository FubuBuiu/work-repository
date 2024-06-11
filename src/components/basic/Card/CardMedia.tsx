import { HTMLAttributes } from 'react';

interface CardMediaPropsType extends HTMLAttributes<HTMLElement> {
    image: { src: string; alt?: string };
}

export default function CardMedia({ className, image, ...props }: CardMediaPropsType) {
    return (
        <figure className={className} {...props}>
            <img src={image.src} alt={image.alt} />
        </figure>
    );
}
