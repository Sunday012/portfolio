// "use client"
// import { useEffect, useState } from "react";


// type T = string; 
// type useMediaQuery<T> = (query: T) => boolean;

// export const useMediaQuery = (query: T): boolean => {
//     const [matches, setMatches] = useState(false);
  
//     useEffect(() => {
//       const matchQueryList = window.matchMedia(query);
//       function handleChange(e) {
//         setMatches(e.matches);
//       }
//       matchQueryList.addEventListener("change", handleChange);
  
//       return () => {
//         matchQueryList.removeEventListener("change", handleChange);
//       };
//     }, [query]);
  
//     return matches;
//   }