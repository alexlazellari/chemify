import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Task } from "../../types/types";
import { Box } from "@mui/material";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export function Task({ task, onDelete, onEdit }: Props) {
  return (
    <ListItem
      secondaryAction={
        <Box>
          <IconButton
            sx={{
              mr: 0.5,
            }}
            edge="end"
            aria-label="edit"
            title="Edit"
            onClick={() => onEdit(task)}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={() => onDelete(task.id)}
            edge="end"
            aria-label="delete"
            title="Delete"
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      }
    >
      <ListItemText
        primaryTypographyProps={{
          sx: {
            fontSize: "1rem",
            fontWeight: "bold",
          },
        }}
        primary={task.title}
      />
    </ListItem>
  );
}