import Fuse from 'fuse.js'

function getScore(val) {
  return `(${Math.floor((1 - val) * 100)}% match)`
}

export default function Snaps({ snaps, searchText }) {
  const fuseOptions = {
    includeScore: true
  }
  const fuse = new Fuse(snaps, fuseOptions)

  const outputList = searchText ? fuse.search(searchText) : snaps.map(el => {return {item: el}})

  return (
    <div className="flex flex-col gap-2">
      {outputList.map((snap, i) => {
        const percent = searchText ? getScore(snap.score) : ''
        return <div key={i} className="p-4 bg-gray-200">
          <div>{snap.item}&nbsp;{percent}</div>
        </div>
      })}
    </div>
  );
}
