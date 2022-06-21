import React from "react";
import { legacy_createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whiteList:['usuario']
}

const pReducer = persistReducer(persistConfig, Reducers);

const store = legacy_createStore(pReducer);

const persistor = persistStore(store);

export{store, persistor}