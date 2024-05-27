import { CSSProperties, ReactNode, SelectHTMLAttributes, createElement, useState } from 'react';
import { IconType } from 'react-icons';

export interface ListOptionType {
    value: string;
    key: string;
}

export default function Select({
    className,
    listOptions = [],
    insideTitle,
    outsideTitle,
    topRightLabel,
    bottomLeftText,
    bottomRightLabel,
    color,
    ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
    listOptions?: ListOptionType[];
    insideTitle?: string;
    outsideTitle?: string;
    topRightLabel?: string | IconType;
    bottomLeftText?: string;
    bottomRightLabel?: string | IconType;
    color?: string;
}) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const borderStyleWithCustomColor: CSSProperties = { borderColor: isFocused ? color : undefined };
    const textStyleWithCustomColor: CSSProperties = { color: isFocused ? color : undefined };

    const GenerateLabel = (value: string | IconType) => {
        if (typeof value === 'string') {
            return value;
        }
        return createElement(value);
    };

    return (
        <label className='form-control w-fit max-w-xs'>
            {(outsideTitle || topRightLabel) && (
                <div className='label'>
                    <span className={`label-text ${color === undefined && isFocused && 'text-primary'}`} style={color ? textStyleWithCustomColor : undefined}>
                        {outsideTitle}
                    </span>
                    <span className='label-text-alt'>{topRightLabel && GenerateLabel(topRightLabel)}</span>
                </div>
            )}
            <select
                className={`select select-bordered border-2 focus-within:border-primary focus-within:outline-none ${!isFocused && 'hover:border-black'} ${className} `}
                {...props}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={color ? borderStyleWithCustomColor : undefined}
            >
                <option value={undefined} hidden>
                    {insideTitle}
                </option>
                {listOptions.map(option => (
                    <option key={option.key} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
            {(bottomLeftText || bottomRightLabel) && (
                <div className='label'>
                    <span className='label-text-alt'>{bottomLeftText}</span>
                    <span className='label-text-alt'>{bottomRightLabel && GenerateLabel(bottomRightLabel)}</span>
                </div>
            )}
        </label>
    );
}
