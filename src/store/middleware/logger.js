export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("action", action.type, action.payload);
  console.log("store", store.getState());
  next(action);
  console.log("next state: ", store.getState());
};
