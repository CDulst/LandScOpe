import User from "../models/User";
import Post from '../models/Post';
import DataStore from './Datastore'



test ('add post', () => {
    const store = new DataStore();
    const user = new User({
      id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
      name: "You :)",
      description: "I hope you like my little app :)",
      pic: "assets/svg/account-icon.svg",
      store: new DataStore()
    });
    const post = new Post({ user: user,
      picture:'assets/webp/landscape_example.webp',
      categorie: "Nature Life",
      location: 'China,Beijing',
      description: 'Trees in the mist' ,
      tags:  ['trees', 'mist','sunrise'] ,
      key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
      store: new DataStore() });
    store.addPost(post);
    expect(store.posts.length).toBe(1);
  });

test ('add user', () => {
    const store = new DataStore();
    const user = new User({
      id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
      name: "You :)",
      description: "I hope you like my little app :)",
      pic: "assets/svg/account-icon.svg",
      store: new DataStore()
    });
    store.addUser(user);
    expect(store.users.length).toBe(1);
  });
  test ('change key', () => {
    const store = new DataStore();
    const user = new User({
        id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
        name: "You :)",
        description: "I hope you like my little app :)",
        pic: "assets/svg/account-icon.svg",
        store: new DataStore()
      });
      const post = new Post({ user: user,
        picture:'assets/webp/landscape_example.webp',
        categorie: "Nature Life",
        location: 'China,Beijing',
        description: 'Trees in the mist' ,
        tags:  ['trees', 'mist','sunrise'] ,
        key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
        store: new DataStore() });
        store.addPost(post);
        const key = "9969c1fc-0f51-3d3f-b687-d0835a081090";

        store.changeCurrent(key);
       
    expect(store.currentPost).toBe(post);
  });
 


  