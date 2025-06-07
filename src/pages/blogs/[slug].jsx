import styles from "../../styles/BlogsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../../components/Navbar1";
import Footer1 from "../../components/Footer1";
import Loader from "../../components/Loader"; // Import the Loader component
import Linkedin from "../../assets/bannerLinkedinLogo.png";
import rcic from "../../assets/rcic.png";
import searchIcon from "../../assets/search-gray.png";
import ogImage from "../../assets/ogImage.png";
import Head from "next/head";
import Lp from "../../assets/blogDetailsPic.jpg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { fetchSeoData } from "../../lib/fetchSeoData";
import SpinnerLoader from "../../components/Loader2";
import { ArticleJsonLd } from "next-seo";

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null); // Initialize as null for better error handling
  const [loveneetData, setLoveneetData] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Use lowercase for consistency
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch blog data
        const blogResponse = await fetch(
          `https://brightlight-node.onrender.com/new-added-blogs`
        );
        if (!blogResponse.ok) throw new Error("Failed to fetch blog data");
        const blogData = await blogResponse.json();

        let filteredData = null;
        if (slug) {
          filteredData = blogData.find((item) => {
            const blogSlug = item.blog_heading
              .trim()
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return blogSlug === slug;
          });
        }

        if (!filteredData && blogData.length > 0) {
          const idValueArray = slug?.split("-").slice(0, 3).join(" ") || "";
          filteredData =
            blogData.find((item) =>
              item.blog_heading
                .toLowerCase()
                .includes(idValueArray.toLowerCase())
            ) || blogData[0]; // Fallback to first blog if no match
        }

        setBlog(filteredData || null);

        // Fetch loveneet data
        const loveneetResponse = await fetch(
          "https://brightlight-node.onrender.com/loveneet"
        );
        if (!loveneetResponse.ok)
          throw new Error("Failed to fetch loveneet data");
        const loveneetData = await loveneetResponse.json();
        setLoveneetData(loveneetData[0] || null);

        // Fetch recent blogs
        const recentBlogsResponse = await fetch(
          "https://brightlight-node.onrender.com/new-added-blogs/"
        );
        if (!recentBlogsResponse.ok)
          throw new Error("Failed to fetch recent blogs");
        const recentBlogsData = await recentBlogsResponse.json();
        const recentBlogsFilteredData = recentBlogsData
          .filter((item) => item.blog_heading !== filteredData?.blog_heading)
          .slice(0, 3);
        setRecentBlogs(recentBlogsFilteredData);

        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to load blog content. Please try again later.");
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      router.replace(`/blogs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Head>
        <title>{blog?.metaTitle || "Blog - Brightlight Immigration"}</title>
        <meta
          name="description"
          content={
            blog?.metaDescription ||
            "Read the latest insights and updates on Canadian immigration from Brightlight Immigration."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={blog?.metaTitle || "Blog - Brightlight Immigration"}
        />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            blog?.metaDescription ||
            "Discover expert advice and updates on Canadian immigration from Brightlight Immigration."
          }
        />
        <meta name="robots" content={loading ? "noindex" : "index"} />{" "}
        {/* Prevent indexing during loading */}
      </Head>
      {!loading && blog && (
        <ArticleJsonLd
          type="BlogPosting"
          url={`https://www.brightlightimmigration.ca/blogs/${slug}`}
          title={blog.blog_heading}
          images={[
            blog.image ||
              "https://www.brightlightimmigration.ca/default-blog-image.jpg",
          ]}
          datePublished={blog.created_at || new Date().toISOString()}
          authorName={loveneetData?.name || "Brightlight Immigration"}
          description={
            blog.metaDescription ||
            "Discover expert insights and updates on Canadian immigration."
          }
          publisherName="Brightlight Immigration"
          publisherLogo="https://www.brightlightimmigration.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrlightlight-icon.a58008c2.webp&w=256&q=75"
        />
      )}

      <Navbar1 />
      {loading ? (
        <SpinnerLoader />
      ) : error ? (
        <div className={styles.errorSection}>
          <p>{error}</p>
          <Link href="/blogs">Back to Blogs</Link>
        </div>
      ) : (
        <div>
          <div className={styles.blogTopSection}>
            <div className={styles.blogsTopContentSection}>
              <h1>{blog?.blog_heading || "Blog Post"}</h1>
              <div className={styles.loveneetSection}>
                <Image
                  src={Lp}
                  className={styles.loveneetImage}
                  alt="Author profile image"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div className={styles.loveneetContent}>
                  <div className={styles.loveneetDataFlex}>
                    <h3>By {loveneetData?.name || "Author"}</h3>
                    <h5>{loveneetData?.post || "Contributor"}</h5>
                  </div>
                  <h4>{loveneetData?.tagline || ""}</h4>
                  <div className={styles.loveneetLinks}>
                    {loveneetData?.linkedin && (
                      <Link
                        className={styles.imageSection}
                        href={loveneetData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={Linkedin}
                          alt="LinkedIn profile"
                          width={50}
                          height={50}
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div>
                      <p className={styles.haveAQuestion}>Have Questions?</p>
                      <Link
                        className={styles.imageSection}
                        href="/booking"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={rcic}
                          alt="Book RCIC appointment"
                          width={100}
                          height={50}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogsFlexSection}>
            <div className={styles.blogImgSection}>
              {blog?.image && (
                <Image
                  src={blog.image}
                  alt={blog.alt_tag || "Blog image"}
                  title={blog.alt_tag || "Blog image"}
                  width={600}
                  height={400}
                  loading="lazy"
                />
              )}
            </div>
            <div className={styles.blogSearchSection1}>
              <div className={styles.searchDiv}>
                <input
                  placeholder="Search Blogs"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Image
                  src={searchIcon}
                  onClick={handleSearchClick}
                  className={styles.searchIcon}
                  alt="Search blogs"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </div>
              <div className={styles.blogTagsSection}>
                {blog?.tag_1 && <p>{blog.tag_1}</p>}
                {blog?.tag_2 && <p>{blog.tag_2}</p>}
                {blog?.tag_3 && <p>{blog.tag_3}</p>}
              </div>
              {recentBlogs.length > 0 && (
                <div className={styles.recentBlogsSection}>
                  <h4>Recent Blogs</h4>
                  {recentBlogs.map((item, index) => (
                    <Link
                      key={index}
                      href={
                        item.custom_url ||
                        `/blogs/${item.blog_heading
                          .trim()
                          .toLowerCase()
                          .replace(/[^\w\s]/g, "")
                          .replace(/\s+/g, "-")}`
                      }
                      className={styles.recentBlog}
                    >
                      <h3>{item.blog_heading}</h3>
                    </Link>
                  ))}
                </div>
              )}
              <div className={styles.freeAssesmentSection}>
                <h4>Start Your Process Today With Us!</h4>
                <p>Book A Free Assessment With Us Right Now.</p>
                <Link href="/booking" target="_blank" rel="noopener noreferrer">
                  Free Assessment
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.blogDescriptionSection}>
            {blog?.blog_content && (
              <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
            )}
          </div>
          <div className={styles.blogSearchSection}>
            <div className={styles.searchDiv}>
              <input
                placeholder="Search Blogs"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Image
                src={searchIcon}
                onClick={handleSearchClick}
                className={styles.searchIcon}
                alt="Search blogs"
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <div className={styles.blogTagsSection}>
              {blog?.tag_1 && <p>{blog.tag_1}</p>}
              {blog?.tag_2 && <p>{blog.tag_2}</p>}
              {blog?.tag_3 && <p>{blog.tag_3}</p>}
            </div>
            {recentBlogs.length > 0 && (
              <div className={styles.recentBlogsSection}>
                <h4>Recent Blogs</h4>
                {recentBlogs.map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item.custom_url ||
                      `/blogs/${item.blog_heading
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-")}`
                    }
                    className={styles.recentBlog}
                  >
                    <h3>{item.blog_heading}</h3>
                  </Link>
                ))}
              </div>
            )}
            <div className={styles.freeAssesmentSection}>
              <h4>Start Your Process Today With Us!</h4>
              <p>Book A Free Assessment With Us Right Now.</p>
              <Link href="/booking" target="_blank" rel="noopener noreferrer">
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer1 />
    </>
  );
};

export default BlogDetails;
