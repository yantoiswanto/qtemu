export default function About() {
  return (
    <div className="flex flex-col items-center justify-start ">
      <div className="flex justify-center w-auto my-7">
        <h1 className="text-2xl font-medium text-gray-700">About</h1>
        <div className="absolute w-48 h-1 mt-1 transform translate-y-8 rounded-lg shadow-lg bg-007A78" />
      </div>
      <div className="w-3/4 h-auto p-3 text-white rounded-lg bg-007A78">
        <p>
          Come and meet other developers interested in the javascript and it's
          library in the Greater Jakarta area.
          <br />
          Twitter: @JakertaJS and we use the hashtag #jakertajs
        </p>
      </div>
    </div>
  );
}
