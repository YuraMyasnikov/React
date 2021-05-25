const CLICK_MESSAGE = "CLICK_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let stateInit = {
    newMessage : "Mess",
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
        case UPDATE_MESSAGE :{
            let stateCopy = {...state};
            stateCopy.newMessage = action.simvol;
            return stateCopy;
        }

        case CLICK_MESSAGE :{
            let newMessage = {
                id:10,
                name: action.message
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }

        default :{
            let stateCopy = {...state}
            return stateCopy
        }

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