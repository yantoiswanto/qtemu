import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetups } from '../../store/actions/meetups';

export default function Meetup() {
  const { getDataMeetup } = useSelector((state) => state.meetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetups());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center my-3 ">
      <div className="flex items-center justify-start w-3/4 h-56 rounded-lg bg-007A78 ">
        <div className="w-1/3 h-48 mx-4 rounded-lg bg-slate-300" />
        {getDataMeetup &&
          getDataMeetup.map((dt) => (
            <div className="h-48 text-white" key={dt.id}>
              <h1 className="text-2xl font-semibold">Hacktive Meetups</h1>
              <p className="text-lg">
                Location {dt.location}
                <br />
                Members {dt.members}
                <br />
                Organizers {dt.organizers}
              </p>
              <button
                type="button"
                className="h-12 mt-4 font-bold text-gray-700 bg-white border-0 rounded-lg w-36 hover:bg-yellow hover:shadow-md hover:text-white"
              >
                Join Us
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
