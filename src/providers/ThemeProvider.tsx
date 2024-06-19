import React, { useEffect } from 'react';

import { useSession } from '@/hooks/useSession';

const ThemeContext = React.createContext({ theme: 'light', switchTheme: () => {} });

const ThemeProvider = ({ children }: any) => {
    const { changeThemeState, theme } = useSession();
    const changeToDark = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
    };

    const changeToLight = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            changeToDark();
        } else {
            changeToLight();
        }
    }, []);

    const switchTheme = () => {
        if (theme === 'light') {
            changeToDark();
            changeThemeState('dark');
        } else {
            changeToLight();
            changeThemeState('light');
        }
    };

    return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { ThemeProvider, useTheme };
