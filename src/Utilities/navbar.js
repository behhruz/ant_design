import { Body } from "../Components/Body";
import { RouterPage } from "../Components/RouterPage";

export let Navbars = [
  {
    id: 1,
    title: "Design",
    path: "/Design",
    element: <RouterPage />,
    key: [
      {
        id: 10,
        title: "Introduction",
        path: "/Design/Introduction",
        element: "Introduction",
      },
      {
        id: 11,
        title: "Design Values",
        path: "/Design/DesignValues",
        element: "Design Values",
      },
    ],
  },
  {
    id: 2,
    title: "Development",
    path: "/Development",
    element: <RouterPage />,
  },
  {
    id: 3,
    title: "Components",
    path: "/Components",
    element: <RouterPage />,
  },
  {
    id: 4,
    title: "Blog",
    path: "/Blog",
    element: <RouterPage />,
  },
  {
    id: 5,
    title: "Recources",
    path: "/Recources",
    element: <RouterPage />,
  },
];
