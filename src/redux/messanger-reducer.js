const CLICK_MESSAGE = "CLICK_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let stateInit = {
    newMessage : "YURA",
    dialogsData: [
        {id: 1, name: 'Юра', img: '/accets/dialog/yu.jpg'},
        {id: 5, name: 'Лена', img: '/accets/dialog/le.jpg'},
    ],
    messagesData: [
        {id: 1, name: 'Привет Юра'},
        {id: 2, name: 'Как дела?'},
        {id: 4, name: 'Какие планы'},
        {id: 5, name: 'Вонючий случай'},
    ]
}

const MessengerReducer = (state = stateInit, action) => {

    switch (action.type) {
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
            /*state.newMessage = "";*/
            return state;

        default :
            return state
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