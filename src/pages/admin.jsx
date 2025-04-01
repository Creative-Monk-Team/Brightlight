// Styles
import styles from "../styles/Admin.module.css";

// Assets
import blueLogo from "../assets/brlightlight-icon.webp";
import user from "../assets/user.png";
import magnify from "../assets/search-gray.png";

// React Hooks and Utilities
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

// Components
import Image from "next/image";
import PrivateRoute from "../components/PrivateRoute";

// Meta Sections
import HomeMeta from "../admin_sections/HomeMeta";
import AboutMeta from "../admin_sections/AboutMeta";
import ContactMeta from "../admin_sections/ContactMeta";
import NewsMeta from "../admin_sections/NewsMeta";
import BlogsMeta from "../admin_sections/BlogsMeta";
import FederalMeta from "../admin_sections/FederalMeta";
import TransportMeta from "../admin_sections/TransportMeta";
import CategoryMeta from "../admin_sections/CategoryMeta";
import CLBMeta from "../admin_sections/CLBMeta";
import BCPNPMeta from "../admin_sections/BCPNPMeta";
import ExpressMeta from "../admin_sections/ExpressMeta";
import AdditionalDocumentMeta from "../admin_sections/AdditionalDocumentMeta";
import AdoptionMeta from "../admin_sections/AdoptionMeta";
import BcpnpPageMeta from "../admin_sections/BcpnpPageMeta";
import AgricultureAndAgriFoodMeta from "../admin_sections/AgricultureAndAgriFoodMeta";
import AgricultureStreamLMIAMeta from "../admin_sections/AgricultureStreamLMIAMeta";
import AgriFoodPilotProgramMeta from "../admin_sections/AgriFoodPilotProgramMeta";
import BridgingOpenWorkPermitLPMeta from "../admin_sections/BridgingOpenWorkPermitLPMeta";
import BusinessVisitorVisaMeta from "../admin_sections/BusinessVisitorVisaMeta";
import CanadianExperienceClassMeta from "../admin_sections/CanadianExperienceClassMeta";
import CbyMeta from "../admin_sections/CbyMeta";
import ChangeCollegeProgramMeta from "../admin_sections/ChangeCollegeProgramMeta";
import CategoryBasedExpressMeta from "../admin_sections/CategoryBasedExpressMeta";
import CitizenshipMeta from "../admin_sections/CitizenshipMeta";
import CommonLawPartnerTemporaryContentMeta from "../admin_sections/CommonLawPartnerTemporaryMeta";
import CommonLawPartnerPermanentContentMeta from "../admin_sections/CommonLawPartnerPermanentMeta";
import DependentChildrenMeta from "../admin_sections/DependentChildrenMeta";
import DualIntentVisaMeta from "../admin_sections/DualIntentVisaMeta";
import EntryLevelSemiSkilledMeta from "../admin_sections/EntryLevelSemiSkilledMeta";
import ExtensionsDraftMeta from "../admin_sections/ExtensionsDraftMeta";
import CommonLawPartnerInternationalMeta from "../admin_sections/CommonLawParenerInternationalMeta";
import FamilyReunificationMeta from "../admin_sections/FamilyReunificationMeta";
import FederalSkilledTradeProgramMeta from "../admin_sections/FederalSkilledTradeProgramMeta";
import FederalSkilledWorkerProgramMeta from "../admin_sections/FederalSkilledWorkerProgramMeta";
import FlagPolingMeta from "../admin_sections/FlagPolingMeta";
import FrancophoneMeta from "../admin_sections/FrancophoneMeta";
import FrenchTargetedDrawMeta from "../admin_sections/FrenchTargetDrawMeta";
import HealthAuthoritiesStreamMeta from "../admin_sections/HealthAuthoritiesStreamMeta";
import GlobalStreamLMIAMeta from "../admin_sections/GlobalStreamLMIAMeta";
import HealthcareTargetedDrawMeta from "../admin_sections/HealthcareTargetedDrawMeta";
import HumanContent from "../admin_sections/HumanitarianCompassionateMeta";
import InCaregiverMeta from "../admin_sections/InCaregiverMeta";
import InsideCanadaMeta from "../admin_sections/InsideCanadaMeta";
import InternationalGraduateMeta from "../admin_sections/InternationalGraduateMeta";
import InternationalPostGraduateMeta from "../admin_sections/InternationalPostGraduateMeta";
import LMIAReviewedMeta from "../admin_sections/LMIAReviewedMeta";
import LonelyCanadianMeta from "../admin_sections/LonelyCanadianMeta";
import LowWageLMIAMeta from "../admin_sections/LowWageLMIAMeta";
import NonSdsMeta from "../admin_sections/NonSdsMeta";
import OpenWorkCanadaMeta from "../admin_sections/OpenWorkCanadaMeta";
import OpenWorkPermitMeta from "../admin_sections/OpenWorkPermitMeta";
import OpenWorkForSpousalInlandMeta from "../admin_sections/OpenWorkForSpousalInlandMeta";
import OpenWorkVulnerableMeta from "../admin_sections/OpenWorkVulnerableMeta";
import OrphanMeta from "../admin_sections/OrphanMeta";
import OutsideCanadaMeta from "../admin_sections/OutsideCanadaMeta";
import ParentsGrandparentsMeta from "../admin_sections/ParentsGrandparentsMeta";
import PathwaysForCaregiverMeta from "../admin_sections/PathwaysForCaregiverMeta";
import PRPathwayCaregiverMeta from "../admin_sections/PermanentResidencyPathwayCaregiverMeta";
import PGWPMeta from "../admin_sections/PGWPMeta";
import PilotProgramMeta from "../admin_sections/PilotProgramsMeta";
import PnpMeta from "../admin_sections/PnpMeta";
import PreviousDrawHistoryMeta from "../admin_sections/PreviousDrawHistory";
import PrioritiesProgramMeta from "../admin_sections/PrioritiesProgramMeta";
import PrRenewalMeta from "../admin_sections/PrRenewalMeta";
import RestorationMeta from "../admin_sections/RestorationStatusMeta";
import ReconsiderationMeta from "../admin_sections/ReconsiderationMeta";
import ReplyToPFLMeta from "../admin_sections/ReplyToPFLMeta";
import RnipMeta from "../admin_sections/RnipMeta";
import SamesexMeta from "../admin_sections/SamesexMeta";
import SdsMeta from "../admin_sections/SdsMeta";
import SkilledWorkerStreamMeta from "../admin_sections/SkilledWorkerStreamMeta";
import SpousalOpenWorkPermitMeta from "../admin_sections/SpousalOpenWorkPermitMeta";
import SpousalCommonLawSponMeta from "../admin_sections/SpousalCommonLawSponMeta";
import SpouseInlandMeta from "../admin_sections/SpouseInlandMeta";
import SpouseOutlandMeta from "../admin_sections/SpouseOutlandMeta";
import StemTargetedDrawMeta from "../admin_sections/StemTargetedDrawMeta";
import StudentVisaMeta from "../admin_sections/StudentVisaMeta";
import StudyPermitMinorsMeta from "../admin_sections/StudyPermitMinorsMeta";
import SuperVisaMeta from "../admin_sections/SuperVisaMeta";
import TemporaryResidencyMeta from "../admin_sections/TemporartResidencyMeta";
import TemporaryResidencyPermitMeta from "../admin_sections/TemporaryResidentPermitMeta";
import TradeOccupationMeta from "../admin_sections/TradeOccupationTargetedMeta";
import TransportOccupationTarMeta from "../admin_sections/TransportOccupationTargetedDrawMeta";
import VisitorToStudentMeta from "../admin_sections/VisitoToStudentMeta";
import VisitorVisaMeta from "../admin_sections/VisitorVisaMeta";
import WorkPermitMeta from "../admin_sections/WorkpermitMeta";
import PermanentResidencyMeta from "../admin_sections/PermanentResidencyMeta";
import ImmigrationToolsMeta from "../admin_sections/ImmigrationToolsMeta";
import MoreServicesMeta from "../admin_sections/MoreServicesMeta";

// Content Sections
import HomeTop from "../admin_sections/HomeTop";
import LoveneetBanner from "../admin_sections/LoveneetBanner";
import MemberOf from "../admin_sections/MemberOf";
import Features from "../admin_sections/Features";
import OurProcess from "../admin_sections/OurProcess";
import Services from "../admin_sections/Services";
import Achievements from "../admin_sections/Achiements";
import Testimonials from "../admin_sections/Testimonials";
import TestimonialsVideo from "../admin_sections/TestimonialsVideo";
import FAQ from "../admin_sections/FAQ";
import Blogs from "../admin_sections/Blogs";
import AboutTop from "../admin_sections/AboutTop";
import OurFoundation from "../admin_sections/OurFoundation";
import Vision from "../admin_sections/Vision";
import Pillars from "../admin_sections/Pillars";
import Directors from "../admin_sections/Directors";
import WeAre from "../admin_sections/WeAre";
import WeAreSmall from "../admin_sections/WeAreSmall";
import BestChoice from "../admin_sections/BestChoice";
import SocialMedia from "../admin_sections/SocialMedia";
import Globally from "../admin_sections/Globally";
import Map from "../admin_sections/Map";
import FoundationImg from "../admin_sections/FoundationImg";
import VisionImg from "../admin_sections/VisionImg";
import PillarsImg from "../admin_sections/PillarsImg";
import ContactTop from "../admin_sections/ContactTop";
import Privacy from "../admin_sections/Privacy";
import Terms from "../admin_sections/Terms";
import AllBlogs from "../admin_sections/AllBlogs";
import AddBlog from "../admin_sections/AddBlog";
import AllNews from "../admin_sections/AllNews";
import AddNews from "../admin_sections/AddNews";
import FederalSkilled from "../admin_sections/Federal";
import TransportOccupation from "../admin_sections/Transport";
import CategoryBased from "../admin_sections/Category";
import CLB from "../admin_sections/CLB";
import BCPNP from "../admin_sections/BCPNP";
import ExpressEntry from "../admin_sections/Express";
import AboutAchievement from "../admin_sections/AboutAchievements";
import AdditionalDocument from "../admin_sections/AdditionalDocument";
import Adoption from "../admin_sections/Adoption";
import BcpnpPageContent from "../admin_sections/BcpnpPage";
import AgricultureAndAgriFoodPageContent from "../admin_sections/AgricultureAndAgriFood";
import AgricultureStreamLMIAContent from "../admin_sections/AgricultureStreamLMIA";
import AgriFoodPilotProgramContent from "../admin_sections/AgriFoodPilotProgramContent";
import BridgingOpenWorkPermitLPContent from "../admin_sections/BridgingOpenWorkPermitLP";
import BusinessVisitorVisaContent from "../admin_sections/BusinessVisitorVisa";
import CanadianExperienceClassContent from "../admin_sections/CanadianExperienceClass";
import CbyContent from "../admin_sections/Cby";
import ChangeCollegeProgramContent from "../admin_sections/ChangeCollegeProgram";
import CategoryBasedExpressContent from "../admin_sections/CategoryBasedExpress";
import CitizenshipContent from "../admin_sections/Citizenship";
import CommonLawPartnerTemporaryContent from "../admin_sections/CommonLawPartnerTemporary";
import CommonLawPartnerPermanentContent from "../admin_sections/CommonLawPartnerPermanent";
import DependentChildrenContent from "../admin_sections/DependentChildren";
import DualIntentVisaPageContent from "../admin_sections/DualIntentVisa";
import EntryLevelSemiSkilledContent from "../admin_sections/EntryLevelSemiSkilled";
import ExtensionsDraftContent from "../admin_sections/ExtensionsDraft";
import CommonLawPartnerInternationalContent from "../admin_sections/CommonLawParenerInternational";
import FamilyReunificationContent from "../admin_sections/FamilyReunification";
import FederalSkilledTradeProgramContent from "../admin_sections/FederalSkilledTradeProgram";
import FederalSkilledWorkerProgramContent from "../admin_sections/FederalSkilledWorkerProgram";
import FlagPolingContent from "../admin_sections/FlagPoling";
import FrancophoneContent from "../admin_sections/Francophone";
import FrenchTargetedDrawContent from "../admin_sections/FrenchTargetDraw";
import HealthAuthoritiesStreamContent from "../admin_sections/HealthAuthoritiesStream";
import GlobalStreamLMIAContent from "../admin_sections/GlobalStreamLMIA";
import HealthcareTargetedDrawContent from "../admin_sections/HealthcareTargetedDraw";
import HumanPageContent from "../admin_sections/HumanitarianCompassionate";
import InCaregiverContent from "../admin_sections/InCaregiver";
import InsideCanadaContent from "../admin_sections/InsideCanada";
import InternationalGraduateContent from "../admin_sections/InternationalGraduate";
import InternationalPostGraduateContent from "../admin_sections/InternationalPostGraduate";
import LMIAReviewedContent from "../admin_sections/LMIAReviewed";
import LonelyCanadianContent from "../admin_sections/LonelyCanadian";
import LowWageLMIAContent from "../admin_sections/LowWageLMIA";
import NonSdsContent from "../admin_sections/NonSds";
import OpenWorkCanadaContent from "../admin_sections/OpenWorkCanada";
import OpenWorkPermitContent from "../admin_sections/OpenWorkPermit";
import OpenWorkForSpousalInlandContent from "../admin_sections/OpenWorkForSpousalInland";
import OpenWorkVulnerableContent from "../admin_sections/OpenWorkVulnerable";
import OrphanContent from "../admin_sections/Orphan";
import OutsideCanadaContent from "../admin_sections/OutsideCanada";
import ParentsGrandparentsContent from "../admin_sections/ParentsGrandparents";
import PathwaysForCaregiverContent from "../admin_sections/PathwaysForCaregiver";
import PRPathwayCaregiverContent from "../admin_sections/PermanentResidencyPathwayCaregiver";
import PGWP from "../admin_sections/PGWP";
import PilotProgramContent from "../admin_sections/PilotPrograms";
import PnpContent from "../admin_sections/Pnp";
import PrioritiesProgramContent from "../admin_sections/PrioritiesProgram";
import PrRenewalContent from "../admin_sections/PrRenewal";
import RestorationContent from "../admin_sections/RestorationStatus";
import ReconsiderationContent from "../admin_sections/Reconsideration";
import ReplyToPFLContent from "../admin_sections/ReplyToPFL";
import RnipContent from "../admin_sections/Rnip";
import SamesexContent from "../admin_sections/Samesex";
import SdsContent from "../admin_sections/Sds";
import SkilledWorkerStreamContent from "../admin_sections/SkilledWorkerStream";
import SpousalOpenWorkPermitContent from "../admin_sections/SpousalOpenWorkPermit";
import SpousalCommonLawSponContent from "../admin_sections/SpousalCommonLawSpon";
import SpouseInlandContent from "../admin_sections/SpouseInland";
import SpouseOutlandContent from "../admin_sections/SpouseOutland";
import StemTargetedDrawContent from "../admin_sections/StemTargetedDraw";
import StudentVisaContent from "../admin_sections/StudentVisa";
import StudyPermitMinorsContent from "../admin_sections/StudyPermitMinors";
import SuperVisaContent from "../admin_sections/SuperVisa";
import TemporaryResidencyContent from "../admin_sections/TemporartResidency";
import TemporaryResidencyPermitContent from "../admin_sections/TemporaryResidentPermit";
import TradeOccupationContent from "../admin_sections/TradeOccupationTargeted";
import TransportOccupationTarContent from "../admin_sections/TransportOccupationTargetedDraw";
import VisitorToStudentContent from "../admin_sections/VisitoToStudent";
import VisitorVisaContent from "../admin_sections/VisitorVisa";
import WorkPermitContent from "../admin_sections/Workpermit";
import PermanentResidencyContent from "../admin_sections/PermanentResidency";
import ImmigrationToolsContent from "../admin_sections/ImmigrationTools";
import MoreServicesContent from "../admin_sections/MoreServices";
import AddImmigrationToolsCard from "../admin_sections/AddingImmigrationCard";
import AllImmigrationToolsCard from "../admin_sections/AllImmigrationCard";
import AllMoreServicesCard from "../admin_sections/AllMoreServicesCard";
import AddMoreServicesCard from "../admin_sections/AddMoreServicesCard";
import BannerSectionAlt from "../admin_sections/BannerSectionAlt";
import MemberSectionAlt from "../admin_sections/MemberOfAlt";
import WhyUsAlt from "../admin_sections/WhyUsAlt";
import Redirects from "../admin_sections/Redirects";

