/** @jsxImportSource theme-ui */

import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

const ProjectPost = ({ data, children }: any) => {
    return (
        <Layout>
            <div sx={{
                maxWidth: "1200px",
                margin: "auto"
            }}>
                <MDXProvider>{children}</MDXProvider>
            </div>
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
            }
        }
    }
`;

export const Head = ({ data }: any) => (
    <title>{data.mdx.frontmatter.title}</title>
);

export default ProjectPost;
