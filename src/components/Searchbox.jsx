import { useEffect, useState } from "react";

export default function Searchbox({searchText, setSearchText}) {

    return <input
        style={{backgroundColor: 'red'}}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
    />
}

