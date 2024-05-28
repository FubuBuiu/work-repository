import { Dispatch, SetStateAction, useEffect } from 'react';
import { MdError, MdWarning, MdInfo, MdCheckCircle } from 'react-icons/md';

type VariantType = 'info' | 'error' | 'warning' | 'success';

enum VariantEnum {
    'info' = 'alert-info',
    'error' = 'alert-error',
    'warning' = 'alert-warning',
    'success' = 'alert-success'
}

export default function Alert({
    className,
    isVisible = false,
    setIsVisible = () => {},
    title,
    message,
    variant,
    timeout = 5000
}: {
    isVisible?: boolean;
    setIsVisible?: Dispatch<SetStateAction<boolean>>;
    title?: string;
    message?: string;
    variant?: VariantType;
    timeout?: number;
    className?: string;
}) {
    const textColor =
        variant &&
        (variant === 'error'
            ? 'text-error-content'
            : variant === 'info'
              ? 'text-info-content'
              : variant === 'warning'
                ? 'text-warning-content'
                : variant === 'success'
                  ? 'text-success-content'
                  : undefined);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, timeout);

        return () => clearTimeout(timer);
    }, [isVisible, timeout]);

    return isVisible ? (
        <div className='animate-slideDown fixed bottom-0 left-0 right-0 mb-5 flex w-full flex-row justify-center px-6 duration-500'>
            <div role='alert' className={`alert ${variant && VariantEnum[variant]} shadow-lg ${className}`}>
                {variant === 'error' ? (
                    <MdError size={20} />
                ) : variant === 'info' ? (
                    <MdInfo size={20} />
                ) : variant === 'success' ? (
                    <MdCheckCircle size={20} />
                ) : variant === 'warning' ? (
                    <MdWarning size={20} />
                ) : undefined}
                <div>
                    <div className={`text-[20px] font-semibold ${textColor}`}>{title}</div>
                    <span className={`${textColor}`}>{message}</span>
                </div>
            </div>
        </div>
    ) : null;
}