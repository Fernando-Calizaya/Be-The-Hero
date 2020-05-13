import React, { useState, useEffect } from 'react'; {/* usar a metódo Reac e a função "useEffect" do linguagem REACT JS */ }
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'; {/* usar o metódo "TouchableOpacity" (Tocavel com opacidade) e "FlatList" responsavel do scroll do mobile qunado se trata de lista. provem do framework REACT NATIVE */ }
import { Feather } from '@expo/vector-icons'; // A EXPO já vem com vários pacotes de icones, como por ex: Feather
import { useNavigation } from '@react-navigation/native'; // usar "useNavigation" para poder fazer as rotas com react-native
                                                                    
import logoImg from '../../assets/logo.png'; // importando as imagens
import styles from './styles'; //importando style do incidents (lista)
import api from '../../services/api'; // importação do aquivo api.

export default function Incidents() { //usando os ESTADOS aqui:
    const [incidents, setIncidents] = useState([]); // usar ESTADO para poder MANEJAR os dados. Aqui também irá começar com ARRAY vazio!
    const [total, setTotal] = useState(0); // vai inicar com valor 0 e este armazenará "total de casos" cadastrados (linha 57).
    
    // Estes estados fazem parte para poder fazer a TELA INFINITA (contar qtd de páginas que estou no momento e qtd de dados novos // armazenar ambas)
    const [page, setPage] = useState(1); // aqui este iniciará na pag 1
    const [loading, setLoading] = useState(false); // Armazenar quando estamos buscando dados novos para evitar que estes mesmo dados sejam buscados de novo.
                                            //VAMOS CARREGAR UMA PÀGINA POR VEZ.
    const navigation = useNavigation(); // atribuição do metodo "useNavigation"

    function navigateToDetail(incident) { // dentro da função "navigateToDetail" temos nosso parametro "incident" (Não comtém dados)
        navigation.navigate('Detail', { incident }); // função permite navegar até a rota "Detail", cujo nome está em "routes.js".
    }                                                // e como segundo PARAMETRO do navigate "{ incident }" vai enviar as informações do "incident" para a rota detail

    async function loadIncidents() {  //ESTA função é ativada quando as variaveis [] mudaram abaixo. //Momento que CARREGA OS INCIDENTES

        if(loading) { // se o loading estiver como TRUE ele retorna!!
            return;  // Assim evitamos que no momento de solicitar informação (puxar para cima), não faça outra requisição novamente, já que fez a primeira solicitação.
        }

        if(total > 0 && incidents.length == total) { // se a pag está carregada (total maior que zero) e o numero total de incidents for igual ao total
            return; // se for verdade, então NAÔ faz sentido buscar MAIS informações novas, daí para, somente retorna os dados.
        }
        //SE NÃO
        setLoading(true); //colocamos "setLoading" como "verdade" antes de fazer a REQUISIÇAÔ DOS DADOS (VIA API)

        // Temos q. PEGAR os dados da "response" e COLOCAR dentro de um ESTADO, assim podemos MANEJAR e MOSTRAR em tela!!!
        const response = await api.get('incidents', {// atribuição in "response" dados que pegamos do backend (incidents) , ver no imnsonia "get list (http://localhost:3333/incidents?page=1)" Por padrão ele pega a página 1 (SEMPRE)
            params: { page }   // Enviar o NUMERO da page que foi carregado para nossa API ->  (backend), após carregar ao próximo.
        }); 
                                                    
        setIncidents([...incidents, ...response.data]); // Fazemos um objeto (2 vetores) // permite pegar os mesmos dados para quando estiver na page1 e depois carregar na page 2 também! ou// "setIncidents(response.data)"" -> PEGAMOS todos os dados em GERAL dá página inteira. page1 somente.
        setTotal(response.headers['x-total-count']); // nesta linha nos PEGAMOS os dados, em especifico total de casos cadastrados pela ONG no IMNSONIA!
                                                    //ver o número de casos? abrir Imsonia -> Em casos: Get List -> Aba: Header -> sessão: X-Total-Count
        setPage(page + 1);// Aqui vamos pular para a próxima página 2.(line 15)      
        setLoading(false); // No Final da REQUISIÇÂO "setLoading" novamente  começa como "FALSE" assim como no principio!
    }                                              

    useEffect(() => {
        loadIncidents(); // chamada da função acima!!
    }, []); // a função "useEffect()" será dispirado quando as váriavies da [] mudarem!!!

    return ( // No Frame React Native sempre são usados algumas ESTILOS junto com a estrutura.
        <View style={styles.container}>
            <View style={styles.header}>{/* Criando View de CABEÇALHO */}
                <Image source={logoImg} />{/* Inserindo as IMAGEM */}
                <Text style={styles.headerText}>{/* inserindo TEXTO  */}
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.{/* inserindo TEXTO NEGRITO e "{total}: total de casos"*/}
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>{/* Texto do TÍTILO */}
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>{/* Texto da DESCRIÇÂO */}

            <FlatList  //usado para listagens de itens "scroll"
                data={incidents} //após colocar em estado, usar o objeto "incidents" são os dados que serão mostradas ou podemos montar um vetor de datos [1, 2 ,3] (cada elemento é um incidente).
                style={styles.incidentList}  // Esta parte onde ficarão toda a LISTA dos incidentes.
                keyExtractor={incident => String(incident.id)} // "KeyExtractor" recebe cada um dos incidentes (elementos do vetor) e vai retornar a informação que caracteriza cada um dos incidentes. Ex: id do incidente.
                showsVerticalScrollIndicator={false} // responsavel de mostrar ou não o scroll lateral do celular.

                onEndReached={loadIncidents} //FUNÇÃO AUTOMATICA dispara quando o user chegar perto do final da lista!
                onEndReachedThreshold={0.2} // Quanto % do final da lista precisa estar para que carregue os novos items. (0.1=10%, 0.2=20%...)
                
                renderItem={({ item: incident }) => ( // função q vai renderizar cada uma dos items da pág. FUNÇÃO irá retornar em código "JSX" por iso entre parenteses e não chaves. () => ()
                    <View style={styles.incident}>{/* Aqui fica objeto do incident */}
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailButton}
                            onPress={() => navigateToDetail(incident)} // aqui estamos colocando um parametro na função, MAS como "errow faction"!!
                        >
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color='#E02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}