// Faq Sections
import HomeFaq from "../admin_sections/HomeFaq";
import AboutFaq from "../admin_sections/AboutFaq";
import ContactFaq from "../admin_sections/ContactFaq";
import NewsFaq from "../admin_sections/NewsFaq";
import BlogsFaq from "../admin_sections/BlogsFaq";
import FederalFaq from "../admin_sections/FederalFaq";
import TransportFaq from "../admin_sections/TransportFaq";
import CategoryFaq from "../admin_sections/CategoryFaq";
import CLBFaq from "../admin_sections/CLBFaq";
import BCPNPFaq from "../admin_sections/BCPNPFaq";
import ExpressFaq from "../admin_sections/ExpressFaq";
import AdditionalDocumentFaq from "../admin_sections/AdditionalDocumentFaq";
import AdoptionFaq from "../admin_sections/AdoptionFaq";
import BcpnpPageFaq from "../admin_sections/BcpnpPageFaq";
import AgricultureAndAgriFoodFaq from "../admin_sections/AgricultureAndAgriFoodFaq";
import AgricultureStreamLMIAFaq from "../admin_sections/AgricultureStreamLMIAFaq";
import AgriFoodPilotProgramFaq from "../admin_sections/AgriFoodPilotProgramFaq";
import BridgingOpenWorkPermitLPFaq from "../admin_sections/BridgingOpenWorkPermitLPFaq";
import BusinessVisitorVisaFaq from "../admin_sections/BusinessVisitorVisaFaq";
import CanadianExperienceClassFaq from "../admin_sections/CanadianExperienceClassFaq";
import CbyFaq from "../admin_sections/CbyFaq";
import ChangeCollegeProgramFaq from "../admin_sections/ChangeCollegeProgramFaq";
import CategoryBasedExpressFaq from "../admin_sections/CategoryBasedExpressFaq";
import CitizenshipFaq from "../admin_sections/CitizenshipFaq";
import CommonLawPartnerTemporaryContentFaq from "../admin_sections/CommonLawPartnerTemporaryFaq";
import CommonLawPartnerPermanentContentFaq from "../admin_sections/CommonLawPartnerPermanentFaq";
import DependentChildrenFaq from "../admin_sections/DependentChildrenFaq";
import DualIntentVisaFaq from "../admin_sections/DualIntentVisaFaq";
import EntryLevelSemiSkilledFaq from "../admin_sections/EntryLevelSemiSkilledFaq";
import ExtensionsDraftFaq from "../admin_sections/ExtensionsDraftFaq";
import CommonLawPartnerInternationalFaq from "../admin_sections/CommonLawParenerInternationalFaq";
import FamilyReunificationFaq from "../admin_sections/FamilyReunificationFaq";
import FederalSkilledTradeProgramFaq from "../admin_sections/FederalSkilledTradeProgramFaq";
import FederalSkilledWorkerProgramFaq from "../admin_sections/FederalSkilledWorkerProgramFaq";
import FlagPolingFaq from "../admin_sections/FlagPolingFaq";
import FrancophoneFaq from "../admin_sections/FrancophoneFaq";
import FrenchTargetedDrawFaq from "../admin_sections/FrenchTargetDrawFaq";
import HealthAuthoritiesStreamFaq from "../admin_sections/HealthAuthoritiesStreamFaq";
import GlobalStreamLMIAFaq from "../admin_sections/GlobalStreamLMIAFaq";
import HealthcareTargetedDrawFaq from "../admin_sections/HealthcareTargetedDrawFaq";
import InCaregiverFaq from "../admin_sections/InCaregiverFaq";
import InsideCanadaFaq from "../admin_sections/InsideCanadaFaq";
import InternationalGraduateFaq from "../admin_sections/InternationalGraduateFaq";
import InternationalPostGraduateFaq from "../admin_sections/InternationalPostGraduateFaq";
import LMIAReviewedFaq from "../admin_sections/LMIAReviewedFaq";
import LonelyCanadianFaq from "../admin_sections/LonelyCanadianFaq";
import LowWageLMIAFaq from "../admin_sections/LowWageLMIAFaq";
import NonSdsFaq from "../admin_sections/NonSdsFaq";
import OpenWorkCanadaFaq from "../admin_sections/OpenWorkCanadaFaq";
import OpenWorkPermitFaq from "../admin_sections/OpenWorkPermitFaq";
import OpenWorkForSpousalInlandFaq from "../admin_sections/OpenWorkForSpousalInlandFaq";
import OpenWorkVulnerableFaq from "../admin_sections/OpenWorkVulnerableFaq";
import OrphanFaq from "../admin_sections/OrphanFaq";
import OutsideCanadaFaq from "../admin_sections/OutsideCanadaFaq";
import ParentsGrandparentsFaq from "../admin_sections/ParentsGrandparentsFaq";
import PathwaysForCaregiverFaq from "../admin_sections/PathwaysForCaregiverFaq";
import PRPathwayCaregiverFaq from "../admin_sections/PermanentResidencyPathwayCaregiverFaq";
import PGWPFaq from "../admin_sections/PGWPFaq";
import PilotProgramFaq from "../admin_sections/PilotProgramsFaq";
import PnpFaq from "../admin_sections/PnpFaq";
import PreviousDrawHistoryFaq from "../admin_sections/PreviousDrawHistory";
import PrioritiesProgramFaq from "../admin_sections/PrioritiesProgramFaq";
import PrRenewalFaq from "../admin_sections/PrRenewalFaq";
import RestorationFaq from "../admin_sections/RestorationStatusFaq";
import ReconsiderationFaq from "../admin_sections/ReconsiderationFaq";
import ReplyToPFLFaq from "../admin_sections/ReplyToPFLFaq";
import RnipFaq from "../admin_sections/RnipFaq";
import SamesexFaq from "../admin_sections/SamesexFaq";
import SdsFaq from "../admin_sections/SdsFaq";
import SkilledWorkerStreamFaq from "../admin_sections/SkilledWorkerStreamFaq";
import SpousalOpenWorkPermitFaq from "../admin_sections/SpousalOpenWorkPermitFaq";
import SpousalCommonLawSponFaq from "../admin_sections/SpousalCommonLawSponFaq";
import SpouseInlandFaq from "../admin_sections/SpouseInlandFaq";
import SpouseOutlandFaq from "../admin_sections/SpouseOutlandFaq";
import StemTargetedDrawFaq from "../admin_sections/StemTargetedDrawFaq";
import StudentVisaFaq from "../admin_sections/StudentVisaFaq";
import StudyPermitMinorsFaq from "../admin_sections/StudyPermitMinorsFaq";
import SuperVisaFaq from "../admin_sections/SuperVisaFaq";
import TemporaryResidencyFaq from "../admin_sections/TemporartResidencyFaq";
import TemporaryResidencyPermitFaq from "../admin_sections/TemporaryResidentPermitFaq";
import TradeOccupationFaq from "../admin_sections/TradeOccupationTargetedFaq";
import TransportOccupationTarFaq from "../admin_sections/TransportOccupationTargetedDrawFaq";
import VisitorToStudentFaq from "../admin_sections/VisitoToStudentFaq";
import VisitorVisaFaq from "../admin_sections/VisitorVisaFaq";
import WorkPermitFaq from "../admin_sections/WorkpermitFaq";
import PermanentResidencyFaq from "../admin_sections/PermanentResidencyFaq";
import ImmigrationToolsFaq from "../admin_sections/ImmigrationToolsFaq";
import MoreServicesFaq from "../admin_sections/MoreServicesFaq";


