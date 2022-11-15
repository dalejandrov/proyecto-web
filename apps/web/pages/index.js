import Link from "next/link";
import {
    Footer,
    NewsletterForm,
    SpotifyPodcast,
    SocialNetworks,
    UI,
} from "@czstr/ui";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { orderByDate } from "@/lib/order-by-date";
import { formatDate } from "@/lib/format-date";
import { PostListItem, OpenGraph, SectionLinks } from "@/components";

export default function Home({ posts }) {
    return (
        <>
            <OpenGraph />
            <UI.Box
                w="100%"
                bg="secondary.900"
                borderTop="8px solid"
                borderColor="brand.900"
                color="white"
            >
                <UI.Container maxW="container.md" pt="8">
                    <SectionLinks />
                    <UI.Flex
                        direction={["column", "row"]}
                        justify="space-between"
                        align="left"
                    >
                        <UI.Box width={["100%", "75%"]} order={[2, 1]}>
                            <UI.Heading
                                fontFamily="heading"
                                as="h1"
                                size="xl"
                                mt={8}
                                mb={4}
                                textAlign="left"
                            >
                                JAVA
                            </UI.Heading>
                            <UI.Heading
                                fontFamily="body"
                                as="h2"
                                size="md"
                                my={2}
                                fontWeight="500"
                            >
                                Programacion Orientada A Objetos.
                            </UI.Heading>

                            <UI.Text fontSize="md" lineHeight={1.75} mt={[4, 0]} mb={4}>
                                Java se creó como una herramienta de programación para ser usada en un proyecto de set-top-box en una pequeña operación denominada the Green Project en Sun Microsystems en 1991. El equipo (Green Team), compuesto por trece personas y dirigido por James Gosling, trabajó durante 18 meses en Sand Hill Road, en Menlo Park, para desarrollarlo.  La promesa inicial de Gosling era Write Once, Run Anywhere (Escríbelo una vez, ejecútalo en cualquier lugar), ligero y gratuito para las plataformas más populares, de forma que los binarios (bytecode) de las aplicaciones Java pudiesen ejecutarse en cualquier plataforma.


                            </UI.Text>
                        </UI.Box>

                        <UI.Box
                            width={["25%", "18%"]}
                            order={[1, 2]}
                            alignSelf={["start", "center"]}
                        >
                            <UI.Image
                                width="100%"
                                borderRadius="full"
                                src="/assets/james-gosling.jpg"
                                alt="James Gosling"
                            />
                        </UI.Box>
                    </UI.Flex>

                    <UI.Flex direction={["column", "column", "row"]}>
                        <UI.Box w={["100%", "100%", "75%"]}>
                            <UI.Text
                                fontFamily="heading"
                                fontWeight="600"
                                as="h3"
                                fontSize="xl"
                                my="4"
                            >
                                Últimas publicaciones
                            </UI.Text>
                            {posts.map((post) => (
                                <Link href={post.slug} key={post.slug}>
                                    <PostListItem
                                        title={post.title}
                                        date={formatDate(post.date)}
                                        tags={post.tags}
                                    />
                                </Link>
                            ))}
                            <Link pt={8} href="/blog" color="brand.900">
                                Ver todas →
                            </Link>
                        </UI.Box>

                        <UI.Box w={["100%", "100%", "25%"]}>
                            <UI.Text
                                fontFamily="heading"
                                fontWeight="600"
                                as="h3"
                                fontSize="xl"
                                my="4"
                            >
                                📺 Video!
                            </UI.Text>

                            <UI.Box
                                as="a"
                                display="block"
                                p={4}
                                mb={4}
                                borderRadius={8}
                                backgroundColor="secondary.500"
                                href={`https://youtube.com/watch?v=I848HdWjLMo`}
                                rel="noopener noreferrer nofollow"
                            >
                                <UI.Image
                                    borderRadius="md"
                                    src={`https://i.ytimg.com/vi/I848HdWjLMo/maxresdefault.jpg`}
                                />
                                <UI.Text py={4}>{`La Lógica de la Programación Orientada a Objetos explicada con Minecraft`}</UI.Text>
                            </UI.Box>

                            <UI.Text
                                fontFamily="heading"
                                fontWeight="600"
                                as="h3"
                                fontSize="xl"
                                my="4"
                            >
                                🎧 Podcast!
                            </UI.Text>
                            <SpotifyPodcast episode="0PBKdkFnkgFVbfii3wsGk1" />

                            <NewsletterForm />
                        </UI.Box>
                    </UI.Flex>
                </UI.Container>
            </UI.Box>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const allPosts = await getAllFilesFrontMatter("posts");
    const posts = allPosts.sort(orderByDate).slice(0, 10);

    return {
        props: { posts },
    };
}
