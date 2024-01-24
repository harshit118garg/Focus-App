// import { useState } from "react";
import Select from "react-select";
import React, { useState } from "react";
import { statuses } from "../../global/definations/constants";
import { Status } from "../../global/definations/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { actions } from "../../redux/slice";

export default function DropDown() {
  const dispatch = useDispatch<AppDispatch>();

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
  const handleSelect = (status: Status | null) => {
    if (status !== null) {
      setSelectedStatus(status);
      dispatch(actions.setSelectedStatus(status));
    }
  };

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
