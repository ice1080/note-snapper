import Snaps from "./components/Snaps";
import Camera from "./components/Camera";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getStructuredDataFromImage } from "./api";

function App() {
  const navigate = useNavigate();

  const [isUploading, setIsUploading] = useState(false);
  const [snaps, setSnaps] = useState(getInitialSnaps);
  const [searchText, setSearchText] = useState('');

  /**
   * @param {string} img
   */
  async function onNewImage(img) {
    if (isUploading) return;
    navigate("/");
    setIsUploading(true);

    console.log(img);

    /**
     * Part 1:
     * Customize this prompt to get the data you want from the image.
     * Specify how you'd like it formatted as well.
     */
    const prompt = `What text is in this image?`;
    const result = await getStructuredDataFromImage(img, prompt);

    /**
     * Part 2:
     * Format the result to your liking before it's added to the list of snaps.
     */
    setSnaps((r) => [result, ...r]);
    setIsUploading(false);
  }

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(snaps));
  }, [snaps]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {isUploading && (
                <div className="p-2 w-full text-center mb-2">
                  Scanning Snap...
                </div>
              )}
              <Searchbox searchText={searchText} setSearchText={setSearchText}/>
              <Snaps snaps={snaps} searchText={searchText} />
            </div>
          }
        />
        <Route
          path="camera"
          element={
            <div className="w-screen h-screen">
              <Camera onNewImage={onNewImage} />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default function () {
  return (
    <Router>
      <App />
    </Router>
  );
}

function getInitialSnaps() {
  const storedResults = localStorage.getItem("results");
  if (storedResults) {
    return JSON.parse(storedResults);
  }
  return [];
}
