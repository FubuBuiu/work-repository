import { InputHTMLAttributes } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

type ToggleSizeType = 'extra-small' | 'small' | 'medium' | 'large';

enum ToggleSizeEnum {
    'extra-small' = 'toggle-xs',
    'small' = 'toggle-sm',
    'medium' = 'toggle-md',
    'large' = 'toggle-lg'
}

interface TogglePropsType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    className?: string;
    backgroundStyle?: string;
    dotStyle?: string;
    text?: string;
    control: Control<FieldValues>;
    name?: string;
    size?: ToggleSizeType;
    errorColor?: string;
}

export default function Toggle({ className, size = 'medium', backgroundStyle, dotStyle, disabled, text, errorColor, control, name = '', ...props }: TogglePropsType) {
    const { field, fieldState } = useController({
        control,
        defaultValue: false,
        name
    });

    return (
        <div>
            <label className='label w-fit cursor-pointer p-0'>
                {text && <span className='label-text mr-3 font-medium'>{text}</span>}
                <div className='relative'>
                    <input type='checkbox' className={`peer sr-only ${className}`} disabled={disabled} {...props} {...field} />
                    <div className={`box block h-8 w-14 rounded-full ${disabled ? 'background-toggle-disabled' : `bg-gray-300 peer-checked:bg-primary ${backgroundStyle}`}`}></div>
                    <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full ${disabled ? 'dot-toggle-disabled' : `bg-white transition peer-checked:translate-x-full ${dotStyle}`}`}
                    ></div>
                </div>
            </label>
            {fieldState && (
                <span className={`text-xs ${!errorColor && 'text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                    {fieldState.error?.message}
                </span>
            )}
        </div>
    );
}
