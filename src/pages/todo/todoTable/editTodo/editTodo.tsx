import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { editTask, Todo } from "../../../../features/todo/todoSLice";
import { StyledDialog } from "./editTodo.style";
export const EditTaskDialog = ({
  open,
  onClose,
  task,
}: {
  open: boolean;
  onClose: () => void;
  task: Todo;
}) => {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editTask({ id: task.id, title }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <StyledDialog>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => {
              if (e.target.value.length < 21) setTitle(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </StyledDialog>
    </Dialog>
  );
};
