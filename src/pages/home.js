import About from '../components/About';
import Meetup from '../components/meetups/meetup';
import NextMeetup from '../components/meetups/NextMeetup';
import PastMeetup from '../components/meetups/PastMeetup';
import Members from '../components/Members';

export default function Home() {
  return (
    <>
      <Meetup />
      <NextMeetup />
      <About />
      <Members />
      <PastMeetup />
    </>
  );
}
