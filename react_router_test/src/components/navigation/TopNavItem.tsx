import {Link} from "react-router-dom";
import type {TopNavItem} from "../../types/navigation/TopNavItem.ts";

const TopNavItem = ({item, ...props}: { item: TopNavItem }) => <Link {...props}
                                                                     to={item.path}
                                                                     className="px-2 py-1 xl:px-4 xl:py-2 text-lg font-semibold text-gray-700 hover:text-orange-500 transition duration-300 transform hover:scale-105 rounded-full">
    {item.label}
</Link>;

export default TopNavItem;