import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { sync } from "glob";
import { readingTime } from "./functions";

const articlesPath = path.join(process.cwd(), "data/articles");

export async function getSlug() {
  const paths = sync(`${articlesPath.replace(/\\/g, "/")}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getArticleFromSlug(slug) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      summary: data.summary,
      title: data.title,
      date: data.date,
      readingTime: readingTime(content) ? readingTime(content) + " minute read" : "",
      ...data,
    },
    data,
  };
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), "data/articles"));

  return articles.reduce((allArticles, articleSlug) => {
    
    const source = fs.readFileSync(
      path.join(process.cwd(), "data/articles", articleSlug),
      "utf-8"
    );
    const { content, data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(content) ? readingTime(content) + " minute read" : "",
      },
      ...allArticles,
    ];
  }, []);
}
