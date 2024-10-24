import { useEffect, useState, useRef } from "react";
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

  const selectedFileIds: string[] = [];

  const handleSelectClick = (fileId: string) => {
    console.log("selected file: ", fileId);
  };

  useEffect(() => {
    fetchFiles({ variables: { paths: [activeFolder.pathPrefix] } });
  }, [activeFolder, fetchFiles, editionId]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Uploaded file:", file);

      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("fileType", activeFolder.pathPrefix);

      await handleFileUpload(formData);
    }
  };

  const handleFileUpload = async (form: FormData) => {
    try {
      const response = await fetch("http://localhost:9090/files/upload", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      fetchFiles({ variables: { paths: [activeFolder.pathPrefix] } });
    } catch (error) {
      // TODO
      console.error("Failed to upload file", error);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <div style={styles.container}>
      <FolderNavbar
        folders={folders}
        active={activeFolder}
        setActive={setActiveFolder}
      />
      <button onClick={handleUploadClick}>Upload file</button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
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
