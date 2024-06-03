import { createElement, CSSProperties, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { IconType } from 'react-icons';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: IconType;
    endIcon?: IconType;
    widthField?: string;
    outsideTitle?: string;
    insideTitle?: string;
    topRightText?: string;
    bottomRightText?: string;
    fieldSize?: FieldSizeType;
    variant?: FieldVariantType;
    color?: string;
    errorColor?: string;
    name?: string;
    required?: boolean;
    control: Control<FieldValues> | undefined;
}

type FieldSizeType = 'extra-small' | 'small' | 'medium' | 'large';

type FieldVariantType = 'filled' | 'outlined';

enum FieldSizeEnum {
    'extra-small' = 'input-xs',
    'small' = 'input-sm',
    'medium' = 'input-md',
    'large' = 'input-lg'
}
export default function TextField({
    startIcon,
    endIcon,
    widthField,
    outsideTitle,
    insideTitle,
    topRightText,
    bottomRightText,
    fieldSize = 'medium',
    color,
    errorColor,
    variant,
    name = '',
    control,
    required,
    ...props
}: TextFieldProps) {
    const { field, fieldState } = useController({
        control,
        defaultValue: '',
        name
    });

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const outlinedField = `bg-transparent border-base-300 border-2 focus-within:border-primary focus-within:outline-none ${!isFocused && 'hover:border-base-content'} ${fieldState.error && errorColor === undefined && '!border-error focus-within:!border-error'}`;
    const outlinedCustomColor: CSSProperties = { borderColor: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };

    const filledField = `bg-base-200  border-base-300 border-0 border-b-[2px] rounded-b-none hover:bg-base-300 ${!isFocused && 'hover:border-base-content'} focus-within:border-primary focus-within:outline-none ${fieldState.error && errorColor === undefined && '!border-error focus-within:!border-error'}`;
    const filledCustomColor: CSSProperties = { borderColor: fieldState.error ? (errorColor ? errorColor : '!border-error focus-within:!border-error') : isFocused ? color : undefined };

    const fieldStyleWithCustomColor: CSSProperties = variant === 'filled' ? filledCustomColor : outlinedCustomColor;

    const textFocusStyleWithCustomColor: CSSProperties = {
        color: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined
    };

    const GenericStartIcon = () => startIcon && createElement(startIcon);
    const GenericEndIcon = () => endIcon && createElement(endIcon);

    return (
        <label className='form-control' style={{ width: widthField }}>
            {(outsideTitle || topRightText) && (
                <div className='label'>
                    <span className={`label-text font-medium ${isFocused && 'text-primary'} ${fieldState.error && errorColor === undefined && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        {outsideTitle}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                    <span className='label-text-alt'>{topRightText}</span>
                </div>
            )}
            <label
                className={`input ${FieldSizeEnum[fieldSize]} flex items-center gap-2 ${variant === 'filled' ? filledField : outlinedField}`}
                style={fieldStyleWithCustomColor}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                {startIcon && (
                    <div className={`${isFocused && `text-primary`} ${fieldState.error && errorColor === undefined && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        <GenericStartIcon />
                    </div>
                )}
                {insideTitle && (
                    <span className={`text-h text-nowrap ${isFocused && 'text-primary'} ${fieldState.error && errorColor === undefined && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        {insideTitle}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                )}
                <input type='text' className='w-full' {...props} {...field} />
                {endIcon && (
                    <div className={`${isFocused && 'text-primary'} ${fieldState.error && errorColor === undefined && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        <GenericEndIcon />
                    </div>
                )}
            </label>
            <div className='label'>
                {fieldState.error && (
                    <span className={`text-xs ${fieldState.error && errorColor === undefined && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                        {fieldState.error.message}
                    </span>
                )}
                {bottomRightText && <span className='label-text-alt'>{bottomRightText}</span>}
            </div>
        </label>
    );
}
