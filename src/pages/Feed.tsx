import Card from "../components/Card";
import NavBar from "../components/NavBar";
import usePosts from "../hooks/usePosts";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Feed = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <NavBar />
      <section className="px-4 md:px-14 pt-4 pb-8">
        <h1 className="text-5xl font-bold flex justify-center mb-6">Posts</h1>
        <PerfectScrollbar>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {posts?.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        </PerfectScrollbar>
      </section>
    </main>
  );
};

export default Feed;
