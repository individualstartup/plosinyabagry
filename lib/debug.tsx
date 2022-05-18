export const dumpVars = (object: any) => {
  return (
    <>
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </>
  );
};
