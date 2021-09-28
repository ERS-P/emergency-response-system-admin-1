import React, { useEffect, useState, useContext } from "react";
import { Sheet } from "../../components/tips";
import { Footer } from "../../components/gen";
import { AppContext } from "../../context";

const Tips = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { submitTips } = useContext(AppContext);

  const handleTitleChange = event => {
    const title_val = event.target.value;
    setTitle(title_val);
  };

  const handleDescriptionChange = event => {
    const desc_value = event.target.value;
    setDescription(desc_value);
  };

  const onSubmit = () => {
    setLoading(true);
    submitTips({ title, description, setLoading });
    // setLoading(false);
  };

  return (
    <>
      <Sheet />
    </>
  );
};

export default Tips;
