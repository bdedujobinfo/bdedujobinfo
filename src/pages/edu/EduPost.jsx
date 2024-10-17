/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const EduPost = ({ post }) => {
    console.log(post);
    
  return (
    <div className="px-3 max-w-screen-md mx-auto">
      <div className="border shadow rounded-md  p-8 my-5">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
            {post?.title}
          </p>
          {/* <p className="text-sm text-red-800 font-normal">{post?.content}</p> */}
          {/* 
          <img className="rounded-md" src={post.titleImg} alt={post.title} /> */}
          <p>
            {post.content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* <p>
            
            {post.details.map((detail, index) => (
              <span key={index}>
                {detail.info} <br />
              </span>
            ))}
          </p>  */}
          {/* <img className="rounded-md" src={post.postImg} alt={post.title} />

          <a
            className={`bg-black hover:bg-gray-800 text-white duration-700 rounded-md px-4 py-3 font-medium text-sm text-center ${post.btnStyle}`}
            href={post.link}
            download={post.download}
            rel="noreferrer"
          >
            {post.btnName}
          </a> */}
        </div>
      </div>
    </div>
  );
};
