import Link from "next/link";
import { useRouter } from "next/router";
import { formatDate } from "utils/functions";
import SEO from "../../components/SEO";
import { getAllArticles } from "../../utils/mdx";

export async function getStaticProps() {
  const articles = await getAllArticles();
  articles.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      posts: articles,
    },
  };
}
const MAX_DISPLAY = 5;

function Blogs({ posts }) {
  const router = useRouter();
  return (
    <div>
      <SEO
        url={router.pathname}
        openGraphType="website"
        schemaType="Organization"
        title="The WholeMark Blog"
        description="Read blogs by WholeMark | WholeMark | D2C eCommerce fulfillment"
        image={""}
      />
      <div className=" bg-white">
        <div className="container min-h-[80vh]">
          <div className="flex flex-col items-start">
            <div className="w-full">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {!posts.length && "No posts found."}
                  {posts.map((frontMatter) => {
                    const { slug, title, summary } = frontMatter;
                    return (
                      <li key={slug} className="py-12">
                        <article>
                          <div className="space-y-2 md:grid md:grid-cols-4 md:items-baseline md:space-y-0">
                            <dl
                              className="md:text-right md:mr-8"
                            >
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <span>{formatDate(frontMatter.date)}</span>
                                <br className="hidden md:block"></br>
                                <span className="text-sm float-right md:float-initial">
                                  {frontMatter.readingTime}
                                </span>
                              </dd>
                            </dl>
                            <div className="space-y-5 md:col-span-3">
                              <div className="space-y-6">
                                <div>
                                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    <Link
                                      href={`/blogs/${slug}`}
                                      className="text-gray-900 dark:text-gray-100"
                                    >
                                      {title}
                                    </Link>
                                  </h2>
                                  {/*<div className="flex flex-wrap">
                                    {tags.map((tag) => (
                                      <Tag key={tag} text={tag} />
                                    ))}
                                    </div>*/}
                                </div>
                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                  {summary}
                                </div>
                              </div>
                              <div className="font-medium leading-6">
                                <Link
                                  href={`/blogs/${slug}`}
                                  className="hover:text-primary-600 text-primary"
                                  aria-label={`Read "${title}"`}
                                >
                                  Read more &rarr;
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/*posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                  <Link
                    href="/blog"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="all posts"
                  >
                    All Posts &rarr;
                  </Link>
                </div>
              )*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
