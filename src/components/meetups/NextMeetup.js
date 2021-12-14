import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextMeetups } from '../../store/actions/meetups';

export default function NextMeetup() {
  const { getDataNextMeetup } = useSelector((state) => state.meetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNextMeetups());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-start ">
      <div className="flex justify-center w-auto my-7">
        <h1 className="text-2xl font-medium text-gray-700">Next Meetups</h1>
        <div className="absolute w-48 h-1 mt-1 transform translate-y-8 rounded-lg shadow-lg bg-007A78" />
      </div>
      <div className="w-3/4 text-white rounded-lg bg-007A78 h-96">
        {getDataNextMeetup &&
          getDataNextMeetup.map((data) => (
            <div className="m-4 " key={data.id}>
              <h6>Awesome meetup and event</h6>
              <span>{data.date}</span>
              <p>Hello, JavaScript & Node.js Ninjas!</p>
              <p>
                Get Ready for our monthly meetup JakartaJS! This will be our
                fifth meetup of 2018!
              </p>
              <p>
                The meetup format will contain some short stories and technical
                talks.
              </p>
              <p>
                if you have a short a announcement you'd like to share with the
                audience, you may do so during open mic announcements.
              </p>
              <br />
              <p>
                Remember to bring a photo ID to ge through building security.
              </p>
              <br />
              <p>.....</p>
              <br />
              <p>See you there!</p>
              <br />
              <p>
                Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
                Organizers
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
