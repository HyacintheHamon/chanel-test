import { MenuItems } from "@components";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MenuProps, MenuItem } from "@types";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

export function Menu({ data }: MenuProps) {
  const [currentMenu, setCurrentMenu] = useState<any>(data.items);
  const [tracking, setTracking] = useState<string[]>([]);

  const transRef = useSpringRef();
  const transitions = useTransition(currentMenu, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  const handleSelected = (item: any, index: number) => {
    transRef.start();
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

  useEffect(() => {
    transRef.start();
  }, [currentMenu]);

  return transitions((style) => (
    <div className="flex-col margin-auto mx-32 my-12 overflow-hidden bg-lightGray">
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
      <animated.div style={style}>
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
      </animated.div>
    </div>
  ));
}
