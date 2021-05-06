import {RenderFullTree} from "../render";

let addNew = (param) => {}

let state = {
    'page' : {
        'narrow' : {},
        'wide' : {
            posts: [
                {id:1, name:"post1"},
                {id:2, name:"post2"}
            ],
            postText: "Добрый день! "
        },
    },
    'messenger' : {
        dialogsData : [
            {id:1, name:'Юра',  img:'/accets/dialog/yu.jpg'},
            {id:2, name:'Рома', img:'/accets/dialog/ro.png'},
            {id:3, name:'Илья', img:'/accets/dialog/il.jpg'},
            {id:4, name:'Вика', img:'/accets/dialog/vi.jpg'},
            {id:5, name:'Лена', img:'/accets/dialog/le.jpg'},
            ],
        messagesData : [
            {id:1, name:'Привет Юрец'},
            {id:2, name:'как дела'},
            {id:3, name:'ты приедешь?'},
            {id:4, name:'Какие платы'},
            {id:5, name:'Вонючий случай'},
        ]
    },
}


export let addStateElement = (param) => {
    let newParam = {
        id : 3,
        name: param
    }
    state.page.wide.posts.push(newParam);
    RenderFullTree(state);
}

export let updatePostText = (param) => {
    state.page.wide.postText = param;
    RenderFullTree(state);
}

export default state;
