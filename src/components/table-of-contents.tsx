import { get } from "http";
import * as React from "react";
import { NavLink } from "theme-ui";

interface useIntersectionObserverProps { 
    ids: string[];
}

const useIntersectionObserver = ({ ids }: useIntersectionObserverProps) => {
    const [activeId, setActiveId] = React.useState(``);
    
    React.useEffect(() => {
        const callback: IntersectionObserverCallback = (entires) => {
            entires.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setActiveId(id!);
                }
            })
        };

        //find each element by id
        const elements = ids.map((id) => document.getElementById(id));
        
        //create an observer
        const observer = new IntersectionObserver(callback, {
            rootMargin: `0% 0% -80% 0%`
        });

        //observe each element
        elements.forEach((element) => observer.observe(element!));

        return () => observer.disconnect();
    }, []);

    return activeId;
}

const getIds = (items: any) => {
    return items.reduce((acc: any, item: any) => {
        if (item.url) {
            acc.push(item.url.slice(1));
        }
        if (item.items) {
            acc.push(...getIds(item.items));
        }
        return acc;
    }, []);
} 

const TocItem = ({ items, activeId, depth }: any) => {
    console.log(items);
    const padding = depth == 0 ? "16px" : "16px";
    return (
        <ul style={{"listStyleType": "none", "paddingLeft": padding}}>
            {
                items.map((item: any) => {
                    const variant = item.url === `#${activeId}` ? "tableOfContentsActive" : "tableOfContents";
                    return (
                        <li key={item.url}>
                            <NavLink href={item.url} variant={`${variant}`} style={{ fontSize: `${18 - 3*depth}px`, opacity: `${1 - 0.2*depth}` }}>
                                {item.title}
                            </NavLink>
                            {item.items && 
                                <TocItem items={item.items} activeId={activeId} depth={depth+1} />
                            }
                        </li>                    
                    )
                })
            }
        </ul>
    )
}

const TableOfContents = ({ items }: any) => {
    const ids = getIds(items);
    const activeId = useIntersectionObserver({ ids });
    return (
        <>
            <h2>Contents</h2>
            <TocItem items={items[0].items} activeId={activeId} depth={0} />
        </>
    )
};

export default TableOfContents;