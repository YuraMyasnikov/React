const CLICK_ELEMENT = "ADD-ELEMENT";
const UPDATE_POST = "UPDATE-POST";

let stateInit = {
    'wide': {
        posts: [
            {id: 1, post: "post-1"},
            {id: 2, post: "post-2"},
            {id: 3, post: "post-3"},
        ],
        newPost: ""
    }
}

const PageReducer = (state = stateInit, action) => {

     switch (action.type) {
         case CLICK_ELEMENT :
             let newP = {
                 id: 10,
                 post: action.param1
             };
             state.wide.posts.push(newP);
             return state;

         case UPDATE_POST :
             state.wide.newPost = action.simvol;
             return state;

         default:
             return state;
     }

}

export const updatePostActionCreator = (param) => {
    return {
        type: UPDATE_POST,
        simvol: param
    }
}

export const addElementActionCreator = (param2) => {
    return {
        type: CLICK_ELEMENT,
        param1: param2
    }
}

export default PageReducer;