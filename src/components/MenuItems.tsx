import { FiArrowRight } from "react-icons/fi";
import { MenuItemsProps } from "@types";

export const MenuItems = ({ items, onSelected }: MenuItemsProps) => {
  return (
    <button
      onClick={items?.nextItems && onSelected}
      className="bg-lightGray hover:bg-lightBlue p-5 w-full flex flex-row justify-between align-middle cursor-pointer group"
    >
      {items?.title && (
        <h2 className="text-dark text-xl font-medium">{items.title}</h2>
      )}
      {items?.nextItems && Object.keys(items.nextItems).length > 0 && (
        <FiArrowRight
          className="text-arrowIcon group-hover:text-dark"
          size={25}
        />
      )}
    </button>
  );
};
