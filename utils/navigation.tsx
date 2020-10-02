import { Activated } from "./Constants";
import SvgDashboard from "../components/svg_components/Dashboard"
import SvgRifle from "../components/svg_components/Rifle";
import SvgGraph from "../components/svg_components/Graph";
import SvgAssignment from "../components/svg_components/Assignment";
import SvgCrosshair from "../components/svg_components/Crosshair";
import SvgChecklist from "../components/svg_components/Checklist";

export interface AuthNavigationComponentProps {
    text: String;
    path: string;
    svgComponent: React.SVGProps<SVGSVGElement>,
    activated?: Activated
  }

const AuthNavItems: AuthNavigationComponentProps[] = [
    {
        text: "Dashboard",
        path: "/dashboard",
        svgComponent: <SvgDashboard />,
    },
    {
        text: "Guides",
        path: "/guides",
        svgComponent: <SvgAssignment />,
    },
    {
        text: "Checklist",
        path: "/checklist",
        svgComponent: <SvgChecklist />,
    },
    {
        text: "Scoorekeeper",
        path: "/scorekeeper",
        svgComponent: <SvgRifle/>,
    },
    {
        text: "Gametracker",
        path: "/gametracker",
        svgComponent: <SvgCrosshair />,
    },
    {
        text: "Journal",
        path: "/journal",
        svgComponent: <SvgAssignment />,
    },
    {
        text: "Goaltracker",
        path: "/goaltracker",
        svgComponent: <SvgGraph />,
    },

]

export default AuthNavItems;