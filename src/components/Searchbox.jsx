import { useEffect, useState } from "react";

export default function Searchbox({ searchText, setSearchText }) {

    return <div>
        Search your notes:
        &nbsp;<input
            style={{ backgroundColor: 'red' }}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
}

