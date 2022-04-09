import React from "react";

const OnlyBrowser = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return ( <>{ children }</> )
}

export default OnlyBrowser
