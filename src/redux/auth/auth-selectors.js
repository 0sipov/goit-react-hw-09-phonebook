const getIsAuthorization = state => {
  // return false;
  // return true;
  return state.auth.isAuthorization;
};

const getUserName = state => state.auth.user.name;

export default {
  getIsAuthorization,
  getUserName,
};
