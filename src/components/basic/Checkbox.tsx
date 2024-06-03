import { InputHTMLAttributes } from 'react';
import { useController } from 'react-hook-form';

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
    className?: string;
    control?: any;
    name: string;
}

export default function Checkbox({ className, text, size = 'medium', textColor, control, name, ...props }: CheckboxPropsType) {
    const { field, fieldState } = useController({
        control,
        defaultValue: '',
        name
    });

    return (
        <div className='form-control w-fit'>
            <label className='label cursor-pointer'>
                {text && (
                    <span className='label-text mr-3' style={{ color: textColor ? textColor : undefined }}>
                        {text}
                    </span>
                )}
                <input type='checkbox' className={`checkbox-primary checkbox ${SizeEnum[size]} ${className}`} {...props} {...field} />
            </label>
            {fieldState.error && <span className='text-xs text-error'>{fieldState.error.message}</span>}
        </div>
    );
}
