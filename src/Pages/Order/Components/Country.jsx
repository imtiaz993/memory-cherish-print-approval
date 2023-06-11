import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const Country = ({ order, setOrder }) => {
  const customLabels = {
    US: { primary: "United States" },
    CA: { primary: "Canada" },
    GB: { primary: "United Kingdom" },
    NZ: { primary: "New Zealand" },
    AU: { primary: "Australia" },
  };

  const [selected, setSelected] = useState("US");

  const onSelect = (code) => {
    setSelected(code);
    setOrder({
      ...order,
      country: customLabels[code].primary,
    });
  };

  const showSelectedLabel = true;
  const showSecondarySelectedLabel = false;
  const showOptionLabel = true;
  const showSecondaryOptionLabel = true;
  const searchable = false;

  return (
    <div className="demo-wrapper">
      <ReactFlagsSelect
        selected={selected}
        onSelect={onSelect}
        placeholder=""
        showSelectedLabel={showSelectedLabel}
        showSecondarySelectedLabel={showSecondarySelectedLabel}
        showOptionLabel={showOptionLabel}
        showSecondaryOptionLabel={showSecondaryOptionLabel}
        customLabels={customLabels}
        countries={["US", "CA", "GB", "NZ", "AU"]}
        searchable={searchable}
      />
    </div>
  );
};

export default Country;
