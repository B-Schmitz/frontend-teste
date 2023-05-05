import { API } from "@/services/api/types";
import { Icon } from "./icon";
import Image from "next/image"
import { fmt, time } from "@/services";
 
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
        <div className="flex gap-2 items-center">
  <span className="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">Badge</span>
  <div className="w-8 h-8 rounded-full overflow-hidden">
     <Image width={25} height={25} className="object-cover w-full h-full" src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" alt="Profile Image"/>
  </div>
  <div className="text-sm font-medium text-gray-900">{post.meta.author}</div>
  <div className="text-sm text-gray-500">{fmt.from(time.tms2data(post.created_at))}</div>
  <div className="text-gray-500 text-3xl">&middot;</div>
  <div className="flex items-center gap-1">
   <Icon name="fa-comment" color={Icon.Color.gray}/>
    <div className="text-sm text-gray-500">{post.comments} Comments</div>
  </div>
</div>

      </div>
    </div>
  );
}
