import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaExchangeAlt, FaExclamationTriangle, FaFileAlt, FaPlusCircle, FaSearch, FaTimesCircle, FaTools } from 'react-icons/fa';
import {
    FaArrowDown,
    FaBarcode,
    FaBox,
    FaBoxesStacked,
    FaBoxOpen,
    FaBug,
    FaClipboardCheck,
    FaFileInvoice,
    FaFilter,
    FaFlask,
    FaFolderOpen,
    FaGavel,
    FaIndustry,
    FaListUl,
    FaRecycle,
    FaSeedling,
    FaSkullCrossbones,
    FaSprayCan,
    FaStore,
    FaTractor,
    FaUsers,
    FaUserShield,
    FaWarehouse
} from 'react-icons/fa6';

import { GlobalRouters } from '@/routers';

interface IListItems {
    title: string;
    icon: IconType;
    items: Array<{ title: string; url: string; icon: IconType }>;
}

export const useSideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [itemActive, setItemActive] = useState('');
    const handlerCollapsed = () => {
        setCollapsed(!collapsed);
        setItemActive('');
    };

    const logout = () => {
        signOut({
            callbackUrl: '/'
        });
    };

    const handlerItemActive = (title: string) => {
        if (itemActive === title) {
            setItemActive('');
        } else {
            setItemActive(title);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (collapsed && event.target instanceof HTMLElement && event.target.closest('.sidebar-nav') === null) {
                setItemActive('');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [collapsed]);

    const listItems: IListItems[] = [
        {
            title: 'Produtos e Relacionados',
            icon: FaBox,
            items: [
                { title: 'Produtos', url: GlobalRouters.product.PRODUTOS.LIST, icon: FaBoxOpen },
                { title: 'Substâncias', url: '/substancias', icon: FaFlask },
                { title: 'Pragas', url: '/pragas', icon: FaBug },
                { title: 'Culturas', url: '/culturas', icon: FaSeedling },
                { title: 'Classe de Uso', url: '/classe-de-uso', icon: FaListUl },
                { title: 'Classe Toxicológica', url: '/classe-toxicologica', icon: FaSkullCrossbones }
            ]
        },
        {
            title: 'Entidades',
            icon: FaUsers,
            items: [
                { title: 'Fabricantes', url: '/fabricantes', icon: FaIndustry },
                { title: 'Produtos', url: '/produtos', icon: FaBoxOpen },
                { title: 'Revendedores', url: '/revendedores', icon: FaStore },
                { title: 'Produtores', url: '/produtores', icon: FaTractor },
                { title: 'Aplicadores', url: '/aplicadores', icon: FaSprayCan },
                { title: 'Centrais de Descarte', url: '/centrais-de-descarte', icon: FaRecycle },
                { title: 'Estações Experimentais', url: '/estacoes-experimentais', icon: FaFlask }
            ]
        },
        {
            title: 'Controle de Estoque',
            icon: FaWarehouse,
            items: [
                { title: 'Revendedores', url: '/revendedores', icon: FaStore },
                { title: 'Produtores', url: '/produtores', icon: FaTractor },
                { title: 'Aplicadores', url: '/aplicadores', icon: FaSprayCan },
                { title: 'Centrais de Descartes', url: '/centrais-de-descartes', icon: FaRecycle },
                { title: 'Revendas', url: '/revendas-recebimento-de-estoque', icon: FaBoxesStacked }
            ]
        },
        {
            title: 'Utilitários',
            icon: FaTools,
            items: [
                { title: 'Relatório de logs', url: '/relatorio-de-logs', icon: FaFileAlt },
                { title: 'Filtrar Importações', url: '/filtrar-importacoes', icon: FaFilter },
                { title: 'NCM', url: '/ncm', icon: FaBarcode },
                { title: 'Consulta CREA', url: '/consulta-crea', icon: FaSearch },
                { title: 'Consultar NF', url: '/consultar-nf', icon: FaFileInvoice }
            ]
        },
        {
            title: 'Fiscalização',
            icon: FaClipboardCheck,
            items: [
                { title: 'Apreensões', url: '/apreensoes', icon: FaExclamationTriangle },
                { title: 'Fiscais', url: '/fiscais', icon: FaUserShield },
                { title: 'Irregularidades', url: '/irregularidades', icon: FaTimesCircle },
                { title: 'Processos', url: '/processos', icon: FaFolderOpen },
                { title: 'Sanções', url: '/sancoes', icon: FaGavel }
            ]
        },
        {
            title: 'Movimentação',
            icon: FaExchangeAlt,
            items: [
                { title: 'Dar baixa', url: '/dar-baixa', icon: FaArrowDown },
                { title: 'Incluir', url: '/incluir', icon: FaPlusCircle }
            ]
        }
    ];

    return { collapsed, itemActive, listItems, handlerCollapsed, handlerItemActive, logout };
};
