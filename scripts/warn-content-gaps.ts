import {
  claimsRegister,
  caseStudiesRegister,
  serviceProofRegister,
} from "@/src/content/claims-register";
import { getConfirmedHomeCaseStudies } from "@/src/content/home";

if (getConfirmedHomeCaseStudies().length === 0) {
  console.warn(
    "[content] Homepage Results section is hidden: no confirmed case studies in src/content/home.ts.",
  );
}

if (Object.keys(serviceProofRegister).length === 0) {
  console.warn(
    "[content] Service page proof sections are hidden: no validated entries in serviceProofRegister.",
  );
}

if (Object.keys(claimsRegister).length === 0) {
  console.warn(
    "[content] StatBand components render nothing: claimsRegister is empty.",
  );
}

if (Object.keys(caseStudiesRegister).length === 0) {
  console.warn(
    "[content] /resources/case-studies has no published stories yet.",
  );
}
