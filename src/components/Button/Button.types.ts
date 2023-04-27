import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text ,Pressable ,ViewStyle , TextStyle , ImageStyle ,PressableProps } from "react-native";
export interface StyleProps{
	[key: string] : ViewStyle | TextStyle | ImageStyle | any;
}
export interface ButtonType {
	label       : string,
	buttonColor?: string;
	textColor?  : string;
	borderColor?: string;
	onPress     : () => void;
	type?       : string;
	disabled?   : boolean;
	arrow?      : boolean;
	leftIcon?   : keyof typeof FontAwesome.glyphMap;
	style?      : StyleProps;
	full?       : boolean;
	[key:string]: any;
}
