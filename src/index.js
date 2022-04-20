import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from "./pages/Main"
import News from"./pages/News"
import Contacts from "./pages/Contacts"
import AboutUs from "./pages/AboutUs"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Article from "./components/Article";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import newsReducer from "./store"
import AddNewArticle from "./components/AddNewArticle";
import ArticleEdition from "./pages/ArticleEdition";


const store = configureStore({
    reducer: {
        news: newsReducer,
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route  index element={<Main/>} />
                    <Route path="/" element = {<Main/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="about-us" element={<AboutUs/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="add-post" element={<AddNewArticle/>}/>
                    <Route path = "article" >
                        <Route path=":id" element={<Article/>}/>
                    </Route>
                    <Route path="edit-post">
                        <Route path=":id" element = {<ArticleEdition/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
