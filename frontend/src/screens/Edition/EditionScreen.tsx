import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { SectionsBar } from "../../components/Edition/SectionsBar";
import { ReactElement, useState } from "react";
import { AwardsSection } from "../../components/Edition/Sections/AwardsSection";
import { CategoriesSection } from "../../components/Edition/Sections/CategoriesSection";
import { GroupsSection } from "../../components/Edition/Sections/GroupsSection";
import { LevelsSection } from "../../components/Edition/Sections/LevelsSection";
import { SubcategoriesSection } from "../../components/Edition/Sections/SubcategoriesSection";

const styles: Styles = {
  screenContainer: {
    margin: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
};

export type Section = {
  title: string;
  component: ReactElement;
};

const sections: Section[] = [
  { title: "nagrody", component: <AwardsSection /> },
  { title: "kategories", component: <CategoriesSection /> },
  { title: "grupy", component: <GroupsSection /> },
  { title: "levele", component: <LevelsSection /> },
  { title: "subkategorie", component: <SubcategoriesSection /> },
];

export const EditionScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const editionId = params.id ? parseInt(params.id) : undefined;

  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div style={styles.screenContainer}>
      <SectionsBar
        sections={sections}
        activeSection={activeSection}
        onActiveChange={(section) => setActiveSection(section)}
      />

      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.coordinator.Editions)}>
          go back to editions list
        </button>
        <div>params - edition id: {editionId}</div>
      </div>
      {activeSection.component}
    </div>
  );
};
