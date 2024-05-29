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

import { RouterPagesEnum } from '@/enums/RoutesEnum';

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
            callbackUrl: '/',
            redirect: false
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
                { title: 'Produtos', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.PRODUTOS, icon: FaBoxOpen },
                { title: 'Substâncias', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.SUBSTANCIAS, icon: FaFlask },
                { title: 'Pragas', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.PRAGAS, icon: FaBug },
                { title: 'Culturas', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.CULTURAS, icon: FaSeedling },
                { title: 'Classe de Uso', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.CLASSE_DE_USO, icon: FaListUl },
                { title: 'Classe Toxicológica', url: RouterPagesEnum.PRODUTOS_RELACIONADOS.CLASSE_TOXICOLOGICA, icon: FaSkullCrossbones }
            ]
        },
        {
            title: 'Entidades',
            icon: FaUsers,
            items: [
                { title: 'Fabricantes', url: RouterPagesEnum.ENTIDADES.FABRICANTES, icon: FaIndustry },
                { title: 'Produtos', url: RouterPagesEnum.ENTIDADES.PAGEENTIDADES_PRODUTOS, icon: FaBoxOpen },
                { title: 'Revendedores', url: RouterPagesEnum.ENTIDADES.REVENDAS, icon: FaStore },
                { title: 'Produtores', url: RouterPagesEnum.ENTIDADES.PRODUTORES, icon: FaTractor },
                { title: 'Aplicadores', url: RouterPagesEnum.ENTIDADES.APLICADORES, icon: FaSprayCan },
                { title: 'Centrais de Descarte', url: RouterPagesEnum.ENTIDADES.CENTRAIS_DE_DESCARTE, icon: FaRecycle },
                { title: 'Estações Experimentais', url: RouterPagesEnum.ENTIDADES.ESTACOES_EXPERIMENTAIS, icon: FaFlask }
            ]
        },
        {
            title: 'Controle de Estoque',
            icon: FaWarehouse,
            items: [
                { title: 'Revendedores', url: RouterPagesEnum.CONTROLE_ESTOQUE.REVENDEDORES, icon: FaStore },
                { title: 'Produtores', url: RouterPagesEnum.CONTROLE_ESTOQUE.PRODUTORES, icon: FaTractor },
                { title: 'Aplicadores', url: RouterPagesEnum.CONTROLE_ESTOQUE.APLICADORES, icon: FaSprayCan },
                { title: 'Centrais de Descarte', url: RouterPagesEnum.CONTROLE_ESTOQUE.CENTRAIS_DE_DESCARTE, icon: FaRecycle },
                { title: 'Revendas', url: RouterPagesEnum.CONTROLE_ESTOQUE.REVENDAS_RECEBIMENTO, icon: FaBoxesStacked }
            ]
        },
        {
            title: 'Utilitários',
            icon: FaTools,
            items: [
                { title: 'Relatório de logs', url: RouterPagesEnum.UTILITARIOS.RELATORIO_DE_LOGS, icon: FaFileAlt },
                { title: 'Filtrar Importações', url: RouterPagesEnum.UTILITARIOS.FILTRAR_IMPORTACOES, icon: FaFilter },
                { title: 'NCM', url: RouterPagesEnum.UTILITARIOS.NCM, icon: FaBarcode },
                { title: 'Consulta CREA', url: RouterPagesEnum.UTILITARIOS.CONSULTA_CREA, icon: FaSearch },
                { title: 'Consultar NF', url: RouterPagesEnum.UTILITARIOS.CONSULTAR_NF, icon: FaFileInvoice }
            ]
        },
        {
            title: 'Fiscalização',
            icon: FaClipboardCheck,
            items: [
                { title: 'Apreensões', url: RouterPagesEnum.FISCALIZACAO.APREENSOES, icon: FaExclamationTriangle },
                { title: 'Fiscais', url: RouterPagesEnum.FISCALIZACAO.FISCAIS, icon: FaUserShield },
                { title: 'Irregularidades', url: RouterPagesEnum.FISCALIZACAO.IRREGULARIDADES, icon: FaTimesCircle },
                { title: 'Processos', url: RouterPagesEnum.FISCALIZACAO.PROCESSOS, icon: FaFolderOpen },
                { title: 'Sanções', url: RouterPagesEnum.FISCALIZACAO.SANCOES, icon: FaGavel }
            ]
        },
        {
            title: 'Movimentação',
            icon: FaExchangeAlt,
            items: [
                { title: 'Dar baixa', url: RouterPagesEnum.MOVIMENTACAO.DAR_BAIXA, icon: FaArrowDown },
                { title: 'Incluir', url: RouterPagesEnum.MOVIMENTACAO.INCLUIR, icon: FaPlusCircle }
            ]
        }
    ];

    return { collapsed, itemActive, listItems, handlerCollapsed, handlerItemActive, logout };
};
