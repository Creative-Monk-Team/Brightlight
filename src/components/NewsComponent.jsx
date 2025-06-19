export default function NewsComponent(){
    return(
        <div className={styles.sourceParent}>
        <div className={styles.sourceMain}>
          <div className={styles.sourceHeadingParent}>
            <div className={styles.sourceHeadingParentFirstDiv}>
              <Image loading="lazy" height={50} width={100} src={WhiteLogo} alt="whitelogo"    // Arbitrary number, Next.js auto-adjusts it
              />
            </div>
            <div>
              {newsSectionData && <h1>{newsSectionData.heading}</h1>}
              {newsSectionData && <p>{newsSectionData.description}</p>}
            </div>
          </div>
          <div
            className={styles.sourceContentParent}
            ref={sourceContentParentRef}
          >
            {newsData?.map((item, index) => {
              let stripHtmlTags = (text) =>
                text ? text.replace(/<[^>]*>/g, "") : "";

              let truncateText = (text, numChars) => {
                let cleanedText = stripHtmlTags(text);
                if (cleanedText.length <= numChars) return cleanedText;
                return cleanedText.slice(0, numChars) + "...";
              };
              let month = item.date.trim().split("T")[0].split("-")[1];
              let date = item.date.trim().split("T")[0].split("-")[2];
              let monthName = () => {
                if (month == "01") {
                  return "JAN";
                } else if (month == "02") {
                  return "FEB";
                } else if (month == "03") {
                  return "MAR";
                } else if (month == "04") {
                  return "APR";
                } else if (month == "05") {
                  return "MAY";
                } else if (month == "06") {
                  return "JUN";
                } else if (month == "07") {
                  return "JUL";
                } else if (month == "08") {
                  return "AUG";
                } else if (month == "09") {
                  return "SEP";
                } else if (month == "10") {
                  return "OCT";
                } else if (month == "11") {
                  return "NOV";
                } else if (month == "12") {
                  return "DEC";
                }
              };
              return (
                <>
                  <div
                    key={index}
                    className={`${styles.sourceContent} ${styles.fadeFromLeft}`}
                    ref={(el) => (sourceContentRefs.current[index] = el)}
                  >
                    <div className={styles.sourceContentDate}>
                      <p>{item.tag_1}</p>
                      <h2>{monthName(item.date)}</h2>
                      <h1>{date}</h1>
                    </div>
                    <div className={styles.sourceContentData}>
                      <h3>{item.news_heading}</h3>
                      <p>{truncateText(item.news_content, 150)}</p>
                      <Link
                        onClick={() => {
                          localStorage.setItem(
                            "news_heading",
                            item.news_heading
                          );
                        }}
                        href={
                          !item.custom_url
                            ? `/news/${item.news_heading
                              .trim()
                              .toLowerCase()
                              .replace(/[^\w\s]/g, "")
                              .replace(/\s+/g, "-")}`
                            : `/news${item.custom_url}`
                        }
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
            <button
              className={styles.moreNewsUpdates}
              onClick={() => (window.location.href = "/news")}
            >
              More News & Updates
            </button>
          </div>
        </div>
      </div>
    )
}