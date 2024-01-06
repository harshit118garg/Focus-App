import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Idea } from "../../global/definations/types";
import { randomColor } from "../../utils/randomColor";
import { X } from "lucide-react";
import { Button } from "react-bootstrap";

export default function DropDown() {
  const options: Idea[] = [
    {
      label: "Mr. X",
      value: {
        ideaTitle: "Mr. X",
        ideaDescription: "Mr. X",
        ideaCategory: { categoryColor: "blue", categoryTitle: "Mr. X" },
      },
    },
    {
      label: "Mr. Y",
      value: {
        ideaTitle: "Mr. Y",
        ideaDescription: "Mr. Y",
        ideaCategory: { categoryColor: "green", categoryTitle: "Mr. Y" },
      },
    },
    {
      label: "Mr. Z",
      value: {
        ideaTitle: "Mr. Z",
        ideaDescription: "Mr. Z",
        ideaCategory: { categoryColor: "orange", categoryTitle: "Mr. Z" },
      },
    },
  ];

  const handleChange = (option: Idea | null) => setDropdownValue(option);

  const handleCreateOption = (inputValue: string) => {
    const newOption: Idea = {
      label: inputValue,
      value: {
        ideaTitle: inputValue,
        ideaDescription: inputValue,
        ideaCategory: {
          categoryTitle: inputValue,
          categoryColor: randomColor(),
        },
      },
    };
    setOptionsList((prevOptions) => [...prevOptions, newOption]);
    setDropdownValue(newOption);
  };

  const handleDeleteOption = (value: string) => {
    const updatedOptions = options.filter((option) => option.label !== value);
    setOptionsList(updatedOptions);
  };

  const OptionWithDeleteButton: React.FC<{
    innerProps: any;
    label: string;
    value: string;
  }> = ({ innerProps, label, value }) => (
    <div
      {...innerProps}
      className="d-flex justify-content-between align-items-center p-2 text-bg-dark"
    >
      {label}
      <Button variant="secondary" onClick={() => handleDeleteOption(value)}>
        <X />
      </Button>
    </div>
  );

  const [dropdownValue, setDropdownValue] = useState<Idea | null>(null);
  const [optionsList, setOptionsList] = useState<Idea[]>(options);
  return (
    <CreatableSelect
      options={optionsList}
      isClearable
      isSearchable
      value={dropdownValue}
      onChange={handleChange}
      onCreateOption={handleCreateOption}
      components={{
        Option: OptionWithDeleteButton,
      }}
    />
  );
}
