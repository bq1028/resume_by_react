import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const CustomButton = props => {
	return <Button className={props.className}>{props.children}</Button>;
};

const StyledButton = styled(CustomButton)`
	&& {
		color: ${({ isOnTop }) => (isOnTop === true ? "#fff" : "#000")};
	}
`;

export default StyledButton;
