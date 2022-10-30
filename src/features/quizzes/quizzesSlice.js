import { createSlice } from '@reduxjs/toolkit'
import { addQuizIdToTopic  } from '../topics/topicsSlice';

const initialState = {'456': {name: 'quiz for example topic', id:'456', topicId:'123', cardIds:[]}}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz(quizzes, action) {
            quizzes[action.payload.id] = action.payload;
        }
    }
})

export const createNewQuiz = (payload) =>{
    return (dispatch) => {
        console.log(`payload inside createNewQuiz ${payload}`);
        dispatch(addQuiz(payload));
        dispatch(addQuizIdToTopic(payload))
    }
}

export const selectQuizzes = (state) => {
    return state.quizzes;
}

export const { addQuiz } = quizzesSlice.actions; 