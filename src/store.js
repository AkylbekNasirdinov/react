import {createSlice} from "@reduxjs/toolkit";
import firstSliderImage from "./img/firstslider.jpg";
import secondSliderImage from "./img/secondslider.jpg";
import thirdSliderImage from "./img/thirdslider.jpg";


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        posts: [{
            id: 1,
            title: "Card Title",
            text: "This is a wider card with supporting text below as a natural\n" +
                "                            lead-in to additional content. This content is a little bit longer.",
            img: firstSliderImage
        },
            {
                id: 2,
                title: "Card Title",
                text: "This is a wider card with supporting text below as a natural\n" +
                    "                            lead-in to additional content. This content is a little bit longer.",
                img: secondSliderImage
            }, {
                id: 3,
                title: "Card Title",
                text: "This is a wider card with supporting text below as a natural\n" +
                    "                            lead-in to additional content. This content is a little bit longer.",
                img: thirdSliderImage
            }, {
                id: 4,
                title: "Card Title",
                text: "This is a wider card with supporting text below as a natural\n" +
                    "                            lead-in to additional content. This content is a little bit longer.",
                img: firstSliderImage
            }, {
                id: 5,
                title: "Card Title",
                text: "This is a wider card with supporting text below as a natural\n" +
                    "                            lead-in to additional content. This content is a little bit longer.",
                img: firstSliderImage
            }]
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload.id)
        },
        editPost:(state, action) => {
            // eslint-disable-next-line array-callback-return
            state.posts.map((post) =>{
                if(post.id == action.payload.id){
                    post.title = action.payload.title;
                    post.text = action.payload.text;
                    post.img = action.payload.img;
                }
            });
        }
    }
});

export const {addPost, deletePost,editPost} = newsSlice.actions;
export default newsSlice.reducer;





