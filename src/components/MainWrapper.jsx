import styled from "styled-components";

import { useSelector } from "react-redux";

const Div = styled.div`
  background: var(--gradient);
`;

export default function MainWrapper(props) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Div
      className={"w-full flex flex-col min-h-screen size-full " + `theme-${theme}`}
      id="MainWrapper"
    >
      {props.children}
    </Div>
  );
}
