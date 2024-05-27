//TODO Remove any type from themes variable
const themes: any = {
    light: {
        primary: '#586875',
        'primary-content': '#f4f4f4', // Contraste com primary
        secondary: '#a5c8ca',
        'secondary-content': '#001F22', // Contraste com secondary
        accent: '#bdd6d2',
        'accent-content': '#002426', // Contraste com accent
        neutral: '#161616',
        'neutral-content': '#CACACA', // Contraste com neutral
        'base-100': '#ffffff', // Cor de fundo
        'base-200': '#e3e5d7', // Detalhes dos componentes
        'base-300': '#B6BEB4',
        'base-content': '#151614', // Cor do texto
        info: '#a5c8ca',
        'info-content': '#001F22', // Contraste com info
        success: '#bdd6d2',
        'success-content': '#002426', // Contraste com success
        warning: '#FFAA00',
        'warning-content': '#2B1900', // Contraste com warning
        error: '#FF0000',
        'error-content': '#FFD7D3' // Contraste com error
    },
    dark: {
        primary: '#586875',
        'primary-content': '#00262D', // Contraste com primary
        secondary: '#a5c8ca',
        'secondary-content': '#00262D', // Contraste com secondary
        accent: '#bdd6d2',
        'accent-content': '#003034', // Contraste com accent
        neutral: '#CACACA',
        'neutral-content': '#161616', // Contraste com neutral
        'base-100': '#151614', // Cor de fundo
        'base-200': '#002426', // Detalhes dos componentes
        'base-300': '#3A3A00',
        'base-content': '#F5FFF3', // Cor do texto
        info: '#a5c8ca',
        'info-content': '#001F22', // Contraste com info
        success: '#bdd6d2',
        'success-content': '#002426', // Contraste com success
        warning: '#FFAA00',
        'warning-content': '#2B1900', // Contraste com warning
        error: '#FF0000',
        'error-content': '#330000' // Contraste com error
    }
};

const themes_ = {
    light: {
        ...themes.light
    },
    dark: {
        ...themes.dark
    }
};

export default themes_;
