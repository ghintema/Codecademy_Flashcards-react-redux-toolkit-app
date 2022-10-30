import { createSlice } from '@reduxjs/toolkit';

const initialState = {'123':{name:'test', id:'123', quizIds: ['456']}}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(topics, action) {
            topics[action.payload.id] = {...action.payload, quizIds: [] };
        },
        addQuizIdToTopic(topics, action) {
            topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
})


export const selectTopics = (state) => {
    return state.topics
}


export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;