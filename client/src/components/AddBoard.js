import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const AddBoard = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add A Board{" "}
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

export default AddBoard;
