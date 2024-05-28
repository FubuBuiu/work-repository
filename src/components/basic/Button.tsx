import { CSSProperties, createElement, useState } from 'react';
import { IconType } from 'react-icons';

type VariantButtonType = 'icon' | 'normal';

type ButtonSizesType = 'large' | 'small' | 'extra-small';

export default function Button({
    loading,
    text,
    className,
    icon,
    startIcon,
    endIcon,
    outline,
    noAnimation,
    ghost,
    block,
    color,
    contentColor,
    variant = 'normal',
    size,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    noAnimation?: boolean;
    block?: boolean;
    ghost?: boolean;
    startIcon?: boolean;
    endIcon?: boolean;
    icon?: { icon: IconType; size?: number | string };
    outline?: boolean;
    variant?: VariantButtonType;
    size?: ButtonSizesType;
    contentColor?: string;
    text?: string;
}) {
    const [isHover, setIsHover] = useState<boolean>(false);
    let darkCustomColor: string | undefined = undefined;

    let customization: string[] = [];
    if (outline) {
        customization.push('btn-outline fill-primary hover:fill-primary-content');
    }
    if (noAnimation) {
        customization.push('no-animation');
    }
    if (block) {
        customization.push('btn-block');
    }
    if (loading) {
        customization.push('no-animation disabled');
    }
    if (ghost) {
        customization.push('btn-ghost');
    }
    if (variant === 'icon') {
        customization.push('btn-circle');
    }

    enum ButtonSize {
        'large' = 'btn-lg',
        'small' = 'btn-sm',
        'extra-small' = 'btn-xs'
    }

    const GenericIcon = () => icon && createElement(icon.icon, { size: icon.size });

    const getDarkColorFromCustomColor = (cor: string, porcentagem: number = 10): string => {
        // Extrair os componentes RGB da cor original
        let r = parseInt(cor.slice(1, 3), 16);
        let g = parseInt(cor.slice(3, 5), 16);
        let b = parseInt(cor.slice(5, 7), 16);

        // Calcular a quantidade de preto a ser misturada com base na porcentagem
        const pretoR = Math.round(r * (1 - porcentagem / 100));
        const pretoG = Math.round(g * (1 - porcentagem / 100));
        const pretoB = Math.round(b * (1 - porcentagem / 100));

        // Formatar os novos componentes RGB de volta para hexadecimal
        const darkColor: string = `#${pretoR.toString(16).padStart(2, '0')}${pretoG.toString(16).padStart(2, '0')}${pretoB.toString(16).padStart(2, '0')}`;

        return darkColor;
    };

    if (color) {
        darkCustomColor = getDarkColorFromCustomColor(color);
    }

    const filledButtonStyleWithCustomColor: CSSProperties = {
        backgroundColor: isHover ? darkCustomColor : color,
        borderColor: isHover ? darkCustomColor : color,
        color: contentColor ? contentColor : undefined,
        fill: contentColor
    };
    const outlinedButtonStyleWithCustomColor: CSSProperties = {
        backgroundColor: isHover ? darkCustomColor : 'transparent',
        borderColor: isHover ? darkCustomColor : color,
        color: isHover ? contentColor : color,
        fill: isHover ? `${contentColor}` : `${color}`
    };

    const startIconElement = startIcon && (
        <span>
            <GenericIcon />
        </span>
    );
    const endIconElement = endIcon && (
        <span>
            <GenericIcon />
        </span>
    );
    return (
        <button
            className={`btn ${size && ButtonSize[size]} ${!color && `${!ghost && 'btn-primary'} ${!outline && 'fill-primary-content'}`} ${customization.join(' ')} ${className}`}
            {...props}
            style={color ? (outline ? outlinedButtonStyleWithCustomColor : filledButtonStyleWithCustomColor) : undefined}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {loading ? (
                <span className='loading loading-dots loading-md'></span>
            ) : variant === 'icon' ? (
                <GenericIcon />
            ) : (
                <>
                    {startIconElement}
                    <span className='text-nowrap'>{text}</span>
                    {endIconElement}
                </>
            )}
        </button>
    );
}
