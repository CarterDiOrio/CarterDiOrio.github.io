/** @jsxImportSource theme-ui */

/**
 * This is a component for displaying a card for highlighting a project.
 */
import * as React from "react";
import Project from "../data/project";
import { Badge, Box, Card, Grid, Heading } from "theme-ui";
import { Image, Text } from "theme-ui";
import Description from "../data/description";
import * as cardStyles from "./card.module.css";

interface ProjectCardProps {
    project: Project;
    description?: Description;
    featured?: boolean;
}

const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
    project,
    description,
    featured,
}) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [cardStyle, setCardStyle] = React.useState<string>(
        featured ? cardStyles.card : cardStyles.smallCard
    );

    const onResize = React.useCallback(() => {
        if (!cardRef.current) return;
        if (cardRef.current.clientWidth > 800) {
            setCardStyle(cardStyles.card);
        } else {
            setCardStyle(cardStyles.smallCard);
        }
    }, []);

    React.useEffect(() => {
        if (featured) {
            window.addEventListener("resize", onResize);
            onResize();
            return () => {
                window.removeEventListener("resize", onResize);
            };
        }
    }, []);

    return (
        <Card variant="recipe">
            <a
                href={`/projects/${project.frontmatter.url}`}
                sx={{
                    all: "unset",
                }}
            >
                <div ref={cardRef} className={cardStyle}>
                    <div className={cardStyles.description}>
                        <div className={cardStyles.content}>
                            <Heading variant="cardtitle">
                                {project.frontmatter.title}
                            </Heading>

                            {project.frontmatter.subtitle && (
                                <Text variant="caption">
                                    {project.frontmatter.subtitle}
                                </Text>
                            )}

                            <Text variant="caption">
                                {project.frontmatter.date}
                            </Text>

                            {description && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: description.html,
                                    }}
                                />
                            )}
                        </div>

                        {project.frontmatter.tags.length > 0 && (
                            <Box
                                sx={{
                                    marginTop: "auto",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    gap: "8px 8px",
                                }}
                            >
                                {project.frontmatter.tags.map((tag) => {
                                    return <Badge variant="pill">{tag}</Badge>;
                                })}
                            </Box>
                        )}
                    </div>
                    <Image
                        className={cardStyles.media}
                        alt="image"
                        src={project.frontmatter.picture}
                        variant="primary"
                    />
                </div>
            </a>
        </Card>
    );
};

export default FeaturedProjectCard;
