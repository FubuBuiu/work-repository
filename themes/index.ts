//TODO Remove any type from themes variable
const themes: any = {
    light: {
        primary: '#4D854A', // Verde para representar a vegetação e produtos agropecuários
        'primary-content': '#FFFFFF', // Texto sobre o fundo verde
        secondary: '#A67F4E', // Marrom para representar a terra e elementos naturais
        'secondary-content': '#FFFFFF', // Texto sobre o fundo marrom
        accent: '#0077A7', // Azul para representar água ou céu e destacar elementos
        'accent-content': '#FFFFFF', // Texto sobre o fundo azul
        neutral: '#CCCCCC', // Tom neutro para elementos de destaque menos importantes
        'neutral-content': '#333333', // Texto sobre o fundo neutro
        'base-100': '#FFFFFF', // Fundo branco
        'base-200': '#F5F7FA', // Fundo cinza claro para elementos secundários
        'base-300': '#E5E7EB', // Fundo cinza mais claro para divisões e detalhes
        'base-content': '#1F2937', // Texto sobre o fundo branco ou cinza claro
        info: '#33A1DE', // Azul mais claro para informações e ações positivas
        'info-content': '#FFFFFF', // Texto sobre o fundo azul claro
        success: '#6AA84F', // Verde mais claro para sucesso e confirmações
        'success-content': '#FFFFFF', // Texto sobre o fundo verde claro
        warning: '#F59E0B', // Amarelo para avisos e precauções
        'warning-content': '#FFFFFF', // Texto sobre o fundo amarelo
        error: '#EF4444', // Vermelho para erros e alertas críticos
        'error-content': '#FFFFFF' // Texto sobre o fundo vermelho
    },
    dark: {
        primary: '#4D854A', // Verde para representar a vegetação e produtos agropecuários
        'primary-content': '#FFFFFF', // Texto sobre o fundo verde
        secondary: '#A67F4E', // Marrom para representar a terra e elementos naturais
        'secondary-content': '#FFFFFF', // Texto sobre o fundo marrom
        accent: '#0077A7', // Azul para representar água ou céu e destacar elementos
        'accent-content': '#FFFFFF', // Texto sobre o fundo azul
        neutral: '#CCCCCC', // Tom neutro para elementos de destaque menos importantes
        'neutral-content': '#FFFFFF', // Texto sobre o fundo neutro
        'base-100': '#1F2937', // Fundo escuro
        'base-200': '#374151', // Fundo escuro mais escuro para elementos secundários
        'base-300': '#4B5563', // Fundo escuro ainda mais escuro para divisões e detalhes
        'base-content': '#FFFFFF', // Texto sobre o fundo escuro
        info: '#33A1DE', // Azul mais claro para informações e ações positivas
        'info-content': '#FFFFFF', // Texto sobre o fundo azul claro
        success: '#6AA84F', // Verde mais claro para sucesso e confirmações
        'success-content': '#FFFFFF', // Texto sobre o fundo verde claro
        warning: '#F59E0B', // Amarelo para avisos e precauções
        'warning-content': '#FFFFFF', // Texto sobre o fundo amarelo
        error: '#EF4444', // Vermelho para erros e alertas críticos
        'error-content': '#FFFFFF' // Texto sobre o fundo vermelho
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
