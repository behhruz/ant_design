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
