"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'


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


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                data.map(({ portfolios }) => (
                    portfolios.nodes.map(({featuredImage},k)=>(
                        <Image key={k} src={featuredImage.node.sourceUrl} alt="FY" width={400} height={400}  />
                    ))
                ))
            }
        </div>
    )
}
