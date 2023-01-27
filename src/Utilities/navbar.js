import { NotAFound } from "../Components/404";
import { Design } from "../Components/Design";
import { Generic } from "./Generic";

export let Navbars = [
  {
    id: 1,
    title: "Design",
    path: "design",
    element: <Design />,
    child: [
      {
        id: 10,
        title: "Introduction",
        path: "introduction",
        element: "Introduction",
      },
      {
        id: 11,
        title: "Design Values",
        path: "designValues",
        element: "Design Values",
      },
      {
        id: 12,
        title: "Cases",
        path: "cases",
        element: "Cases",
      },
      {
        id: 13,
        title: "Colors",
        path: "colors",
        element: "Colors",
      },
      {
        id: 14,
        title: "Layout",
        path: "layout",
        element: "Layout",
      },
      {
        id: 15,
        title: "Font",
        path: "font",
        element: "Font",
      },
      {
        id: 16,
        title: "Icons",
        path: "icons",
        element: "Icons",
      },
      {
        id: 17,
        title: "Dark Mode",
        path: "darkMode",
        element: "Dark Mode",
      },
      {
        id: 18,
        title: "Shadow",
        path: "shadow",
        element: "Shadow",
      },
      {
        id: 19,
        title: "Overview",
        path: "overview",
        element: "Overview",
      },
      {
        id: 20,
        title: "Overview",
        path: "overview",
        element: "Overview",
      },
      {
        id: 21,
        title: "Feedback",
        path: "feedback",
        element: "Feedback",
      },
      {
        id: 22,
        title: "Navigation",
        path: "navigation",
        element: "Navigation",
      },
    ],
  },
  {
    id: 2,
    title: "Development",
    path: "development",
    element:<NotAFound />,
  },
  {
    id: 3,
    title: "Components",
    path: "components",
    element: <NotAFound />,
  },
  {
    id: 4,
    title: "Blog",
    path: "blog",
    element: <NotAFound />,
  },
  {
    id: 5,
    title: "Recources",
    path: "recources",
    element: <NotAFound />,
  },
];
