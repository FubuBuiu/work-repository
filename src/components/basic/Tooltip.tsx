import { ReactNode } from 'react';

type PositionType = 'left' | 'right' | 'top' | 'bottom';

enum PositionEnum {
    left = 'tooltip-left',
    right = 'tooltip-right',
    top = 'tooltip-top',
    bottom = 'tooltip-bottom'
}

interface TooltipPropsType {
    children?: ReactNode;
    position?: PositionType;
    message?: string;
}

export default function Tooltip({ children, message, position = 'right' }: TooltipPropsType) {
    return (
        <div className={`tooltip ${PositionEnum[position]}`} data-tip={message}>
            {children}
        </div>
    );
}
