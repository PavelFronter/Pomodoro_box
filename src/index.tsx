import './main.global.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page404 } from './components/Page404';
import { Statistic } from './components/Statistic';
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Modal } from './components/Modal';
import { ModalSetting } from './components/ModalSettings/ModalSettings';
import { Layout } from './components/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback='Loading...'>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<App/>} />
                                <Route path='/' element={<Modal />} />
                                <Route path='/' element={<ModalSetting />} />
                                <Route path='/statistic' element={<Statistic />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Layout>
                    </Router> 
                </PersistGate>
            </Provider>
        </Suspense>
    </React.StrictMode>
)