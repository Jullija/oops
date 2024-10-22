import { Styles } from "../../utils/Styles";
import { SectionTitle } from "../../screens/Edition/EditionScreen";

type SectionBarProps = {
  sections: SectionTitle[];
  activeSectionTitle: SectionTitle;
  onActiveChange: (section: SectionTitle) => void;
};

export const SectionsBar = ({
  sections,
  activeSectionTitle,
  onActiveChange,
}: SectionBarProps) => {
  return (
    <div style={styles.container}>
      {sections.map((sectionTitle) => (
        <div
          onClick={() => onActiveChange(sectionTitle)}
          style={{
            ...styles.section,
            color: activeSectionTitle === sectionTitle ? "red" : "grey",
          }}
        >
          {sectionTitle}
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
