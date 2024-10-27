import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const JobInfo = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/data/job-info-data.json").then((response) => {
      console.log(response?.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <div className="mt-5 px-5 py-2 mx-auto">
      <h1 className="flex items-center text-2xl text-slate-950 font-bold">
        চাকরির তথ্য
        <MdKeyboardDoubleArrowRight size="35" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {posts.map((post) => (
          <Link
            to={`/job-info/${post.id}`}
            key={post?.id}
            className="border shadow rounded-md  p-8  "
          >
            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-2xl font-bold hover:underline duration-300 underline-offset-8  ">
                {post?.title}
              </p>

              <p className="text-sm text-red-800 font-normal line-clamp-1">
                {post?.lastDate}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
