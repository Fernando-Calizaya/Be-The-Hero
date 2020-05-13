import { StyleSheet } from 'react-native';
//import Constants from 'expo-constants'; // usado para distanciar do topo ou seja da "barra de estatus"

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, // preenchimento horizontal
        paddingTop: 30, // um preechimento superior da tela
    },
    // AQUI TEMOS A PARTE DO CABEÇALHO (VERIFICAR NO FIGMA)
    header: { //por padrão o "flex dorection" é coluna (items uma baixo do outro)
        flexDirection: 'row', // neste caso colocaos o "flex direction" como "row (lihna)" Items um lado do outro.
        justifyContent: 'space-between', // este responsavel por inserir um espaçamento entre os items
        alignItems: 'center', //responsavel por ALINHAR e CENTRALIZAR entre os items
    }, // Não esquecer das virgulas no react-native, ocorre erro!

    headerText: { // estilização do texto dentro do cabeçalho
        fontSize: 15, //tamanho do texto
        color: '#737380', // cor acizentado claro
    }, // Não esquecer das virgulas no react-native, ocorre erro!

    headerTextBold: { // estilização " 0 casos "
        fontWeight: 'bold' // texto em negrito
    }, // Não esquecer das virgulas no react-native, ocorre erro!

    title: { //titulo "Bem-Vindo!"
        fontSize: 30, // tamanho da fonte
        marginBottom: 16, //insere uma margem inferior to titulo
        marginTop: 48, // insere uma margim no topo do titulo
        color: '#13131a',
        fontWeight: 'bold'
    }, // Não esquecer das virgulas no react-native, ocorre erro!

    description: { // texto da descrição
        fontSize: 16,
        lineHeight: 24, //linha da altura da descrição
        color: '#737380', // cor acizentado claro
    }, // Não esquecer das virgulas no react-native, ocorre erro!

    incidentList: {
        marginTop: 32,
    },// Não esquecer das virgulas no react-native, ocorre erro!

    incident: {
        marginBottom: 16, // margin de espaço na parte inferior da view incident
        padding: 24, // preenchimento da área total da View incident
        borderRadius: 8, // arredondamento das bordas da View incident
        backgroundColor: '#fff' //cor do fundo pra branco da View incident
    },

    incidentProperty: { //Parte do TEXTO como propriedade
        fontSize: 14,
        color: '#41414d', //cor negro medio
        fontWeight: 'bold', // espessura da fonte = negrito
    },

    incidentValue: { // parte do  TEXTO  como valor
        marginTop: 8, //margem superior
        marginBottom: 24, // margem inferior
        fontSize: 15, // tamanho da fonte 
        color: '#737380', // cor um branco acizentado
    },

    detailButton: { // contém o ICONE e um TEXTO
        flexDirection: 'row', // DIREÇÂO flexivel em LINHA
        justifyContent: 'space-between', // dar ESPAÇAMENTO entre o text e o icone (intre os itens)
        alignItems: 'center', // ALINHAR e CENTRALIZAR entre os items
    },

    detailButtonText: { // botão "ver mais detalhes" clicavel e opaco
        color: '#E02041', // cor vermelho
        fontSize: 15,
        fontWeight: 'bold', // vermelho em negrito
    },
});