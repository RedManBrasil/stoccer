export default (state = null, action) => { //tem que dar um valor inicial para nao dar undefined na primeria vez que rodar
  switch (action.type) {
    case 'select_id':
      console.log(action.payload);
      return action.payload; //se receber o type certo o Reduce retornara
    default:
      return state;
    }
};
