import { pending, success, failure } from '@devexperts/remote-data-ts';
import { all, delay, put, takeLatest } from 'redux-saga/effects';
import { getProductsAction } from './actions';
import { IProduct } from './store';

const productsFake: IProduct[] = [
    {
        id: '1',
        name: 'peperoni',
        cost: '100',
    },
    {
        id: '2',
        name: 'BBQ',
        cost: '200',
    },
    {
        id: '3',
        name: 'CHORIZO',
        cost: '300',
    },
    {
        id: '4',
        name: 'mushroom',
        cost: '10',
    },
];

function* getProductsSagaFake() {
    yield put(getProductsAction(pending));
    yield delay(3000);
    yield put(getProductsAction(success(productsFake)));
}

function* getProductsSaga() {
    yield put(getProductsAction(pending));
    const response = fetch('https://obscure-island-63553.herokuapp.com/articles');

    yield response.then((api) => api.json()).then((res) => (
        put(getProductsAction(success(res)))
    )).catch((error) => (
        put(getProductsAction(failure(error)))
    ));
}

function* mainSaga() {
    yield all([
        takeLatest('GET_PRODUCTS_START', getProductsSaga),
    ]);
}

export default mainSaga;