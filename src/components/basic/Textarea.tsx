import { CSSProperties, TextareaHTMLAttributes, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

enum TextareaSizeEnum {
    'extra-small' = 'input-xs',
    'small' = 'input-sm',
    'medium' = 'input-md',
    'large' = 'input-lg'
}

type TextareaSizeType = 'extra-small' | 'small' | 'medium' | 'large';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    size?: TextareaSizeType;
    title?: string;
    required?: boolean;
    topRightText?: string;
    bottomRightText?: string;
    color?: string;
    errorColor?: string;
    control: Control<FieldValues>;
    name?: string;
}

export default function Textarea({ className, size, disabled, title, required = false, topRightText, bottomRightText, color, errorColor, control, name = '', ...props }: TextareaProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const { field, fieldState } = useController({
        control,
        defaultValue: '',
        name
    });

    const defaultTextareaStyle = !color && `focus-within:border-primary ${fieldState.error && errorColor === undefined && '!border-error focus-within:!border-error'}`;

    const textareaWithCustomColor: CSSProperties = { borderColor: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined };

    const titleWithCustomColor: CSSProperties = {
        color: fieldState.error ? errorColor && errorColor : isFocused ? color : undefined
    };

    return (
        <label className='form-control w-full' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {(title || topRightText) && (
                <div className='label'>
                    <span
                        className={`label-text font-medium ${disabled ? 'field-title-disabled' : `${!color && isFocused && 'text-primary'} ${fieldState.error && !errorColor && '!text-error'}`}`}
                        style={titleWithCustomColor}
                    >
                        {title}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                    <span className={`label-text-alt ${disabled && 'field-title-disabled'}`}>{topRightText}</span>
                </div>
            )}
            <textarea
                className={`${size && TextareaSizeEnum[size]} textarea textarea-bordered border-2 bg-transparent focus-within:outline-none ${!isFocused && 'hover:border-base-content'} ${defaultTextareaStyle} ${disabled && 'field-disabled'} ${className}`}
                disabled={disabled}
                {...props}
                {...field}
                style={textareaWithCustomColor}
            ></textarea>
            {(fieldState.error || bottomRightText) && (
                <div className='label'>
                    <span className={`text-xs ${fieldState.error && !errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                        {fieldState.error?.message}
                    </span>
                    <span className={`label-text-alt ${disabled && 'field-title-disabled'}`}>{bottomRightText}</span>
                </div>
            )}
        </label>
    );
}
