import { Dialog } from "@mui/material";
import { PointsForm } from "../components/StudentProfile/PointsForm/PointsForm";
import { FormPoints } from "../components/StudentProfile/PointsForm/types";

export type AddPointsModalProps = {
  handleAddPoints: (formPoints: FormPoints) => void;
  isOpen: boolean;
  close: () => void;
};

export const AddPointsModal = ({
  handleAddPoints,
  isOpen = false,
  close,
}: AddPointsModalProps) => {
  return (
    <Dialog open={isOpen}>
      <PointsForm handleAddPoints={handleAddPoints} />
      <button onClick={close}>close</button>
    </Dialog>
  );
};
