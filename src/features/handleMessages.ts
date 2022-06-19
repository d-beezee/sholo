const handleMessages = () => {
  // @ts-ignore
  const client = window.emitterClient;
  client.on("message", function (msg: any) {
    console.log(msg.asString());
  });
};
export default handleMessages;
