import { MenuItems } from "@components";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MenuProps, MenuItem } from "@types";

export function Menu({ data }: MenuProps) {
  const [currentMenu, setCurrentMenu] = useState<any>(data.items);
  const [tracking, setTracking] = useState<string[]>([]);

  const handleSelected = (item: any, index: number) => {
    setCurrentMenu(currentMenu[index].nextItems);

    if (tracking.length > 0) {
      const newTracking = [...tracking, item.previous];
      setTracking(newTracking);
    } else {
      const newTracking = [...tracking, item.previous];
      setTracking(newTracking);
    }
  };

  const handleGoBack = () => {
    let lastElement = tracking[tracking.length - 1];
    let parentData = data.items.filter((item) => (item.id = lastElement))[0];

    if (lastElement === "start") {
      setCurrentMenu(data.items);
    } else {
      setCurrentMenu(parentData.nextItems);
    }

    const newTracking = tracking.slice(0, -1);
    setTracking(newTracking);
  };

  return (
    <div className="flex-col margin-auto mx-32 my-12">
      <div className="bg-lightGray hover:bg-lightBlue p-5 w-full flex flex-row justify-between align-middle cursor-pointer group">
        {tracking.length > 0 ? (
          <button onClick={handleGoBack}>
            <FiArrowLeft
              className="text-arrowIcon group-hover:text-dark"
              size={25}
            />
          </button>
        ) : (
          <h2 className="text-dark text-xl font-medium">{data.title}</h2>
        )}
      </div>
      {currentMenu.map((item: MenuItem, index: number) => {
        return (
          <MenuItems
            items={item}
            key={index}
            onSelected={() => {
              handleSelected(item, index);
            }}
          />
        );
      })}
    </div>
  );
}
