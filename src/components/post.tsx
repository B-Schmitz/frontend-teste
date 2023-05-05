import { API } from "@/services/api/types";
import { Icon } from "./icon";

interface Props {
  post: API.Post;
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
        <small className="text-gray-400 opacity-60 font-bold uppercase">
          {post.meta.url}
        </small>
        <h1>{post.meta.title}</h1>
        <div>
          {/* aqui vai a tag / divisor /author / data /icon de ponto / comentarios / edit */}
        </div>
      </div>
    </div>
  );
}
