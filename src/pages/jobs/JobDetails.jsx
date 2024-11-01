import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Jobs } from "./Jobs";
import { useParams } from "react-router-dom";
import { JobInfo } from "./JobInfo";
import ads from "../../assets/gif/bdedujob-ads.gif";

export const JobDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/data/job-info-data.json").then((response) => {
      const postData = response.data.find((p) => p.id === parseInt(id));
      setPost(postData);
    });
  }, [id]);

  return (
    <>
      <div className="flex gap-2 flex-col items-center pt-16">
        <div>
          {" "}
          {post ? (
            <Jobs post={post} />
          ) : (
            <p>{post === null ? "Loading..." : "Post not found."}.</p>
          )}
        </div>

        <div>
          {" "}
          <img src={ads} alt="My GIF" />
        </div>
        <div>
          <JobInfo />
        </div>
      </div>
    </>
  );
};
