import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Post from "../types/post";
import { useQuery } from "@tanstack/react-query";

const usePosts = () =>
  useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      return postsData;
    },
  });

export default usePosts;
