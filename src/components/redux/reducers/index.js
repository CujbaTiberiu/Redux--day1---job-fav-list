const initialState = {
    // questo stato iniziale è buona prassi suddividerlo in "slices", in sezioni
    // in "fette", in sotto-oggetti
    favs: {
        content: [], // questo è il contenuto del carrello
    },
}

const mainReducer = (state = initialState, action) => {
    // il reducer si occuperà di generare un nuovo stato per l'applicazione
    // OGNI VOLTA che viene dispatchata un'azione

    // quindi il reducer cercherà di capire il TYPE dell'action dispatchata
    // e in base a quello deciderà cosa fare

    switch (action.type) {
        // il nostro action.type è 'ADD_TO_CART'

        case 'ADD_FAV':
            return {
                ...state, // questo si occupa si portare dentro eventuali
                // ALTRE proprietà che non siano cart
                favs: {
                    // action.payload è il nostro libro che vogliamo aggiungere
                    content: [...state.favs.content, action.payload],
                    // PUSH NON SI PUÒ USARE :(
                    // 1) muta l'array nello stato, la funzione non è più PURA
                    // 2) il valore di ritorno di push() è la nuova lunghezza dell'array (quindi un numero)
                    // content: state.cart.content.push(action.payload) --> 3
                },
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: {
                    // devo togliere da content l'elemento con indice action.payload
                    content: [
                        ...state.cart.content.slice(0, action.payload),
                        ...state.cart.content.slice(action.payload + 1),
                    ],
                    //   content: state.cart.content.filter((book, i) => i !== action.payload),
                },
            }

        default:
            return state
        //  questa è come una rete di sicurezza: nel caso il nostro reducer incontri
        // un action type NON previsto finiremo sempre nel caso di default:
        // il caso di default RITORNA lo stato predecente senza averlo toccato
    }
}

export default mainReducer