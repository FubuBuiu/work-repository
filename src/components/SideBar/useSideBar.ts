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

import { useSession } from '@/hooks/useSession';
import { GlobalRouters } from '@/routers';

interface IListItems {
    title: string;
    icon: IconType;
    items: Array<{ title: string; url: string; icon: IconType }>;
}

export const useSideBar = () => {
    const { changeStateSidebar: setCollapsed, sidebarOpen: collapsed } = useSession();
    const [itemActive, setItemActive] = useState('');
    const handlerCollapsed = () => {
        setCollapsed();
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
                { title: 'Produtos', url: GlobalRouters.product.PRODUCTS.LIST, icon: FaBoxOpen },
                { title: 'Substâncias', url: GlobalRouters.product.SUBSTANCES.LIST, icon: FaFlask },
                { title: 'Pragas', url: GlobalRouters.product.PRAGUE.LIST, icon: FaBug },
                { title: 'Culturas', url: GlobalRouters.product.CULTURES.LIST, icon: FaSeedling },
                { title: 'Classe de Uso', url: GlobalRouters.product.CLASS_IN_USE.LIST, icon: FaListUl },
                { title: 'Classe Toxicológica', url: GlobalRouters.product.CLASS_TOXICOLOGICAL.LIST, icon: FaSkullCrossbones }
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
                { title: 'Revendedores', url: GlobalRouters.stockControl.RESELLERS.LIST, icon: FaStore },
                { title: 'Produtores', url: GlobalRouters.stockControl.PRODUCERS.LIST, icon: FaTractor },
                { title: 'Aplicadores', url: GlobalRouters.stockControl.APPLICATORS.LIST, icon: FaSprayCan },
                { title: 'Centrais de Descartes', url: GlobalRouters.stockControl.DISPOSALCENTERS.LIST, icon: FaRecycle },
                { title: 'Revendas', url: GlobalRouters.stockControl.RESALES.LIST, icon: FaBoxesStacked }
            ]
        },
        {
            title: 'Utilitários',
            icon: FaTools,
            items: [
                { title: 'Relatório de logs', url: GlobalRouters.utilitie.LOGREPORTS.LIST, icon: FaFileAlt },
                { title: 'Filtrar Importações', url: GlobalRouters.utilitie.FILTERIMPORTS.LIST, icon: FaFilter },
                { title: 'NCM', url: GlobalRouters.utilitie.NCMS.LIST, icon: FaBarcode },
                { title: 'Consulta CREA', url: GlobalRouters.utilitie.CONSULTATIONCREAS.LIST, icon: FaSearch },
                { title: 'Consultar NF', url: GlobalRouters.utilitie.CONSULTATIONNFS.LIST, icon: FaFileInvoice }
            ]
        },
        {
            title: 'Fiscalização',
            icon: FaClipboardCheck,
            items: [
                { title: 'Apreensões', url: GlobalRouters.inspection.SEIZURES.LIST, icon: FaExclamationTriangle },
                { title: 'Fiscais', url: GlobalRouters.inspection.INSPECTORS.LIST, icon: FaUserShield },
                { title: 'Irregularidades', url: GlobalRouters.inspection.IRREGULARITIES.LIST, icon: FaTimesCircle },
                { title: 'Processos', url: GlobalRouters.inspection.PROCESSES.LIST, icon: FaFolderOpen },
                { title: 'Sanções', url: GlobalRouters.inspection.SANCTIONS.LIST, icon: FaGavel }
            ]
        },
        {
            title: 'Movimentação',
            icon: FaExchangeAlt,
            items: [
                { title: 'Dar baixa', url: GlobalRouters.moviment.WRITEOFFS.LIST, icon: FaArrowDown },
                { title: 'Incluir', url: GlobalRouters.moviment.INCLUDES.LIST, icon: FaPlusCircle }
            ]
        }
    ];

    return { collapsed, itemActive, listItems, handlerCollapsed, handlerItemActive, logout };
};
