const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let stateInit = {
    users: [
        {id:1, name:'Юра', age:33, status:'Вонючий случай', location:{city:'Оренбург',country:'Россия'}, photo:'https://pbs.twimg.com/media/Ebhv_XOWoAYjsFZ.jpg', frendship:true},
        {id:2, name:'Лени', age:32, status:'', location:{city:'Оренбург',country:'Россия'}, photo:'https://www.kino-teatr.ru/acter/album/293193/693284.jpg', frendship:false},
        {id:3, name:'Илья', age:32, status:'детсвотсап', location:{city:'Санкт-Петербург',country:'Россия'}, photo:'https://avatars.mds.yandex.net/get-zen_doc/1860332/pub_5db69449ba281e00afd21cb4_5db6958a118d7f00aeb28581/scale_1200', frendship:true},
        {id:4, name:'Алина', age:28, status:'', location:{city:'Оренбург',country:'Россия'}, photo:'https://www.film.ru/sites/default/files/people/47449683-1191145.jpg', frendship:false},
        {id:5, name:'Алла', age:33, status:'', location:{city:'Оренбург',country:'Россия'}, photo:'https://i.obozrevatel.com/gallery/2020/5/29/photo5370559710194937758.jpg', frendship:true},
    ]
}

const UsersReducer = (state = stateInit, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.id)
                    {
                       return {...user, frendship:false}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id){
                        return {...user, frendship:true}
                    }
                    return user;
                })
            }

        default:
            return state;
    }
}

export const followActionCreator = (id) => {
    return {
        type:FOLLOW,
        id: id
    }
}
export const unfollowActionCreator = (id) => {
    return{
        type: UNFOLLOW,
        id: id
    }
}


export default UsersReducer;