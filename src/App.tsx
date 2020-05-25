import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import theme from './style/theme';
import mainReducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './store/sagas';
import ProductContainer from './components/ProductContainer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <ProductContainer />
        </Provider>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
