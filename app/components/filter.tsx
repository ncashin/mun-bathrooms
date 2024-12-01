export default function Filter() {
  return (
    <div className="w-48 h-full p-5 border-gray-50 border-t-2">
      <h1 className="text-lg font-semibold ">Filters</h1>
      <div className="flex flex-row gap-1">
        <input type="checkbox" />
        <p>Gender Neutral</p>
      </div>
      <div className="flex flex-row gap-1">
        <input type="checkbox" />
        <p>Male</p>
      </div>
      <div className="flex flex-row gap-1">
        <input type="checkbox" />
        <p>Female</p>
      </div>
    </div>
  );
}
