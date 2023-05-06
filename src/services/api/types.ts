export declare module API {
  type Category = "product_design" | "discussion" | "ux_ui" | "case_study";

  interface Meta {
    author: string;
    title: string;
    url: string;
  }

  interface Post {
    meta: Meta;
    category: Category;
    comments: number;
    created_at: number; // unix
    upvotes: number;
  }
}
