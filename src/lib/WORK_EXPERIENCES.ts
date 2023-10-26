import parsimapLogo from "../assets/images/parsimap-logo.png";
import freelanceLogo from "../assets/images/freelance.png";
import IDatum from "../interfaces/IDatum.ts";

const WORK_EXPERIENCES: IDatum[] = [
  {
    img: parsimapLogo,
    title: "frontend_developer_lead",
    startDate: "2022-09",
    endDate: "2023-10",
    description: "frontend_developer_lead_description",
  },
  {
    img: parsimapLogo,
    title: "senior_frontend_developer",
    startDate: "2020-07",
    endDate: "2022-09",
    description: "senior_frontend_developer_description",
  },
  {
    img: parsimapLogo,
    title: "mid_level_frontend_developer",
    startDate: "2016-11",
    endDate: "2020-07",
    description: "mid_level_frontend_developer_description",
  },
  {
    img: freelanceLogo,
    title: "joiner_full_stack_developer",
    startDate: "2013-5",
    endDate: "2016-10",
    description: "joiner_full_stack_developer_description",
  },
  {
    img: freelanceLogo,
    title: "joiner_full_stack_developer",
    startDate: "2015-1",
    endDate: "2015-5",
    description: "joiner_full_stack_developer_fam_description",
  },
];


export default WORK_EXPERIENCES;