export const setDropdownValue = (val: string) => {
  sessionStorage.setItem(
    "form",
    JSON.stringify({
      importacionBienes: val,
    })
  );
};
