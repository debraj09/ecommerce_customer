export type ISocial =  {
  link: string;
  icon: string;
  name: string;
}

const social_links:ISocial[] = [
  {
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.youtube.com/",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
  {
    link: "https://www.pinterest.com/",
    icon: "fab fa-pinterest-p",
    name: "Pinterest",
  },
  {
    link: "https://www.skype.com/en/",
    icon: "fab fa-skype",
    name: "Skype",
  },
]

export default social_links;
