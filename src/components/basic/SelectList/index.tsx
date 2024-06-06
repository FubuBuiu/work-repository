import React, { CSSProperties, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

export const SelectList = ({
    control,
    name,
    title,
    options,
    required,
    errorColor,
    variant,
    color,
    topRightText
}: {
    control: Control<FieldValues>;
    name: string;
    options: {
        value: string;
    }[];
    required?: boolean;
    title: string;
    errorColor?: string;
    variant?: 'filled' | 'outlined';
    color?: string;
    topRightText?: string;
}) => {
    const {
        field,
        fieldState: { error }
    } = useController({
        control,
        name: name,
        defaultValue: ''
    });

    const [isFocused, setIsFocused] = useState(false);

    const outlinedCustomColor: CSSProperties = { borderColor: error ? errorColor && errorColor : isFocused ? color : undefined };
    const filledCustomColor: CSSProperties = { borderColor: error ? (errorColor ? errorColor : '!border-error focus-within:!border-error') : isFocused ? color : undefined };
    const fieldStyleWithCustomColor: CSSProperties = variant === 'filled' ? filledCustomColor : outlinedCustomColor;

    const textFocusStyleWithCustomColor: CSSProperties = {
        color: error ? errorColor && errorColor : isFocused ? color : undefined
    };

    return (
        <label className='flex flex-col gap-y-2' style={fieldStyleWithCustomColor} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {(title || topRightText) && (
                <div className='label'>
                    <span className={`label-text font-medium ${isFocused && 'text-primary'} ${error && errorColor === undefined && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        {title}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                    <span className='label-text-alt'>{topRightText}</span>
                </div>
            )}
            <input {...field} list='browsers' className={`input input-md input-bordered w-full bg-base-200`} />
            <datalist id='browsers'>
                {options.map(option => (
                    <option key={option.value} value={option.value} />
                ))}
            </datalist>
            {error && <span className='text-xs text-error'>{error.message}</span>}
        </label>
    );
};
