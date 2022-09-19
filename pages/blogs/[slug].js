import ScrollTop from "components/Common/ScrollTop";
import SEO from "components/SEO";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/future/image";
import { useRouter } from "next/router";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { UPLOADS_URL } from "utils/constants";
import { formatDate } from "utils/functions";
import { getArticleFromSlug, getSlug } from "../../utils/mdx";

export async function getStaticPaths() {
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter, data } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
      ],
      scope: data,
    },
  });

  return {
    props: {
      source: mdxSource,
      frontmatter,
    },
  };
}

export default function Blog({ source, frontmatter }) {
  const router = useRouter();

  return (
    <React.Fragment>
      <SEO
        url={router.asPath}
        openGraphType="website"
        schemaType="Organization"
        title={frontmatter.title + " | The WholeMark Blog"}
        description={frontmatter.summary}
        image={""}
      />
      <div className="mx-4 mb-12 md:container md:w-3/5">
        <h1 className="my-12">{frontmatter.title}</h1>
        <div className="mt-14">
          <p className="mb-10">
            {formatDate(frontmatter.date)} &mdash; {frontmatter.readingTime}
          </p>
          <MDXRemote
            {...source}
            components={{
              h1: (props) => <h2 {...props} />,
              h2: (props) => <h3 {...props} />,
              h3: (props) => <h4 {...props} />,
              h4: (props) => <h5 {...props} />,
              h5: (props) => <h6 {...props} />,
              p: (props) => <p className="my-4 text-xl leading-8" {...props} />,
              li: (props) => (
                <li
                  style={{
                    display: "list-item",
                    listStyleType: "square",
                  }}
                  className="ml-14 pl-3 text-xl font-light leading-10"
                  {...props}
                />
              ),
              Reference: (props) => (
                <sup>
                  <a href={props.url} rel="noreferrer" target="_blank">
                    <span style={{ color: "blue" }}>🡥</span>
                  </a>
                </sup>
              ),
              Image: (props) => (
                <div className="flex justify-center py-10">
                  <Image
                    alt={`${router.query.slug} image`}
                    height={"500px"}
                    src={`${UPLOADS_URL}/assets/blogs/${props.image}`}
                    {...props}
                  />
                </div>
              ),
            }}
          />
        </div>
      </div>
      <ScrollTop />
    </React.Fragment>
  );
}
