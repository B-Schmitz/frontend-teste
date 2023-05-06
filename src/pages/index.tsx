import {
  Button,
  Content,
  Divisor,
  Footer,
  Header,
  Icon,
  Post,
} from "@/components";
import { useSearch } from "@/context/search";
import { api, API } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<API.Post[]>([]);
  const [sort, setSort] = useState("upvotes");
  const { search } = useSearch();

  useEffect(() => {
    loadPosts().catch();
  }, []);

  if (!posts) return;

  async function loadPosts() {
    return await api.posts_get().then(setPosts);
  }

  function filteredPosts(): API.Post[] {
    if (!search) {
      return posts;
    }

    const filtered = posts.filter((post) => {
      const searchableValues = [
        post.meta.author,
        post.meta.title,
        post.meta.url,
        post.category,
        String(post.comments + " comments"),
        String(post.upvotes),
      ]
        .map((value) => value.toLowerCase())
        .join(" ");

      return searchableValues.includes(search.toLowerCase());
    });

    return filtered;
  }

  return (
    <>
      <Content>
        <Header />
      </Content>
      <Divisor direction="horizontal" />
      <Content></Content>
      <main className="w-full overflow-x-hidden overflow-y-auto">
        <Content>
          <div className="flex flex-col gap-10 py-8">
            {filteredPosts().map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
        </Content>
      </main>
      <Content>
        <Button
          className="flex w-full gap-4 h-16 justify-center items-center text-orange-400 bg-gray-100 hover:bg-gray-200"
          onClick={loadPosts}
        >
          <Icon name="fa-arrows-rotate" color={Icon.Color.orange} /> Load more
        </Button>
      </Content>
      <Content>
        <Footer />
      </Content>
    </>
  );
}
