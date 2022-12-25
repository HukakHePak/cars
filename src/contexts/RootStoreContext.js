import { createContext } from 'react';
import RootStoreModel from '../stores/root';

const RootStoreContext = createContext(new RootStoreModel());

export default RootStoreContext;
