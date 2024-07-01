import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect } from 'react';

interface ModalContextData {
    visibility: boolean;
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextData>({
    visibility: false,
    setVisibility: () => false
});

export const useModal = () => {
    return useContext(ModalContext);
};

export default function ModalProvider({ visibility, setVisibility, children }: { children: ReactNode; visibility: boolean; setVisibility: Dispatch<SetStateAction<boolean>> }) {
    return <ModalContext.Provider value={{ visibility, setVisibility }}>{children}</ModalContext.Provider>;
}
