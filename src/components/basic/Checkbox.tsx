import { InputHTMLAttributes } from 'react';

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
}

export default function Checkbox({ className, text, size = 'medium', textColor, ...props }: CheckboxPropsType) {
    return (
        <div className='form-control w-fit'>
            <label className='label cursor-pointer'>
                {text && (
                    <span className='label-text mr-3' style={{ color: textColor ? textColor : undefined }}>
                        {text}
                    </span>
                )}
                <input type='checkbox' className={`checkbox-primary checkbox ${SizeEnum[size]} ${className}`} {...props} />
            </label>
        </div>
    );
}
