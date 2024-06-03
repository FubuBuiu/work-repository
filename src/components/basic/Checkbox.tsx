import { InputHTMLAttributes } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

type SizeType = 'extra-small' | 'small' | 'medium' | 'large';

enum SizeEnum {
    'extra-small' = 'checkbox-xs',
    'small' = 'checkbox-sm',
    'medium' = 'checkbox-md',
    'large' = 'checkbox-lg'
}

interface CheckboxPropsType extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: SizeType;
    text?: string;
    textColor?: string;
    errorColor?: string;
    control: Control<FieldValues>;
    name?: string;
    className?: string;
}

export default function Checkbox({ className, control, name = '', errorColor, text, size = 'medium', textColor, ...props }: CheckboxPropsType) {
    const { field, fieldState } = useController({
        control,
        defaultValue: false,
        name
    });

    return (
        <div className='form-control w-fit'>
            <label className='label cursor-pointer p-0'>
                {text && (
                    <span className='label-text mr-3' style={{ color: textColor ? textColor : undefined }}>
                        {text}
                    </span>
                )}
                <input type='checkbox' className={`checkbox-primary checkbox ${SizeEnum[size]} ${className}`} {...props} {...field} />
            </label>
            {fieldState.error && (
                <span className={`text-xs ${!errorColor && 'text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                    {fieldState.error.message}
                </span>
            )}
        </div>
    );
}
