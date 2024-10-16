import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export const JobInfo = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/src/posts/jobs/data.json").then((response) => {
      console.log(response?.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 px-5 mx-auto">
        {posts.map((post) => (
          <div key={post?.id} className="border shadow rounded-md  p-8 ">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
                {post?.title}
              </p>

              <p className="text-sm text-red-800 font-normal">
                আবেদনের শেষ তারিখঃ {post?.lastDate}
              </p>
            </div>
            <Link to={`/job-info/${post.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
