import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'
import FeedComExpositores from '../screens/FeedComExpositores'
import FeedComEventos from '../screens/FeedComEventos'
import Profile from '../screens/Profile'
import DevScreen from '../screens/DevScreen'
import Favoritos from '../screens/Favoritos'
import MeusEventosOrg from '../screens/MeusEventosOrg'
import CriarEvento from '../screens/CriarEvento'
import CriarEventoData from '../screens/CriarEventoData'
import CriarCategorias from '../screens/CriarCategorias'
import CriarImagens from '../screens/CriarImagens'
import EventDetails from '../screens/EventDetails'
import EventoAlugadosLista from '../screens/EventoAlugadosLista'
import EventoPendentesLista from '../screens/EventoPendentesLista'
import Mensagens from '../screens/Mensagens'
import Ajuda from '../screens/Ajuda'

const AppNavigator = createStackNavigator(
    {
        DevScreen: {
            screen: DevScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        Ajuda: {
            screen: Ajuda,
            navigationOptions: {
                headerShown: false
            }
        },
        EventDetails: {
            screen: EventDetails,
            navigationOptions: {
                headerShown: false
            }
        },
        EventoAlugadosLista: {
            screen: EventoAlugadosLista,
            navigationOptions: {
                headerShown: false
            }
        },
        EventoPendentesLista: {
            screen: EventoPendentesLista,
            navigationOptions: {
                headerShown: false
            }
        },
        CriarEvento: {
            screen: CriarEvento,
            navigationOptions: {
                headerShown: false
            }
        },
        CriarEventoData: {
            screen: CriarEventoData,
            navigationOptions: {
                headerShown: false
            }
        },
        FeedComEventos: {
            screen: FeedComEventos,
            navigationOptions: {
                headerShown: false
            }
        },
        CriarCategorias: {
            screen: CriarCategorias,
            navigationOptions: {
                headerShown: false
            }
        },
        CriarImagens: {
            screen: CriarImagens,
            navigationOptions: {
                headerShown: false
            }
        },
        MeusEventosOrg: {
            screen: MeusEventosOrg,
            navigationOptions: {
                headerShown: false
            }
        },
        Favoritos: {
            screen: Favoritos,
            navigationOptions: {
                headerShown: false
            }
        },
        FeedComExpositores: {
            screen: FeedComExpositores,
            navigationOptions: {
                headerShown: false
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                headerShown: false
            }
        },
        CreateAccount: {
            screen: CreateAccount,
            navigationOptions: {
                headerShown: false
            }
        },
        Mensagens: {
            screen: Mensagens,
            navigationOptions: {
                headerShown: false
            }
        },
    },
    {
        initialRouteName: "DevScreen"
    }
);

export default createAppContainer(AppNavigator);

