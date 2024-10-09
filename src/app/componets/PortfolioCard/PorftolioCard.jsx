"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Style from './portfoliocard.module.css';
import Link from 'next/link';

export default function PortfolioCard() {
  const [portfolioCard, setPortfolioCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPortfolioCategories = async (cursor = null) => {
    let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };

    let gqlBody = {
      query: `query NewQuery($after: String) {
        portfolioCategories(first: 8, after: $after) {
          nodes {
            featuredimage {
              categoryimage {
                node {
                  sourceUrl(size: LARGE)
                  uri
                  title
                }
              }
            }
            name
            link
            slug
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }`,
      variables: {
        after: cursor,
      },
    };

    let bodyContent = JSON.stringify(gqlBody);

    try {
      const dynamicData = await fetch(
        'https://inhouse.cryscampus.com/wordpress/bitswits/graphql',
        {
          method: 'POST',
          body: bodyContent,
          headers: headersList,
          cache: 'no-store',
        }
      );
      const JsonDATA = await dynamicData.json();
      const newPortfolioCard = JsonDATA.data.portfolioCategories.nodes;
      const pageInfo = JsonDATA.data.portfolioCategories.pageInfo;

      setPortfolioCard((prev) => [...prev, ...newPortfolioCard]);
      setEndCursor(pageInfo.endCursor);
      setHasNextPage(pageInfo.hasNextPage);
    } catch (err) {
      console.error('Error fetching portfolio:', err);
      setError('Failed to load portfolio.');
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPortfolioCategories();
  }, []);

  if (loading) return <div className="h-[90vh]"><h2 className="text-white font-mono text-[55px] uppercase">Portfolio Is Loading...</h2></div>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {portfolioCard.map(({ name, featuredimage, slug }, i) => (
          <div key={i} className="group">
            <div className={Style.card}>
              <div className={`${Style.overlay} group-hover:h-full`}></div>
              <Image
                src={featuredimage?.categoryimage?.node?.sourceUrl || '/placeholder.jpg'}
                alt={featuredimage?.categoryimage?.node?.title || 'Image'}
                fill={true}
                className={Style.bgImage}
              />
              <div className={Style.cardInner}>
                <h2 className={`${Style.cardInnerTitle} group-hover:translate-y-0`}>
                  {name}
                </h2>
                <div className={`${Style.cardCTA} group-hover:translate-y-0`}>
                  <Link href={`/portfolio/${slug}`} className={Style.cardCTAtitle}>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasNextPage && (
        <div className="text-center mt-5">
          <button
            onClick={() => {
              setIsLoadingMore(true);
              fetchPortfolioCategories(endCursor);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={isLoadingMore}
          >
            {isLoadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
