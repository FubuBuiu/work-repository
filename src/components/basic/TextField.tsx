import { CSSProperties, createElement, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { IconType } from 'react-icons';
interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    startIcon?: IconType;
    endIcon?: IconType;
    width?: string;
    outsideTitle?: string;
    insideTitle?: string;
    topRightText?: string;
    bottomRightText?: string;
    size?: FieldSizeType;
    variant?: FieldVariantType;
    errorColor?: string;
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
    width,
    outsideTitle,
    insideTitle,
    topRightText,
    disabled,
    bottomRightText,
    size = 'medium',
    color,
    errorColor,
    variant,
    required,
    name = '',
    defaultValue = '',
    control,
    ...props
}: TextFieldProps) {
    const {
        field,
        fieldState: { error }
    } = useController({
        control,
        defaultValue,
        name
    });

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const outlinedField = `bg-transparent border-base-300 border-2 focus-within:border-primary focus-within:outline-none ${!isFocused && 'hover:border-base-content'} ${error && !errorColor && '!border-error focus-within:!border-error'}`;

    const outlinedCustomColor: CSSProperties = { borderColor: error ? errorColor && errorColor : isFocused ? color : undefined };

    const filledField = `bg-base-200  border-base-300 border-0 border-b-[2px] rounded-b-none hover:bg-base-300 ${!isFocused && 'hover:border-base-content'} focus-within:border-primary focus-within:outline-none ${error && !errorColor && '!border-error focus-within:!border-error'}`;

    const filledCustomColor: CSSProperties = { borderColor: error ? (errorColor ? errorColor : '!border-error focus-within:!border-error') : isFocused ? color : undefined };

    const fieldStyleWithCustomColor: CSSProperties = variant === 'filled' ? filledCustomColor : outlinedCustomColor;

    const textFocusStyleWithCustomColor: CSSProperties = {
        color: error ? errorColor && errorColor : isFocused ? color : undefined
    };

    const GenericStartIcon = () => startIcon && createElement(startIcon);
    const GenericEndIcon = () => endIcon && createElement(endIcon);

    return (
        <label className='form-control min-w-fit' style={{ width: width }}>
            {(outsideTitle || topRightText) && (
                <div className='label'>
                    <span
                        className={`label-text font-medium ${disabled ? 'field-title-disabled' : `${isFocused && 'text-primary'} ${error && !errorColor && '!text-error'}`}`}
                        style={textFocusStyleWithCustomColor}
                    >
                        {outsideTitle}
                        {required && <span className={`ml-1 ${!disabled && 'text-red-500'}`}>*</span>}
                    </span>
                    <span className='label-text-alt'>{topRightText}</span>
                </div>
            )}
            <label
                className={`input ${FieldSizeEnum[size]} flex items-center gap-2 ${variant === 'filled' ? filledField : outlinedField} ${disabled && 'field-disabled'}`}
                style={fieldStyleWithCustomColor}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                {startIcon && (
                    <div className={`${isFocused && `text-primary`} ${error && !errorColor && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        <GenericStartIcon />
                    </div>
                )}
                {insideTitle && (
                    <span
                        className={`text-h text-nowrap ${disabled ? 'field-title-disabled' : `${isFocused && 'text-primary'} ${error && !errorColor && '!text-error'}`}`}
                        style={textFocusStyleWithCustomColor}
                    >
                        {insideTitle}
                        {required && <span className={`ml-1 ${!disabled && 'text-red-500'}`}>*</span>}
                    </span>
                )}
                <input type='text' disabled={disabled} className={`w-full ${disabled && 'placeholder-disabled'}`} {...props} {...field} />
                {endIcon && (
                    <div className={`${isFocused && 'text-primary'} ${error && !errorColor && '!text-error'}`} style={textFocusStyleWithCustomColor}>
                        <GenericEndIcon />
                    </div>
                )}
            </label>
            {(error || bottomRightText) && (
                <div className='label'>
                    {error && (
                        <span className={`text-xs ${!errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                            {error.message}
                        </span>
                    )}
                    {bottomRightText && <span className='label-text-alt'>{bottomRightText}</span>}
                </div>
            )}
        </label>
    );
}
