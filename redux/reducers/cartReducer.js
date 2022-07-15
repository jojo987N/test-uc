// let defaultState = {



//     // selectedItems: {
//     //     items: [],
//     //    // restaurantName: ''
//     // }
// }
 

let cartReducer = (state = [], action) =>{

    switch (action.type) {

        case 'ADD_TO_CART': {

            return [...state, action.payload]
        }

        case 'REMOVE_FROM_CARD': {

            var idx = state.findIndex((food) => food.id === action.payload)

            return [...state.slice(0, idx), ...state.slice(idx + 1)]

            //  

            //  return state.filter(item => item.title !== action.payload)
        }
        //return state.filter(food => food.title !== action.payload)

        case 'CLEAR_RESTAURANT':
            return state.filter(item => item.restaurantName !== action.payload)

        case 'CLEAR':
            return []

        default:
            return state
    } 



 
    

};

// let cartReducerOld = (state = defaultState, action) =>{

//     switch (action.type) {
//         case 'ADD_TO_CART': {
//             let newState = { ...state }

//             if (action.payload.checkboxValue) {
//                 console.log('ADD TO CART')
//                 newState.selectedItems = {

//                     items: [...newState.selectedItems.items, action.payload],
//                     restaurantName: action.payload.restaurantName,
//                 }
                
//             }else{
//                 console.log('REMOVE From CART')
//                 newState.selectedItems ={

//                     items : [
//                         ...newState.selectedItems.items.filter((item)=>item.title !== action.payload.title)

//                     ],
//                     restaurantName : action.payload.restaurantName
//                 }
//             }
//             console.log(newState, "->>>>>")
//             return newState
//         }

//         case 'CLEAR':
//             return defaultState
//         default:
//             return state

//     }

// };

export default cartReducer; 