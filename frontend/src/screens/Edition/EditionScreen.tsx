import { useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { SectionsBar } from "../../components/Edition/SectionsBar";
import { useState } from "react";
import { AwardsSection } from "../../components/Edition/Sections/AwardsSection";
import { CategoriesSection } from "../../components/Edition/Sections/CategoriesSection/CategoriesSection";
import { GroupsSection } from "../../components/Edition/Sections/GroupsSection";
import { SubcategoriesSection } from "../../components/Edition/Sections/SubcategoriesSection";
import { LevelsSection } from "../../components/Edition/Sections/LevelsSection/LevelsSection";

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
};

const sections: Section[] = [
  { title: "nagrody" },
  { title: "kategories" },
  { title: "grupy" },
  { title: "levele" },
  { title: "subkategorie" },
];

export const EditionScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const editionId = params.id ? parseInt(params.id) : undefined;

  if (editionId === undefined) {
    throw new Error("editionId cannot be undefined");
  }

  const [activeSection, setActiveSection] = useState(sections[3]);

  const getSectionComponent = () => {
    const title = activeSection.title;
    switch (title) {
      case "nagrody":
        return <AwardsSection />;
      case "kategories":
        return <CategoriesSection editionId={editionId} />;
      case "grupy":
        return <GroupsSection />;
      case "levele":
        return <LevelsSection editionId={editionId} />;
      case "subkategorie":
        return <SubcategoriesSection />;
      default:
        return null;
    }
  };

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
      {getSectionComponent()}
    </div>
  );
};
