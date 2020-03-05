import DataStore from '../stores/Datastore';
import UiStore from '../stores/Uistore';
import {createContext} from "react";

const stores = {
    dataStore: new DataStore(),
    uiStore: new UiStore()
}

export const storesContext = createContext(stores);