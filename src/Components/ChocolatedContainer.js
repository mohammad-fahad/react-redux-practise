import React from 'react';
import { connect } from 'react-redux'
import { buyChocolate } from '../redux';

const ChocolateContainer = (props) => {
    return (
        <div>
            <h2>Number of Chocolate : {props.numberOfChocolate}</h2>
            <button onClick={props.buyChocolate}>Buy Chocolate</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numberOfChocolate: state.chocolate.numberOfChocolate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: () => dispatch(buyChocolate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer)