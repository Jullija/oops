import { useEffect, useState } from "react";
import { useFilesLazyQuery } from "../../../../graphql/files.graphql.types";
import { FolderCard } from "./FolderCard";
import { Image } from "../../../images/Image";
import { Styles } from "../../../../utils/Styles";

type FilesSectionProps = {
  editionId: number;
};

type FilesProps = {
  title: string;
  pathPrefix: string;
};
const sections: FilesProps[] = [
  { title: "award", pathPrefix: `image/award` },
  { title: "chest", pathPrefix: `image/chest` },
  { title: "group", pathPrefix: `image/group` },
  { title: "level", pathPrefix: `image/level` },
  { title: "users", pathPrefix: `image/users` },
];

export const FilesSection = ({ editionId }: FilesSectionProps) => {
  const [active, setActive] = useState<FilesProps>(sections[0]);
  const [photoIds, setPhotoIds] = useState<string[]>([]);

  const [fetchFiles, { loading, error, data }] = useFilesLazyQuery();

  useEffect(() => {
    fetchFiles({ variables: { paths: [active.pathPrefix] } });
  }, [active, fetchFiles, editionId]);

  useEffect(() => {
    setPhotoIds(
      data?.getFilesGroupedByTypeBySelectedTypes.flatMap((a) =>
        a.files.map((f) => f.fileId),
      ) ?? [],
    );
  }, [data, active]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div>
      <div>Files Section {editionId}</div>
      <div>
        {sections.map((section) => (
          <FolderCard
            title={section.title}
            onClick={() => setActive(section)}
            isSelected={active.title === section.title}
          />
        ))}
      </div>

      <div>
        {photoIds.length > 0 ? (
          <div style={styles.photosContainer}>
            {photoIds.map((id) => (
              <Image id={id} size={128} disabled={false} />
            ))}
          </div>
        ) : (
          <div>No files found for {active.title}</div>
        )}
      </div>
    </div>
  );
};

const styles: Styles = {
  photosContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
};
