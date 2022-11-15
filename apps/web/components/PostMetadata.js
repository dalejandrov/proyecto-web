import { OpenPR, UI, Icons } from "@czstr/ui";
import { formatDate } from "@/lib/format-date";
import { Disqus } from "./Disqus";

export const PostMetadata = ({ metadata }) => {
    return (
        <UI.Flex direction="column" py={2}>
            <UI.Flex
                direction={["column", "column", "row"]}
                align={["left", "left", "center"]}
                justify="flex-start"
                color="white"
                fontSize={["xs", "sm"]}
                fontWeight="500"
                fontFamily="heading"
            >
                <UI.Flex align="center">
                    <Icons.IconCalendar />
                    <UI.Text color="brand.900" mx={2}>
                        {formatDate(metadata.date)}
                    </UI.Text>
                </UI.Flex>

                <UI.Flex align="center">
                    <Icons.IconClock />
                    <UI.Text mx={2}>
                        {Math.round(metadata.readingTime.minutes)} minutos de lectura
                    </UI.Text>
                </UI.Flex>

                <UI.Flex direction="row">
                    {metadata.tags.map((tag) => (
                        <UI.Tag key={tag} size="sm" mx={2}>
                            {tag}
                        </UI.Tag>
                    ))}
                </UI.Flex>

            </UI.Flex>

        </UI.Flex>
    );
};
