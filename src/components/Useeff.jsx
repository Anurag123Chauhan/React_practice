import { useEffect, useState } from "react";

export default function Useeff() {
  const [resourseType, setResourseType] = useState("post");
  useEffect(() => {
    console.log("resource changed");
  }, [resourseType]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourseType("Post");
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setResourseType("Users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourseType("Comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourseType}</h1>
    </>
  );
}
