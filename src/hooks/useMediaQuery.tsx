import { useState, useEffect } from "react";

/**
 * A custom hook to check if a media query matches.
 * @param query The media query string (e.g., '(min-width: 768px)')
 * @returns boolean
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    // Use the modern addEventListener syntax
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
