import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const FlagPolingContent = () => {
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
    programStatus: "",
    heading: "",
    aboutHeading: "",
    aboutPara: "",
    benefitsHeading: "",
    benefits1: "",
    benefits2: "",
    benefits3: "",
    eligibilityHeading: "",
    eligibility1: "",
    eligibility2: "",
    eligibility3: "",
    eligibility4: "",
    eligibility5: "",
    importantTipHeading: "",
    importantTipPara: "",
    ctaHeading: "",
    ctaPara: "",
    bookAppointment: "",
    whyChooseUsHeading: "",
    whyChooseUs1: "",
    whyChooseUs2: "",
    whyChooseUs3: "",
    whyChooseUs4: "",
    showTestimonials: "",
    showVideoTestimonials: "",
    showWrittenTestimonials: "",
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
      programStatus: sectionDataSingle.programStatus,
      heading: sectionDataSingle.heading,
      aboutHeading: sectionDataSingle.aboutHeading,
      aboutPara: sectionDataSingle.aboutPara,
      benefitsHeading: sectionDataSingle.benefitsHeading,
      benefitsList: [
        sectionDataSingle.benefits1,
        sectionDataSingle.benefits2,
        sectionDataSingle.benefits3,
      ],
      eligibilityHeading: sectionDataSingle.eligibilityHeading,
      eligibilityList: [
        sectionDataSingle.eligibility1,
        sectionDataSingle.eligibility2,
        sectionDataSingle.eligibility3,
        sectionDataSingle.eligibility4,
        sectionDataSingle.eligibility5,
      ],
      importantTipHeading: sectionDataSingle.importantTipHeading,
      importantTipPara: sectionDataSingle.importantTipPara,
      ctaHeading: sectionDataSingle.ctaHeading,
      ctaPara: sectionDataSingle.ctaPara,
      bookAppointment: sectionDataSingle.bookAppointment,
      whyChooseUsHeading: sectionDataSingle.whyChooseUsHeading,
      whyChooseUsList: [
        sectionDataSingle.whyChooseUs1,
        sectionDataSingle.whyChooseUs2,
        sectionDataSingle.whyChooseUs3,
        sectionDataSingle.whyChooseUs4,
      ],
      showTestimonials: sectionDataSingle.showTestimonials,
      showVideoTestimonials: sectionDataSingle.showVideoTestimonials,
      showWrittenTestimonials: sectionDataSingle.showWrittenTestimonials,
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
      `https://brightlight-node.onrender.com/flagpoling/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/flagpoling")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const doc = data[0];
          setSectionDataSingle({
            _id: doc._id,
            programStatus: doc.programStatus || "",
            heading: doc.heading || "",
            aboutHeading: doc.aboutHeading || "",
            aboutPara: doc.aboutPara || "",
            benefitsHeading: doc.benefitsHeading || "",
            benefits1: doc.benefitsList?.[0] || "",
            benefits2: doc.benefitsList?.[1] || "",
            benefits3: doc.benefitsList?.[2] || "",
            eligibilityHeading: doc.eligibilityHeading || "",
            eligibility1: doc.eligibilityList?.[0] || "",
            eligibility2: doc.eligibilityList?.[1] || "",
            eligibility3: doc.eligibilityList?.[2] || "",
            eligibility4: doc.eligibilityList?.[3] || "",
            eligibility5: doc.eligibilityList?.[4] || "",
            importantTipHeading: doc.importantTipHeading || "",
            importantTipPara: doc.importantTipPara || "",
            ctaHeading: doc.ctaHeading || "",
            ctaPara: doc.ctaPara || "",
            bookAppointment: doc.bookAppointment || "",
            whyChooseUsHeading: doc.whyChooseUsHeading || "",
            whyChooseUs1: doc.whyChooseUsList?.[0] || "",
            whyChooseUs2: doc.whyChooseUsList?.[1] || "",
            whyChooseUs3: doc.whyChooseUsList?.[2] || "",
            whyChooseUs4: doc.whyChooseUsList?.[3] || "",
            showTestimonials: doc.showTestimonials || "",
            showVideoTestimonials: doc.showVideoTestimonials || "",
            showWrittenTestimonials: doc.showWrittenTestimonials || "",
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
        placeholder="Program Status"
        name="programStatus"
        value={sectionDataSingle.programStatus}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="About Heading"
        name="aboutHeading"
        value={sectionDataSingle.aboutHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="About Paragraph"
        name="aboutPara"
        value={sectionDataSingle.aboutPara}
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

      <input
        placeholder="Important Tip Heading"
        name="importantTipHeading"
        value={sectionDataSingle.importantTipHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Tip Paragraph"
        name="importantTipPara"
        value={sectionDataSingle.importantTipPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="CTA Heading"
        name="ctaHeading"
        value={sectionDataSingle.ctaHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="CTA Paragraph"
        name="ctaPara"
        value={sectionDataSingle.ctaPara}
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
        <p>Show Video Testimonials (Y/N)</p>
        <input
          placeholder="Show Video Testimonials"
          name="showVideoTestimonials"
          value={sectionDataSingle.showVideoTestimonials}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div className={styles.testimonialsVisibility}>
        <p>Show Written Testimonials (Y/N)</p>
        <input
          placeholder="Show Written Testimonials"
          name="showWrittenTestimonials"
          value={sectionDataSingle.showWrittenTestimonials}
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

export default FlagPolingContent;