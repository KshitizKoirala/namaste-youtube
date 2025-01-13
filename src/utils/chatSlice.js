import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constants";

const chatSlice = createSlice({
  name: "chats",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length === LIVE_CHAT_OFFSET) {
        console.log("state.messages", state.messages.length);
        state.messages.splice(0, 1);
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
