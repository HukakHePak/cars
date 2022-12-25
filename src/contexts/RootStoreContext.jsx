import React, { createContext } from 'react';
import RootStoreModel from '../stores/root';

export const RootStoreContext = createContext(new RootStoreModel());

export function StoreProvider({ store = RootStoreContext, children }) {
  return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
}
