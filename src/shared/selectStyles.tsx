export const selectStyles = {
  container: (provided: any) => ({ ...provided, width: "100%" }),
  control: (provided: any) => ({
    ...provided,
    background: "#ffffff",
    border: `2px solid rgba(156,163,175,0.5)`,
    boxShadow: "none",
    minHeight: 42,
    height: 42,
    borderRadius: 4,
    paddingLeft: 4,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: 42,
    padding: "0 4px",
  }),
  input: (provided: any) => ({ ...provided, margin: 0, padding: 0 }),
  indicatorsContainer: (provided: any) => ({ ...provided, height: 42 }),
  singleValue: (provided: any) => ({ ...provided, margin: 0 }),
  placeholder: (provided: any) => ({ ...provided, margin: 0 }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
};
