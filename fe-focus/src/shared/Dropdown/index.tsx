import { useState } from "react";
import Select from "react-select";
import { Status } from "../../global/definations/types";
import { statuses } from "../../global/definations/constants";
import React from "react";

export default function DropDown() {
  const OptionWithDeleteButton: React.FC<{
    innerProps: any;
    label: string;
    value: string;
  }> = ({ innerProps, label }) => (
    <div
      {...innerProps}
      className="d-flex justify-content-between align-items-center p-2 text-bg-dark"
    >
      {label}
    </div>
  );

  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const handleSelect = (status: Status | null) => setSelectedStatus(status);

  return (
    <React.Fragment>
      <Select
        options={statuses}
        onChange={handleSelect}
        value={selectedStatus}
        components={{
          Option: OptionWithDeleteButton,
        }}
      />
    </React.Fragment>
  );
}
