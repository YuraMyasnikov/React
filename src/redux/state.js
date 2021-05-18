const ADD_ELEMENT = "ADD-ELEMENT";
const UPDATE_POST = "UPDATE-POST";
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
            dialogsData: [
                {id: 1, name: 'Юра', img: '/accets/dialog/yu.jpg'},
                {id: 2, name: 'Рома', img: '/accets/dialog/ro.png'},
                {id: 3, name: 'Илья', img: '/src/accets/dialog/il.jpg'},
                {id: 4, name: 'Вика', img: '/src/accets/dialog/vi.jpg'},
                {id: 5, name: 'Лена', img: '/src/accets/dialog/le.jpg'},
            ],
            messagesData: [
                {id: 1, name: 'Привет Юрец'},
                {id: 2, name: 'как дела'},
                {id: 3, name: 'ты приедешь?'},
                {id: 4, name: 'Какие платы'},
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
        } else if (action.type === UPDATE_POST) {
            let test = this._state.page.wide.newPost = action.simvol
            res()
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

export default store;
window.store = store;