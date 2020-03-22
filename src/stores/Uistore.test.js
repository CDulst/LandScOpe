import User from "../models/User";
import Post from '../models/Post';
import UiStore from './UiStore';
import DataStore from './Datastore';



test ('change value', () => {
    const store = new UiStore();
    store.change("Description","hello");
    expect(store.Description).toBe("hello");
  });
  test ('Add tag', () => {
    const store = new UiStore();
    store.AddTag("hello");
    expect(store.AddTags.length).toBe(1);
  });
  test ('Remove tag', () => {
    const store = new UiStore();
    store.AddTag("hello");
    store.RemoveTag("hello");
    expect(store.AddTags.length).toBe(0);
  });
  test ('set current user', () => {
    const store = new UiStore();
    const user = new User({
      id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
      name: "You :)",
      description: "I hope you like my little app :)",
      pic: "assets/svg/account-icon.svg",
      store: new DataStore()
    });
    store.setCurrentUser(user);
    expect(store.currentUser).toBe(user);

  });
  test ('change message', () => {
    const store = new UiStore();
    store.changeCommentMessage("hello");
    expect(store.commentMessage).toBe("hello");
  });
 
  

