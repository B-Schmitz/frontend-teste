import { API } from "@/services/api/types";
import { Icon } from "./icon";
import { fmt, time } from "@/services";
import { Avatar } from "./avatar";

interface Props {
  post: API.Post;
}

function getCategoryName(category: API.Category) {
  const categories = new Map<API.Category, string>([
    ["product_design", "Product Design"],
    ["discussion", "Opinion"],
    ["ux_ui", "UX Theory"],
    ["case_study", "Case Study"],
  ]);
  return categories.get(category);
}

function getCategoryColor(category: API.Category) {
  const categories = new Map<API.Category, string>([
    ["product_design", "bg-green-500"],
    ["discussion", "bg-blue-500"],
    ["ux_ui", "bg-cyan-500"],
    ["case_study", "bg-orange-100"],
  ]);
  return categories.get(category);
}

export function Post({ post }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <div className="p-1 h-8 border w-10 rounded-sm text-center">
          <Icon name="fa-angle-up" color={Icon.Color.orange} />
        </div>
        <div className="p-1 h-10 border border-t-0 w-10 rounded-sm text-center">
          <span className="text-xl font-bold">{post.upvotes}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-gray-400 opacity-60 text-xs uppercase">
          {post.meta.url}
        </h3>
        <h1>{post.meta.title}</h1>
        <div className="flex gap-1 items-center flex-wrap">
          <small
            className={`px-2 py-1 truncate text-xs font-semibold text-white ${getCategoryColor(
              post.category
            )}  rounded-full`}
          >
            {getCategoryName(post.category)}
          </small>
       
            <Avatar
              src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
              alt="Profile Image"
              size={Avatar.Size.xs}
            />
       
          <h3 className="truncate flex-nowrap text-sm font-medium text-orange-400 underline">
            {post.meta.author}
          </h3>
          <small className="truncate text-sm text-gray-500">
            {post.created_at
              ? fmt.from(time.tms2data(post?.created_at))
              : "No date"}
          </small>
          <div className="text-gray-500 text-3xl">&middot;</div>
          <div className="flex items-center gap-1">
            <Icon name="fa-comment" color={Icon.Color.orange} />
            <small className="truncate text-xs text-orange-400 underline">
              {post.comments} Comments
            </small>
            <small className="text-xs text-orange-400 underline">Edit</small>
          </div>
        </div>
      </div>
    </div>
  );
}
