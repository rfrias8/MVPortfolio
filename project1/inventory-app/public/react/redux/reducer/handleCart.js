const cart = [];

const handleCart = (state = cart, action) => {
    const singleItem = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if the item already exist
            const exist = state.find((x) => x.id === singleItem.id);
            if (exist) {
                // increase the quantity
                return state.map((x) =>
                x.id === singleItem.id ? {...x, qty: x.qty + 1} : x
                );
            } else {
                const singleItem = action.payload;
                return [
                    ...state,
                    {
                        ...singleItem,
                        qty: 1
                    }
                ]
            }
            break;

            case "DELITEM":
                const exist1 = state.find((x) => x.id === singleItem.id);
                if (exist1.qty === 1) {
                    return state.filter((x) => x.id !== exist1.id);
                } else {
                    return state.map((x) => x.id === singleItem.id ? {...x, qty: x.qty-1} : x)
                }
                break;

        default:
            return state;
            break;
    }
}

export default handleCart;