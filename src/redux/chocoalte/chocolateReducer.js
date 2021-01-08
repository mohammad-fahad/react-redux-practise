import { BUY_CHOCOLATE } from './chocolateTypes'

const initialState = {
    numberOfChocolate: 50
}

const chocolateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE: return {
            ...state,
            numberOfChocolate: state.numberOfChocolate - 1
        }
        default: return state

    }
}

export default chocolateReducer