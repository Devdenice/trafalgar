import search from "/services/search.svg";
import onlinePharmacy from "/services/online-pharmacy.svg";
import consultation from "/services/consultation.svg";
import details from "/services/details.svg";
import emergency from "/services/emergency.svg";
import tracking from "/services/tracking.svg";
import leading from "/images/Leading.png";
import download from "/images/Download.png";
import client1 from "/profile/client1.png";
import client2 from "/profile/client2.jpg";
import client3 from "/profile/client3.jpg";
import img1 from "/articles/img1.png";
import img2 from "/articles/img2.png";
import img3 from "/articles/img3.png";

export const nav = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "Find a doctor", href: "#find-a-doctor" },
  { id: 3, title: "Apps", href: "#apps" },
  { id: 4, title: "Testimonials", href: "#testimonials" },
  { id: 5, title: "About Us", href: "#about-us" },
];

export const services = [
  {
    id: 1,
    title: "Search Doctor",
    icon: search,
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    id: 2,
    title: "Online Pharmacy",
    icon: onlinePharmacy,
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    id: 3,
    title: "Consultation",
    icon: consultation,
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    id: 4,
    title: "Details Info",
    icon: details,
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    id: 5,
    title: "Emergency Care",
    icon: emergency,
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    id: 6,
    title: "Tracking",
    icon: tracking,
    description: "Track and save your medical history and health data ",
  },
];

export const more = [
  {
    title: "Leading healthcare providers",
    img: leading,
    subtext:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver",
  },

  {
    title: "Download our mobile apps",
    img: download,
    subtext:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
];

export const feedback = [
  {
    client: "Edward Newgate",
    clientImg: client1,
    position: "Founder Cirlce",
    clientFeedback:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    client: "Sarah Signh",
    clientImg: client2,
    position: "Founder Cirlce",
    clientFeedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet nulla sodales, tincidunt ex a, tincidunt augue. Morbi placerat sagittis augue. vitae faucibus turpis sollicitudin nec.",
  },
  {
    client: "Patrick Signh",
    clientImg: client3,
    position: "Founder Cirlce",
    clientFeedback:
      "Maecenas quis dui facilisis, facilisis nibh eget, cursus lorem. Duis in augue ac eros tristique fermentum eget convallis nulla. Integer cursus dolor quis urna blandit sollicitudin.",
  },
];

export const article = [
  {
    title: "Disease detection, check up in the laboratory",
    subText:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
    img: img1,
  },
  {
    title: "Herbal medicines that are safe for consumption",
    subText:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
    img: img2,
  },
  {
    title: "Natural care for healthy facial skin",
    subText:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
    img: img3,
  },
];
