import React from "react";

export interface ButtonType {
	label       : string,
	buttonColor?: string;
	textColor?  : string;
	borderColor?: string;
	onPress     : () => void;
	type?       : string;
	disabled?   : boolean;
	leftIcon?   : React.ReactNode;
	rightIcon?  : React.ReactNode;
}
