import { useAppDispatch } from "../app/hooks";
import { setMessage } from "../slices/connection";
const useHandleMessage = () => {
  const dispatch = useAppDispatch();
  // @ts-ignore
  const client = window.emitterClient;
  const handle = (msg: any) => {
    console.log(msg.asString());
    dispatch(setMessage(msg.asString()));
  };
  client._callbacks.message = [];

  client.on("message", handle);
};
export default useHandleMessage;
