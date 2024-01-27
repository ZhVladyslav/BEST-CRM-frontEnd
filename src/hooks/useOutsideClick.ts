import React, { useEffect } from 'react';

interface IProps {
    elementRef: React.RefObject<HTMLElement>;
    triggerRef?: React.RefObject<HTMLElement>;
    handler: () => void;
    enable?: boolean;
}

export const useOutsideClick = ({ elementRef, triggerRef, handler, enable = true }: IProps) => {
    useEffect(() => {
        if (!enable) return;

        const handlerClick = (e: MouseEvent | TouchEvent) => {
            const target = e.target;
            if (!(target instanceof Node)) return;
            if (!elementRef.current) return;

            const ignoreElements = [elementRef.current];
            if (triggerRef?.current) ignoreElements.push(triggerRef?.current);

            if (!ignoreElements.some((element) => element.contains(target))) {
                handler();
            }
        };

        document.addEventListener('mousedown', handlerClick);
        document.addEventListener('touchstart', handlerClick);

        return () => {
            document.removeEventListener('mousedown', handlerClick);
            document.removeEventListener('touchstart', handlerClick);
        };
    }, [elementRef, handler, enable]);
};
