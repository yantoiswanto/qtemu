import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMeetup } from '../store/actions/meetups';

export default function CreateMeetup() {
  const initialMeetupState = {
    title: '',
    date: '',
    location: '',
    members: '',
    organizers: '',
    description: '',
    attendees: '',
    past: '',
  };

  const [meetup, setMeetup] = useState(initialMeetupState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeetup({ ...meetup, [name]: value });
  };

  const saveMeetup = () => {
    const {
      title,
      date,
      location,
      members,
      organizers,
      description,
      attendees,
      past,
    } = meetup;
    dispatch(
      createMeetup(
        title,
        date,
        location,
        members,
        organizers,
        description,
        attendees,
        past
      )
    )
      .then((data) => {
        setMeetup({
          title: data.title,
          date: data.date,
          location: data.location,
          members: data.members,
          organizers: data.organizers,
          description: data.description,
          attendees: data.attendees,
          past: data.past,
        });
        submitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newMeetup = () => {
    setMeetup(initialMeetupState);
    setSubmitted(false);
  };
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="absolute w-2/4 transition transform shadow-xl rounded-3xl -skew-y-1 sm:-rotate-3 bg-gradient-to-tr from-teal-600 to-007A78 h-4/5 " />
      <div className="z-10 w-2/4 bg-white shadow-xl h-4/5 rounded-3xl">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button
              className="w-32 h-10 font-semibold text-white transition duration-300 ease-in-out delay-150 transform border hover:scale-110 hover:-translate-y-1 hover:shadow-xl bg-007A78 rounded-xl hover:bg-white hover:border-007A78 hover:text-007A78"
              onClick={newMeetup}
            >
              Add
            </button>
          </div>
        ) : (
          <div className="p-10 text-gray-700">
            <h1 className="flex justify-center mb-2 text-lg font-medium">
              Create Meetup
            </h1>
            <div class="flex justify-start py-1">
              <div className="w-4/12">
                <label
                  htmlFor="title"
                  class="text-xl font-semibold px-1 text-left"
                >
                  Title
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Title"
                  id="title"
                  required
                  value={meetup.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Date
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Date"
                  id="date"
                  required
                  value={meetup.date}
                  onChange={handleInputChange}
                  name="date"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Location
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Location"
                  id="location"
                  required
                  value={meetup.location}
                  onChange={handleInputChange}
                  name="location"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Members
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Members"
                  id="members"
                  required
                  value={meetup.members}
                  onChange={handleInputChange}
                  name="members"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Organizers
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Organizers"
                  id="organizers"
                  required
                  value={meetup.organizers}
                  onChange={handleInputChange}
                  name="organizers"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Description
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Description"
                  id="description"
                  required
                  value={meetup.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  attendees
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Attendees"
                  id="attendees"
                  required
                  value={meetup.attendees}
                  onChange={handleInputChange}
                  name="attendees"
                />
              </div>
            </div>
            <div class=" flex justify-around py-1">
              <div className="w-4/12">
                <label htmlFor="title" class="text-xl font-semibold px-1">
                  Past
                </label>
              </div>
              <div class="flex w-8/12">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-007A78"
                  placeholder="Past"
                  id="past"
                  required
                  value={meetup.past}
                  onChange={handleInputChange}
                  name="past"
                />
              </div>
            </div>
            <button
              onClick={saveMeetup}
              className="w-32 h-10 font-semibold text-white transition duration-300 ease-in-out delay-150 transform border hover:scale-110 hover:-translate-y-1 hover:shadow-xl bg-007A78 rounded-xl hover:bg-white hover:border-007A78 hover:text-007A78 "
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
