import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "블로그",
};

// this is server component. you could use `metadata` as well
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <title>Login to my app</title> */}
      {children}
    </div>
  );
};

export default BlogLayout;
