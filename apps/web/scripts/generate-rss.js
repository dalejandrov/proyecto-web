const fs = require("fs/promises");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

(async () => {
    const feed = new RSS({
        title: "POO Java",
        description:
            "Programacion orientada a objetos con Java",
        site_url: "",
        feed_url: "",
        webMaster: "Holamundo",
        copyright: `2011-${new Date().getFullYear()} Holamundo`,
        language: "es",
    });

    const posts = await fs.readdir(path.join(__dirname, "..", "data", "posts"));

    await Promise.all(
        posts.map(async (file) => {
            const content = await fs.readFile(
                path.join(__dirname, "..", "data", "posts", file)
            );
            const frontmatter = matter(content);
            const item = {
                title: frontmatter.data.title,
                url: `${file.replace(/\.mdx?/, "")}`,
                date: frontmatter.data.date,
            };
            if (frontmatter.data?.summary) {
                item.description = frontmatter.data.summary;
            }
            if (frontmatter.data?.tags) {
                item.categories = frontmatter.data.tags;
            }

            feed.item(item);
        })
    );

    await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
    console.log(`🚀 RSS Generated for ${posts.length} posts`);
})();
