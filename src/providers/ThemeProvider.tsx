import React, { useState } from 'react';

const ThemeContext = React.createContext({ theme: 'light', switchTheme: () => {} });

const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    };

    return <ThemeContext.Provider value={{ theme, switchTheme: switchTheme }}>{children}</ThemeContext.Provider>;
};

function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export { ThemeProvider, useTheme };
