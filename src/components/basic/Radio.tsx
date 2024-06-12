import React from 'react';
import { useController } from 'react-hook-form';

interface IProps {
    control: any;
    name: string;
    errorColor?: string;
    textColor?: string;
    className?: string;
    options: { label: string | React.ReactNode; value: string }[];
    title: string;
    required?: boolean;
}

export const RadioGroupInput = ({ control, name, errorColor, textColor, options, title, required }: IProps) => {
    const {
        field: { value, onChange, onBlur },
        fieldState: { error }
    } = useController({
        name,
        control,
        defaultValue: ''
    });

    return (
        <div className='form-control'>
            {title && (
                <div className='label'>
                    <span className={`label-text font-medium  ${error && !errorColor && '!text-error'}`}>
                        {title}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                </div>
            )}
            <label className='label cursor-pointer'>
                {options?.map(option => (
                    <label key={option.value} className='flex flex-col items-center justify-center gap-2'>
                        {
                            <span className='label-text' style={{ color: textColor ? textColor : undefined }}>
                                {option.label}
                            </span>
                        }
                        <input type='radio' className='radio checked:bg-blue-500' value={option.value} checked={value === option.value} onChange={onChange} onBlur={onBlur} />
                    </label>
                ))}{' '}
            </label>
            {error && (
                <span className={`text-xs ${!errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                    {error.message}
                </span>
            )}
        </div>
    );
};
