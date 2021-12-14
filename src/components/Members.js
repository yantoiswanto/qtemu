import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../store/actions/meetups';

export default function Members() {
  const { getDataMember } = useSelector((state) => state.meetups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-start ">
      <div className="flex justify-center w-auto my-7">
        <h1 className="text-2xl font-medium text-gray-700">Members</h1>
        <div className="absolute w-48 h-1 mt-1 transform translate-y-8 rounded-lg shadow-lg bg-007A78" />
      </div>
      <div className="flex w-3/4 space-x-3">
        {getDataMember &&
          getDataMember.map((data) => (
            <div
              className="w-3/12 h-auto rounded-lg shadow-xl bg-007A78"
              key={data.id}
            >
              <div className="flex items-center justify-around py-2">
                <img
                  className="object-cover object-center w-20 h-20 rounded-full shadow-lg"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div>
                  <div className="absolute w-1 h-16 transform -translate-x-6 -translate-y-1 bg-yellow rounded-xl" />
                  <p className="text-xl font-medium text-white">Organizers</p>
                  <p className="text-base font-normal text-yellow">
                    {data.organizers}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
