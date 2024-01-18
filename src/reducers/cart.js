import { useState } from "react";

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_ITEM: 'CLEAR_ITEM',
    CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id, price, amount } = actionPayload; 
            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state);

                if (newState[productInCartIndex].quantity < amount) {
                    newState[productInCartIndex].quantity += 1;
                    newState[productInCartIndex].originalPrice = price;
                    newState[productInCartIndex].accPrice = newState[productInCartIndex].quantity * newState[productInCartIndex].originalPrice;
                    updateLocalStorage(newState);
                    return newState;
                }

                console.log('Se alcanzó el límite de cantidad para este producto');
                return state;
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1,
                    accPrice: price,
                    originalPrice: price
                }
            ]

            updateLocalStorage(newState);
            return newState;
        };

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id, price } = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state);
                        
                if (newState[productInCartIndex].quantity > 1) {
                  newState[productInCartIndex].quantity -= 1;
                  newState[productInCartIndex].specifiedQuantity -= 1;
                  newState[productInCartIndex].originalPrice = price;
                  newState[productInCartIndex].accPrice = newState[productInCartIndex].quantity * newState[productInCartIndex].originalPrice;
                  updateLocalStorage(newState)
                  return newState;
                }
            }
        }

        case CART_ACTION_TYPES.CLEAR_ITEM: {
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);
            updateLocalStorage(newState);
            return newState;
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([])
            return [];
        }
    }

    return state
}