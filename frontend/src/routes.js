import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from  './pages/Logon' // caminho da pasta logon onde automatico pega o arquivo index
import Register from './pages/Register' //caminho da pasta Register
import Profile from './pages/Profile' // importa o arquivo index (função profile())
import NewIncident from './pages/NewIncident'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />   {/* exact para exisgir que esta é a localhost */}
                <Route path="/register" component={Register} />   {/* esta rota está informnado que está no register */}
                <Route path="/profile" component={Profile} />   {/* caminho profile do arquivo Profile */}
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}