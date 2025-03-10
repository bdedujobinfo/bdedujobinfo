import { Metadata } from "next";
const getPosts = process.env.POST_API_KEY;
const getPost = async (id: number) => {
  const res = await fetch(`${getPosts}/${id}`);
  return res.json();
};

// Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: { jobInfoId: string };
}): Promise<Metadata> {
  const post = await getPost(Number(params.jobInfoId)); // Convert postId to number
  return {
    title: `${post?.title} - My Blog`,
    description: post.body, // Short preview
  };
}

const JobInfoDetails = async ({
  params,
}: {
  params: { jobInfoId: string };
}) => {
  const post = await getPost(Number(params.jobInfoId)); // Convert postId to number

  return (
    <div className="p-6 text-lg">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p className="mt-4">{post?.body}</p>
    </div>
  );
};

export default JobInfoDetails;
