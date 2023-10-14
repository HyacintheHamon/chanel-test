export interface MenuProps {
  data: {
    title: string;
    items: {
      id: string;
      title: string;
      previous?: string;
      nextItems: {
        id: string;
        title: string;
      }[];
    }[];
  };
}

export type MenuItem = {
  id: string;
  title: string;
  nextItems: {
    id: string;
    title: string;
  }[];
  previous?: string;
};

export type Item = {
  title: string;
};

export type Menu = {
  title: string;
  path?: string;
  nextItems: Item[];
};

export type MenuItemsProps = {
  items: Menu;
  onSelected: () => void;
};
