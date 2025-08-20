import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const EducationCategoryContent = () => {
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
    heading: "",
    description1: "",
    description2: "",
    whatIsHeading: "",
    whatIsPara: "",
    benefitsHeading: "",
    benefitsList1: "",
    benefitsList2: "",
    benefitsList3: "",
    benefitsList4: "",
    benefitsList5: "",
    eligibilityExpressEntryHeading: "",
    eligibilityExpressEntryPara: "",
    eligibilityExpressEntrySteps1: "",
    eligibilityExpressEntrySteps2: "",
    eligibilityExpressEntrySteps3: "",
    eligibilityExpressEntrySteps4: "",
    eligibilityExpressEntrySteps5: "",
    eligibilityExpressEntrySteps6: "",
    eligibilityCriteriaHeading: "",
    eligibilityCriteriaList1: "",
    eligibilityCriteriaList2: "",
    eligibilityCriteriaList3: "",
    eligibilityCriteriaList4: "",
    eligibilityCriteriaList5: "",
    eligibilityCriteriaList6: "",
    eligibleNOCCodesHeading: "",
    eligibleNOCCodesList1_occupation: "",
    eligibleNOCCodesList1_nocCode: "",
    eligibleNOCCodesList2_occupation: "",
    eligibleNOCCodesList2_nocCode: "",
    eligibleNOCCodesList3_occupation: "",
    eligibleNOCCodesList3_nocCode: "",
    eligibleNOCCodesList4_occupation: "",
    eligibleNOCCodesList4_nocCode: "",
    eligibleNOCCodesList5_occupation: "",
    eligibleNOCCodesList5_nocCode: "",
    eligibleNOCCodesList6_occupation: "",
    eligibleNOCCodesList6_nocCode: "",
    eligibleNOCCodesList7_occupation: "",
    eligibleNOCCodesList7_nocCode: "",
    eligibleNOCCodesNote: "",
    drawHistoryHeading: "",
    drawHistoryPara: "",
    howToApplyHeading: "",
    howToApplySteps1: "",
    howToApplySteps2: "",
    howToApplySteps3: "",
    howToApplySteps4: "",
    refusalHeading: "",
    refusalList1: "",
    refusalList2: "",
    refusalList3: "",
    refusalList4: "",
    refusalList5: "",
    refusalList6: "",
    refusalList7: "",
    refusalList8: "",
    refusalList9: "",
    stillNotSureHeading: "",
    stillNotSurePara: "",
    bookAppointmentText: "",
    whyChooseUsHeading: "",
    whyChooseUsList1: "",
    whyChooseUsList2: "",
    whyChooseUsList3: "",
    whyChooseUsList4: "",
    faq_heading: "",
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
    showTestimonials: "",
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
      description1: sectionDataSingle.description1,
      description2: sectionDataSingle.description2,
      whatIsHeading: sectionDataSingle.whatIsHeading,
      whatIsPara: sectionDataSingle.whatIsPara,
      benefitsHeading: sectionDataSingle.benefitsHeading,
      benefitsList: [
        sectionDataSingle.benefitsList1,
        sectionDataSingle.benefitsList2,
        sectionDataSingle.benefitsList3,
        sectionDataSingle.benefitsList4,
        sectionDataSingle.benefitsList5,
      ],
      eligibilityExpressEntryHeading: sectionDataSingle.eligibilityExpressEntryHeading,
      eligibilityExpressEntryPara: sectionDataSingle.eligibilityExpressEntryPara,
      eligibilityExpressEntrySteps: [
        sectionDataSingle.eligibilityExpressEntrySteps1,
        sectionDataSingle.eligibilityExpressEntrySteps2,
        sectionDataSingle.eligibilityExpressEntrySteps3,
        sectionDataSingle.eligibilityExpressEntrySteps4,
        sectionDataSingle.eligibilityExpressEntrySteps5,
        sectionDataSingle.eligibilityExpressEntrySteps6,
      ],
      eligibilityCriteriaHeading: sectionDataSingle.eligibilityCriteriaHeading,
      eligibilityCriteriaList: [
        sectionDataSingle.eligibilityCriteriaList1,
        sectionDataSingle.eligibilityCriteriaList2,
        sectionDataSingle.eligibilityCriteriaList3,
        sectionDataSingle.eligibilityCriteriaList4,
        sectionDataSingle.eligibilityCriteriaList5,
        sectionDataSingle.eligibilityCriteriaList6,
      ],
      eligibleNOCCodesHeading: sectionDataSingle.eligibleNOCCodesHeading,
      eligibleNOCCodesList: [
        {
          occupation: sectionDataSingle.eligibleNOCCodesList1_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList1_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList2_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList2_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList3_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList3_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList4_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList4_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList5_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList5_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList6_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList6_nocCode,
        },
        {
          occupation: sectionDataSingle.eligibleNOCCodesList7_occupation,
          nocCode: sectionDataSingle.eligibleNOCCodesList7_nocCode,
        },
      ],
      eligibleNOCCodesNote: sectionDataSingle.eligibleNOCCodesNote,
      drawHistoryHeading: sectionDataSingle.drawHistoryHeading,
      drawHistoryPara: sectionDataSingle.drawHistoryPara,
      howToApplyHeading: sectionDataSingle.howToApplyHeading,
      howToApplySteps: [
        sectionDataSingle.howToApplySteps1,
        sectionDataSingle.howToApplySteps2,
        sectionDataSingle.howToApplySteps3,
        sectionDataSingle.howToApplySteps4,
      ],
      refusalHeading: sectionDataSingle.refusalHeading,
      refusalList: [
        sectionDataSingle.refusalList1,
        sectionDataSingle.refusalList2,
        sectionDataSingle.refusalList3,
        sectionDataSingle.refusalList4,
        sectionDataSingle.refusalList5,
        sectionDataSingle.refusalList6,
        sectionDataSingle.refusalList7,
        sectionDataSingle.refusalList8,
        sectionDataSingle.refusalList9,
      ],
      stillNotSureHeading: sectionDataSingle.stillNotSureHeading,
      stillNotSurePara: sectionDataSingle.stillNotSurePara,
      bookAppointmentText: sectionDataSingle.bookAppointmentText,
      whyChooseUsHeading: sectionDataSingle.whyChooseUsHeading,
      whyChooseUsList: [
        sectionDataSingle.whyChooseUsList1,
        sectionDataSingle.whyChooseUsList2,
        sectionDataSingle.whyChooseUsList3,
        sectionDataSingle.whyChooseUsList4,
      ],
      faq_heading: sectionDataSingle.faq_heading,
      faqs: [
        { question: sectionDataSingle.q1, answer: sectionDataSingle.qa1 },
        { question: sectionDataSingle.q2, answer: sectionDataSingle.qa2 },
        { question: sectionDataSingle.q3, answer: sectionDataSingle.qa3 },
        { question: sectionDataSingle.q4, answer: sectionDataSingle.qa4 },
        { question: sectionDataSingle.q5, answer: sectionDataSingle.qa5 },
      ],
      showTestimonials: sectionDataSingle.showTestimonials,
      showBlogs: sectionDataSingle.showBlogs,
      showEligibilityAssessment: sectionDataSingle.showEligibilityAssessment,
    };

    fetch(
      `https://brightlight-node.onrender.com/educationCategory/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/educationCategory")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const doc = data[0];
          setSectionDataSingle({
            _id: doc._id,
            heading: doc.heading || "",
            description1: doc.description1 || "",
            description2: doc.description2 || "",
            whatIsHeading: doc.whatIsHeading || "",
            whatIsPara: doc.whatIsPara || "",
            benefitsHeading: doc.benefitsHeading || "",
            benefitsList1: doc.benefitsList?.[0] || "",
            benefitsList2: doc.benefitsList?.[1] || "",
            benefitsList3: doc.benefitsList?.[2] || "",
            benefitsList4: doc.benefitsList?.[3] || "",
            benefitsList5: doc.benefitsList?.[4] || "",
            eligibilityExpressEntryHeading: doc.eligibilityExpressEntryHeading || "",
            eligibilityExpressEntryPara: doc.eligibilityExpressEntryPara || "",
            eligibilityExpressEntrySteps1: doc.eligibilityExpressEntrySteps?.[0] || "",
            eligibilityExpressEntrySteps2: doc.eligibilityExpressEntrySteps?.[1] || "",
            eligibilityExpressEntrySteps3: doc.eligibilityExpressEntrySteps?.[2] || "",
            eligibilityExpressEntrySteps4: doc.eligibilityExpressEntrySteps?.[3] || "",
            eligibilityExpressEntrySteps5: doc.eligibilityExpressEntrySteps?.[4] || "",
            eligibilityExpressEntrySteps6: doc.eligibilityExpressEntrySteps?.[5] || "",
            eligibilityCriteriaHeading: doc.eligibilityCriteriaHeading || "",
            eligibilityCriteriaList1: doc.eligibilityCriteriaList?.[0] || "",
            eligibilityCriteriaList2: doc.eligibilityCriteriaList?.[1] || "",
            eligibilityCriteriaList3: doc.eligibilityCriteriaList?.[2] || "",
            eligibilityCriteriaList4: doc.eligibilityCriteriaList?.[3] || "",
            eligibilityCriteriaList5: doc.eligibilityCriteriaList?.[4] || "",
            eligibilityCriteriaList6: doc.eligibilityCriteriaList?.[5] || "",
            eligibleNOCCodesHeading: doc.eligibleNOCCodesHeading || "",
            eligibleNOCCodesList1_occupation: doc.eligibleNOCCodesList?.[0]?.occupation || "",
            eligibleNOCCodesList1_nocCode: doc.eligibleNOCCodesList?.[0]?.nocCode || "",
            eligibleNOCCodesList2_occupation: doc.eligibleNOCCodesList?.[1]?.occupation || "",
            eligibleNOCCodesList2_nocCode: doc.eligibleNOCCodesList?.[1]?.nocCode || "",
            eligibleNOCCodesList3_occupation: doc.eligibleNOCCodesList?.[2]?.occupation || "",
            eligibleNOCCodesList3_nocCode: doc.eligibleNOCCodesList?.[2]?.nocCode || "",
            eligibleNOCCodesList4_occupation: doc.eligibleNOCCodesList?.[3]?.occupation || "",
            eligibleNOCCodesList4_nocCode: doc.eligibleNOCCodesList?.[3]?.nocCode || "",
            eligibleNOCCodesList5_occupation: doc.eligibleNOCCodesList?.[4]?.occupation || "",
            eligibleNOCCodesList5_nocCode: doc.eligibleNOCCodesList?.[4]?.nocCode || "",
            eligibleNOCCodesList6_occupation: doc.eligibleNOCCodesList?.[5]?.occupation || "",
            eligibleNOCCodesList6_nocCode: doc.eligibleNOCCodesList?.[5]?.nocCode || "",
            eligibleNOCCodesList7_occupation: doc.eligibleNOCCodesList?.[6]?.occupation || "",
            eligibleNOCCodesList7_nocCode: doc.eligibleNOCCodesList?.[6]?.nocCode || "",
            eligibleNOCCodesNote: doc.eligibleNOCCodesNote || "",
            drawHistoryHeading: doc.drawHistoryHeading || "",
            drawHistoryPara: doc.drawHistoryPara || "",
            howToApplyHeading: doc.howToApplyHeading || "",
            howToApplySteps1: doc.howToApplySteps?.[0] || "",
            howToApplySteps2: doc.howToApplySteps?.[1] || "",
            howToApplySteps3: doc.howToApplySteps?.[2] || "",
            howToApplySteps4: doc.howToApplySteps?.[3] || "",
            refusalHeading: doc.refusalHeading || "",
            refusalList1: doc.refusalList?.[0] || "",
            refusalList2: doc.refusalList?.[1] || "",
            refusalList3: doc.refusalList?.[2] || "",
            refusalList4: doc.refusalList?.[3] || "",
            refusalList5: doc.refusalList?.[4] || "",
            refusalList6: doc.refusalList?.[5] || "",
            refusalList7: doc.refusalList?.[6] || "",
            refusalList8: doc.refusalList?.[7] || "",
            refusalList9: doc.refusalList?.[8] || "",
            stillNotSureHeading: doc.stillNotSureHeading || "",
            stillNotSurePara: doc.stillNotSurePara || "",
            bookAppointmentText: doc.bookAppointmentText || "",
            whyChooseUsHeading: doc.whyChooseUsHeading || "",
            whyChooseUsList1: doc.whyChooseUsList?.[0] || "",
            whyChooseUsList2: doc.whyChooseUsList?.[1] || "",
            whyChooseUsList3: doc.whyChooseUsList?.[2] || "",
            whyChooseUsList4: doc.whyChooseUsList?.[3] || "",
            faq_heading: doc.faq_heading || "",
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
            showTestimonials: doc.showTestimonials || "",
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
        placeholder="Main Heading"
        name="heading"
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 1"
        name="description1"
        value={sectionDataSingle.description1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="What Is Heading"
        name="whatIsHeading"
        value={sectionDataSingle.whatIsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What Is Description"
        name="whatIsPara"
        value={sectionDataSingle.whatIsPara}
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
      {Array.from({ length: 5 }, (_, i) => (
        <textarea
          key={`benefitsList${i + 1}`}
          placeholder={`Benefit ${i + 1}`}
          name={`benefitsList${i + 1}`}
          value={sectionDataSingle[`benefitsList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility for Express Entry Heading"
        name="eligibilityExpressEntryHeading"
        value={sectionDataSingle.eligibilityExpressEntryHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility for Express Entry Description"
        name="eligibilityExpressEntryPara"
        value={sectionDataSingle.eligibilityExpressEntryPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`eligibilityExpressEntrySteps${i + 1}`}
          placeholder={`Eligibility Step ${i + 1}`}
          name={`eligibilityExpressEntrySteps${i + 1}`}
          value={sectionDataSingle[`eligibilityExpressEntrySteps${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility Criteria Heading"
        name="eligibilityCriteriaHeading"
        value={sectionDataSingle.eligibilityCriteriaHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`eligibilityCriteriaList${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`eligibilityCriteriaList${i + 1}`}
          value={sectionDataSingle[`eligibilityCriteriaList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligible NOC Codes Heading"
        name="eligibleNOCCodesHeading"
        value={sectionDataSingle.eligibleNOCCodesHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 7 }, (_, i) => (
        <>
          <input
            key={`eligibleNOCCodesList${i + 1}_occupation`}
            placeholder={`NOC Occupation ${i + 1}`}
            name={`eligibleNOCCodesList${i + 1}_occupation`}
            value={sectionDataSingle[`eligibleNOCCodesList${i + 1}_occupation`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            key={`eligibleNOCCodesList${i + 1}_nocCode`}
            placeholder={`NOC Code ${i + 1}`}
            name={`eligibleNOCCodesList${i + 1}_nocCode`}
            value={sectionDataSingle[`eligibleNOCCodesList${i + 1}_nocCode`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </>
      ))}
      <textarea
        placeholder="Eligible NOC Codes Note"
        name="eligibleNOCCodesNote"
        value={sectionDataSingle.eligibleNOCCodesNote}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Draw History Heading"
        name="drawHistoryHeading"
        value={sectionDataSingle.drawHistoryHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Draw History Description"
        name="drawHistoryPara"
        value={sectionDataSingle.drawHistoryPara}
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
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`howToApplySteps${i + 1}`}
          placeholder={`Application Step ${i + 1}`}
          name={`howToApplySteps${i + 1}`}
          value={sectionDataSingle[`howToApplySteps${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Common Reasons for Refusals Heading"
        name="refusalHeading"
        value={sectionDataSingle.refusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 9 }, (_, i) => (
        <textarea
          key={`refusalList${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`refusalList${i + 1}`}
          value={sectionDataSingle[`refusalList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Still Not Sure? Heading"
        name="stillNotSureHeading"
        value={sectionDataSingle.stillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure? Paragraph"
        name="stillNotSurePara"
        value={sectionDataSingle.stillNotSurePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Book Appointment Text"
        name="bookAppointmentText"
        value={sectionDataSingle.bookAppointmentText}
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
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`whyChooseUsList${i + 1}`}
          placeholder={`Why Choose Us Point ${i + 1}`}
          name={`whyChooseUsList${i + 1}`}
          value={sectionDataSingle[`whyChooseUsList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>
      <input
        placeholder="FAQ Heading"
        name="faq_heading"
        value={sectionDataSingle.faq_heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 5 }, (_, i) => (
        <>
          <input
            key={`q${i + 1}`}
            placeholder={`Question ${i + 1}`}
            name={`q${i + 1}`}
            value={sectionDataSingle[`q${i + 1}`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            key={`qa${i + 1}`}
            placeholder={`Answer ${i + 1}`}
            name={`qa${i + 1}`}
            value={sectionDataSingle[`qa${i + 1}`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </>
      ))}

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>

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

export default EducationCategoryContent;