import { Fragment } from 'react';

import AuthProvider from "./provider";
import Routes from "./routes";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../src/routes';
import { DefaultLayout } from './component/Layout';

function App() {
    return (
        // <Router>
        //     <div className="App">
        //         <Routes>
        //             {publicRoutes.map((route, index) => {
        //                 let Layout = DefaultLayout;

        //                 if (route.layout) {
        //                     Layout = route.layout;
        //                 } else if (route.layout === null) {
        //                     Layout = Fragment;
        //                 }
        //                 const Page = route.component;
        //                 return (
        //                     <Route
        //                         name={route.name}
        //                         key={index}
        //                         path={route.path}
        //                         element={
        //                             <Layout>
        //                                 <Page />
        //                             </Layout>
        //                         }
        //                     />
        //                 );
        //             })}
        //         </Routes>
        //     </div>
        // </Router>
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
