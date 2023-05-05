export declare module API {
  const enum Category {
    product_design = "Product Design",
    discussion = "Opinion",
    ux_ui = "UX Theory",
    case_study = "Case Study",
  }

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
