import {
  Button,
  Content,
  Divisor,
  Footer,
  Header,
  Icon,
  Loading,
  Post,
  Select,
  SmallButton,
} from "@/components";
import { Option } from "@/components/select";
import { useSearch } from "@/context/search";
import { api, API } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<API.Post[]>([]);
  const [sort, setSort] = useState("upvotes");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(false);
  const { search } = useSearch();

  useEffect(() => {
    loadPosts().catch();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await api.posts_get();
      setPosts(res);
      setLoading(false);
    } catch (e: any) {
        console.error(e.message);
      }
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

  const options: Option[] = [
    { value: "upvotes", label: "Up Votes" },
    { value: "comments", label: "Comments" },
    { value: "meta.author", label: "Author" },
  ];

  function getProperty(obj: any, propertyPath: string): any {
    const properties = propertyPath.split(".");
    let value = obj;
    for (const prop of properties) {
      value = value[prop];
    }
    return value;
  }

  function comparePostsBy(property: string) {
    return function (a: any, b: any): any {
      const valueA = property.includes(".")
        ? getProperty(a, property)
        : a[property];
      const valueB = property.includes(".")
        ? getProperty(b, property)
        : b[property];

      // Comparação ascendente ou descendente com base em sortAsc
      const compareResult = sortAsc ? 1 : -1;

      if (valueA < valueB) {
        return -1 * compareResult; // Multiplica por -1 para inverter a ordem
      } else if (valueA > valueB) {
        return 1 * compareResult;
      } else {
        return 0;
      }
    };
  }

  function handleToogleSortOrder() {
    setSortAsc((state) => !state);
  }

  function renderPosts() {
    return (
      <div className="flex flex-col gap-10 py-8">
        {filteredPosts()
          .sort(comparePostsBy(sort))
          .map((post, i) => (
            <Post key={i} post={post} />
          ))}
      </div>
    );
  }

  return (
    <>
      <Content>
        <Header />
      </Content>
      <Divisor direction="horizontal" />
      <Content>
        <div className="flex gap-4 w-full">
          <Select options={options} selectedValue={sort} onChange={setSort} />
          <SmallButton
            icon={sortAsc ? "fa-arrow-up-a-z" : "fa-arrow-up-z-a"}
            onClick={handleToogleSortOrder}
          ></SmallButton>
        </div>
      </Content>
      <Content>{loading ? <Loading /> : renderPosts()}</Content>
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
