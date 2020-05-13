import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //Exencial usar este que ficara em volta das nossa rotas
import { createStackNavigator } from '@react-navigation/stack'; //importando o uso do tamplate navigaton stack, onde foi instalado o pacote para uso anteriormente.

import Incidents from './pages/Incidents'; // definido como rotas! ver line 14 !!!!! O aquivo "index.js" por padrão já é localizada! 
import Detail from './pages/Detail'; // definido como rotas! ver na line 15 !!!!! O aquivo "index.js" por padrão já é localizada!

const AppStack = createStackNavigator(); // este estamos atribuindo para poder colocar em volta  das rotas abaixo

export default function Routes() { // Exportar a função das ROTAS --> IMPORTAR PARA NOSSO ARQUIVO PRINCIPAL "APP.js"
    return ( // AS ANOTAÇÔES ESTAO EM BLOCO DE NOTAS (Atividades -Desenvolvendo a aplicação web) -> "arquivo routes.js"
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>{/* "headerShown: false"  responsavel por esvaziar o cabeçalho padrão. */} 
                <AppStack.Screen name="Incidents" component={Incidents} />{/* Rota indicará que será definida uma tela ou page chamada INCIDENT */}
                <AppStack.Screen name="Detail" component={Detail} />{/* Rota indicará que será definida uma tela ou page chamada DETAIL */}
            </AppStack.Navigator>

        </NavigationContainer>
    );
}