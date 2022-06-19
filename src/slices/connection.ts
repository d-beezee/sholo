import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface ConnectionState {
  channel?: string;
  key?: string;
  message?: string;
}
//@ts-ignore
const client = window.emitterClient;
const masterKey = "DeROfr--4EwBDPQ8hR0oaZ9fVeUammUt";
const initialState = {} as ConnectionState;

const changeChannel = createAsyncThunk<any, string, { state: RootState }>(
  "connection/changeChannel",
  async (
    channel: string,
    thunkAPI
  ): Promise<{ channel: string; key: string }> => {
    const data: { channel: string; key: string } = await new Promise(
      (resolve) => {
        client.keygen({
          key: masterKey,
          channel: channel,
          type: "rw",
        });
        client.on("keygen", function (msg: any) {
          const state = thunkAPI.getState();
          state.connection.channel &&
            client.unsubscribe({
              channel: state.connection.channel,
            });
          client.subscribe({
            key: msg.key,
            channel: channel,
          });

          resolve({ channel: channel, key: msg.key });
        });
      }
    );
    return data;
  }
);

const publish = createAsyncThunk<any, string, { state: RootState }>(
  "connection/publish",
  async (message: string, thunkAPI) => {
    return await new Promise((resolve) => {
      const state = thunkAPI.getState();
      client.publish({
        key: state.connection.key,
        channel: state.connection.channel,
        message,
      });
      resolve(true);
    });
  }
);
const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = state.message === "bau" ? "miao" : "bau";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeChannel.fulfilled, (state, action) => {
      state.key = action.payload.key;
      state.channel = action.payload.channel;
    });
    builder.addCase(publish.fulfilled, (state, action) => {});
  },
});

const { setMessage } = connectionSlice.actions;
export { setMessage, changeChannel, publish };
export default connectionSlice.reducer;
