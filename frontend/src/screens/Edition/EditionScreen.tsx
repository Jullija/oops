import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Styles } from "../../utils/Styles";
import { pathsGenerator } from "../../router/paths";
import { SectionsBar } from "../../components/Edition/SectionsBar";
import { useEffect, useState } from "react";

export type SectionTitle =
  | "awards"
  | "categories"
  | "chests"
  // TODO
  // | "group"
  | "levels"
  | "files";

const sectionTitles: SectionTitle[] = [
  "awards",
  "categories",
  "chests",
  // TODO
  // "group",
  "levels",
  "files",
];

export const EditionScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const editionId = params.id ? parseInt(params.id) : -1;

  if (editionId === undefined) {
    throw new Error("editionId cannot be undefined");
  }

  const [activeSectionTitle, setActiveSectionTitle] =
    useState<SectionTitle>("categories");

  useEffect(() => {
    switch (activeSectionTitle) {
      case "awards":
        navigate(
          pathsGenerator.coordinator.EditionAwards(editionId.toString()),
        );
        break;
      case "categories":
        navigate(
          pathsGenerator.coordinator.EditionCategories(editionId.toString()),
        );
        break;
      case "chests":
        navigate(
          pathsGenerator.coordinator.EditionChests(editionId.toString()),
        );
        break;
      case "levels":
        navigate(
          pathsGenerator.coordinator.EditionLevels(editionId.toString()),
        );
        break;
      case "files":
        navigate(pathsGenerator.coordinator.EditionFiles(editionId.toString()));
        break;
    }
  }, [activeSectionTitle, editionId, navigate]);

  return (
    <div style={styles.screenContainer}>
      <div style={styles.header}>
        <button onClick={() => navigate(pathsGenerator.coordinator.Editions)}>
          go back to editions list
        </button>
        <div>params - edition id: {editionId}</div>
      </div>
      <SectionsBar
        sections={sectionTitles}
        activeSectionTitle={activeSectionTitle}
        onActiveChange={(section) => setActiveSectionTitle(section)}
      />
      <Outlet />
    </div>
  );
};

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
