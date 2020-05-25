import { initial, RemoteData } from '@devexperts/remote-data-ts'
import { none, Option } from 'fp-ts/lib/Option'

export interface IFetchError {
    message: string;
}

export interface IProduct {
    id: string;
    name: string;
    cost: string;
}

export interface IOrder {
    cart: IProduct[];
    address: string;
}

export interface IStore {
    products: RemoteData<IFetchError, IProduct[]>;
    order: Option<IOrder>;
}

export const initialStore: IStore = {
    products: initial,
    order: none
};