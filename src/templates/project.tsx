/** @jsxImportSource theme-ui */

import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import * as projectStyles from "./project.module.css";
import TableOfContents from "../components/table-of-contents";
import { Card } from "theme-ui";

const ProjectPost = ({ data, children }: any) => {
    return (
        <Layout>
            {!data.mdx.frontmatter.underconstruction && (
            <div className={projectStyles.projectLayout}>
                <div sx={{
                    paddingRight: "16px"
                }}>
                    <Card className={projectStyles.tableOfContents} variant="tableOfContents">
                        <p>Github: <a href={data.mdx.frontmatter.github} sx={{color: "primary"}}>Repository</a> </p>
                        <TableOfContents items={data.mdx.tableOfContents.items} />
                    </Card>
                </div>
                <div>
                    <MDXProvider>{children}</MDXProvider>
                </div>
            </div>
            )}

            {data.mdx.frontmatter.underconstruction && (
                <div>
                    <h2>Under Construction. Please check back later for updates</h2>
                </div>
            )}
        </Layout>
    );
};

//query to get the project data
export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                underconstruction
                github
            }
            tableOfContents
        }
    }
`;

export const Head = ({ data }: any) => (
    <title>{data.mdx.frontmatter.title}</title>
);

export default ProjectPost;
