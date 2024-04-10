import Post from "../../types/post";

const Card = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white p-6 rounded-md">
      <h2 className="text-bluegray font-bold text-2xl mb-4">{post.title}</h2>
      <p className="text-justify">{post.content}</p>
    </div>
  );
};

export default Card;
