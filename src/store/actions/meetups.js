import {
  CREATE_MEETUP,
  UPDATE_MEETUP,
  DELETE_MEETUP,
  FIND_MEETUP_BY_TITLE,
  GET_MEMBERS,
  GET_MEETUPS,
  GET_NEXT_MEETUPS,
  GET_PAST_MEETUPS,
  GET_LIST_MEETUPS,
} from './types';

import ServiceDataMeetups from '../../services/MeetupServices';

export const createMeetup =
  (title, date, location, members, organizers, description, attendees, past) =>
  async (dispatch) => {
    try {
      const res = await ServiceDataMeetups.create({
        title,
        date,
        location,
        members,
        organizers,
        description,
        attendees,
        past,
      });

      dispatch({
        type: CREATE_MEETUP,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const updateMeetup = (id, data) => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.update(id, data);

    dispatch({
      type: UPDATE_MEETUP,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteMeetup = (id) => async (dispatch) => {
  try {
    await ServiceDataMeetups.remove(id);
    dispatch({
      type: DELETE_MEETUP,
      payload: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const findMeetupByTitle = (title) => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.findByTitle(title);

    dispatch({
      type: FIND_MEETUP_BY_TITLE,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMeetups = () => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.getAll();

    dispatch({
      type: GET_MEETUPS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNextMeetups = () => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.getAll();
    dispatch({
      type: GET_NEXT_MEETUPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPastMeetups = () => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.getAll();
    dispatch({
      type: GET_PAST_MEETUPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getListMeetups = () => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.getAll();
    dispatch({
      type: GET_LIST_MEETUPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMembers = () => async (dispatch) => {
  try {
    const res = await ServiceDataMeetups.getAll();
    dispatch({
      type: GET_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
