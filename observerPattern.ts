let state = [];
let valueToBeSent;
const subscribe = f => state.push(f);
const unsubscribe = f => (state = state.filter(o => o !== f));
const notify = () => state.forEach(val => val(valueToBeSent));
