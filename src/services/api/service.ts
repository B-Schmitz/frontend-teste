import { API } from "@/services/api/types";

interface Api {
  posts_get(): Promise<API.Post[]>;
}

class ApiImp implements Api {
  async posts_get(): Promise<API.Post[]> {
    const res = await fetch("/api/posts");
    return res.json().catch((e) => console.log(e.message));
  }
}

export const api: Api = new ApiImp();
