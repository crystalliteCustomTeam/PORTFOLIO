"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Fancybox } from '..'


export default function Portfolio({ slug }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {

        let headersList = {
            Accept: '*/*',
            'Content-Type': 'application/json',
        };

        let gqlBody = {
            query: `query NewQuery {
            portfolioCategories(where: {slug: "${slug}"}) {
            nodes {
                portfolios {
                nodes {
                    featuredImage {
                    node {
                        sourceUrl
                    }
                    }
                }
                }
            }
            }
        }`
        };
        let bodyContent = JSON.stringify(gqlBody);

        fetch(
            'https://inhouse.cryscampus.com/wordpress/bitswits/graphql',
            {
                method: 'POST',
                body: bodyContent,
                headers: headersList,
            }
        ).then((res) => res.json()).then((data) => {

            setData(data.data.portfolioCategories.nodes)
            console.log(data.data)
            setLoading(false)
        })
    }, [])


    if (isLoading) return <div className="h-[90vh]"><h2 className="text-white font-mono text-[55px] uppercase">Portfolio Is Loading...</h2></div>;
    if (!data) return <p>No profile data</p>

    return (
        <div className='columns-1 md:columns-2 xl:columns-4 lg:columns-3 gap-5 space-y-4'>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                    Toolbar: {
                        display: {
                            left: ["infobar"],
                            middle: [
                                "zoomIn",
                                "zoomOut",
                                "toggle1to1",
                                "rotateCCW",
                                "rotateCW",
                                "flipX",
                                "flipY",
                            ],
                            right: ["close"],
                        },
                    },
                    Fullscreen: false,
                }}
            >
                {
                    data.map(({ portfolios }) => (
                        portfolios.nodes.map(({ featuredImage }, k) => (
                            <a key={k} data-fancybox="gallery" href={featuredImage.node.sourceUrl} className='block w-full mb-5' >
                                <Image src={featuredImage.node.sourceUrl} alt="FY" width={300} height={300} className='w-full' />
                            </a>
                        ))
                    ))
                }
            </Fancybox>
        </div>
    )
}
