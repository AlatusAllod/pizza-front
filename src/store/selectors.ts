import { createSelector } from 'reselect';
import { IStore, IFetchError, IProduct } from './store';
import { RemoteData } from '@devexperts/remote-data-ts';
import { identity } from 'fp-ts/lib/function'

export const productsSelector = createSelector<IStore, RemoteData<IFetchError, IProduct[]>, RemoteData<IFetchError, IProduct[]>>(
    (state: IStore) => state.products,
    identity
)