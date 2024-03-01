export const MenuList = [
  { menu: "Accueil", to: "/" },
  {
    menu: "Pages",
    className: "menu-down",
    child: [
      { children: "About Us", to: "/about-us" },
      { children: "Team", to: "/team" },
      { children: "Coming Soon", to: "/coming-soon" },
      { children: "Under Construct", to: "/under-construct" },
      { children: "Error 404", to: "/error-404" },
    ],
  },
  {
    menu: "Portfolio",
    className: "menu-down",
    child: [
      { children: "Portfolio", to: "/portfolio" },
      { children: "Portfolio Details", to: "/portfolio-details" },
    ],
  },
];

export const MenuList2 = [
  {
    menu: "Services",
    className: "menu-down",
    child: [
      { children: "Services", to: "/services" },
      { children: "Services Details ", to: "/services-details" },
    ],
  },

  {
    menu: "Blog",
    className: "menu-down",
    child: [
      { children: "Blog Grid", to: "/blog-grid" },
      { children: "Large Left Sidebar", to: "/blog-large-left-sidebar" },
      { children: "List Left Sidebar", to: "/blog-list-left-sidebar" },
      { children: "Blog Details", to: "/blog-details" },
    ],
  },
  { menu: "Contact Us", to: "/contact-us" },
];
