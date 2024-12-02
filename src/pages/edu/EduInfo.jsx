import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const EduInfo = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/data/edu-info-data.json").then((response) => {
      console.log(response?.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <div className="mt-5 px-5 py-2 mx-auto ">
      <h1 className="flex items-center text-2xl text-slate-950 font-bold pt-16 ">
        শিক্ষার তথ্য
        <MdKeyboardDoubleArrowRight size="35" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {posts.map((post) => (
          <Link
            to={`/edu-info/${post.id}`}
            key={post?.id}
            className="border shadow rounded-md  p-8  "
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl md:text-2xl text-slate-900 font-bold hover:underline duration-300 underline-offset-8">
                {post?.title}
              </p>

              <p className="text-sm text-red-800 font-normal line-clamp-1">
                {post?.published}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
