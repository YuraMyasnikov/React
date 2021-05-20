const CLICK_ELEMENT = "ADD-ELEMENT";
const UPDATE_POST = "UPDATE-POST";

const PageReducer = (state, action) => {

    /* switch (action.type) {
         case CLICK_ELEMENT :
             console.log('>>>',state)
             let newP = {
                 id: 10,
                 post: action.param1
             };
             debugger
             state.posts.push(newP);

             return state;

         case UPDATE_POST :
             debugger
             state.newPost = action.simvol;
             debugger
             return state;

         default:
             debugger
             return state;
     }*/

    if (action.type === CLICK_ELEMENT) {
        let newPost = {
            id: 5,
            post: action.param1
        };
        state.posts.push(newPost);
    }
    else if (action.type === UPDATE_POST) {
        state.newPost = action.simvol
        /*state.newPost = '';*/
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