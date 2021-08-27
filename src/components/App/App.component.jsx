import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import ThemeContext from '../../context/ThemeContext';
import VideoContext from '../../context/VideoContext';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.page';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.component';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeContext>
          <VideoContext>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/video/:id">
                  <VideoDetails />
                </Route>
                <ProtectedRoute exact path="/favorite" component={VideoDetails} />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideoContext>
        </ThemeContext>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
