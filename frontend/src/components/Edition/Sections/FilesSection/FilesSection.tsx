import { useEffect, useState } from "react";
import { useFilesLazyQuery } from "../../../../graphql/files.graphql.types";
import { Styles } from "../../../../utils/Styles";
import { useParams } from "react-router-dom";
import { Folder, FolderNavbar } from "./FolderNavbar/FolderNavbar";
import { ImagesList } from "./ImagesList/ImagesList";

const folders: Folder[] = [
  { title: "award", pathPrefix: `image/award` },
  { title: "chest", pathPrefix: `image/chest` },
  { title: "group", pathPrefix: `image/group` },
  { title: "level", pathPrefix: `image/level` },
  { title: "users", pathPrefix: `image/users` },
];

export const FilesSection = () => {
  const params = useParams();
  const editionId = params.id ? parseInt(params.id) : -1;

  const [activeFolder, setActiveFolder] = useState<Folder>(folders[0]);
  const [fetchFiles, { loading, error, data }] = useFilesLazyQuery();

  const fileIds: string[] =
    data?.getFilesGroupedByTypeBySelectedTypes.flatMap((a) =>
      a.files.map((f) => f.fileId),
    ) ?? [];

  // TODO
  const selectedFileIds: string[] = [];

  // TODO
  const handleSelectClick = (fileId: string) => {
    console.log("selected file: ", fileId);
  };

  useEffect(() => {
    fetchFiles({ variables: { paths: [activeFolder.pathPrefix] } });
  }, [activeFolder, fetchFiles, editionId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <FolderNavbar
        folders={folders}
        active={activeFolder}
        setActive={setActiveFolder}
      />
      <ImagesList
        imageIds={selectedFileIds}
        selectedImageIds={selectedFileIds}
        handleSelectImageClick={handleSelectClick}
        title={`Selected ${activeFolder.title} files`}
      />
      <ImagesList
        imageIds={fileIds}
        selectedImageIds={selectedFileIds}
        handleSelectImageClick={handleSelectClick}
        title={`All ${activeFolder.title} files`}
      />
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
};
