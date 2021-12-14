import http from '../http-common';

const getAll = () => {
  return http.get('/meetups');
};

const getById = (id) => {
  return http.get(`/meetups/${id}`);
};

const create = (data) => {
  return http.post('/meetups', data);
};

const update = (id, data) => {
  return http.put(`/meetups/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/meetups/${id}`);
};

const findByTitle = (title) => {
  return http.get(`/meetups?title=${title}`);
};

const MeetupServices = {
  getAll,
  getById,
  create,
  update,
  remove,
  findByTitle,
};

export default MeetupServices;
