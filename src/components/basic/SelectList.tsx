import { CSSProperties, InputHTMLAttributes, createElement, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { IconType } from 'react-icons';

//TODO Tentar replicar propriedade size do Select para esse componente
interface SelectListPropsType extends InputHTMLAttributes<HTMLInputElement> {
    control: Control<FieldValues>;
    options?: {
        value: string;
    }[];
    required?: boolean;
    errorColor?: string;
    topRightLabel?: string | IconType;
    disabled?: boolean;
}

export default function SelectList({ control, name = '', options = [], title, className, color, disabled, errorColor, defaultValue = '', required, topRightLabel, ...props }: SelectListPropsType) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const { field, fieldState } = useController({
        control,
        defaultValue,
        name
    });

    const defaultSelectStyle = !color && `focus-within:border-primary ${fieldState.error && !errorColor && '!border-error focus-within:!border-error'}`;

    const borderStyleWithCustomColor: CSSProperties = { borderColor: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };
    const titleStyleWithCustomColor: CSSProperties = { color: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };

    const generateLabel = (value: string | IconType) => {
        if (typeof value === 'string') {
            return value;
        }
        return createElement(value);
    };

    return (
        <label className={'w-full'} style={{}} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {(title || topRightLabel) && (
                <div className='label'>
                    <span className={`label-text font-medium ${isFocused && 'text-primary'} ${fieldState.error && !errorColor && '!text-error'}`} style={titleStyleWithCustomColor}>
                        {title}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                    <span className='label-text-alt'>{topRightLabel && generateLabel(topRightLabel)}</span>
                </div>
            )}
            <input
                list={name}
                className={`select select-bordered w-full border-2 bg-transparent focus-within:outline-none ${disabled ? 'field-disabled' : `${defaultSelectStyle}  ${!isFocused && 'hover:border-black'}`} ${className} `}
                type='text'
                style={borderStyleWithCustomColor}
                {...props}
                {...field}
            />
            <datalist id={name}>
                {options.map(option => (
                    <option key={option.value} value={option.value} />
                ))}
            </datalist>
            {fieldState.error && (
                <span className='text-xs text-error' style={{ color: errorColor ? errorColor : undefined }}>
                    {fieldState.error.message}
                </span>
            )}
        </label>
    );
}
