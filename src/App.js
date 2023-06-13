import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from "~/routers/routers"
import { DefaulLayout, HeaderOnly } from '~/layouts';
import Login from './Pages/Login/Login';


function App() {
  const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout === HeaderOnly ? HeaderOnly : DefaulLayout
            const Page = route.component;

            // route.layout === null ? console.log("layout") : route.layout === HeaderOnly ? console.log("header layout") : console.log("defaul layout")
            // console.log("defaul layout");
            return <Route key={index} path={route.path} element={

              <Layout>
                <Page />


              </Layout>


            } />;
          })}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
