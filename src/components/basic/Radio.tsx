import React, { InputHTMLAttributes, createElement } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { IconType } from 'react-icons';

type Icon = { icon: IconType; size?: number };

type RadioOption = { label: string | Icon; value: string; checked?: boolean };

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    control: Control<FieldValues>;
    errorColor?: string;
    textColor?: string;
    options: RadioOption[];
}

export default function RadioGroup({ className, control, name = '', defaultValue = '', errorColor, textColor, options, title, required }: IRadioProps) {
    const {
        field,
        fieldState: { error }
    } = useController({
        name,
        control,
        defaultValue
    });

    const renderLabel = (label: string | Icon) => {
        if (typeof label === 'string') {
            return label;
        }
        return createElement(label.icon, { size: label.size });
    };

    return (
        <div className='form-control'>
            {title && (
                <div className='label px-0'>
                    <span className={`label-text font-medium  ${error && !errorColor && '!text-error'}`} style={{ color: error && errorColor ? errorColor : textColor ? textColor : undefined }}>
                        {title}
                        {required && <span className='ml-1 text-red-500'>*</span>}
                    </span>
                </div>
            )}
            <div className='flex flex-row gap-5 p-0'>
                {options?.map(option => (
                    <label key={option.value} className='flex cursor-pointer flex-row items-center justify-center gap-2'>
                        <input type='radio' className={`radio checked:bg-primary ${className}`} {...field} value={option.value} defaultChecked={option.checked} />
                        <span className='label-text' style={{ color: textColor ? textColor : undefined }}>
                            {renderLabel(option.label)}
                        </span>
                    </label>
                ))}
            </div>
            {error && (
                <span className={`mt-2 text-xs ${!errorColor && '!text-error'}`} style={{ color: errorColor ? errorColor : undefined }}>
                    {error.message}
                </span>
            )}
        </div>
    );
}
