import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';


interface Props {
	items: any[];
	addToCart: (item: any) => void;
}

class App extends React.Component<Props> {
	
	handleClick = (id: any) => {
		this.props.addToCart(id);
	}

	render() {
		const itemList = this.props.items.map(item => {
			return (
				<div className="item" key={item.id}>
					<div>{item.name}</div>
					<div>{item.price} руб.</div>
					<button onClick={() => { this.handleClick(item.id) }}>Добавить в корзину</button>
				</div>
			)
		});

		return (
			<div className="App">
				<h1>Магазин</h1>
				<div className="items">
					{itemList}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		items: state.cart.items
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addToCart: (id: any) => { dispatch(addToCart(id)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
