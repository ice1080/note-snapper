import { useEffect, useState } from "react";

export default function Promptbox({ prompt, setPrompt }) {

    return <div>
        Change the image prompt:
        &nbsp;<input
            style={{ backgroundColor: 'lightgreen', width: '15em' }}
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
        />
    </div>
}

