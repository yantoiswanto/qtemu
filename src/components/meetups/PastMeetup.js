import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPastMeetups } from '../../store/actions/meetups';

export default function PastMeetup() {
  const { getDataPastMeetup } = useSelector((state) => state.meetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPastMeetups());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-auto my-7">
        <h1 className="text-2xl font-medium text-gray-700">Past Meetups</h1>
        <div className="absolute w-48 h-1 mt-1 transform translate-y-8 rounded-lg shadow-lg bg-007A78" />
      </div>
      <div className="flex items-center justify-between w-3/4 space-x-10 rounded-lg">
        {getDataPastMeetup &&
          getDataPastMeetup.map((meetup) => (
            <div
              className="flex flex-col items-center justify-between w-4/12 h-56 text-white rounded-md shadow-lg bg-007A78"
              key={meetup.id}
            >
              <div className="flex items-center justify-center w-full h-auto bg-white border">
                <h1 className="text-xl font-semibold text-gray-800">
                  {meetup.date}
                </h1>
              </div>
              <div className="w-10/12 my-3 text-lg text-center text-yellow">
                <p>{meetup.description}</p>
                <br />
                <p>Attendees : {meetup.attendees}</p>
              </div>
              <button className="w-2/3 h-10 font-bold text-gray-800 transform -translate-y-4 bg-white rounded-md shadow-sm hover:shadow-xl hover:text-white hover:bg-yellow">
                View
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
