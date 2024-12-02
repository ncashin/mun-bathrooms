import { Star, StarHalf } from "lucide-react";

const bathrooms = [
  {
    title: "Gender Neutral In The Science Building",
    roomCode: "SN 2005",
    rating: 3.375,
    reviewNumber: 10,
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
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-black text-lg font-semibold">
                  {bathroom.title}
                </h1>
                <p className="text-sm pt-0.5">{bathroom.roomCode}</p>
              </div>
              <div className="flex flex-row gap-5 ">
                <div className="flex flex-row mt-auto mb-auto">
                  {[...Array(5)].map((_, index) => {
                    const currentStarPercent = Math.floor(
                      (bathroom.rating - index) * 100
                    );
                    if (currentStarPercent >= 100)
                      return <Star fill="gold" size="20" />;
                    if (0 < currentStarPercent && currentStarPercent < 100) {
                      const currentStarPercentString = currentStarPercent + "%";
                      return (
                        <>
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient
                                id="star-gradient"
                                x1="15%"
                                y1="0%"
                                x2="85%"
                                y2="0%">
                                <stop
                                  offset={currentStarPercent + "%"}
                                  style={{ stopColor: "gold", stopOpacity: 1 }}
                                />
                                <stop
                                  offset={currentStarPercentString}
                                  style={{
                                    stopColor: "transparent",
                                    stopOpacity: 1,
                                  }}
                                />
                                <stop
                                  offset="currentStarPercentString"
                                  style={{
                                    stopColor: "transparent",
                                    stopOpacity: 1,
                                  }}
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <Star size="20" fill="url(#star-gradient)" />
                        </>
                      );
                    }
                    return <Star size="20" />;
                  })}
                </div>
                <li>
                  {bathroom.rating.toFixed(1)} ({bathroom.reviewNumber} reviews)
                </li>
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
