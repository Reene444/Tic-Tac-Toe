import {createBrowserRouter, Outlet, Route, Router, RouterProvider, Routes} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MatchingPage from "./pages/Matching";
import RankingListPage from "./pages/RankingList";
import ShoppingPage from "./pages/Shopping";
import PersonalCenterPage from "./pages/PersonalCenter";
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {path:'/',element:<RootLayout />
        ,children:[
            // {path:'/TIC-TAC-TOE-GAME/',element:<HomePage/>},
            {path:'/TIC-TAC-TOE-GAME/matching',element:<MatchingPage/>},
            {path:'/TIC-TAC-TOE-GAME/rankinglist',element:<RankingListPage/>},
            {path:'/TIC-TAC-TOE-GAME/shopping',element:<ShoppingPage/>},
            // {path:'/TIC-TAC-TOE-GAME/personalcenter',element:<PersonalCenterPage/>},
        ]
    },
]);

function App() {
    return <RouterProvider router={router}/>


}
export default App;



