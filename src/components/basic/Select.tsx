import { createElement, CSSProperties, SelectHTMLAttributes, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { IconType } from 'react-icons';

export type ListOptionType = {
    value: string;
    label: string;
};

type SelectSizeType = 'extra-small' | 'small' | 'large';

enum SelectSizeEnum {
    'extra-small' = 'select-xs',
    small = 'select-sm',
    large = 'select-lg'
}

interface SelectPropsType extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    options?: ListOptionType[];
    insideTitle?: string;
    outsideTitle?: string;
    topRightLabel?: string | IconType;
    bottomRightLabel?: string | IconType;
    errorColor?: string;
    control: Control<FieldValues>;
    size?: SelectSizeType;
    width?: string;
}

export default function Select({
    className,
    disabled,
    options = [],
    insideTitle,
    outsideTitle,
    topRightLabel,
    bottomRightLabel,
    color,
    errorColor,
    control,
    width,
    required,
    name = '',
    defaultValue = '',
    size,
    ...props
}: SelectPropsType) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const {
        field,
        fieldState: { error }
    } = useController({
        control,
        defaultValue,
        name
    });

    const defaultSelectStyle = !color && `focus-within:border-primary ${error && !errorColor && '!border-error focus-within:!border-error'}`;

    const borderStyleWithCustomColor: CSSProperties = { borderColor: error ? errorColor && errorColor : isFocused ? color : undefined };
    const titleStyleWithCustomColor: CSSProperties = { color: error ? errorColor && errorColor : isFocused ? color : undefined };

    const generateLabel = (value: string | IconType) => {
        if (typeof value === 'string') {
            return value;
        }
        return createElement(value);
    };

    return (
        <label className='form-control w-full ' style={{ width: width ?? undefined }} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {(outsideTitle || topRightLabel) && (
                <div className='label'>
                    <span
                        className={`label-text font-medium ${disabled ? 'field-title-disabled' : `${!color && isFocused && 'text-primary'} ${error && !errorColor && '!text-error'}`}`}
                        style={titleStyleWithCustomColor}
                    >
                        {outsideTitle}
                        {required && <span className={`ml-1 ${!disabled && 'text-red-500'}`}>*</span>}
                    </span>
                    <span className={`label-text-alt ${disabled && 'field-title-disabled'}`}>{topRightLabel && generateLabel(topRightLabel)}</span>
                </div>
            )}
            <select
                className={`select ${size && SelectSizeEnum[size]} select-bordered w-full border-2 bg-transparent focus-within:outline-none ${disabled ? 'field-disabled' : `${defaultSelectStyle}  ${!isFocused && 'hover:border-black'}`} ${className} `}
                {...props}
                {...field}
                style={borderStyleWithCustomColor}
                disabled={disabled}
            >
                <option value={undefined} hidden>
                    {insideTitle ?? 'Selecione'}
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {(error || bottomRightLabel) && (
                <div className='label'>
                    <span className={`text-xs ${!errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                        {error?.message}
                    </span>
                    <span className={`label-text-alt ${disabled && 'field-title-disabled'}`}>{bottomRightLabel && generateLabel(bottomRightLabel)}</span>
                </div>
            )}
        </label>
    );
}
