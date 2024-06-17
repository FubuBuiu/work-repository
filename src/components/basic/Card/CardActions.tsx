import { HtmlHTMLAttributes } from 'react';

export default function CardActions({ children, className }: HtmlHTMLAttributes<HTMLDivElement>) {
    return <div className={`card-actions w-full justify-end ${className}`}>{children}</div>;
}
