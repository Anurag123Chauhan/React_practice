import { useEffect, useState } from "react";

export default function Useeff() {
//   const [resourseType, setResourseType] = useState("post");
//   useEffect(() => {
//     console.log("resource changed");
//   }, [resourseType]);
//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             setResourseType("Post");
//           }}
//         >
//           Post
//         </button>
//         <button
//           onClick={() => {
//             setResourseType("Users");
//           }}
//         >
//           Users
//         </button>
//         <button
//           onClick={() => {
//             setResourseType("Comments");
//           }}
//         >
//           Comments
//         </button>
//       </div>
//       <h1>{resourseType}</h1>
//     </>
//   );
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(()=>{
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <div>
            <h1>{windowWidth}</h1>
        </div>
    );
}
