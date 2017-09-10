export const selectdId = (selectedId) => {
  return {
    type: 'select_id',
    payload: selectedId //a informacao que voce quer passar pro reducer fica no payload
  };
};
