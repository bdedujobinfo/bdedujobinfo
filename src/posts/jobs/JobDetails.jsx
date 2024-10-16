import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Jobs } from "./Jobs";
import { useParams } from "react-router-dom";

export const JobDetails = () => {
  const { id } = useParams(); // URL থেকে id পেতে useParams ব্যবহার
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/src/posts/jobs/data.json").then((response) => {
      const postData = response.data.find((p) => p.id === parseInt(id)); // id অনুসারে post খুঁজে বের করা
      setPost(postData);
    });
  }, [id]);

  return <div>{post ? <Jobs post={post} /> : <p>Loading...</p>}</div>;
};
