// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import CenteredFooter from "examples/Footers/CenteredFooter";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

// const date = new Date().getFullYear();

export default {
  brand: {
    name: "Study2Success",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  footerComponent: (
    <CenteredFooter
      company={{ href: "https://www.creative-tim.com/", name: "Creative Tim" }}
      links={[
        { href: "https://www.creative-tim.com/", name: "Company" },
        { href: "https://www.creative-tim.com/presentation", name: "About Us" },
        { href: "https://www.creative-tim.com/presentation", name: "Team" },
        { href: "https://www.creative-tim.com/templates/react", name: "Products" },
        { href: "https://www.creative-tim.com/blog", name: "Blog" },
        { href: "https://www.creative-tim.com/license", name: "License" },
      ]}
      socials={[
        { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
        {
          icon: <TwitterIcon fontSize="small" />,
          link: "https://twitter.com/creativetim",
        },
        {
          icon: <InstagramIcon fontSize="small" />,
          link: "https://www.instagram.com/creativetimofficial/",
        },
        {
          icon: <PinterestIcon fontSize="small" />,
          link: "https://ro.pinterest.com/thecreativetim/",
        },
        { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/creativetimofficial" },
      ]}
      light={false}
    />
  ),
};