let AdminDashboard = () => {
  const pages = [
    { id: "home", label: "Homepage" },
    { id: "about", label: "About Us" },
    { id: "contact-us", label: "Contact Us" },
    { id: "privacy-policy", label: "Privacy Policy" },
    { id: "terms-and-conditions", label: "Terms & Conditions" },
    { id: "transport", label: "Testimonials" },
    { id: "blogs", label: "Blogs" },
    { id: "news", label: "News" },
    { id: "federal", label: "Federal Skilled" },
    { id: "category", label: "Category Based Draws" },
    { id: "clb", label: "CLB Calculator" },
    { id: "bcpnp", label: "BCPNP Calculator" },
    { id: "immigration_tools", label: "Immigration Tools" },
    { id: "more_services", label: "More Services" },
    { id: "redirects", label: "Redirects (URL)" },

    { id: "additional_documents", label: "Additional Documents Page" },
    { id: "adoption_page", label: "Adoption Page" },
    {
      id: "agriculture_and_agri_food_page",
      label: "Agriculture And Agri Food Occupation Page",
    },
    {
      id: "agriculture_stream_lmia_page",
      label: "Agriculture Stream LMIA Page",
    },
    { id: "agri_food_pilot_page", label: "Agri Food Pilot Program Page" },
    { id: "bcpnp_page", label: "BCPNP Page" },
    {
      id: "bridging_open_work_permit_page",
      label: "Bridging Open Work Permit LP Page",
    },
    { id: "business_visitor_visa_page", label: "Business Visitor Visa Page" },
    {
      id: "canadian_experience_class_page",
      label: "Canadian Experience Class Page",
    },
    { id: "cby_page", label: "Cby Page" },
    { id: "change_college_program_page", label: "Change College Program Page" },
    { id: "category_based_express_page", label: "Category Based Express Page" },
    { id: "citizenship_page", label: "Citizenship Page" },
    {
      id: "common_law_partner_temporary_page",
      label: "Common Law Partner Temporary Page",
    },
    {
      id: "common_law_partner_permanent_page",
      label: "Common Law Partner Permanent Page",
    },
    {
      id: "common_law_partner_international_page",
      label: "Common Law Partner International Page",
    },
    { id: "dependent_children_page", label: "Dependent Children Page" },
    { id: "dual_intent_visa_page", label: "Dual Intent Visa Page" },
    { id: "express", label: "Express Entry" },
    {
      id: "entry_level_semi_skilled_page",
      label: "Entry Level Semi Skilled Page",
    },
    { id: "extensions_draft_page", label: "Extensions Draft Page" },

    { id: "family_reunification", label: "Family Reunification Page" },
    {
      id: "federal_skilled_trade_program",
      label: "Federal Skilled Trade Program Page",
    },
    {
      id: "federal_skilled_worker_program",
      label: "Federal Skilled Worker Program Page",
    },
    { id: "flag_poling", label: "Flag Poling Page" },
    { id: "francophone", label: "Framcophone Mobility Page" },
    { id: "french_tageted_draw", label: "French Targeted Draw Page" },
    { id: "global_stream_lmia", label: "Global Stream LMIA Page" },
    {
      id: "health_authorities_stream",
      label: "Health Authorities Stream Page",
    },
    { id: "healthcare_targated_draw", label: "Healthcare Tageted Draws Page" },
    {
      id: "humanitarian_compassionate",
      label: "Humanitarian Compassionate Page",
    },
    { id: "in_home_caregiver", label: "In Home Caregiver Program Page" },
    { id: "inside_canada_caregiver", label: "Inside Canada Page" },
    { id: "international_graduate", label: "International Graduate Page" },
    {
      id: "international_post_graduate",
      label: "International Post Graduate Page",
    },
    { id: "lmia_reviewed", label: "LMIA Page" },
    { id: "lonely_canadian", label: "Lonely Canadian Page" },
    { id: "low_wage_lmia", label: "Low Wage LMIA Page" },
    { id: "non_sds", label: "Non Sds Page" },
    { id: "open_work_dependent", label: "Open Work Dependent Children Page" },
    { id: "open_work_permit", label: "Open Work Permit Page" },
    {
      id: "open_work_permit_for_spousal",
      label: "Open Work Permit For Spousal Inland Page",
    },

    {
      id: "open_work_permit_vulnerable",
      label: "Open Work Permit Vulnerable Page",
    },
    { id: "orphan", label: "Orphan Page" },
    { id: "outside_canada", label: "Outside Canada Page" },
    { id: "parents_grandparents", label: "Parents Grandparents Page" },
    { id: "pathways_for_caregiver", label: "Pathways For Caregiver Page" },
    {
      id: "pr_pathways_for_caregiver",
      label: "PR Pathways For Caregiver Page",
    },
    { id: "pgwp", label: "PGWP Page" },
    { id: "pilot_programs", label: "Pilot Programs Page" },
    { id: "pnp_page", label: "PNP Page" },
    { id: "previous_draw_history", label: "Previous Draw History Page" },
    { id: "priorities_program", label: "Priorities Program Page" },
    { id: "pr_renewal", label: "Pr Renewal Page" },
    { id: "permanent_residency", label: "Permanent Residency Page" },
    { id: "restoration_status", label: "Restoration Status Page" },
    { id: "reconsideration", label: "Reconsideration Page" },
    { id: "reply_to_pfl", label: "Reply To PFL Page" },
    { id: "rnip", label: "RNIP Page" },
    { id: "same_sex", label: "Same Sex Page" },
    { id: "sds", label: "Sds Page" },
    { id: "skilled_worker_stream", label: "Skilled Worker Stream Page" },
    { id: "spousal_open_work_permit", label: "Spousal Open Work Permit Page" },

    {
      id: "spose_common_law_spon",
      label: "Spouse Common Law Sponsorship Page",
    },
    { id: "spousal_inland", label: "Spousal Inland Page" },
    { id: "spousal_outland", label: "Spousal Outland Page" },
    { id: "stem_target", label: "Stem Targeted Draw Page" },
    { id: "student_visa", label: "Student Visa Page" },
    { id: "study_permit_minors", label: "Study Permit Minors Page" },
    { id: "super_visa", label: "Super Visa Page" },
    { id: "temp", label: "Temporary Residency Page" },
    { id: "temp_per", label: "Temporary Residency Permit Page" },
    { id: "trade_occu", label: "Trade Occupation Targeted Draw Page" },
    { id: "trans_occu", label: "Transport Occupation Targeted Draw Page" },
    { id: "visi_stu", label: "Visitor to Student Page" },
    { id: "visi_visa", label: "Visitor Visa Page" },
    { id: "work_per", label: "Work Permit Page" },
  ];
  let { logout } = useAuth();
  let [showDropdown, setShowDropdown] = useState(false);
  let [activePage, setActivePage] = useState("home");
  let [activeSection, setActiveSection] = useState("home-top");
  let [displayParam, setDisplayParam] = useState("main_pages");
  let [paginationValue, setPaginationValue] = useState(0);
  let [filteredPages, setFilteredPages] = useState(pages);
  let [showSecondRightPanel, setShowSecondRightPanel] = useState(false);

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let displayValue = params.get("display") || "main_pages";
    setDisplayParam(displayValue);
    params.set("display", displayValue);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
    window.scrollTo({
      top: 0,
    });
  }, []);

  let setInternalPages = () => {
    setPaginationValue(1);
    let params = new URLSearchParams(window.location.search);
    params.set("display", "internal_pages");
    setDisplayParam("internal_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let setMainPages = () => {
    setActiveSection("none");
    setPaginationValue(0);
    let params = new URLSearchParams(window.location.search);
    params.set("display", "main_pages");
    setDisplayParam("main_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let updateDisplayParam = () => {
    setActiveSection("none");
    let params = new URLSearchParams(window.location.search);
    let newDisplayValue = params.get("display");
    if (newDisplayValue !== displayParam) {
      setDisplayParam(newDisplayValue);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", updateDisplayParam);
    return () => {
      window.removeEventListener("popstate", updateDisplayParam);
    };
  }, [displayParam]);

  let handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  let [searchValue, setSearchValue] = useState("");

  const handlePageClick = (pageId) => {
    setActivePage(pageId);

    const pageIndex = pages.findIndex((page) => page.id === pageId);
    if (
      pageIndex <= 14 &&
      displayParam != "internal_pages" &&
      paginationValue != "1" &&
      paginationValue != "2" &&
      paginationValue != "3" &&
      paginationValue != "4"
    ) {
      setShowSecondRightPanel(false);
    } else {
      setShowSecondRightPanel(true);
    }
  };

  let handleSectionClick = (section) => {
    setActiveSection(section);
  };
  let handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  let handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchValue.toLowerCase();

    const filtered = pages.filter((page) =>
      page.label.toLowerCase().includes(searchQuery)
    );

    setFilteredPages(filtered);
    setDisplayParam("main_pages");
    setActiveSection("none");
    setActivePage("none");
  };

  let handleSearchForEmptyValue = (e) => {
    e.preventDefault();
    const searchQuery = "";

    const filtered = pages.filter((page) =>
      page.label.toLowerCase().includes(searchQuery)
    );

    setFilteredPages(filtered);
    setDisplayParam("main_pages");
    setActiveSection("none");
    setActivePage("none");
    setSearchValue("");
  };
  return (
    <>
      <div className={styles.grayBg}>
        <div className={styles.topBar}>
          <Image
            loading="lazy"
            height={50}
            width={100}
            src={blueLogo}
            className={styles.logo}
            alt="Logo"
          />

          <form className={styles.topBarSearch} onSubmit={handleSearch}>
            <input
              placeholder="Search Pages here"
              value={searchValue}
              required
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span>
              <button className={styles.searchBtn} type="submit">
                <Image loading="lazy" height={50} width={100} src={magnify} />
              </button>

              <button
                className={styles.searchBtn2}
                onClick={handleSearchForEmptyValue}
              >
                Set back to Default
              </button>
            </span>
          </form>

          <div className={styles.userDiv}>
            <Image
              loading="lazy"
              height={50}
              width={100}
              src={user}
              onClick={handleDropdownClick}
              alt="User"
            />
            <div
              className={`${styles.userDropdown} ${showDropdown ? styles.active : ""
                }`}
            >
              <p onClick={handleLogout}>Log Out</p>
            </div>
          </div>
        </div>
        {displayParam == "main_pages" ? (
          <div className={styles.dashboard}>
            <div className={styles.leftPanel}>
              {filteredPages.length > 0 ? (
                filteredPages.slice(0, 15).map((page) => (
                  <div
                    key={page.id}
                    className={`${styles.page} ${activePage === page.id ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick(page.id)}
                  >
                    <p>{page.label}</p>
                  </div>
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>No Pages Found</p>
                </div>
              )}

              {!searchValue ? (
                <div
                  className={styles.page}
                  onClick={() => {
                    setInternalPages();
                  }}
                >
                  <p>Internal Pages {"->"}</p>
                </div>
              ) : null}
            </div>

            {showSecondRightPanel ? (
              <div className={styles.rightPanel}>
                {activePage === "express" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "express-content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("express-content")}
                    >
                      Express Entry Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "express-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("express-meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "express-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("express-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "bcpnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "bcpnp_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bcpnp_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp_page_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bcpnp_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}
                {activePage === "additional_documents" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_faq")
                      }
                    >
                      Page FAQ
                    </div>
                  </div>
                )}

                {activePage === "bridging_open_work_permit_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "bridging_open_work_permit_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bridging_open_work_permit_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bridging_open_work_permit_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("bridging_open_work_permit_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}
                {activePage === "adoption_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("adoption_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("adoption_page_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("adoption_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}
                {activePage === "agriculture_and_agri_food_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "agriculture_and_agri_food_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_and_agri_food_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_and_agri_food_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agriculture_and_agri_food_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "agriculture_stream_lmia_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_stream_lmia_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agriculture_stream_lmia_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agriculture_stream_lmia_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "agri_food_pilot_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "business_visitor_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "canadian_experience_class_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "canadian_experience_class_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "canadian_experience_class_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "canadian_experience_class_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("canadian_experience_class_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "cby_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "cby_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "cby_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "cby_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "change_college_program_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "change_college_program_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("change_college_program_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("change_college_program_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "category_based_express_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "category_based_express_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "category_based_express_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "category_based_express_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("category_based_express_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "category_based_express_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("category_based_express_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "citizenship_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("citizenship_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_temporary_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_permanent_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "dependent_children_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "dual_intent_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "entry_level_semi_skilled_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "entry_level_semi_skilled_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "entry_level_semi_skilled_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "entry_level_semi_skilled_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("entry_level_semi_skilled_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "entry_level_semi_skilled_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("entry_level_semi_skilled_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "extensions_draft_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_international_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "family_reunification" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_trade_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "federal_skilled_trade_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_trade_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_trade_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_trade_program_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_trade_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_trade_program_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_worker_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "federal_skilled_worker_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_worker_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_worker_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_worker_program_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "flag_poling" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "francophone" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "francophone_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "francophone_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "francophone_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "french_tageted_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "permanent_residency" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "global_stream_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "health_authorities_stream" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "healthcare_targated_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "humanitarian_compassionate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "in_home_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "inside_canada_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "international_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "international_post_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "international_post_graduate_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_post_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_post_graduate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "lmia_reviewed" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("lmia_reviewed_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lmia_reviewed_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lmia_reviewed_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "lonely_canadian" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("lonely_canadian_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lonely_canadian_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lonely_canadian_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "low_wage_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("low_wage_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("low_wage_lmia_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("low_wage_lmia_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "non_sds" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "non_sds_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "non_sds_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "non_sds_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_dependent" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("open_work_permit_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_for_spousal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_for_spousal_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_for_spousal_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_for_spousal_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_vulnerable" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_vulnerable_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_vulnerable_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_vulnerable_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "orphan" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "orphan_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "orphan_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "orphan_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "outside_canada" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("outside_canada_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("outside_canada_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("outside_canada_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "parents_grandparents" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pathways_for_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pr_pathways_for_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pgwp" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pgwp_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pgwp_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pgwp_faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pilot_programs" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pilot_programs_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pilot_programs_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pilot_programs_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "previous_draw_history" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "previous_draw_history_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("previous_draw_history_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "previous_draw_history_Faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("previous_draw_history_Faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "priorities_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pr_renewal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "restoration_status" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "reconsideration" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("reconsideration_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reconsideration_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reconsideration_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "reply_to_pfl" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "rnip" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "rnip_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "rnip_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "rnip_faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "same_sex" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "same_sex_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "same_sex_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "same_sex_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "sds" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "sds_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("sds_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "sds_meta" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("sds_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "sds_faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("sds_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "skilled_worker_stream" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_open_work_permit" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spose_common_law_spon" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_inland" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_inland_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_inland_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_inland_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_outland" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_outland_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_outland_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_outland_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "stem_target" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "stem_target_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "stem_target_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "stem_target_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "student_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "student_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "student_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "student_visa_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "study_permit_minors" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "super_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "super_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "super_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "super_visa_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "temp" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "temp_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("temp_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "temp_per" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "temp_per_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_per_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_per_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "trade_occu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "trade_occu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trade_occu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trade_occu_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trade_occu_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trade_occu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trade_occu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "trans_occu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "visi_stu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "visi_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "work_per" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "work_per_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "work_per_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "work_per_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                <div className={styles.roshiSection}>
                  {activePage === "home" && activeSection === "section14" && (
                    <BannerSectionAlt />
                  )}
                  {activePage === "home" && activeSection === "section15" && (
                    <MemberSectionAlt />
                  )}
                  {activePage === "home" && activeSection === "section16" && (
                    <WhyUsAlt />
                  )}
                  {activePage === "express" &&
                    activeSection === "express-content" && <ExpressEntry />}

                  {activePage === "express" &&
                    activeSection === "express-meta" && <ExpressMeta />}

                  {activePage === "express" &&
                    activeSection === "express-faq" && <ExpressFaq />}

                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_content" && (
                      <BcpnpPageContent />
                    )}
                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_meta" && <BcpnpPageMeta />}

                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_meta" && <BcpnpPageFaq />}
                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_content" && (
                      <AdditionalDocument />
                    )}

                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_meta" && (
                      <AdditionalDocumentMeta />
                    )}
                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_faq" && (
                      <AdditionalDocumentFaq />
                    )}

                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_content" && <Adoption />}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_meta" && <AdoptionMeta />}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_faq" && <AdoptionFaq />}

                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection ===
                    "agriculture_and_agri_food_page_content" && (
                      <AgricultureAndAgriFoodPageContent />
                    )}
                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection === "agriculture_and_agri_food_page_meta" && (
                      <AgricultureAndAgriFoodMeta />
                    )}
                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection === "agriculture_and_agri_food_page_faq" && (
                      <AgricultureAndAgriFoodFaq />
                    )}

                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection ===
                    "agriculture_stream_lmia_page_content" && (
                      <AgricultureStreamLMIAContent />
                    )}
                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection === "agriculture_stream_lmia_page_meta" && (
                      <AgricultureStreamLMIAMeta />
                    )}
                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection === "agriculture_stream_lmia_page_faq" && (
                      <AgricultureAndAgriFoodFaq />
                    )}

                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_content" && (
                      <AgriFoodPilotProgramContent />
                    )}
                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_meta" && (
                      <AgriFoodPilotProgramMeta />
                    )}
                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_faq" && (
                      <AgriFoodPilotProgramFaq />
                    )}

                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection ===
                    "bridging_open_work_permit_page_content" && (
                      <BridgingOpenWorkPermitLPContent />
                    )}
                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection === "bridging_open_work_permit_page_meta" && (
                      <BridgingOpenWorkPermitLPMeta />
                    )}
                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection === "bridging_open_work_permit_page_faq" && (
                      <BridgingOpenWorkPermitLPFaq />
                    )}

                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_content" && (
                      <BusinessVisitorVisaContent />
                    )}
                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_meta" && (
                      <BusinessVisitorVisaMeta />
                    )}

                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_faq" && (
                      <BusinessVisitorVisaFaq />
                    )}

                  {activePage === "canadian_experience_class_page" &&
                    activeSection ===
                    "canadian_experience_class_page_content" && (
                      <CanadianExperienceClassContent />
                    )}
                  {activePage === "canadian_experience_class_page" &&
                    activeSection === "canadian_experience_class_page_meta" && (
                      <CanadianExperienceClassMeta />
                    )}
                  {activePage === "canadian_experience_class_page" &&
                    activeSection === "canadian_experience_class_page_faq" && (
                      <CanadianExperienceClassFaq />
                    )}

                  {activePage === "cby_page" &&
                    activeSection === "cby_page_content" && <CbyContent />}
                  {activePage === "cby_page" &&
                    activeSection === "cby_page_meta" && <CbyMeta />}

                  {activePage === "cby_page" &&
                    activeSection === "cby_page_faq" && <CbyFaq />}

                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_content" && (
                      <ChangeCollegeProgramContent />
                    )}
                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_meta" && (
                      <ChangeCollegeProgramMeta />
                    )}
                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_faq" && (
                      <ChangeCollegeProgramFaq />
                    )}

                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_content" && (
                      <CategoryBasedExpressContent />
                    )}
                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_meta" && (
                      <CategoryBasedExpressMeta />
                    )}

                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_faq" && (
                      <CategoryBasedExpressFaq />
                    )}

                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_content" && (
                      <CitizenshipContent />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_meta" && (
                      <CitizenshipMeta />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_faq" && (
                      <CitizenshipFaq />
                    )}

                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_content" && (
                      <CommonLawPartnerTemporaryContent />
                    )}
                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_meta" && (
                      <CommonLawPartnerTemporaryContentMeta />
                    )}
                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_faq" && (
                      <CommonLawPartnerTemporaryContentFaq />
                    )}

                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_content" && (
                      <CommonLawPartnerPermanentContent />
                    )}
                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_meta" && (
                      <CommonLawPartnerPermanentContentMeta />
                    )}
                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_faq" && (
                      <CommonLawPartnerPermanentContentFaq />
                    )}

                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_content" && (
                      <DependentChildrenContent />
                    )}
                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_meta" && (
                      <DependentChildrenMeta />
                    )}
                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_faq" && (
                      <DependentChildrenFaq />
                    )}

                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_content" && (
                      <DualIntentVisaPageContent />
                    )}
                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_meta" && (
                      <DualIntentVisaMeta />
                    )}
                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_faq" && (
                      <DualIntentVisaFaq />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection ===
                    "entry_level_semi_skilled_page_content" && (
                      <EntryLevelSemiSkilledContent />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection === "entry_level_semi_skilled_page_meta" && (
                      <EntryLevelSemiSkilledMeta />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection === "entry_level_semi_skilled_page_faq" && (
                      <EntryLevelSemiSkilledFaq />
                    )}

                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_content" && (
                      <ExtensionsDraftContent />
                    )}
                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_meta" && (
                      <ExtensionsDraftMeta />
                    )}
                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_faq" && (
                      <ExtensionsDraftFaq />
                    )}

                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_content" && (
                      <CommonLawPartnerInternationalContent />
                    )}
                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_meta" && (
                      <CommonLawPartnerInternationalMeta />
                    )}
                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_faq" && (
                      <CommonLawPartnerInternationalFaq />
                    )}

                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_content" && (
                      <FamilyReunificationContent />
                    )}
                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_meta" && (
                      <FamilyReunificationMeta />
                    )}
                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_faq" && (
                      <FamilyReunificationFaq />
                    )}

                  {activePage === "federal_skilled_trade_program" &&
                    activeSection ===
                    "federal_skilled_trade_program_content" && (
                      <FederalSkilledTradeProgramContent />
                    )}

                  {activePage === "federal_skilled_trade_program" &&
                    activeSection === "federal_skilled_trade_program_meta" && (
                      <FederalSkilledTradeProgramMeta />
                    )}
                  {activePage === "federal_skilled_trade_program" &&
                    activeSection === "federal_skilled_trade_program_faq" && (
                      <FederalSkilledTradeProgramFaq />
                    )}

                  {activePage === "federal_skilled_worker_program" &&
                    activeSection ===
                    "federal_skilled_worker_program_content" && (
                      <FederalSkilledWorkerProgramContent />
                    )}
                  {activePage === "federal_skilled_worker_program" &&
                    activeSection === "federal_skilled_worker_program_meta" && (
                      <FederalSkilledWorkerProgramMeta />
                    )}
                  {activePage === "federal_skilled_worker_program" &&
                    activeSection === "federal_skilled_worker_program_faq" && (
                      <FederalSkilledWorkerProgramFaq />
                    )}

                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_content" && (
                      <FlagPolingContent />
                    )}
                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_meta" && <FlagPolingMeta />}

                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_faq" && <FlagPolingFaq />}
                  {activePage === "francophone" &&
                    activeSection === "francophone_content" && (
                      <FrancophoneContent />
                    )}
                  {activePage === "francophone" &&
                    activeSection === "francophone_meta" && <FrancophoneMeta />}
                  {activePage === "francophone" &&
                    activeSection === "francophone_faq" && <FrancophoneFaq />}

                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_content" && (
                      <FrenchTargetedDrawContent />
                    )}
                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_meta" && (
                      <FrenchTargetedDrawMeta />
                    )}
                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_faq" && (
                      <FrenchTargetedDrawFaq />
                    )}

                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_content" && (
                      <GlobalStreamLMIAContent />
                    )}
                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_meta" && (
                      <GlobalStreamLMIAMeta />
                    )}
                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_faq" && (
                      <GlobalStreamLMIAFaq />
                    )}

                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_content" && (
                      <HealthAuthoritiesStreamContent />
                    )}
                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_meta" && (
                      <HealthAuthoritiesStreamMeta />
                    )}
                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_faq" && (
                      <HealthAuthoritiesStreamFaq />
                    )}

                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_content" && (
                      <HealthcareTargetedDrawContent />
                    )}
                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_meta" && (
                      <HealthcareTargetedDrawMeta />
                    )}
                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_faq" && (
                      <HealthcareTargetedDrawFaq />
                    )}

                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_content" && (
                      <HumanPageContent />
                    )}
                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_meta" && (
                      <HumanContent />
                    )}

                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_content" && (
                      <InCaregiverContent />
                    )}
                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_meta" && (
                      <InCaregiverMeta />
                    )}
                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_faq" && (
                      <InCaregiverFaq />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_content" && (
                      <InsideCanadaContent />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_meta" && (
                      <InsideCanadaMeta />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_faq" && (
                      <InsideCanadaFaq />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_content" && (
                      <InternationalGraduateContent />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_meta" && (
                      <InternationalGraduateMeta />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_faq" && (
                      <InternationalGraduateFaq />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_content" && (
                      <InternationalPostGraduateContent />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_meta" && (
                      <InternationalPostGraduateMeta />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_faq" && (
                      <InternationalPostGraduateFaq />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_content" && (
                      <LMIAReviewedContent />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_meta" && (
                      <LMIAReviewedMeta />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_faq" && (
                      <LMIAReviewedFaq />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_content" && (
                      <LonelyCanadianContent />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_meta" && (
                      <LonelyCanadianMeta />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_faq" && (
                      <LonelyCanadianFaq />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_content" && (
                      <LowWageLMIAContent />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_meta" && (
                      <LowWageLMIAMeta />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_faq" && (
                      <LowWageLMIAFaq />
                    )}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_content" && <NonSdsContent />}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_meta" && <NonSdsMeta />}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_faq" && <NonSdsFaq />}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_content" && (
                      <OpenWorkCanadaContent />
                    )}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_meta" && (
                      <OpenWorkCanadaMeta />
                    )}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_faq" && (
                      <OpenWorkCanadaFaq />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_content" && (
                      <OpenWorkPermitContent />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_meta" && (
                      <OpenWorkPermitMeta />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_faq" && (
                      <OpenWorkPermitFaq />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection ===
                    "open_work_permit_for_spousal_content" && (
                      <OpenWorkForSpousalInlandContent />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection === "open_work_permit_for_spousal_meta" && (
                      <OpenWorkForSpousalInlandMeta />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection === "open_work_permit_for_spousal_faq" && (
                      <OpenWorkForSpousalInlandFaq />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_content" && (
                      <OpenWorkVulnerableContent />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_meta" && (
                      <OpenWorkVulnerableMeta />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_faq" && (
                      <OpenWorkVulnerableFaq />
                    )}
                  {activePage === "orphan" &&
                    activeSection === "orphan_content" && <OrphanContent />}
                  {activePage === "orphan" &&
                    activeSection === "orphan_meta" && <OrphanMeta />}
                  {activePage === "orphan" &&
                    activeSection === "orphan_faq" && <OrphanFaq />}
                  {activePage === "outside_canada" &&
                    activeSection === "outside_canada_content" && (
                      <OutsideCanadaContent />
                    )}
                  {activePage === "outside_canada" &&
                    activeSection === "outside_canada_meta" && (
                      <OutsideCanadaMeta />
                    )}
                  {activePage === "outside_canada" &&
                    activeSection === "outside_canada_faq" && (
                      <OutsideCanadaFaq />
                    )}
                  {activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_content" && (
                      <ParentsGrandparentsContent />
                    )}
                  {activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_meta" && (
                      <ParentsGrandparentsMeta />
                    )}
                  {activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_faq" && (
                      <ParentsGrandparentsFaq />
                    )}
                  {activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_content" && (
                      <PathwaysForCaregiverContent />
                    )}
                  {activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_meta" && (
                      <PathwaysForCaregiverMeta />
                    )}
                  {activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_faq" && (
                      <PathwaysForCaregiverFaq />
                    )}

                  {activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_content" && (
                      <PRPathwayCaregiverContent />
                    )}
                  {activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_meta" && (
                      <PRPathwayCaregiverMeta />
                    )}
                  {activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_faq" && (
                      <PRPathwayCaregiverFaq />
                    )}

                  {activePage === "pgwp" &&
                    activeSection === "pgwp_content" && <PGWP />}
                  {activePage === "pgwp" && activeSection === "pgwp_meta" && (
                    <PGWPMeta />
                  )}

                  {activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_content" && (
                      <PilotProgramContent />
                    )}
                  {activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_meta" && (
                      <PilotProgramMeta />
                    )}
                  {activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_faq" && (
                      <PilotProgramFaq />
                    )}

                  {activePage === "pnp_page" &&
                    activeSection === "pnp_page_content" && <PnpContent />}
                  {activePage === "pnp_page" &&
                    activeSection === "pnp_page_meta" && <PnpMeta />}

                  {activePage === "previous_draw_history" &&
                    activeSection === "previous_draw_history_meta" && (
                      <PreviousDrawHistoryMeta />
                    )}
                  {activePage === "previous_draw_history" &&
                    activeSection === "previous_draw_history_faq" && (
                      <PreviousDrawHistoryFaq />
                    )}

                  {activePage === "priorities_program" &&
                    activeSection === "priorities_program_content" && (
                      <PrioritiesProgramContent />
                    )}
                  {activePage === "priorities_program" &&
                    activeSection === "priorities_program_meta" && (
                      <PrioritiesProgramMeta />
                    )}
                  {activePage === "priorities_program" &&
                    activeSection === "priorities_program_faq" && (
                      <PrioritiesProgramFaq />
                    )}
                  {activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_content" && (
                      <PrRenewalContent />
                    )}
                  {activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_meta" && <PrRenewalMeta />}
                  {activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_faq" && <PrRenewalFaq />}
                  {activePage === "restoration_status" &&
                    activeSection === "restoration_status_content" && (
                      <RestorationContent />
                    )}
                  {activePage === "restoration_status" &&
                    activeSection === "restoration_status_meta" && (
                      <RestorationMeta />
                    )}
                  {activePage === "restoration_status" &&
                    activeSection === "restoration_status_faq" && (
                      <RestorationFaq />
                    )}
                  {activePage === "reconsideration" &&
                    activeSection === "reconsideration_content" && (
                      <ReconsiderationContent />
                    )}
                  {activePage === "reconsideration" &&
                    activeSection === "reconsideration_meta" && (
                      <ReconsiderationMeta />
                    )}
                  {activePage === "reconsideration" &&
                    activeSection === "reconsideration_faq" && (
                      <ReconsiderationFaq />
                    )}
                  {activePage === "reply_to_pfl" &&
                    activeSection === "reply_to_pfl_content" && (
                      <ReplyToPFLContent />
                    )}
                  {activePage === "reply_to_pfl" &&
                    activeSection === "reply_to_pfl_meta" && <ReplyToPFLMeta />}

                  {activePage === "rnip" &&
                    activeSection === "rnip_content" && <RnipContent />}
                  {activePage === "rnip" && activeSection === "rnip_meta" && (
                    <RnipMeta />
                  )}
                  {activePage === "rnip" && activeSection === "rnip_faq" && (
                    <RnipFaq />
                  )}
                  {activePage === "same_sex" &&
                    activeSection === "same_sex_content" && <SamesexContent />}
                  {activePage === "same_sex" &&
                    activeSection === "same_sex_meta" && <SamesexMeta />}
                  {activePage === "same_sex" &&
                    activeSection === "same_sex_faq" && <SamesexFaq />}
                  {activePage === "sds" && activeSection === "sds_content" && (
                    <SdsContent />
                  )}
                  {activePage === "sds" && activeSection === "sds_meta" && (
                    <SdsMeta />
                  )}
                  {activePage === "sds" && activeSection === "sds_faq" && (
                    <SdsFaq />
                  )}
                  {activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_content" && (
                      <SkilledWorkerStreamContent />
                    )}
                  {activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_meta" && (
                      <SkilledWorkerStreamMeta />
                    )}
                  {activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_faq" && (
                      <SkilledWorkerStreamFaq />
                    )}
                  {activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_content" && (
                      <SpousalOpenWorkPermitContent />
                    )}
                  {activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_meta" && (
                      <SpousalOpenWorkPermitMeta />
                    )}
                  {activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_faq" && (
                      <SpousalOpenWorkPermitFaq />
                    )}
                  {activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_content" && (
                      <SpousalCommonLawSponContent />
                    )}
                  {activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_meta" && (
                      <SpousalCommonLawSponMeta />
                    )}
                  {activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_faq" && (
                      <SpousalCommonLawSponFaq />
                    )}
                  {activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_content" && (
                      <SpouseInlandContent />
                    )}
                  {activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_meta" && (
                      <SpouseInlandMeta />
                    )}
                  {activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_faq" && (
                      <SpouseInlandFaq />
                    )}
                  {activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_content" && (
                      <SpouseOutlandContent />
                    )}
                  {activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_meta" && (
                      <SpouseOutlandMeta />
                    )}
                  {activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_faq" && (
                      <SpouseOutlandFaq />
                    )}
                  {activePage === "stem_target" &&
                    activeSection === "stem_target_content" && (
                      <StemTargetedDrawContent />
                    )}
                  {activePage === "stem_target" &&
                    activeSection === "stem_target_meta" && (
                      <StemTargetedDrawMeta />
                    )}
                  {activePage === "stem_target" &&
                    activeSection === "stem_target_faq" && (
                      <StemTargetedDrawFaq />
                    )}
                  {activePage === "student_visa" &&
                    activeSection === "student_visa_content" && (
                      <StudentVisaContent />
                    )}
                  {activePage === "student_visa" &&
                    activeSection === "student_visa_meta" && (
                      <StudentVisaMeta />
                    )}
                  {activePage === "student_visa" &&
                    activeSection === "student_visa_faq" && (
                      <StudentVisaFaq />
                    )}
                  {activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_content" && (
                      <StudyPermitMinorsContent />
                    )}
                  {activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_meta" && (
                      <StudyPermitMinorsMeta />
                    )}
                  {activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_faq" && (
                      <StudyPermitMinorsFaq />
                    )}
                  {activePage === "super_visa" &&
                    activeSection === "super_visa_content" && (
                      <SuperVisaContent />
                    )}
                  {activePage === "super_visa" &&
                    activeSection === "super_visa_meta" && <SuperVisaMeta />}
                  {activePage === "super_visa" &&
                    activeSection === "super_visa_faq" && <SuperVisaFaq />}
                  {activePage === "temp" &&
                    activeSection === "temp_content" && (
                      <TemporaryResidencyContent />
                    )}
                  {activePage === "temp" && activeSection === "temp_meta" && (
                    <TemporaryResidencyMeta />
                  )}
                  {activePage === "temp" && activeSection === "temp_faq" && (
                    <TemporaryResidencyFaq />
                  )}
                  {activePage === "temp_per" &&
                    activeSection === "temp_per_content" && (
                      <TemporaryResidencyPermitContent />
                    )}
                  {activePage === "temp_per" &&
                    activeSection === "temp_per_meta" && (
                      <TemporaryResidencyPermitMeta />
                    )}
                  {activePage === "temp_per" &&
                    activeSection === "temp_per_faq" && (
                      <TemporaryResidencyPermitFaq />
                    )}
                  {activePage === "trade_occu" &&
                    activeSection === "trade_occu_content" && (
                      <TradeOccupationContent />
                    )}
                  {activePage === "trade_occu" &&
                    activeSection === "trade_occu_meta" && (
                      <TradeOccupationMeta />
                    )}
                  {activePage === "trade_occu" &&
                    activeSection === "trade_occu_faq" && (
                      <TradeOccupationFaq />
                    )}
                  {activePage === "trans_occu" &&
                    activeSection === "trans_occu_content" && (
                      <TransportOccupationTarContent />
                    )}
                  {activePage === "trans_occu" &&
                    activeSection === "trans_occu_meta" && (
                      <TransportOccupationTarMeta />
                    )}
                  {activePage === "trans_occu" &&
                    activeSection === "trans_occu_faq" && (
                      <TransportOccupationTarFaq />
                    )}
                  {activePage === "visi_stu" &&
                    activeSection === "visi_stu_content" && (
                      <VisitorToStudentContent />
                    )}
                  {activePage === "visi_stu" &&
                    activeSection === "visi_stu_meta" && (
                      <VisitorToStudentMeta />
                    )}
                  {activePage === "visi_stu" &&
                    activeSection === "visi_stu_faq" && (
                      <VisitorToStudentFaq />
                    )}
                  {activePage === "visi_visa" &&
                    activeSection === "visi_visa_content" && (
                      <VisitorVisaContent />
                    )}
                  {activePage === "visi_visa" &&
                    activeSection === "visi_visa_meta" && <VisitorVisaMeta />}
                  {activePage === "visi_visa" &&
                    activeSection === "visi_visa_faq" && <VisitorVisaFaq />}
                  {activePage === "work_per" &&
                    activeSection === "work_per_content" && (
                      <WorkPermitContent />
                    )}
                  {activePage === "work_per" &&
                    activeSection === "work_per_meta" && <WorkPermitMeta />}
                  {activePage === "work_per" &&
                    activeSection === "work_per_faq" && <WorkPermitFaq />}
                  {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_content" && (
                      <PermanentResidencyContent />
                    )}
                  {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_meta" && (
                      <PermanentResidencyMeta />
                    )}
                  {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_faq" && (
                      <PermanentResidencyFaq />
                    )}
                </div>
              </div>
            ) : (
              <div className={styles.rightPanel}>
                {activePage === "home" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "home-top" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("home-top")}
                    >
                      Top Heading Section
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section2" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section2")}
                    >
                      Banner Section
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section14"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section14")}
                    >
                      Banner Section Image Alt
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section3" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section3")}
                    >
                      Member Of Section
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section15"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section15")}
                    >
                      Member Of Section Image Alt
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section4" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section4")}
                    >
                      Why US?
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section16"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section16")}
                    >
                      Why US Image Alt
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "section5" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section5")}
                    >
                      Our Process
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section6" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section6")}
                    >
                      Services
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section7" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section7")}
                    >
                      Achievements
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section10"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section10")}
                    >
                      FAQ's
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section11"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section11")}
                    >
                      Blogs Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section12"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("section12")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}
                {activePage === "home" && activeSection === "home-top" && (
                  <HomeTop />
                )}

                {activePage === "home" && activeSection === "section2" && (
                  <LoveneetBanner />
                )}

                {activePage === "home" && activeSection === "section14" && (
                  <BannerSectionAlt />
                )}

                {activePage === "home" && activeSection === "section15" && (
                  <MemberSectionAlt />
                )}

                {activePage === "home" && activeSection === "section16" && (
                  <WhyUsAlt />
                )}

                {activePage === "home" && activeSection === "section3" && (
                  <MemberOf />
                )}

                {activePage === "home" && activeSection === "section4" && (
                  <Features />
                )}

                {activePage === "home" && activeSection === "section5" && (
                  <OurProcess />
                )}

                {activePage === "home" && activeSection === "section6" && (
                  <Services />
                )}

                {activePage === "home" && activeSection === "section7" && (
                  <Achievements />
                )}

                {activePage === "home" && activeSection === "section10" && (
                  <FAQ />
                )}

                {activePage === "home" && activeSection === "section11" && (
                  <Blogs />
                )}

                {activePage === "home" && activeSection === "section12" && (
                  <HomeMeta />
                )}

                {activePage === "about" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "about-top"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("about-top")}
                    >
                      Top Heading Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "our-foundation"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("our-foundation")}
                    >
                      Our Foundation Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "vision" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("vision")}
                    >
                      Our Vision Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pillar" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("pillar")}
                    >
                      Our Pillars Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "directors"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("directors")}
                    >
                      Directors Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "we-are" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("we-are")}
                    >
                      We Are Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "we-are-small"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("we-are-small")}
                    >
                      We Are Small Screen
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "aboutAchievement"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("aboutAchievement")}
                    >
                      Achievements
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "aboutBest"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("aboutBest")}
                    >
                      Best Choice
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "aboutSocial"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("aboutSocial")}
                    >
                      Social Media
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "globally" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("globally")}
                    >
                      Serving Globally
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "map" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("map")}
                    >
                      Map Iframe
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "fimage" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("fimage")}
                    >
                      Our Foundation Image
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "vimage" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("vimage")}
                    >
                      Our Vision Image
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pillarimage"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pillarimage")}
                    >
                      Pillar Image
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pageMeta" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("pageMeta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "about" && activeSection === "about-top" && (
                  <AboutTop />
                )}

                {activePage === "about" &&
                  activeSection === "our-foundation" && <OurFoundation />}

                {activePage === "about" && activeSection === "vision" && (
                  <Vision />
                )}
                {activePage === "about" &&
                  activeSection === "aboutAchievement" && <AboutAchievement />}
                {activePage === "about" && activeSection === "pillar" && (
                  <Pillars />
                )}

                {activePage === "about" && activeSection === "directors" && (
                  <Directors />
                )}

                {activePage === "about" && activeSection === "we-are" && (
                  <WeAre />
                )}

                {activePage === "about" && activeSection === "we-are-small" && (
                  <WeAreSmall />
                )}

                {activePage === "about" && activeSection === "aboutBest" && (
                  <BestChoice />
                )}

                {activePage === "about" && activeSection === "aboutSocial" && (
                  <SocialMedia />
                )}

                {activePage === "about" && activeSection === "globally" && (
                  <Globally />
                )}

                {activePage === "about" && activeSection === "map" && <Map />}

                {activePage === "about" && activeSection === "fimage" && (
                  <FoundationImg />
                )}

                {activePage === "about" && activeSection === "vimage" && (
                  <VisionImg />
                )}

                {activePage === "about" && activeSection === "pillarimage" && (
                  <PillarsImg />
                )}

                {activePage === "about" && activeSection === "pageMeta" && (
                  <AboutMeta />
                )}

                {activePage === "contact-us" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "contact-top"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("contact-top")}
                    >
                      Top Heading Section
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "page-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("page-meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "page-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("page-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "bcpnp" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "content" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("content")}
                    >
                      BCPNP Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bcpnp-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp-meta")}
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bcpnp-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "immigration_tools" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "immigration_tools_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("immigration_tools_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "immigration_tools_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("immigration_tools_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "immigration_tools_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("immigration_tools_faq")
                      }
                    >
                      Page Faq
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "immigration_tools_all_tools"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("immigration_tools_all_tools")
                      }
                    >
                      All Added Tools
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "immigration_tools_add_tool"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("immigration_tools_add_tool")
                      }
                    >
                      Add Immigration Tool
                    </div>
                  </div>
                )}

                {activePage === "blogs" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "all-blogs"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("all-blogs")}
                    >
                      All Blogs
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "add-blog" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("add-blog")}
                    >
                      Add Blog
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "blogs-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("blogs-meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "blogs-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("blogs-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "clb" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "clb-content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("clb-content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "clb-meta" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("clb-meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "clb-faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("clb-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "news" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "all-news" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("all-news")}
                    >
                      All News
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "add-news" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("add-news")}
                    >
                      Add News
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "news-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("news-meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "news-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("news-faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "federal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "Page-Content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("Page-Content")}
                    >
                      Page Content
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "federal-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("federal-meta")}
                    >
                      Federal Skilled Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "federal-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("federal-faq")}
                    >
                      Federal Skilled Faq
                    </div>
                  </div>
                )}

                {activePage === "transport" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "section8" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section8")}
                    >
                      Testimonials
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "section9" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("section9")}
                    >
                      Testimonials Videos
                    </div>
                  </div>
                )}

                {activePage === "category" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "category-content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("category-content")}
                    >
                      Page Content
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "category-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("category-meta")}
                    >
                      Category Based Draws Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "category-faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("category-faq")}
                    >
                      Category Based Draws Faq
                    </div>
                  </div>
                )}

                {activePage === "contact-us" &&
                  activeSection === "contact-top" && <ContactTop />}

                {activePage === "federal" &&
                  activeSection === "Page-Content" && <FederalSkilled />}

                {activePage === "federal" &&
                  activeSection === "federal-meta" && <FederalMeta />}
{activePage === "federal" &&
                  activeSection === "federal-faq" && <FederalFaq />}
                {activePage === "bcpnp" && activeSection === "content" && (
                  <BCPNP />
                )}

                {activePage === "bcpnp" && activeSection === "bcpnp-meta" && (
                  <BCPNPMeta />
                )}
{activePage === "bcpnp" && activeSection === "bcpnp-faq" && (
                  <BCPNPFaq />
                )}
                {activePage === "category" &&
                  activeSection === "category-content" && <CategoryBased />}

                {activePage === "category" &&
                  activeSection === "category-meta" && <CategoryMeta />}
{activePage === "category" &&
                  activeSection === "category-faq" && <CategoryFaq />}
                {activePage === "transport" && activeSection === "section8" && (
                  <Testimonials />
                )}

                {activePage === "transport" && activeSection === "section9" && (
                  <TestimonialsVideo />
                )}

                {activePage === "contact-us" &&
                  activeSection === "page-meta" && <ContactMeta />}
                {activePage === "contact-us" &&
                  activeSection === "page-faq" && <ContactFaq />}

                {activePage === "blogs" && activeSection === "all-blogs" && (
                  <AllBlogs />
                )}

                {activePage === "blogs" && activeSection === "add-blog" && (
                  <AddBlog />
                )}

                {activePage === "blogs" && activeSection === "blogs-meta" && (
                  <BlogsMeta />
                )}

{activePage === "blogs" && activeSection === "blogs-faq" && (
                  <BlogsFaq />
                )}

                {activePage === "news" && activeSection === "all-news" && (
                  <AllNews />
                )}

                {activePage === "news" && activeSection === "add-news" && (
                  <AddNews />
                )}

                {activePage === "news" && activeSection === "news-meta" && (
                  <NewsMeta />
                )}
                {activePage === "news" && activeSection === "news-faq" && (
                  <NewsFaq />
                )}

                {activePage === "clb" && activeSection === "clb-content" && (
                  <CLB />
                )}

                {activePage === "clb" && activeSection === "clb-meta" && (
                  <CLBMeta />
                )}
                {activePage === "clb" && activeSection === "clb-faq" && (
                  <CLBFaq />
                )}

                {activePage === "privacy-policy" && <Privacy />}

                {activePage === "terms-and-conditions" && <Terms />}

                {activePage === "immigration_tools" &&
                  activeSection === "immigration_tools_content" && (
                    <ImmigrationToolsContent />
                  )}
                {activePage === "immigration_tools" &&
                  activeSection === "immigration_tools_meta" && (
                    <ImmigrationToolsMeta />
                  )}
                {activePage === "immigration_tools" &&
                  activeSection === "immigration_tools_faq" && (
                    <ImmigrationToolsFaq />
                  )}

                {activePage === "immigration_tools" &&
                  activeSection === "immigration_tools_all_tools" && (
                    <AllImmigrationToolsCard />
                  )}

                {activePage === "immigration_tools" &&
                  activeSection === "immigration_tools_add_tool" && (
                    <AddImmigrationToolsCard />
                  )}

                {activePage == "redirects" && <Redirects />}

                {activePage === "more_services" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "more_services_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("more_services_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "more_services_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("more_services_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "more_services_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("more_services_faq")}
                    >
                      Page Faq
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "more_services_all_services"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("more_services_all_services")
                      }
                    >
                      All Added Services
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "more_services_add_services"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("more_services_add_services")
                      }
                    >
                      Add Service Card
                    </div>
                  </div>
                )}

                {activePage === "more_services" &&
                  activeSection === "more_services_content" && (
                    <MoreServicesContent />
                  )}
                {activePage === "more_services" &&
                  activeSection === "more_services_meta" && (
                    <MoreServicesMeta />
                  )}
                {activePage === "more_services" &&
                  activeSection === "more_services_faq" && (
                    <MoreServicesFaq />
                  )}

                {activePage === "more_services" &&
                  activeSection === "more_services_all_services" && (
                    <AllMoreServicesCard />
                  )}
                {activePage === "more_services" &&
                  activeSection === "more_services_add_services" && (
                    <AddMoreServicesCard />
                  )}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* Dashboard For Internal Pages Below */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}

            <div className={styles.dashboard}>
              {paginationValue == "1" && (
                <div className={styles.leftPanel}>
                  <div className={styles.page} onClick={setMainPages}>
                    <p>{"<-"} Move To Main Pages</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "additional_documents"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("additional_documents")}
                  >
                    <p>Additional Documents Page</p>
                  </div>
                  <div
                    className={`${styles.page} ${activePage === "adoption_page" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("adoption_page")}
                  >
                    <p>Adoption Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "agriculture_and_agri_food_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("agriculture_and_agri_food_page")
                    }
                  >
                    <p>Agriculture And Agri Food Occupation Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "agriculture_stream_lmia_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("agriculture_stream_lmia_page")
                    }
                  >
                    <p>Agriculture Stream LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "agri_food_pilot_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("agri_food_pilot_page")}
                  >
                    <p>Agri Food Pilot Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "bcpnp_page" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("bcpnp_page")}
                  >
                    <p>BCPNP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "bridging_open_work_permit_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("bridging_open_work_permit_page")
                    }
                  >
                    <p>Bridging Open Work Permit LP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "business_visitor_visa_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("business_visitor_visa_page")
                    }
                  >
                    <p>Business Visitor Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "canadian_experience_class_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("canadian_experience_class_page")
                    }
                  >
                    <p>Canadian Experience Class Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "cby_page" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("cby_page")}
                  >
                    <p>Cby Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "change_college_program_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("change_college_program_page")
                    }
                  >
                    <p>Change College Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "category_based_express_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("category_based_express_page")
                    }
                  >
                    <p>Category Based Express Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "citizenship_page" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("citizenship_page")}
                  >
                    <p>Citizenship Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "common_law_partner_temporary_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_temporary_page")
                    }
                  >
                    <p>Common Law Partner Temporary Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "common_law_partner_permanent_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_permanent_page")
                    }
                  >
                    <p>Common Law Partner Permanent Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "common_law_partner_international_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_international_page")
                    }
                  >
                    <p>Common Law Partner International Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "dependent_children_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("dependent_children_page")}
                  >
                    <p>Dependent Children Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "dual_intent_visa_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("dual_intent_visa_page")}
                  >
                    <p>Dual Intent Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "express" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("express")}
                  >
                    <p>Express Entry</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "entry_level_semi_skilled_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("entry_level_semi_skilled_page")
                    }
                  >
                    <p>Entry Level Semi Skilled Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "extensions_draft_page"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("extensions_draft_page")}
                  >
                    <p>Extensions Draft Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "1" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "2" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "3" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "4" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "2" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${activePage === "family_reunification"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("family_reunification")}
                  >
                    <p>Family Reunification Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "federal_skilled_trade_program"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("federal_skilled_trade_program")
                    }
                  >
                    <p>Federal Skilled Trade Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "federal_skilled_worker_program"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("federal_skilled_worker_program")
                    }
                  >
                    <p>Federal Skilled Worker Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "flag_poling" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("flag_poling")}
                  >
                    <p>Flag Poling Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "francophone" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("francophone")}
                  >
                    <p>Framcophone Mobility Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "french_tageted_draw"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("french_tageted_draw")}
                  >
                    <p>French Targeted Draw Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "global_stream_lmia"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("global_stream_lmia")}
                  >
                    <p>Global Stream LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "health_authorities_stream"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("health_authorities_stream")}
                  >
                    <p>Health Authorities Stream Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "healthcare_targated_draw"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("healthcare_targated_draw")}
                  >
                    <p>Healthcare Tageted Draws Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "humanitarian_compassionate"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("humanitarian_compassionate")
                    }
                  >
                    <p>Humanitarian Compassionate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "in_home_caregiver"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("in_home_caregiver")}
                  >
                    <p>In Home Caregiver Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "inside_canada_caregiver"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("inside_canada_caregiver")}
                  >
                    <p>Inside Canada Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "international_graduate"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("international_graduate")}
                  >
                    <p>International Graduate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "international_post_graduate"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("international_post_graduate")
                    }
                  >
                    <p>International Post Graduate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "lmia_reviewed" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("lmia_reviewed")}
                  >
                    <p>LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "lonely_canadian" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("lonely_canadian")}
                  >
                    <p>Lonely Canadian Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "low_wage_lmia" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("low_wage_lmia")}
                  >
                    <p>Low Wage LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "non_sds" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("non_sds")}
                  >
                    <p>Non Sds Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "open_work_dependent"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("open_work_dependent")}
                  >
                    <p>Open Work Dependent Children Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "open_work_permit" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("open_work_permit")}
                  >
                    <p>Open Work Permit Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "open_work_permit_for_spousal"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("open_work_permit_for_spousal")
                    }
                  >
                    <p>Open Work Permit For Spousal Inland Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "1" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "2" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "3" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "4" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "3" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${activePage === "open_work_permit_vulnerable"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() =>
                      handlePageClick("open_work_permit_vulnerable")
                    }
                  >
                    <p>Open Work Permit Vulnerable Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "orphan" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("orphan")}
                  >
                    <p>Orphan Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "outside_canada" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("outside_canada")}
                  >
                    <p>Outside Canada Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "parents_grandparents"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("parents_grandparents")}
                  >
                    <p>Parents Grandparents Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pathways_for_caregiver"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("pathways_for_caregiver")}
                  >
                    <p>Pathways For Caregiver Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pr_pathways_for_caregiver"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("pr_pathways_for_caregiver")}
                  >
                    <p>PR Pathways For Caregiver Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pgwp" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("pgwp")}
                  >
                    <p>PGWP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pilot_programs" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("pilot_programs")}
                  >
                    <p>Pilot Programs Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pnp_page" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("pnp_page")}
                  >
                    <p>PNP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "previous_draw_history"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("previous_draw_history")}
                  >
                    <p>Previous Draw History Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "priorities_program"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("priorities_program")}
                  >
                    <p>Priorities Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "pr_renewal" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("pr_renewal")}
                  >
                    <p>Pr Renewal Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "permanent_residency"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("permanent_residency")}
                  >
                    <p>Permanent Residency Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "restoration_status"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("restoration_status")}
                  >
                    <p>Restoration Status Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "reconsideration" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("reconsideration")}
                  >
                    <p>Reconsideration Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "reply_to_pfl" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("reply_to_pfl")}
                  >
                    <p>Reply To PFL Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "rnip" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("rnip")}
                  >
                    <p>RNIP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "same_sex" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("same_sex")}
                  >
                    <p>Same Sex Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "sds" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("sds")}
                  >
                    <p>Sds Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "skilled_worker_stream"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("skilled_worker_stream")}
                  >
                    <p>Skilled Worker Stream Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "spousal_open_work_permit"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("spousal_open_work_permit")}
                  >
                    <p>Spousal Open Work Permit Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "1" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "2" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "3" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "4" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "4" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${activePage === "spose_common_law_spon"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("spose_common_law_spon")}
                  >
                    <p>Spouse Common Law Sponsorship Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "spousal_inland" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("spousal_inland")}
                  >
                    <p>Spousal Inland Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "spousal_outland" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("spousal_outland")}
                  >
                    <p>Spousal Outland Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "stem_target" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("stem_target")}
                  >
                    <p>Stem Targeted Draw Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "student_visa" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("student_visa")}
                  >
                    <p>Student Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "study_permit_minors"
                      ? styles.activePage
                      : ""
                      }`}
                    onClick={() => handlePageClick("study_permit_minors")}
                  >
                    <p>Study Permit Minors Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "super_visa" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("super_visa")}
                  >
                    <p>Super Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "temp" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("temp")}
                  >
                    <p>Temporary Residency Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "temp_per" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("temp_per")}
                  >
                    <p>Temporary Residenct Permit Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "trade_occu" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("trade_occu")}
                  >
                    <p>Trade Occupation Targeted Draw Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "trans_occu" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("trans_occu")}
                  >
                    <p>Transport Occupation Targeted Draw Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "visi_stu" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("visi_stu")}
                  >
                    <p>Visitor To Student Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "visi_visa" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("visi_visa")}
                  >
                    <p>Visitor Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${activePage === "work_per" ? styles.activePage : ""
                      }`}
                    onClick={() => handlePageClick("work_per")}
                  >
                    <p>Work Permit Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "1" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "2" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "3" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${paginationValue == "4" ? styles.activePageButton : ""
                        }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {/* Below Code For Right Panel is only when click on internal pages */}

              <div className={styles.rightPanel}>
                {activePage === "express" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "express-content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("express-content")}
                    >
                      Express Entry Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "express-meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("express-meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "bcpnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "bcpnp_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bcpnp_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("bcpnp_page_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}
                {activePage === "additional_documents" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_meta")
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "additional_documents_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_faq")
                      }
                    >
                      Page FAQ
                    </div>
                  </div>
                )}

                {activePage === "bridging_open_work_permit_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "bridging_open_work_permit_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bridging_open_work_permit_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "bridging_open_work_permit_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}
                {activePage === "adoption_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("adoption_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("adoption_page_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "adoption_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("adoption_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}
                {activePage === "agriculture_and_agri_food_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "agriculture_and_agri_food_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_and_agri_food_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "agriculture_and_agri_food_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "agriculture_stream_lmia_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_stream_lmia_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agriculture_stream_lmia_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "agriculture_stream_lmia_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agriculture_stream_lmia_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "agri_food_pilot_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "agri_food_pilot_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "business_visitor_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "business_visitor_visa_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "canadian_experience_class_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "canadian_experience_class_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "canadian_experience_class_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "canadian_experience_class_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "cby_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "cby_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "cby_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "cby_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("cby_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "change_college_program_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "change_college_program_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("change_college_program_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "change_college_program_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("change_college_program_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "category_based_express_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "category_based_express_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "category_based_express_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "category_based_express_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("category_based_express_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "citizenship_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "citizenship_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_temporary_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_temporary_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_permanent_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_permanent_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "dependent_children_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "dependent_children_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "dual_intent_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "dual_intent_visa_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "entry_level_semi_skilled_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "entry_level_semi_skilled_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "entry_level_semi_skilled_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "entry_level_semi_skilled_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("entry_level_semi_skilled_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "entry_level_semi_skilled_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("entry_level_semi_skilled_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "extensions_draft_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "extensions_draft_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_international_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "common_law_partner_international_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "family_reunification" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "family_reunification_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_trade_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "federal_skilled_trade_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_trade_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_trade_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_trade_program_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_trade_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_trade_program_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_worker_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection ===
                        "federal_skilled_worker_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_worker_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "federal_skilled_worker_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_faq"
                        )
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "flag_poling" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "flag_poling_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("flag_poling_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "francophone" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "francophone_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "francophone_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "francophone_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("francophone_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "french_tageted_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "french_tageted_draw_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "permanent_residency" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "permanent_residency_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("permanent_residency_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "global_stream_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "global_stream_lmia_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "health_authorities_stream" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "health_authorities_stream_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "healthcare_targated_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "healthcare_targated_draw_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_faq")
                      }
                    >
                      Page faq
                    </div>
                  </div>
                )}

                {activePage === "humanitarian_compassionate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "humanitarian_compassionate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "in_home_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "in_home_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "inside_canada_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "inside_canada_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "international_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "international_graduate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "international_post_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "international_post_graduate_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_post_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "international_post_graduate_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("international_post_graduate_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "lmia_reviewed" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("lmia_reviewed_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lmia_reviewed_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "lmia_reviewed_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lmia_reviewed_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "lonely_canadian" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("lonely_canadian_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lonely_canadian_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "lonely_canadian_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("lonely_canadian_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "low_wage_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("low_wage_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("low_wage_lmia_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "low_wage_lmia_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("low_wage_lmia_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "non_sds" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "non_sds_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "non_sds_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "non_sds_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("non_sds_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_dependent" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_dependent_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_for_spousal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_for_spousal_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_for_spousal_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_for_spousal_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_for_spousal_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_vulnerable" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_vulnerable_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_vulnerable_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "open_work_permit_vulnerable_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_vulnerable_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "orphan" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "orphan_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "orphan_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "orphan_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("orphan_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "outside_canada" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("outside_canada_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("outside_canada_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "outside_canada_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("outside_canada_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "parents_grandparents" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "parents_grandparents_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("parents_grandparents_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pathways_for_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pathways_for_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pathways_for_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pr_pathways_for_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pr_pathways_for_caregiver_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pr_pathways_for_caregiver_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pgwp" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pgwp_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pgwp_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pgwp_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pgwp_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pilot_programs" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("pilot_programs_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pilot_programs_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pilot_programs_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pilot_programs_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pnp_page_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pnp_page_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "previous_draw_history" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "previous_draw_history_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("previous_draw_history_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "previous_draw_history_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("previous_draw_history_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "priorities_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "priorities_program_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("priorities_program_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "pr_renewal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "pr_renewal_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("pr_renewal_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "restoration_status" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "restoration_status_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("restoration_status_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "reconsideration" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("reconsideration_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reconsideration_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "reconsideration_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reconsideration_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "reply_to_pfl" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "reply_to_pfl_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("reply_to_pfl_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "rnip" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "rnip_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "rnip_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "rnip_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("rnip_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "same_sex" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "same_sex_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "same_sex_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "same_sex_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("same_sex_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "sds" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "sds_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("sds_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "sds_meta" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("sds_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "sds_faq" ? styles.activeSection : ""
                        }`}
                      onClick={() => handleSectionClick("sds_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "skilled_worker_stream" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "skilled_worker_stream_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("skilled_worker_stream_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_open_work_permit" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_open_work_permit_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_open_work_permit_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spose_common_law_spon" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "spose_common_law_spon_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spose_common_law_spon_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_inland" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_inland_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_inland_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_inland_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_inland_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "spousal_outland" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("spousal_outland_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_outland_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "spousal_outland_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("spousal_outland_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "stem_target" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "stem_target_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "stem_target_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "stem_target_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("stem_target_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "student_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "student_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "student_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "student_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("student_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "study_permit_minors" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_meta")
                      }
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "study_permit_minors_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() =>
                        handleSectionClick("study_permit_minors_faq")
                      }
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "super_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "super_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "super_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "super_visa_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("super_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "temp" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "temp_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "temp_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "temp_per" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "temp_per_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "temp_per_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "temp_per_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("temp_per_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "trade_occu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "trade_occu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trade_occu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trade_occu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trade_occu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "trans_occu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "trans_occu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("trans_occu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "visi_stu" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "visi_stu_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_stu_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "visi_visa" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "visi_visa_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("visi_visa_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                {activePage === "work_per" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${activeSection === "work_per_content"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${activeSection === "work_per_meta"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_meta")}
                    >
                      Page Meta
                    </div>
                    <div
                      className={`${styles.section} ${activeSection === "work_per_faq"
                        ? styles.activeSection
                        : ""
                        }`}
                      onClick={() => handleSectionClick("work_per_faq")}
                    >
                      Page Faq
                    </div>
                  </div>
                )}

                <div className={styles.roshiSection}>
                  {activePage === "home" && activeSection === "section14" && (
                    <BannerSectionAlt />
                  )}
                  {activePage === "home" && activeSection === "section15" && (
                    <MemberSectionAlt />
                  )}
                  {activePage === "home" && activeSection === "section16" && (
                    <WhyUsAlt />
                  )}
                  {activePage === "express" &&
                    activeSection === "express-content" && <ExpressEntry />}

                  {activePage === "express" &&
                    activeSection === "express-meta" && <ExpressMeta />}
                    {activePage === "express" &&
                    activeSection === "express-faq" && <ExpressFaq />}

                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_content" && (
                      <BcpnpPageContent />
                    )}
                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_meta" && <BcpnpPageMeta />}
                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_content" && (
                      <AdditionalDocument />
                    )}

                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_meta" && (
                      <AdditionalDocumentMeta />
                    )}

                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_faq" && (
                      <AdditionalDocumentFaq />
                    )}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_content" && <Adoption />}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_meta" && <AdoptionMeta />}
{activePage === "adoption_page" &&
                    activeSection === "adoption_page_faq" && <AdoptionFaq />}
                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection ===
                    "agriculture_and_agri_food_page_content" && (
                      <AgricultureAndAgriFoodPageContent />
                    )}
                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection === "agriculture_and_agri_food_page_meta" && (
                      <AgricultureAndAgriFoodMeta />
                    )}
{activePage === "agriculture_and_agri_food_page" &&
                    activeSection === "agriculture_and_agri_food_page_faq" && (
                      <AgricultureAndAgriFoodFaq />
                    )}
                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection ===
                    "agriculture_stream_lmia_page_content" && (
                      <AgricultureStreamLMIAContent />
                    )}
                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection === "agriculture_stream_lmia_page_meta" && (
                      <AgricultureStreamLMIAMeta />
                    )}
{activePage === "agriculture_stream_lmia_page" &&
                    activeSection === "agriculture_stream_lmia_page_faq" && (
                      <AgricultureStreamLMIAFaq />
                    )}
                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_content" && (
                      <AgriFoodPilotProgramContent />
                    )}
                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_meta" && (
                      <AgriFoodPilotProgramMeta />
                    )}
{activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_faq" && (
                      <AgriFoodPilotProgramFaq />
                    )}
                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection ===
                    "bridging_open_work_permit_page_content" && (
                      <BridgingOpenWorkPermitLPContent />
                    )}
                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection === "bridging_open_work_permit_page_meta" && (
                      <BridgingOpenWorkPermitLPMeta />
                    )}
{activePage === "bridging_open_work_permit_page" &&
                    activeSection === "bridging_open_work_permit_page_faq" && (
                      <BridgingOpenWorkPermitLPFaq />
                    )}
                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_content" && (
                      <BusinessVisitorVisaContent />
                    )}
                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_meta" && (
                      <BusinessVisitorVisaMeta />
                    )}
{activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_faq" && (
                      <BusinessVisitorVisaFaq />
                    )}
                  {activePage === "canadian_experience_class_page" &&
                    activeSection ===
                    "canadian_experience_class_page_content" && (
                      <CanadianExperienceClassContent />
                    )}
                  {activePage === "canadian_experience_class_page" &&
                    activeSection === "canadian_experience_class_page_meta" && (
                      <CanadianExperienceClassMeta />
                    )}
{activePage === "canadian_experience_class_page" &&
                    activeSection === "canadian_experience_class_page_faq" && (
                      <CanadianExperienceClassFaq />
                    )}
                  {activePage === "cby_page" &&
                    activeSection === "cby_page_content" && <CbyContent />}
                  {activePage === "cby_page" &&
                    activeSection === "cby_page_meta" && <CbyMeta />}
{activePage === "cby_page" &&
                    activeSection === "cby_page_faq" && <CbyFaq />}
                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_content" && (
                      <ChangeCollegeProgramContent />
                    )}
                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_meta" && (
                      <ChangeCollegeProgramMeta />
                    )}
 {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_faq" && (
                      <ChangeCollegeProgramFaq />
                    )}
                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_content" && (
                      <CategoryBasedExpressContent />
                    )}
                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_meta" && (
                      <CategoryBasedExpressMeta />
                    )}
{activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_faq" && (
                      <CategoryBasedExpressFaq />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_content" && (
                      <CitizenshipContent />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_meta" && (
                      <CitizenshipMeta />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_faq" && (
                      <CitizenshipFaq />
                    )}
                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_content" && (
                      <CommonLawPartnerTemporaryContent />
                    )}
                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_meta" && (
                      <CommonLawPartnerTemporaryContentMeta />
                    )}
{activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                    "common_law_partner_temporary_page_faq" && (
                      <CommonLawPartnerTemporaryContentFaq />
                    )}
                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_content" && (
                      <CommonLawPartnerPermanentContent />
                    )}
                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_meta" && (
                      <CommonLawPartnerPermanentContentMeta />
                    )}
                    {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                    "common_law_partner_permanent_page_faq" && (
                      <CommonLawPartnerPermanentContentFaq />
                    )}

                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_content" && (
                      <DependentChildrenContent />
                    )}
                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_faq" && (
                      <DependentChildrenFaq />
                    )}

                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_content" && (
                      <DualIntentVisaPageContent />
                    )}
                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_meta" && (
                      <DualIntentVisaMeta />
                    )}
 {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_faq" && (
                      <DualIntentVisaFaq />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection ===
                    "entry_level_semi_skilled_page_content" && (
                      <EntryLevelSemiSkilledContent />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection === "entry_level_semi_skilled_page_meta" && (
                      <EntryLevelSemiSkilledMeta />
                    )}
                    {activePage === "entry_level_semi_skilled_page" &&
                    activeSection === "entry_level_semi_skilled_page_faq" && (
                      <EntryLevelSemiSkilledFaq />
                    )}

                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_content" && (
                      <ExtensionsDraftContent />
                    )}
                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_meta" && (
                      <ExtensionsDraftMeta />
                    )}
{activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_faq" && (
                      <ExtensionsDraftFaq />
                    )}
                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_content" && (
                      <CommonLawPartnerInternationalContent />
                    )}
                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_meta" && (
                      <CommonLawPartnerInternationalMeta />
                    )}
 {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                    "common_law_partner_international_page_faq" && (
                      <CommonLawPartnerInternationalFaq />
                    )}
                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_content" && (
                      <FamilyReunificationContent />
                    )}
                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_meta" && (
                      <FamilyReunificationMeta />
                    )}
{activePage === "family_reunification" &&
                    activeSection === "family_reunification_faq" && (
                      <FamilyReunificationFaq />
                    )}
                  {activePage === "federal_skilled_trade_program" &&
                    activeSection ===
                    "federal_skilled_trade_program_content" && (
                      <FederalSkilledTradeProgramContent />
                    )}
                  {activePage === "federal_skilled_trade_program" &&
                    activeSection === "federal_skilled_trade_program_meta" && (
                      <FederalSkilledTradeProgramMeta />
                    )}
{activePage === "federal_skilled_trade_program" &&
                    activeSection === "federal_skilled_trade_program_faq" && (
                      <FederalSkilledTradeProgramFaq />
                    )}
                  {activePage === "federal_skilled_worker_program" &&
                    activeSection ===
                    "federal_skilled_worker_program_content" && (
                      <FederalSkilledWorkerProgramContent />
                    )}
                  {activePage === "federal_skilled_worker_program" &&
                    activeSection === "federal_skilled_worker_program_meta" && (
                      <FederalSkilledWorkerProgramMeta />
                    )}
{activePage === "federal_skilled_worker_program" &&
                    activeSection === "federal_skilled_worker_program_faq" && (
                      <FederalSkilledWorkerProgramFaq />
                    )}
                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_content" && (
                      <FlagPolingContent />
                    )}
                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_meta" && <FlagPolingMeta />}
{activePage === "flag_poling" &&
                    activeSection === "flag_poling_faq" && <FlagPolingFaq/>}
                  {activePage === "francophone" &&
                    activeSection === "francophone_content" && (
                      <FrancophoneContent />
                    )}
                  {activePage === "francophone" &&
                    activeSection === "francophone_meta" && <FrancophoneMeta />}
{activePage === "francophone" &&
                    activeSection === "francophone_faq" && <FrancophoneFaq />}
                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_content" && (
                      <FrenchTargetedDrawContent />
                    )}
                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_meta" && (
                      <FrenchTargetedDrawMeta />
                    )}
{activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_faq" && (
                      <FrenchTargetedDrawFaq />
                    )}
                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_content" && (
                      <GlobalStreamLMIAContent />
                    )}
                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_meta" && (
                      <GlobalStreamLMIAMeta />
                    )}
{activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_faq" && (
                      <GlobalStreamLMIAFaq />
                    )}

                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_content" && (
                      <HealthAuthoritiesStreamContent />
                    )}
                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_meta" && (
                      <HealthAuthoritiesStreamMeta />
                    )}
 {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_faq" && (
                      <HealthAuthoritiesStreamFaq />
                    )}
                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_content" && (
                      <HealthcareTargetedDrawContent />
                    )}
                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_meta" && (
                      <HealthcareTargetedDrawMeta />
                    )}
{activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_faq" && (
                      <HealthcareTargetedDrawFaq />
                    )}
                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_content" && (
                      <HumanPageContent />
                    )}
                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_meta" && (
                      <HumanContent />
                    )}

                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_content" && (
                      <InCaregiverContent />
                    )}
                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_meta" && (
                      <InCaregiverMeta />
                    )}
{activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_faq" && (
                      <InCaregiverFaq />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_content" && (
                      <InsideCanadaContent />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_meta" && (
                      <InsideCanadaMeta />
                    )}
{activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_faq" && (
                      <InsideCanadaFaq />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_content" && (
                      <InternationalGraduateContent />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_meta" && (
                      <InternationalGraduateMeta />
                    )}
{activePage === "international_graduate" &&
                    activeSection === "international_graduate_faq" && (
                      <InternationalGraduateFaq />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_content" && (
                      <InternationalPostGraduateContent />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_meta" && (
                      <InternationalPostGraduateMeta />
                    )}
{activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_faq" && (
                      <InternationalPostGraduateFaq />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_content" && (
                      <LMIAReviewedContent />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_meta" && (
                      <LMIAReviewedMeta />
                    )}
{activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_faq" && (
                      <LMIAReviewedFaq />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_content" && (
                      <LonelyCanadianContent />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_meta" && (
                      <LonelyCanadianMeta />
                    )}
{activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_faq" && (
                      <LonelyCanadianFaq />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_content" && (
                      <LowWageLMIAContent />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_meta" && (
                      <LowWageLMIAMeta />
                    )}
{activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_faq" && (
                      <LowWageLMIAFaq />
                    )}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_content" && <NonSdsContent />}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_meta" && <NonSdsMeta />}
{activePage === "non_sds" &&
                    activeSection === "non_sds_faq" && <NonSdsFaq />}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_content" && (
                      <OpenWorkCanadaContent />
                    )}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_meta" && (
                      <OpenWorkCanadaMeta />
                    )}
{activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_faq" && (
                      <OpenWorkCanadaFaq />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_content" && (
                      <OpenWorkPermitContent />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_meta" && (
                      <OpenWorkPermitMeta />
                    )}
{activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_faq" && (
                      <OpenWorkPermitFaq />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection ===
                    "open_work_permit_for_spousal_content" && (
                      <OpenWorkForSpousalInlandContent />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection === "open_work_permit_for_spousal_meta" && (
                      <OpenWorkForSpousalInlandMeta />
                    )}
{activePage === "open_work_permit_for_spousal" &&
                    activeSection === "open_work_permit_for_spousal_faq" && (
                      <OpenWorkForSpousalInlandFaq />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_content" && (
                      <OpenWorkVulnerableContent />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_meta" && (
                      <OpenWorkVulnerableMeta />
                    )}
{activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_faq" && (
                      <OpenWorkVulnerableFaq />
                    )}
                  {activePage === "orphan" &&
                    activeSection === "orphan_content" && <OrphanContent />}
                  {activePage === "orphan" &&
                    activeSection === "orphan_meta" && <OrphanMeta />}
                  {activePage === "orphan" &&
                    activeSection === "orphan_faq" && <OrphanFaq />}
                  {activePage === "outside_canada" &&
                    activeSection === "outside_canada_content" && (
                      <OutsideCanadaContent />
                    )}
                  {activePage === "outside_canada" &&
                    activeSection === "outside_canada_meta" && (
                      <OutsideCanadaMeta />
                    )}
{activePage === "outside_canada" &&
                    activeSection === "outside_canada_faq" && (
                      <OutsideCanadaFaq />
                    )}
                  {activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_content" && (
                      <ParentsGrandparentsContent />
                    )}
                  {activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_meta" && (
                      <ParentsGrandparentsMeta />
                    )}
{activePage === "parents_grandparents" &&
                    activeSection === "parents_grandparents_faq" && (
                      <ParentsGrandparentsFaq />
                    )}
                  {activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_content" && (
                      <PathwaysForCaregiverContent />
                    )}
                  {activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_meta" && (
                      <PathwaysForCaregiverMeta />
                    )}
{activePage === "pathways_for_caregiver" &&
                    activeSection === "pathways_for_caregiver_faq" && (
                      <PathwaysForCaregiverFaq />
                    )}

                  {activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_content" && (
                      <PRPathwayCaregiverContent />
                    )}
                  {activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_meta" && (
                      <PRPathwayCaregiverMeta />
                    )}
{activePage === "pr_pathways_for_caregiver" &&
                    activeSection === "pr_pathways_for_caregiver_faq" && (
                      <PRPathwayCaregiverFaq />
                    )}
                  {activePage === "pgwp" &&
                    activeSection === "pgwp_content" && <PGWP />}
                  {activePage === "pgwp" && activeSection === "pgwp_meta" && (
                    <PGWPMeta />
                  )}
{activePage === "pgwp" && activeSection === "pgwp_faq" && (
                    <PGWPFaq />
                  )}
                  {activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_content" && (
                      <PilotProgramContent />
                    )}
                  {activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_meta" && (
                      <PilotProgramMeta />
                    )}
{activePage === "pilot_programs" &&
                    activeSection === "pilot_programs_faq" && (
                      <PilotProgramFaq />
                    )}
                  {activePage === "pnp_page" &&
                    activeSection === "pnp_page_content" && <PnpContent />}
                  {activePage === "pnp_page" &&
                    activeSection === "pnp_page_meta" && <PnpMeta />}
{activePage === "pnp_page" &&
                    activeSection === "pnp_page_faq" && <PnpFaq />}
                  {activePage === "previous_draw_history" &&
                    activeSection === "previous_draw_history_meta" && (
                      <PreviousDrawHistoryMeta />
                    )}
{activePage === "previous_draw_history" &&
                    activeSection === "previous_draw_history_faq" && (
                      <PreviousDrawHistoryFaq />
                    )}
                  {activePage === "priorities_program" &&
                    activeSection === "priorities_program_content" && (
                      <PrioritiesProgramContent />
                    )}
                  {activePage === "priorities_program" &&
                    activeSection === "priorities_program_meta" && (
                      <PrioritiesProgramMeta />
                    )}
 {activePage === "priorities_program" &&
                    activeSection === "priorities_program_faq" && (
                      <PrioritiesProgramFaq />
                    )}
                  {activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_content" && (
                      <PrRenewalContent />
                    )}
                  {activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_meta" && <PrRenewalMeta />}
{activePage === "pr_renewal" &&
                    activeSection === "pr_renewal_faq" && <PrRenewalFaq />}
                  {activePage === "restoration_status" &&
                    activeSection === "restoration_status_content" && (
                      <RestorationContent />
                    )}
                  {activePage === "restoration_status" &&
                    activeSection === "restoration_status_meta" && (
                      <RestorationMeta />
                    )}
{activePage === "restoration_status" &&
                    activeSection === "restoration_status_faq" && (
                      <RestorationFaq />
                    )}
                  {activePage === "reconsideration" &&
                    activeSection === "reconsideration_content" && (
                      <ReconsiderationContent />
                    )}
                  {activePage === "reconsideration" &&
                    activeSection === "reconsideration_meta" && (
                      <ReconsiderationMeta />
                    )}
{activePage === "reconsideration" &&
                    activeSection === "reconsideration_faq" && (
                      <ReconsiderationFaq />
                    )}

                  {activePage === "reply_to_pfl" &&
                    activeSection === "reply_to_pfl_content" && (
                      <ReplyToPFLContent />
                    )}
                  {activePage === "reply_to_pfl" &&
                    activeSection === "reply_to_pfl_meta" && <ReplyToPFLMeta />}
{activePage === "reply_to_pfl" &&
                    activeSection === "reply_to_pfl_faq" && <ReplyToPFLFaq />}
                  {activePage === "rnip" &&
                    activeSection === "rnip_content" && <RnipContent />}
                  {activePage === "rnip" && activeSection === "rnip_meta" && (
                    <RnipMeta />
                  )}
{activePage === "rnip" && activeSection === "rnip_faq" && (
                    <RnipFaq />
                  )}
                  {activePage === "same_sex" &&
                    activeSection === "same_sex_content" && <SamesexContent />}
                  {activePage === "same_sex" &&
                    activeSection === "same_sex_meta" && <SamesexMeta />}
{activePage === "same_sex" &&
                    activeSection === "same_sex_faq" && <SamesexFaq />}
                  {activePage === "sds" && activeSection === "sds_content" && (
                    <SdsContent />
                  )}
                  {activePage === "sds" && activeSection === "sds_meta" && (
                    <SdsMeta />
                  )}
{activePage === "sds" && activeSection === "sds_faq" && (
                    <SdsFaq />
                  )}
                  {activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_content" && (
                      <SkilledWorkerStreamContent />
                    )}
                  {activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_meta" && (
                      <SkilledWorkerStreamMeta />
                    )}
{activePage === "skilled_worker_stream" &&
                    activeSection === "skilled_worker_stream_faq" && (
                      <SkilledWorkerStreamFaq />
                    )}
                  {activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_content" && (
                      <SpousalOpenWorkPermitContent />
                    )}
                  {activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_meta" && (
                      <SpousalOpenWorkPermitMeta />
                    )}
{activePage === "spousal_open_work_permit" &&
                    activeSection === "spousal_open_work_permit_faq" && (
                      <SpousalOpenWorkPermitFaq />
                    )}
                  {activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_content" && (
                      <SpousalCommonLawSponContent />
                    )}
                  {activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_meta" && (
                      <SpousalCommonLawSponMeta />
                    )}
{activePage === "spose_common_law_spon" &&
                    activeSection === "spose_common_law_spon_faq" && (
                      <SpousalCommonLawSponFaq />
                    )}
                  {activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_content" && (
                      <SpouseInlandContent />
                    )}
                  {activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_meta" && (
                      <SpouseInlandMeta />
                    )}
{activePage === "spousal_inland" &&
                    activeSection === "spousal_inland_faq" && (
                      <SpouseInlandFaq />
                    )}

                  {activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_content" && (
                      <SpouseOutlandContent />
                    )}
                  {activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_meta" && (
                      <SpouseOutlandMeta />
                    )}
{activePage === "spousal_outland" &&
                    activeSection === "spousal_outland_faq" && (
                      <SpouseOutlandFaq />
                    )}
                  {activePage === "stem_target" &&
                    activeSection === "stem_target_content" && (
                      <StemTargetedDrawContent />
                    )}
                  {activePage === "stem_target" &&
                    activeSection === "stem_target_meta" && (
                      <StemTargetedDrawMeta />
                    )}
{activePage === "stem_target" &&
                    activeSection === "stem_target_faq" && (
                      <StemTargetedDrawFaq />
                    )}
                  {activePage === "student_visa" &&
                    activeSection === "student_visa_content" && (
                      <StudentVisaContent />
                    )}
                  {activePage === "student_visa" &&
                    activeSection === "student_visa_meta" && (
                      <StudentVisaMeta />
                    )}
{activePage === "student_visa" &&
                    activeSection === "student_visa_faq" && (
                      <StudentVisaFaq />
                    )}

                  {activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_content" && (
                      <StudyPermitMinorsContent />
                    )}
                  {activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_meta" && (
                      <StudyPermitMinorsMeta />
                    )}
{activePage === "study_permit_minors" &&
                    activeSection === "study_permit_minors_faq" && (
                      <StudyPermitMinorsFaq />
                    )}
                  {activePage === "super_visa" &&
                    activeSection === "super_visa_content" && (
                      <SuperVisaContent />
                    )}
                  {activePage === "super_visa" &&
                    activeSection === "super_visa_meta" && <SuperVisaMeta />}
{activePage === "super_visa" &&
                    activeSection === "super_visa_faq" && <SuperVisaFaq />}
                  {activePage === "temp" &&
                    activeSection === "temp_content" && (
                      <TemporaryResidencyContent />
                    )}
                  {activePage === "temp" && activeSection === "temp_meta" && (
                    <TemporaryResidencyMeta />
                  )}
{activePage === "temp" && activeSection === "temp_faq" && (
                    <TemporaryResidencyFaq />
                  )}
                  {activePage === "temp_per" &&
                    activeSection === "temp_per_content" && (
                      <TemporaryResidencyPermitContent />
                    )}
                  {activePage === "temp_per" &&
                    activeSection === "temp_per_meta" && (
                      <TemporaryResidencyPermitMeta />
                    )}
{activePage === "temp_per" &&
                    activeSection === "temp_per_faq" && (
                      <TemporaryResidencyPermitFaq />
                    )}
                  {activePage === "trade_occu" &&
                    activeSection === "trade_occu_content" && (
                      <TradeOccupationContent />
                    )}
                  {activePage === "trade_occu" &&
                    activeSection === "trade_occu_meta" && (
                      <TradeOccupationMeta />
                    )}
{activePage === "trade_occu" &&
                    activeSection === "trade_occu_faq" && (
                      <TradeOccupationFaq />
                    )}
                  {activePage === "trans_occu" &&
                    activeSection === "trans_occu_content" && (
                      <TransportOccupationTarContent />
                    )}
                  {activePage === "trans_occu" &&
                    activeSection === "trans_occu_meta" && (
                      <TransportOccupationTarMeta />
                    )}
{activePage === "trans_occu" &&
                    activeSection === "trans_occu_faq" && (
                      <TransportOccupationTarFaq />
                    )}
                  {activePage === "visi_stu" &&
                    activeSection === "visi_stu_content" && (
                      <VisitorToStudentContent />
                    )}
                  {activePage === "visi_stu" &&
                    activeSection === "visi_stu_meta" && (
                      <VisitorToStudentMeta />
                    )}
{activePage === "visi_stu" &&
                    activeSection === "visi_stu_faq" && (
                      <VisitorToStudentFaq />
                    )}
                  {activePage === "visi_visa" &&
                    activeSection === "visi_visa_content" && (
                      <VisitorVisaContent />
                    )}
                  {activePage === "visi_visa" &&
                    activeSection === "visi_visa_meta" && <VisitorVisaMeta />}
{activePage === "visi_visa" &&
                    activeSection === "visi_visa_faq" && <VisitorVisaFaq />}
                  {activePage === "work_per" &&
                    activeSection === "work_per_content" && (
                      <WorkPermitContent />
                    )}
                  {activePage === "work_per" &&
                    activeSection === "work_per_meta" && <WorkPermitMeta />}
{activePage === "work_per" &&
                    activeSection === "work_per_faq" && <WorkPermitFaq />}
                  {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_content" && (
                      <PermanentResidencyContent />
                    )}
                  {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_meta" && (
                      <PermanentResidencyMeta />
                    )}
                    {activePage === "permanent_residency" &&
                    activeSection === "permanent_residency_faq" && (
                      <PermanentResidencyFaq />
                    )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Admin = () => {
  return <PrivateRoute Component={AdminDashboard} />;
};

export default Admin;
