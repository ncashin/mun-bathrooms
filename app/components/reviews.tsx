const bathrooms = [
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
  {
    title: "Gender Neutral In The Science Building",
    longitude: 1,
    latitude: 1,
  },
];

export default function Reviews() {
  return (
    <div className="flex-grow p-5 gap-2 flex flex-col h-full">
      <h1 className=" text-xl font-bold border-b-black border-b-2">
        Browsing Bathrooms At MUN
      </h1>
      <div className="overflow-y-scroll flex-grow max-h-full">
        {bathrooms.map((bathroom) => (
          <div className="flex flex-row gap-2 hover:drop-shadow-sm hover:bg-slate-50 p-2 rounded-md">
            <div className="w-32 h-32">
              <img
                src="/public/testBathroom.png"
                className="w-fit h-32 rounded-md self-center"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black text-lg font-semibold">
                {bathroom.title}
              </h1>
              <div className="flex flex-row gap-5">
                5/5 Stars
                <p>4.4 (11.1k reviews)</p>
              </div>

              <div className="flex flex-row gap-5">
                <p>Fisherman's Wharf</p>
                <li>4.4 (11.1k reviews)</li>
              </div>
              <div className="flex flex-row gap-5">
                <p>Family Owned and Operated</p>
                <li>Full bar</li>
              </div>
              <div className="flex flex-row gap-5">
                <p className="font-light text-sm">
                  "Testimonial goes here" - John Bathroom
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
