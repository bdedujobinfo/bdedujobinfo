import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Jobs } from "./Jobs";
import { useParams } from "react-router-dom";

export const JobDetails = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      const postData = response.data.find((p) => p.id === parseInt(id)); 
      setPost(postData);
    });
  }, [id]);

  return <div>{post ? <Jobs post={post} /> : <p>Loading...</p>}</div>;
};
