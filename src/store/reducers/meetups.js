import {
  CREATE_MEETUP,
  UPDATE_MEETUP,
  DELETE_MEETUP,
  GET_MEETUPS,
  GET_NEXT_MEETUPS,
  GET_PAST_MEETUPS,
  GET_MEMBERS,
} from '../actions/types';

const initialState = {
  getDataMeetup: false,
  getDataMember: false,
  getDataNextMeetup: false,
  getDataPastMeetup: false,
};

const meetupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MEETUP:
      return [...state, payload];
    case UPDATE_MEETUP:
      return state.map((meetup) => {
        if (meetup.id === payload.id) {
          return {
            ...meetup,
            ...payload,
          };
        } else {
          return meetup;
        }
      });
    case DELETE_MEETUP:
      return state.filter(({ id }) => id !== payload.id);
    case GET_MEETUPS:
      return {
        ...state,
        getDataMeetup: payload.filter((getmeetup) => getmeetup.past === false),
      };
    case GET_NEXT_MEETUPS:
      return {
        ...state,
        getDataNextMeetup: payload.filter((data) => data.past === false),
      };
    case GET_MEMBERS:
      return {
        ...state,
        getDataMember: payload.sort((firstItem, secondItem) => {
          const nameA = firstItem.organizers.toUpperCase();
          const nameB = secondItem.organizers.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        }),
      };
    case GET_PAST_MEETUPS:
      return {
        ...state,
        getDataPastMeetup: payload.filter((data) => data.past === true),
      };
    default:
      return state;
  }
};

export default meetupReducer;
