import { Styles } from "../../utils/Styles";
import { Section } from "../../screens/Edition/EditionScreen";

type SectionBarProps = {
  sections: Section[];
  activeSection: Section;
  onActiveChange: (section: Section) => void;
};

export const SectionsBar = ({
  sections,
  activeSection,
  onActiveChange,
}: SectionBarProps) => {
  return (
    <div style={styles.container}>
      {sections.map((section) => (
        <div
          onClick={() => onActiveChange(section)}
          style={{
            ...styles.section,
            color: activeSection === section ? "red" : "grey",
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
