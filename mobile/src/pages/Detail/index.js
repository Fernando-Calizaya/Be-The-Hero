import React from 'react'; {/* usar a metódo Reac do linguagem REACT JS */ }
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'; {/* usar a metódo view do framework REACT NATIVE */ }
import { useNavigation, useRoute } from '@react-navigation/native'; // função usado para poder linkar as rotas com react-native // usar "useRoute" para PEGAR informações especificas da página ATUAL da nossa aplicação.
import * as MailComposer from 'expo-mail-composer'; // para montar a estrura de envio de e-mail no celular

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation(); // atribuição da função "useNavigation"
    const route = useRoute(); // atribuição da função "useRoute"

    const incident = route.params.incident // route.params: são todas os paramentros que está rota recebeu + o paramentro que foi enviado aqui pelo arquivo index.js do Incident (linha 17)
    //Agora como tenho os dados do incident passados aqui, podemos renderizar AQUI na linha 46 até 56.

    const message = `Olá ${incident.name}, estou entrando em contato sobre o caso: ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(incident.value)}`;

    function navigateBack() { // criação da nossa Função
        navigation.goBack() // podemos usar outra função "goBack" para poder voltar na pagina anterior
    }

    function sendMail() {
        MailComposer.composeAsync({ // usamos o método "compoAsync", ver as propriedades da mesma abaixo:
            subject: `Herói do caso: ${incident.name}`, //assunto da mensagem
            recipients: [incident.email], // Destinatario do mensagem.
            body: message, //conteúdo da mensagem
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }           // ou: `whatsapp://send?phone=...&text=${message}`

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>{/* acionamos a função assim que precionarmos o evento "onPress" */}
                    <Feather name="arrow-left" size={25} color='#E82041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={[styles.incidentValue, { marginBottom: 0 }]}>{/* No style usamos "style={[ , {}]}" para poder adicionar mais outro stilo, acima de outro styles.js do Detail */}
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}