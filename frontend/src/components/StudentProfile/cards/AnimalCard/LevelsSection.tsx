import { LevelType } from "../../../../__generated__/schema.graphql.types";
import { useLevelsQuery } from "../../../../graphql/levels.graphql.types";
import { useEditionSelection } from "../../../../hooks/common/useEditionSelection";
import { Styles } from "../../../../utils/Styles";
import { AnimalWithTooltip } from "../../../images/AnimalWithTooltip";

type LevelsSectionProps = {
  studentLevel: LevelType;
};

export const LevelsSection = ({ studentLevel }: LevelsSectionProps) => {
  const { selectedEdition } = useEditionSelection();
  const editionId = selectedEdition?.editionId;

  const { data, error, loading } = useLevelsQuery({
    variables: { editionId: editionId },
    skip: !editionId,
  });

  const levels = data?.levels;

  if (loading) return <div>loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.title}>All levels</div>
      <div style={styles.levelsContainer}>
        {levels?.map((level) => (
          <AnimalWithTooltip
            name={level.name}
            ordinal={level.ordinalNumber + 1}
            max={parseInt(level.maximumPoints)}
            min={parseInt(level.minimumPoints)}
            imageId={level.imageFileId ?? "-1"}
            size={"xs"}
            disabled={level.ordinalNumber === studentLevel.ordinalNumber}
          />
        ))}
      </div>
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontWeight: "bold",
  },
  levelMiniaturesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  levelMiniatureSpaceWrapper: {
    flex: 1,
  },
  levelsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
};
