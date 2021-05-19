const ADD_ELEMENT = "ADD-ELEMENT";
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

    getState() {
        return this._state
    },
    despatch(action) {
        if (action.type === ADD_ELEMENT) {
            let newPost = {
                id: 5,
                /*post: this._state.page.wide.newPost*/
                post: action.param1
            };
            this._state.page.wide.posts.push(newPost);
            res();
        }

        else if (action.type === UPDATE_POST) {
            let test = this._state.page.wide.newPost = action.simvol
            res()
        }

        else if( action.type === UPDATE_MESSAGE ) {
            this._state.messenger.newMessage = action.simvol
            console.log('1',this._state.messenger.newMessage)
            res();
        }
        else if ( action.type === CLICK_MESSAGE ) {
            let newMessage = {
                id:10,
                name: action.message
            }
            this._state.messenger.messagesData.push(newMessage);
            res();
            this._state.messenger.newMessage = "";
        }
    },
}

let res = () => {
    alert('нет обновлений')
}
export const sub = (observer) => {
    res = observer;
}

export const addElementActionCreator = (param2) => {
    return {
        type: ADD_ELEMENT,
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