import { CSSProperties, SelectHTMLAttributes, createElement, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
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
    bottomRightLabel,
    color,
    errorColor,
    control,
    name = '',
    ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
    listOptions?: ListOptionType[];
    insideTitle?: string;
    outsideTitle?: string;
    topRightLabel?: string | IconType;
    bottomRightLabel?: string | IconType;
    color?: string;
    errorColor?: string;
    control: Control<FieldValues>;
    name?: string;
}) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const { field, fieldState } = useController({
        control,
        name
    });

    const defaultSelectStyle = !color && `focus-within:border-primary ${fieldState.error && !errorColor && '!border-error focus-within:!border-error'}`;

    const borderStyleWithCustomColor: CSSProperties = { borderColor: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };
    const titleStyleWithCustomColor: CSSProperties = { color: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };

    const GenerateLabel = (value: string | IconType) => {
        if (typeof value === 'string') {
            return value;
        }
        return createElement(value);
    };

    return (
        <label className='form-control w-fit max-w-xs' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {(outsideTitle || topRightLabel) && (
                <div className='label'>
                    <span className={`label-text font-medium ${!color && isFocused && 'text-primary'}`} style={color ? titleStyleWithCustomColor : undefined}>
                        {outsideTitle}
                    </span>
                    <span className='label-text-alt'>{topRightLabel && GenerateLabel(topRightLabel)}</span>
                </div>
            )}
            <select
                className={`select select-bordered border-2 focus-within:outline-none ${defaultSelectStyle}  ${!isFocused && 'hover:border-black'} ${className} `}
                {...props}
                {...field}
                style={borderStyleWithCustomColor}
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
            {(fieldState.error || bottomRightLabel) && (
                <div className='label'>
                    <span className={`text-xs ${!errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                        {fieldState.error?.message}
                    </span>
                    <span className='label-text-alt'>{bottomRightLabel && GenerateLabel(bottomRightLabel)}</span>
                </div>
            )}
        </label>
    );
}
