import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const EditBoard = ({ editBoard }) => (
  <form className="container" onSubmit={editBoard}>
    <h1>
      Edit a Board{" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="title" labelText="Title">
      <Input name="title" />
    </InputGroup>
    <Button type="submit" color="primary">
      Save Board
    </Button>
  </form>
);

export default EditBoard;
