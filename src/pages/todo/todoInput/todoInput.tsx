import { useState } from "react";
import { AppDispatch } from "../../../app/store";
import { addTask } from "../../../features/todo/todoSLice";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import { ButtonInput } from "./todoInput.styles";

export const TodoInput = ({ dispatch }: { dispatch: AppDispatch }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          backgroundColor: "rgba(75, 148, 177, 0.08)",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Form todo</Typography>
        <TextField
          required
          id="outlined-required"
          label="Write the todo"
          value={text}
          onChange={(e) => {
            if (e.target.value.length < 21) setText(e.target.value);
          }}
        />
        <ButtonInput type="submit" variant="contained" size="large">
          Add Todo
        </ButtonInput>
      </Box>
    </>
  );
};
