const CLICK_ELEMENT = "ADD-ELEMENT";
const UPDATE_POST = "UPDATE-POST";

let stateInit = {
    'wide': {
        posts: [
            {id: 1, post: "post-1"},
            {id: 2, post: "post-2"},
            {id: 3, post: "post-3"},
        ],
        newPost: "first default"
    }
}

const PageReducer = (state = stateInit, action) => {

     switch (action.type) {
         case CLICK_ELEMENT :{
             let newP = {
                 id: 10,
                 post: action.param1
             };
             let stateCopy = {...state};
             stateCopy.wide = {...state.wide};
             stateCopy.wide.posts = [...state.wide.posts];

             stateCopy.wide.posts.push(newP);
             stateCopy.wide.newPost = '';
             return stateCopy;
         }

         case UPDATE_POST :{
             let stateCopy = {...state};
             stateCopy.wide = {...state.wide};
             stateCopy.wide.newPost = {...state.wide.newPost};

             stateCopy.wide.newPost = action.simvol;
             return stateCopy;
         }

         default:
         {  let stateCopy = {...state}
             return stateCopy;
         }

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