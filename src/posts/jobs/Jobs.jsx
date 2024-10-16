/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export const Jobs = ({ post }) => {
  return (
    <div className="px-3">
      <div className="border shadow rounded-md  p-8 my-5">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
            {post?.title}
          </p>

          <p className="text-sm text-red-800 font-normal">
            আবেদনের শেষ তারিখঃ {post?.lastDate}
          </p>

          <p className="text-justify">
            {post.details.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <button className="bg-black hover:bg-gray-800 text-white duration-700 rounded-md px-4 py-2 font-medium text-sm">
            <a
              href={post.link}
              download={post.download}
              target="_blank"
              rel="noreferrer"
            >
              Download pdf
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
