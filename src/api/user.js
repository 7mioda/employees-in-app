import api from './api';


export const login = async (user) => {
  const { data: { token } } = await api({
    method: 'post',
    url: 'users/login',
    data: {
      ...user,
    },
  });
  return token;
};
