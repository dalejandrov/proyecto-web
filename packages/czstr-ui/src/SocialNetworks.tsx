import { HStack, Link } from "./elements";
import {
    IconTwitch,
    IconYoutube,
    IconInstagram,
    IconTwitter,
    IconGithub,
    IconTiktok,
    IconDiscord,
    IconLinkedin,
} from "./icons";

export const SocialNetworks = () => {
    return (
        <HStack spacing="24px" my="4">
            <Link href="https://youtube.com/">
                <IconYoutube size="24px" />
            </Link>

            <Link href="https://twitter.com/">
                <IconTwitter size="24px" />
            </Link>

            <Link href="https://instagram.com/">
                <IconInstagram size="24px" />
            </Link>

            <Link href="https://linkedin.com/in/">
                <IconLinkedin size="24px" />
            </Link>

            <Link href="https://github.com/">
                <IconGithub size="24px" />
            </Link>

            <Link href="https://tiktok.com/">
                <IconTiktok size="24px" />
            </Link>

            <Link href="https://twitch.tv/">
                <IconTwitch size="24px" />
            </Link>

            <Link href="https://discord.gg/">
                <IconDiscord size="24px" />
            </Link>
        </HStack>
    );
};
