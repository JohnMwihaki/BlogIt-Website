import API from './axios';

export const createBlog = async (data: any) => {
  const res = await API.post('/blogs', data);
  return res.data;
};

export const getAllBlogs = async () => {
  const res = await API.get('/blogs');
  return res.data;
};

export const getBlogById = async (id: string) => {
  const res = await API.get(`/blogs/${id}`);
  return res.data;
};

export const updateBlog = async ({
  blogId,
  ...data
}: {
  blogId: string;
  [key: string]: any;
}) => {
  const res = await API.patch(`/blogs/${blogId}`, data);
  return res.data;
};

export const deleteBlog = async (id: string) => {
  const res = await API.delete(`/blogs/${id}`);
  return res.data;
};
