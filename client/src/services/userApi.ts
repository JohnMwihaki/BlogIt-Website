import API from './axios';

export async function updateUserInfo(userId: string, data:any) {
  const res = await API.patch(`/user/${userId}`, data);
  return res.data;
}

export const updatePassword = async (data: {
  userId: string;
  currentPassword: string;
  newPassword: string;
}) => {
  const res = await API.patch('/user/password', data);
  return res.data;
};

export const getUserBlogs = async () => {
  const res = await API.get('/user/blogs');
  return res.data;
};
