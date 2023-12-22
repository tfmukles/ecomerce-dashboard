import { motion } from "framer-motion";
import { useState } from "react";

export const tabs = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "FURNITURE",
  },
  {
    id: 3,
    text: "DECORATION",
  },
  {
    id: 4,
    text: "LIGHTING",
  },
];

interface Props {
  className?: string;
  tabsList: Array<ITab>;
}

interface ITab {
  id: number;
  text: string;
}

const TabPills = ({ className = "", tabsList }: Props) => {
  const [selectedTab, setSelectedTab] = useState<ITab>(tabsList[0]);

  const onSelectChange = (tab: ITab) => {
    setSelectedTab(tab);
  };

  return (
    <ul className={`tabs ${className}`}>
      {tabs.map((tab) => (
        <li className={tab.id === 1 ? "active" : ""} key={tab.id}>
          <button type="button" onClick={() => onSelectChange(tab)}>
            {tab.text}
          </button>
          {selectedTab === tab && (
            <motion.div layoutId="underline" className="underline" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TabPills;
