// Basket array and user login
export const initialState = {
    basket: [],
    user: null
};

// Selector -- Calculate price total
export const getBasketTotal = (basket) => 
        basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    // 
    console.log(action);

    switch(action.type) {
        // Adding item to basket
        case 'ADD-TO-BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        // 
        case 'EMPTY-BASKET':
            return {
                ...state,
                basket: []
            }

        // Removing item from basket
        case 'REMOVE-FROM-BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Can not remove product (id: ${action.id}) as it is not in basket!'
                )
            }
            return {
                ...state,
                basket: newBasket,
            };

        // Creating new user
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;