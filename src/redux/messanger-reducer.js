const CLICK_MESSAGE = "CLICK_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

const MessengerReducer = (state, action) => {

    /*switch (action.type) {
        case UPDATE_MESSAGE :
            state.newMessage = action.simvol;
            console.log('1',state.newMessage);
            return state;

        case CLICK_MESSAGE :
            let newMessage = {
                id:10,
                name: action.message
            }
            state.messagesData.push(newMessage);
            /!*state.newMessage = "";*!/
            return state;

        default :
            return state
    }*/
    if (action.type === UPDATE_MESSAGE) {
        state.newMessage = action.simvol
    }
    else if (action.type === CLICK_MESSAGE) {
        let newMessage = {
            id: 10,
            name: action.message
        }
        state.messagesData.push(newMessage);
        /*this._state.messenger.newMessage = "";*/
    }
    else{
        return state;
    }

}

export const updateMessageCreator = (param) => {
    return {
        type: UPDATE_MESSAGE,
        simvol: param
    }
}
export const clickMessageCreator = (param) => {
    return {
        type: CLICK_MESSAGE,
        message: param
    }
}

export default MessengerReducer;