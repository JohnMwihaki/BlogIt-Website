import API from './axios';

export const registerUser = async (data: any) => {
  const res = await API.post('/auth/register', data);
  return res.data;
};

export const loginUser = async (data: any) => {
  const res = await API.post('/auth/login', data,{
    headers:{
      'Content-Type':'application/json',
    },
  });
  return res.data;
};

export const logout = async () => {
  const res = await API.post('/auth/logout');
  return res.data;
};
  