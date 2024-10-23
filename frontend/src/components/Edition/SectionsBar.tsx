import { useState } from "react";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { useNavigate } from "react-router-dom";

type SectionBarProps = {
  editionId: number;
};

export type Section = {
  title:
    | "awards"
    | "categories"
    | "chests"
    // TODO
    // | "group"
    | "levels"
    | "files";
  path: (editionId: string) => string;
};

const sections: Section[] = [
  {
    title: "awards",
    path: pathsGenerator.coordinator.EditionChildren.Awards,
  },
  {
    title: "chests",
    path: pathsGenerator.coordinator.EditionChildren.Chests,
  },
  {
    title: "categories",
    path: pathsGenerator.coordinator.EditionChildren.Categories,
  },
  {
    title: "files",
    path: pathsGenerator.coordinator.EditionChildren.Files,
  },
  {
    title: "levels",
    path: pathsGenerator.coordinator.EditionChildren.Levels,
  },
];

export const SectionsBar = ({ editionId }: SectionBarProps) => {
  const navigate = useNavigate();
  const [activeSectionTitle, setActiveSectionTitle] = useState<string>(
    sections[2].title,
  );
  const handleSectionChange = (section: Section) => {
    setActiveSectionTitle(section.title);
    navigate(section.path(editionId.toString()));
  };
  return (
    <div style={styles.container}>
      {sections.map((section) => (
        <div
          onClick={() => handleSectionChange(section)}
          style={{
            ...styles.section,
            color: activeSectionTitle === section.title ? "red" : "grey",
          }}
        >
          {section.title}
        </div>
      ))}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    borderBottom: "1px solid black",
  },
};
