export default function Snaps({snaps, searchText}) {

  return (
    <div className="flex flex-col gap-2">
      {snaps.filter(el => el.includes(searchText)).map((snap, i) => (
        <div key={i} className="p-4 bg-gray-200">
          <div>{snap}</div>
        </div>
      ))}
    </div>
  );
}
