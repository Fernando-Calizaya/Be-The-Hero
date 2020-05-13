import { StyleSheet } from 'react-native';
//import Constants from 'expo-constants'; //usado para distanciar do topo ou seja da "barra de estatus"

export default StyleSheet.create({
    container: {
        flex: 1, //padrão
        paddingHorizontal: 24, // // preenchimento horizontal // distancia a estrutura para direita
        paddingTop: 30, //  preenchiemento superior da tela
    },

    header: { //por padrão o "flex dorection" é coluna (items uma baixo do outro)
        flexDirection: 'row', // coloca os o "flex direction" como "row (lihna)" Items um lado do outro.
        justifyContent: 'space-between', // responsavel por inserir um espaçamento entre os items
        alignItems: 'center', //responsavel por ALINHAR e CENTRALIZAR entre os items
    },

    incident: {
        marginTop: 20, // margem de espaço na parte superior
        marginBottom: 16, // margin de espaço na parte inferior da view incident
        padding: 24, // preenchimento da área total da View incident
        borderRadius: 8, // arredondamento das bordas da View incident
        backgroundColor: '#fff' //cor do fundo pra branco da View incident
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d', //cor negro medio
        fontWeight: 'bold', // espessura da fonte = negrito
    },

    incidentValue: { // parte do  TEXTO do valor
        marginTop: 8, //margem superior
        marginBottom: 15, // margem inferior
        fontSize: 15, // tamanho da fonte 
        color: '#737380', // cor um branco acizentado
    },

    contactBox: { // caixa de contatos (incuindo textos e botões)
        marginBottom: 16, // margin de espaço na parte inferior da view incident
        padding: 24, // preenchimento da área total da View incident
        borderRadius: 8, // arredondamento das bordas da View incident
        backgroundColor: '#fff' //cor do fundo pra branco da View incident
    },

    heroTitle: { // texto: "Salve o dia!" e "Seja o herói desse caso."
        fontSize: 20,
        fontWeight: 'bold', // espessura da fonte = negrito
        color: '#13131a',
        lineHeight: 30, // altura da linha
    },

    heroDescription: { //texto: "Entre em contato"
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16, //margem superior, localizado acima do whatsApp e E-mail
        flexDirection: 'row', // Items um lado do outro, em forma de "row" ou linha
        justifyContent: 'space-between', //// responsavel por inserir um espaçamento entre os items
    },

    action: { // botões de WhatsApp e E-mail
        backgroundColor: '#E02041',
        height: 50, //altura 
        width: '48%', //largura em percentual entre os botões
        justifyContent: 'center', // centralizau os textos de forma vertical
        alignItems: 'center', // centralizau os textos de forma horizontal
        borderRadius: 8, // arrendondamento das bordas do botão
    },

    actionText: {
        color: '#fff', //cor branco
        fontSize: 15, //tamanho da fonte 15
        fontWeight: 'bold', //espessura da fonte = negrito
    },

});