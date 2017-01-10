
import React from 'react';
import { Actions, Scene, ActionConst } from "react-native-router-flux";

import Launch from "@containers/launch";
import CounterApp from "@containers/counterApp";

export default Actions.create(

    <Scene key="root" >
        <Scene
            key="launch"
            title="Launch"
            component={Launch}
            />

        <Scene
            key="counterApp"
            title="CounterApp"
            component={CounterApp}
            />

    </Scene>

);