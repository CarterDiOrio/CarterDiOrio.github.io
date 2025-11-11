/** @jsxImportSource theme-ui */

import { Link } from "gatsby";
import * as React from "react";
import {
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    NavLink,
    Text,
} from "theme-ui";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <header
                sx={{
                    background: "sheet",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "4px",
                        paddingTop: "8px",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <Heading
                            sx={{
                                color: "snow",
                            }}
                            variant="webtitle"
                        >
                            Carter DiOrio
                        </Heading>
                        
                       <Text
                            sx={{
                                    color: "muted",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                            }}>
                            Autonomy Engineer @ Caterpillar
                       </Text>

                        <NavLink
                            href="https://www.mccormick.northwestern.edu/robotics/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                            }}
                        >
                            <Text
                                sx={{
                                    color: "muted",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    ":hover,:focus": {
                                        color: "purple",
                                    },
                                }}
                            >
                                MSR @ Northwestern
                            </Text>
                        </NavLink>
                    </div>

                    <Flex
                        as="nav"
                        sx={{
                            gap: "16px",
                        }}
                    >
                        <NavLink p={2} href="/projects" variant="navbar">
                            Projects
                        </NavLink>
                        {/* <NavLink p={2} href="/about" variant="navbar">
                            About
                        </NavLink> */}
                        <NavLink
                            href="https://www.linkedin.com/in/carter-diorio-b445041bb/"
                            sx={{
                                paddingLeft: "4px",
                                ":hover,:focus": {
                                    color: "blue",
                                },
                            }}
                            variant="navbar"
                        >
                            <i
                                className="fa fa-linkedin-square"
                                style={{
                                    fontSize: "20px",
                                }}
                            ></i>
                        </NavLink>
                        <NavLink
                            href="https://github.com/CarterDiOrio"
                            sx={{
                                paddingLeft: "4px",
                                ":hover,:focus": {
                                    color: "#6e5494",
                                },
                            }}
                            variant="navbar"
                        >
                            <i
                                className="fa fa-github-square"
                                style={{
                                    fontSize: "20px",
                                }}
                            ></i>
                        </NavLink>
                    </Flex>
                </Container>
            </header>
            
            {/**
             * Container for main webpage content
             */}
            <Container
                sx={{
                    paddingTop: (theme) => `${theme.space[4]}px`,
                }}
            >
                {children}
            </Container>
        </div>
    );
};

export default Layout;
