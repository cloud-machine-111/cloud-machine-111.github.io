import rss from '@astrojs/rss';

export async function GET(context) {
  const postModules = Object.values(
    import.meta.glob('./blog/*.md', { eager: true }),
  );

  const posts = postModules.sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf(),
  );

  return rss({
    title: 'cloud-machine-111 | ran',
    description: 'throne?',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}