import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-between w-3/4 h-20 border border-green-700 shadow-lg text-slate-800 bg-slate-50">
          <Link
            to="/"
            className="flex items-center justify-center w-1/4 font-bold hover:text-green-700"
          >
            QTEMU
          </Link>
          <ul className="flex items-center w-1/2 justify-evenly">
            <li>
              <Link to="create-meetup" className="hover:text-green-700">
                Create Meetup
              </Link>
            </li>
            <li>
              <Link to="explore" className="hover:text-green-700">
                Explore
              </Link>
            </li>
          </ul>
          <Link
            to="login"
            className="flex items-center justify-center w-1/4 text-slate-800 hover:text-green-700"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
