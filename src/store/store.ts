import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from "./reducers/tasksSlice";
import settingsReducer from "./reducers/settingsSlice";
import configReduser from "./reducers/configSlice";
 
export const rootReducer = combineReducers({
    tasks: persistReducer({
        key: 'tasks',
        storage,
    }, tasksReducer),

    settings: persistReducer({
        key: 'settings',
        storage,
    }, settingsReducer),
    
    config: persistReducer({
        key: 'config',
        storage,
    }, configReduser),
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
export default store;