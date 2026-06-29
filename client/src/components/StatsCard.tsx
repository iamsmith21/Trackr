export default function StatsCard() {
  return (
    <div className="flex text-center justify-center m-5 gap-4 bg-white p-4">
      <div className="flex-1 min-w-0 border border-gray-200 rounded-lg p-4 px-5">
        <p className="text-sm text-gray-500">Total Applied</p>
        <p className="text-2xl font-medium">24</p>
      </div>

      <div className="flex-1 min-w-0 border border-gray-200 rounded-lg p-4 px-5">
        <p className="text-sm text-gray-500">Interviews</p>
        <p className="text-2xl font-medium">5</p>
      </div>

      <div className="flex-1 min-w-0 border border-gray-200 rounded-lg p-4 px-5">
        <p className="text-sm text-gray-500">Offers</p>
        <p className="text-2xl font-medium">1</p>
      </div>

      <div className="flex-1 min-w-0 border border-gray-200 rounded-lg p-4 px-5">
        <p className="text-sm text-gray-500">Response Rate</p>
        <p className="text-2xl font-medium">5%</p>
      </div>
    </div>
  );
}
