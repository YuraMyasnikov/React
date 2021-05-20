/*import MessengerReducer from "./messanger-reducer";
import PageReducer from "./page-reducer";*/

const CLICK_ELEMENT = "ADD-ELEMENT";
const UPDATE_POST = "UPDATE-POST";
const CLICK_MESSAGE = "CLICK_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
    _state: {
        'page': {
            'wide': {
                posts: [
                    {id: 1, post: "post-1"},
                    {id: 2, post: "post-2"},
                    {id: 3, post: "post-3"},
                ],
                newPost: ""
            },
        },
        'messenger': {
            newMessage : "",
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
        },
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    _callSubscriber(param){
        console.log('default method call subscribe')
    },


    getState() {
        return this._state
    },
    despatch(action) {

        /*this._state.page.wide = PageReducer(this._state.page.wide, action);
        this._state.messenger = MessengerReducer(this._state.messenger, action);

        this._callSubscriber();*/

        if (action.type === CLICK_ELEMENT) {
            let newPost = {
                id: 5,
                post: action.param1
            };
            this._state.page.wide.posts.push(newPost);
            this._callSubscriber()
        }
        else if (action.type === UPDATE_POST) {
            let test = this._state.page.wide.newPost = action.simvol
            this._callSubscriber()
        }
        else if( action.type === UPDATE_MESSAGE ) {
            this._state.messenger.newMessage = action.simvol
            console.log('1',this._state.messenger.newMessage)
            this._callSubscriber()
        }
        else if ( action.type === CLICK_MESSAGE ) {
            let newMessage = {
                id:10,
                name: action.message
            }
            this._state.messenger.messagesData.push(newMessage);
            this._callSubscriber()
            this._state.messenger.newMessage = "";
        }
    },
}


export const addElementActionCreator = (param2) => {
    return {
        type: CLICK_ELEMENT,
        param1: param2
    }
}
export const updatePostActionCreator = (param) => {
    return {
        type: UPDATE_POST,
        simvol: param
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

export default store;
window.store = store;