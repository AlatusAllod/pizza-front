import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Grid, Container, Button, Typography, CircularProgress } from '@material-ui/core';
import { IStore, IProduct, IFetchError } from '../store/store';
import { RemoteData } from '@devexperts/remote-data-ts/';
import { productsSelector } from '../store/selectors';
import { getProductsActionStart } from '../store/actions';
import { compose } from 'recompose';
import { connect } from 'react-redux';

interface IProductContainerStoreProps {
	products: RemoteData<IFetchError, IProduct[]>;
}

interface IProductContainerDispatchProps {
	getProducts: () => AnyAction;
}

type ProductContainerProps = IProductContainerStoreProps & IProductContainerDispatchProps;

const ProductContainer: React.FC<ProductContainerProps> = (props) => {
	const { products, getProducts } = props;

	return (
		<Container>
			<Button onClick={getProducts}>{'Download'}</Button>
				{products.foldL(
					() => <Typography>{'Waiting for downloading start'}</Typography>,
					() => <CircularProgress variant='indeterminate'/>,
					({message}) => <Typography>{message}</Typography>,
					(products) => (
						<Grid container={true}>
							{products.map((product, id) => (
								<Grid item={true} key={id}>
									<Typography>{product.id}</Typography>
									<Typography>{product.name}</Typography>
									<Typography>{product.cost}</Typography>
								</Grid>
							))}
						</Grid>
					),
				)}
		</Container>
	);
}

const mapStateToProps = (state: IStore): IProductContainerStoreProps => ({
	products: productsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IProductContainerDispatchProps => ({
	getProducts: () => dispatch(getProductsActionStart())
});

export default compose<ProductContainerProps, Partial<ProductContainerProps>>(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)
)(ProductContainer);
