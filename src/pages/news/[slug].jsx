import { useRouter } from "next/router";
import styles from "../../styles/NewsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../../components/Navbar1";
import Footer1 from "../../components/Footer1";
import searchIcon from "../../assets/search-gray.png";
import ogImage from "../../assets/ogImage.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchSeoData } from "../lib/fetchSeoData";

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}

const NewsDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [news, setNews] = useState({});
    const [recentNews, setRecentNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetchNews = async () => {
            try {
                setIsLoading(true);
                
                // Fetch main news article
                const newsResponse = await fetch("https://brightlight-node.onrender.com/news");
                const newsData = await newsResponse.json();
                
                if (newsData) {
                    const filteredNews = newsData.find((item) => {
                        const newsSlug = item.news_heading
                            .trim()
                            .toLowerCase()
                            .replace(/[^\w\s]/g, "")
                            .replace(/\s+/g, "-");
                        return newsSlug === slug;
                    });
                    setNews(filteredNews || newsData[0]);
                }

                // Fetch recent news
                const recentResponse = await fetch("https://brightlight-node.onrender.com/news/");
                const recentData = await recentResponse.json();
                
                if (recentData) {
                    const recentFiltered = recentData
                        .filter((item) => {
                            const newsSlug = item.news_heading
                                .trim()
                                .toLowerCase()
                                .replace(/[^\w\s]/g, "")
                                .replace(/\s+/g, "-");
                            return newsSlug !== slug;
                        })
                        .slice(0, 3);
                    setRecentNews(recentFiltered);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load news content");
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, [slug]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            router.push(`/news?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Head>
                <title>{news?.metaTitle || "Brightlight Immigration"}</title>
                <meta
                    name="description"
                    content={
                        news?.metaDescription ||
                        "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services."
                    }
                />
                <meta
                    name="title"
                    property="og:title"
                    content={news?.metaTitle || "Brightlight Immigration"}
                />
                <meta property="og:image" content={ogImage.src} />
                <meta property="og:image:type" content="image/png" />
                <meta
                    property="og:description"
                    content={
                        news?.metaDescription ||
                        "Discover the story behind Brightlight Immigration and how we can assist you with your immigration needs."
                    }
                />
            </Head>
            <Navbar1 />
            <div className={styles.newsTopSection}>
                <div className={styles.newssTopContentSection}>
                    <h1>{news.news_heading || "News Article"}</h1>
                </div>
            </div>
            <div className={styles.newssFlexSection}>
                <div className={styles.newsImgSection}>
                    {news.image && (
                        <Image
                            src={news.image}
                            alt={news.alt_tag_featured || "News Image"}
                            title={news.alt_tag_featured}
                            layout="responsive"
                            width={600}
                            height={400}
                            objectFit="cover"
                        />
                    )}
                </div>
                <div className={styles.newsSearchSection1}>
                    <div className={styles.searchDiv}>
                        <input
                            placeholder="Search News"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <Image
                            src={searchIcon}
                            onClick={handleSearchClick}
                            className={styles.searchIcon}
                            alt="Search"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className={styles.newsTagsSection}>
                        {news.tag_1 && <p>{news.tag_1}</p>}
                        {news.tag_2 && <p>{news.tag_2}</p>}
                        {news.tag_3 && <p>{news.tag_3}</p>}
                    </div>
                    {recentNews.length > 0 && (
                        <div className={styles.recentnewssSection}>
                            <h4>Recent News</h4>
                            {recentNews.map((item) => (
                                <Link
                                    href={
                                        !item.custom_url
                                            ? `/news/${item.news_heading
                                                  .trim()
                                                  .toLowerCase()
                                                  .replace(/[^\w\s]/g, "")
                                                  .replace(/\s+/g, "-")}`
                                            : `/news${item.custom_url}`
                                    }
                                    key={item._id}
                                    className={styles.recentnews}
                                >
                                    <h3>{item.news_heading}</h3>
                                </Link>
                            ))}
                        </div>
                    )}
                    <div className={styles.freeAssesmentSection}>
                        <h4>Start Your Process Today With Us!</h4>
                        <p>Book A Free Assessment With Us Right Now.</p>
                        <Link href="/booking" target="_blank">
                            Free Assessment
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.newsDescriptionSection}>
                {news.news_content && (
                    <div dangerouslySetInnerHTML={{ __html: news.news_content }} />
                )}
            </div>
            <div className={styles.newsSearchSection}>
                <div className={styles.searchDiv}>
                    <input
                        placeholder="Search News"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <Image
                        src={searchIcon}
                        onClick={handleSearchClick}
                        className={styles.searchIcon}
                        alt="Search"
                        width={24}
                        height={24}
                    />
                </div>
                <div className={styles.newsTagsSection}>
                    {news.tag_1 && <p>{news.tag_1}</p>}
                    {news.tag_2 && <p>{news.tag_2}</p>}
                    {news.tag_3 && <p>{news.tag_3}</p>}
                </div>
                
                <div className={styles.freeAssesmentSection}>
                    <h4>Start Your Process Today With Us!</h4>
                    <p>Book A Free Assessment With Us Right Now.</p>
                    <Link href="/booking" target="_blank">
                        Free Assessment
                    </Link>
                </div>
            </div>
            <Footer1 />
        </>
    );
};

export default NewsDetails;