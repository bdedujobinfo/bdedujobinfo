import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EduPost } from "./EduPost";
import { EduInfo } from "./EduInfo";
import ads from "../../assets/gif/bdedujob-ads.gif"

export const EduDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("/data/edu-info-data.json")
      .then((response) => {
        // Find post by ID (adjust based on whether id is a string or number)
        const postData = response.data.find((p) => p.id === parseInt(id));
        setPost(postData); // Update state with the found post
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log error if the request fails
      });
  }, [id]);

  return (
    <>
      <div className="flex gap-2 flex-col items-center pt-16">
        <div>
          {post ? (
            <div>
              <EduPost post={post} />
            </div>
          ) : (
            <p>{post === null ? "Loading..." : "Post not found."}</p>
          )}
        </div>
        <div>
          {" "}
          <img src={ads} alt="My GIF" />
        </div>
        <div>
          <EduInfo />
        </div>
      </div>
    </>
  );
};
