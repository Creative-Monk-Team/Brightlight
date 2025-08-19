import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const RcipContent = () => {
  const notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const [sectionDataSingle, setSectionDataSingle] = useState({
    _id: "",
    heading: "",
    introPara: "",
    benefitsHeading: "",
    benefits1: "",
    benefits2: "",
    benefits3: "",
    benefits4: "",
    benefits5: "",
    eligibilityHeading: "",
    eligibility1: "",
    eligibility2: "",
    eligibility3: "",
    eligibility4: "",
    eligibility5: "",
    eligibility6: "",
    eligibility7: "",
    provincesHeading: "",
    province1: "",
    communities1: "",
    province2: "",
    communities2: "",
    province3: "",
    communities3: "",
    province4: "",
    communities4: "",
    province5: "",
    communities5: "",
    province6: "",
    communities6: "",
    province7: "",
    communities7: "",
    province8: "",
    communities8: "",
    province9: "",
    communities9: "",
    howToApplyHeading: "",
    howToApply1: "",
    howToApply2: "",
    howToApply3: "",
    howToApply4: "",
    howToApply5: "",
    refusalHeading: "",
    refusal1: "",
    refusal2: "",
    refusal3: "",
    refusal4: "",
    refusal5: "",
    refusal6: "",
    refusal7: "",
    refusal8: "",
    refusal9: "",
    refusal10: "",
    bookAppointment: "",
    whyChooseUsHeading: "",
    whyChooseUs1: "",
    whyChooseUs2: "",
    whyChooseUs3: "",
    whyChooseUs4: "",
    showTestimonials: "",
    faqHeading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    q6: "",
    qa6: "",
    showBlogs: "",
    showEligibilityAssessment: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    const payload = {
      heading: sectionDataSingle.heading,
      introPara: sectionDataSingle.introPara,
      benefitsHeading: sectionDataSingle.benefitsHeading,
      benefitsList: [
        sectionDataSingle.benefits1,
        sectionDataSingle.benefits2,
        sectionDataSingle.benefits3,
        sectionDataSingle.benefits4,
        sectionDataSingle.benefits5,
      ],
      eligibilityHeading: sectionDataSingle.eligibilityHeading,
      eligibilityList: [
        sectionDataSingle.eligibility1,
        sectionDataSingle.eligibility2,
        sectionDataSingle.eligibility3,
        sectionDataSingle.eligibility4,
        sectionDataSingle.eligibility5,
        sectionDataSingle.eligibility6,
        sectionDataSingle.eligibility7,
      ],
      provincesHeading: sectionDataSingle.provincesHeading,
      provincesList: [
        { province: sectionDataSingle.province1, communities: sectionDataSingle.communities1.split(",") },
        { province: sectionDataSingle.province2, communities: sectionDataSingle.communities2.split(",") },
        { province: sectionDataSingle.province3, communities: sectionDataSingle.communities3.split(",") },
        { province: sectionDataSingle.province4, communities: sectionDataSingle.communities4.split(",") },
        { province: sectionDataSingle.province5, communities: sectionDataSingle.communities5.split(",") },
        { province: sectionDataSingle.province6, communities: sectionDataSingle.communities6.split(",") },
        { province: sectionDataSingle.province7, communities: sectionDataSingle.communities7.split(",") },
        { province: sectionDataSingle.province8, communities: sectionDataSingle.communities8.split(",") },
        { province: sectionDataSingle.province9, communities: sectionDataSingle.communities9.split(",") },
      ],
      howToApplyHeading: sectionDataSingle.howToApplyHeading,
      howToApplySteps: [
        sectionDataSingle.howToApply1,
        sectionDataSingle.howToApply2,
        sectionDataSingle.howToApply3,
        sectionDataSingle.howToApply4,
        sectionDataSingle.howToApply5,
      ],
      refusalHeading: sectionDataSingle.refusalHeading,
      refusalList: [
        sectionDataSingle.refusal1,
        sectionDataSingle.refusal2,
        sectionDataSingle.refusal3,
        sectionDataSingle.refusal4,
        sectionDataSingle.refusal5,
        sectionDataSingle.refusal6,
        sectionDataSingle.refusal7,
        sectionDataSingle.refusal8,
        sectionDataSingle.refusal9,
        sectionDataSingle.refusal10,
      ],
      bookAppointment: sectionDataSingle.bookAppointment,
      whyChooseUsHeading: sectionDataSingle.whyChooseUsHeading,
      whyChooseUsList: [
        sectionDataSingle.whyChooseUs1,
        sectionDataSingle.whyChooseUs2,
        sectionDataSingle.whyChooseUs3,
        sectionDataSingle.whyChooseUs4,
      ],
      showTestimonials: sectionDataSingle.showTestimonials,
      faqHeading: sectionDataSingle.faqHeading,
      faqs: [
        { question: sectionDataSingle.q1, answer: sectionDataSingle.qa1 },
        { question: sectionDataSingle.q2, answer: sectionDataSingle.qa2 },
        { question: sectionDataSingle.q3, answer: sectionDataSingle.qa3 },
        { question: sectionDataSingle.q4, answer: sectionDataSingle.qa4 },
        { question: sectionDataSingle.q5, answer: sectionDataSingle.qa5 },
        { question: sectionDataSingle.q6, answer: sectionDataSingle.qa6 },
      ],
      showBlogs: sectionDataSingle.showBlogs,
      showEligibilityAssessment: sectionDataSingle.showEligibilityAssessment,
    };

    fetch(
      `https://brightlight-node.onrender.com/rcip-page/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => {
        if (response.status === 413) {
          notifySize();
          throw new Error("Payload too large");
        } else if (!response.ok) {
          notifyError();
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        notifySuccess();
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/rcip-page")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const doc = data[0];
          setSectionDataSingle({
            _id: doc._id,
            heading: doc.heading || "",
            introPara: doc.introPara || "",
            benefitsHeading: doc.benefitsHeading || "",
            benefits1: doc.benefitsList?.[0] || "",
            benefits2: doc.benefitsList?.[1] || "",
            benefits3: doc.benefitsList?.[2] || "",
            benefits4: doc.benefitsList?.[3] || "",
            benefits5: doc.benefitsList?.[4] || "",
            eligibilityHeading: doc.eligibilityHeading || "",
            eligibility1: doc.eligibilityList?.[0] || "",
            eligibility2: doc.eligibilityList?.[1] || "",
            eligibility3: doc.eligibilityList?.[2] || "",
            eligibility4: doc.eligibilityList?.[3] || "",
            eligibility5: doc.eligibilityList?.[4] || "",
            eligibility6: doc.eligibilityList?.[5] || "",
            eligibility7: doc.eligibilityList?.[6] || "",
            provincesHeading: doc.provincesHeading || "",
            province1: doc.provincesList?.[0]?.province || "",
            communities1: doc.provincesList?.[0]?.communities.join(",") || "",
            province2: doc.provincesList?.[1]?.province || "",
            communities2: doc.provincesList?.[1]?.communities.join(",") || "",
            province3: doc.provincesList?.[2]?.province || "",
            communities3: doc.provincesList?.[2]?.communities.join(",") || "",
            province4: doc.provincesList?.[3]?.province || "",
            communities4: doc.provincesList?.[3]?.communities.join(",") || "",
            province5: doc.provincesList?.[4]?.province || "",
            communities5: doc.provincesList?.[4]?.communities.join(",") || "",
            province6: doc.provincesList?.[5]?.province || "",
            communities6: doc.provincesList?.[5]?.communities.join(",") || "",
            province7: doc.provincesList?.[6]?.province || "",
            communities7: doc.provincesList?.[6]?.communities.join(",") || "",
            province8: doc.provincesList?.[7]?.province || "",
            communities8: doc.provincesList?.[7]?.communities.join(",") || "",
            province9: doc.provincesList?.[8]?.province || "",
            communities9: doc.provincesList?.[8]?.communities.join(",") || "",
            howToApplyHeading: doc.howToApplyHeading || "",
            howToApply1: doc.howToApplySteps?.[0] || "",
            howToApply2: doc.howToApplySteps?.[1] || "",
            howToApply3: doc.howToApplySteps?.[2] || "",
            howToApply4: doc.howToApplySteps?.[3] || "",
            howToApply5: doc.howToApplySteps?.[4] || "",
            refusalHeading: doc.refusalHeading || "",
            refusal1: doc.refusalList?.[0] || "",
            refusal2: doc.refusalList?.[1] || "",
            refusal3: doc.refusalList?.[2] || "",
            refusal4: doc.refusalList?.[3] || "",
            refusal5: doc.refusalList?.[4] || "",
            refusal6: doc.refusalList?.[5] || "",
            refusal7: doc.refusalList?.[6] || "",
            refusal8: doc.refusalList?.[7] || "",
            refusal9: doc.refusalList?.[8] || "",
            refusal10: doc.refusalList?.[9] || "",
            bookAppointment: doc.bookAppointment || "",
            whyChooseUsHeading: doc.whyChooseUsHeading || "",
            whyChooseUs1: doc.whyChooseUsList?.[0] || "",
            whyChooseUs2: doc.whyChooseUsList?.[1] || "",
            whyChooseUs3: doc.whyChooseUsList?.[2] || "",
            whyChooseUs4: doc.whyChooseUsList?.[3] || "",
            showTestimonials: doc.showTestimonials || "",
            faqHeading: doc.faqHeading || "",
            q1: doc.faqs?.[0]?.question || "",
            qa1: doc.faqs?.[0]?.answer || "",
            q2: doc.faqs?.[1]?.question || "",
            qa2: doc.faqs?.[1]?.answer || "",
            q3: doc.faqs?.[2]?.question || "",
            qa3: doc.faqs?.[2]?.answer || "",
            q4: doc.faqs?.[3]?.question || "",
            qa4: doc.faqs?.[3]?.answer || "",
            q5: doc.faqs?.[4]?.question || "",
            qa5: doc.faqs?.[4]?.answer || "",
            q6: doc.faqs?.[5]?.question || "",
            qa6: doc.faqs?.[5]?.answer || "",
            showBlogs: doc.showBlogs || "",
            showEligibilityAssessment: doc.showEligibilityAssessment || "",
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />

      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Introduction Paragraph"
        name="introPara"
        value={sectionDataSingle.introPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionDataSingle.benefitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 1"
        name="benefits1"
        value={sectionDataSingle.benefits1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 2"
        name="benefits2"
        value={sectionDataSingle.benefits2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 3"
        name="benefits3"
        value={sectionDataSingle.benefits3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 4"
        name="benefits4"
        value={sectionDataSingle.benefits4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 5"
        name="benefits5"
        value={sectionDataSingle.benefits5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionDataSingle.eligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 1"
        name="eligibility1"
        value={sectionDataSingle.eligibility1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 2"
        name="eligibility2"
        value={sectionDataSingle.eligibility2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 3"
        name="eligibility3"
        value={sectionDataSingle.eligibility3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 4"
        name="eligibility4"
        value={sectionDataSingle.eligibility4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 5"
        name="eligibility5"
        value={sectionDataSingle.eligibility5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 6"
        name="eligibility6"
        value={sectionDataSingle.eligibility6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility 7"
        name="eligibility7"
        value={sectionDataSingle.eligibility7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Provinces Heading"
        name="provincesHeading"
        value={sectionDataSingle.provincesHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 1"
        name="province1"
        value={sectionDataSingle.province1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 1 (comma-separated)"
        name="communities1"
        value={sectionDataSingle.communities1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 2"
        name="province2"
        value={sectionDataSingle.province2}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 2 (comma-separated)"
        name="communities2"
        value={sectionDataSingle.communities2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 3"
        name="province3"
        value={sectionDataSingle.province3}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 3 (comma-separated)"
        name="communities3"
        value={sectionDataSingle.communities3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 4"
        name="province4"
        value={sectionDataSingle.province4}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 4 (comma-separated)"
        name="communities4"
        value={sectionDataSingle.communities4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 5"
        name="province5"
        value={sectionDataSingle.province5}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 5 (comma-separated)"
        name="communities5"
        value={sectionDataSingle.communities5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 6"
        name="province6"
        value={sectionDataSingle.province6}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 6 (comma-separated)"
        name="communities6"
        value={sectionDataSingle.communities6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 7"
        name="province7"
        value={sectionDataSingle.province7}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 7 (comma-separated)"
        name="communities7"
        value={sectionDataSingle.communities7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 8"
        name="province8"
        value={sectionDataSingle.province8}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 8 (comma-separated)"
        name="communities8"
        value={sectionDataSingle.communities8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Province 9"
        name="province9"
        value={sectionDataSingle.province9}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Communities 9 (comma-separated)"
        name="communities9"
        value={sectionDataSingle.communities9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="howToApplyHeading"
        value={sectionDataSingle.howToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1"
        name="howToApply1"
        value={sectionDataSingle.howToApply1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2"
        name="howToApply2"
        value={sectionDataSingle.howToApply2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3"
        name="howToApply3"
        value={sectionDataSingle.howToApply3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 4"
        name="howToApply4"
        value={sectionDataSingle.howToApply4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 5"
        name="howToApply5"
        value={sectionDataSingle.howToApply5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="refusalHeading"
        value={sectionDataSingle.refusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 1"
        name="refusal1"
        value={sectionDataSingle.refusal1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 2"
        name="refusal2"
        value={sectionDataSingle.refusal2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 3"
        name="refusal3"
        value={sectionDataSingle.refusal3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 4"
        name="refusal4"
        value={sectionDataSingle.refusal4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 5"
        name="refusal5"
        value={sectionDataSingle.refusal5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 6"
        name="refusal6"
        value={sectionDataSingle.refusal6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 7"
        name="refusal7"
        value={sectionDataSingle.refusal7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 8"
        name="refusal8"
        value={sectionDataSingle.refusal8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 9"
        name="refusal9"
        value={sectionDataSingle.refusal9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 10"
        name="refusal10"
        value={sectionDataSingle.refusal10}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Book Appointment Button Text"
        name="bookAppointment"
        value={sectionDataSingle.bookAppointment}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="whyChooseUsHeading"
        value={sectionDataSingle.whyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us 1"
        name="whyChooseUs1"
        value={sectionDataSingle.whyChooseUs1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us 2"
        name="whyChooseUs2"
        value={sectionDataSingle.whyChooseUs2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us 3"
        name="whyChooseUs3"
        value={sectionDataSingle.whyChooseUs3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us 4"
        name="whyChooseUs4"
        value={sectionDataSingle.whyChooseUs4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqStartsHeading}>Visibility Controls</h1>

      <div className={styles.testimonialsVisibility}>
        <p>Show Testimonials (Y/N)</p>
        <input
          placeholder="Show Testimonials"
          name="showTestimonials"
          value={sectionDataSingle.showTestimonials}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div className={styles.testimonialsVisibility}>
        <p>Show Blogs (Y/N)</p>
        <input
          placeholder="Show Blogs"
          name="showBlogs"
          value={sectionDataSingle.showBlogs}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div className={styles.testimonialsVisibility}>
        <p>Show Eligibility Assessment (Y/N)</p>
        <input
          placeholder="Show Eligibility Assessment"
          name="showEligibilityAssessment"
          value={sectionDataSingle.showEligibilityAssessment}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <p className={styles.testimonialsDisclamier}>
        Note: Visibility On the Selected Page is totally dependent on the input value above. If you want to display the section, just write "Y" without quotes, anything else will be considered as "N" even "y". If not want to display then just write "N" without quotes.
      </p>

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ Heading"
        name="faqHeading"
        value={sectionDataSingle.faqHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 1"
        name="q1"
        value={sectionDataSingle.q1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionDataSingle.qa1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 2"
        name="q2"
        value={sectionDataSingle.q2}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionDataSingle.qa2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 3"
        name="q3"
        value={sectionDataSingle.q3}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionDataSingle.qa3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 4"
        name="q4"
        value={sectionDataSingle.q4}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionDataSingle.qa4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 5"
        name="q5"
        value={sectionDataSingle.q5}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionDataSingle.qa5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Question 6"
        name="q6"
        value={sectionDataSingle.q6}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionDataSingle.qa6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>

      <div className={styles.editIcons}>
        {editMode ? (
          <Image
            loading="lazy"
            height={50}
            width={100}
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
          <Image
            loading="lazy"
            height={50}
            width={100}
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default RcipContent;