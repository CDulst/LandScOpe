import DataStore from '../stores/Datastore';
import UiStore from '../stores/Uistore';
import User from '../models/User';
import Post from '../models/Post';

import {createContext} from "react";

const stores = {
    dataStore: new DataStore(),
    uiStore: new UiStore()
}

const u1 = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: stores.dataStore
  });

  const u2 = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
    name: "EagleVisionJSX",
    description: "Nothing magical escapes my eyesight",
    pic: "assets/svg/account-icon4.svg",
    store: stores.dataStore
  });

  const u3 = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081079",
    name: "SilenceOfTheTown",
    description: "A proud new york photographer",
    pic: "assets/svg/account-icon3.svg",
    store: stores.dataStore
  });

  const u4 = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081090",
    name: "PapaFranku",
    description: "Welcome to the ricefield",
    pic: "assets/svg/account-icon2.svg",
    store: stores.dataStore
  });


   new Post({
    user: u2,
    picture:'assets/webp/landscape_example.webp',
    categorie: "Nature Life",
    location: 'China,Beijing',
    description: 'Trees in the mist' ,
    tags:  ['trees', 'mist','sunrise'] ,
    key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
    store: stores.dataStore
  });

  new Post({
    user: u3,
    picture: 'assets/webp/landscape_example2.webp',
    categorie: 'City Life' ,
    location: 'USA, new york' ,
    description: 'Central Park and snow',
    tags: ['park', 'snow'],
    key: "9969c1fc-0f51-3d3f-b687-d0835a081091",
    store: stores.dataStore
  });

  new Post({
    user: u4,
    picture: 'assets/webp/landscape_example3.webp',
    categorie: 'Digital',
    location: 'Uncharted 4',
    description: 'Hanging on tight' ,
    tags: ['adventure', 'digital', 'desert', 'village'],
    key: "9969c1fc-0f51-3d3f-b687-d0835a081092",
    store: stores.dataStore
  });

  new Post({
    user: u2,
    picture: 'assets/webp/landscape_example4.webp',
     categorie: 'Culture', 
     location: 'Egypt,gaza', 
     description: 'The Mighty Pyramids',
      tags: ['desert', 'pyramids','sunlight'],
      key: "9969c1fc-0f51-3d3f-b687-d0835a081093",
      store: stores.dataStore
  });
  
  new Post({
  user: u3,
  picture: 'assets/webp/landscape_example5.webp', 
  categorie: 'Movie Shot', 
  location: 'The Swamp', 
  description: 'Beautiful Swamp', 
  tags: ['swamp', 'mist','sunrise'], 
  key: "9969c1fc-0f51-3d3f-b687-d0835a081094",
  store: stores.dataStore
  });

stores.uiStore.setCurrentUser(u1);
  





export const storesContext = createContext(stores);