import { useEffect, useState } from "react";

export default function Searchbox({ searchText, setSearchText }) {

    return <div>
        Search the output:
        &nbsp;<input
            style={{ backgroundColor: 'pink' }}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
}

