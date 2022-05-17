import ReactMarkdown from "react-markdown";
import scrapeBlogs from "../../data/scrapeBlogs";
import { NextPage } from "next";
import { Navbar } from "../../components/Navbar";
import remarkGfm from "remark-gfm";

const SpecificBlog: NextPage = ({ blog }: any) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          padding: "1.5rem",
          color: "white",
        }}
      >
        <h1>{blog.data.title}</h1>
        <p style={{ textTransform: "uppercase" }}>
          {new Date(blog.data.date).toLocaleDateString(undefined, {
            dateStyle: "medium",
          })}
        </p>
        <hr />
        <ReactMarkdown children={blog.content} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default SpecificBlog;

export function getServerSideProps(context: any) {
  const files = scrapeBlogs();
  const blog = files.find((blog) => blog.data.slug === context.query.blogid);

  console.log(blog);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: { blog },
  };
}
