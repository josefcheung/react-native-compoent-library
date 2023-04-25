import React from "react"; 
import { StyleSheet, Text ,Pressable ,ViewStyle , TextStyle , ImageStyle } from "react-native";
import { ButtonType } from "./Button.types";

export interface StyleProps{
	[key: string] : ViewStyle | TextStyle | ImageStyle | any;
}

export type addonProps    = string | undefined;
export type disabledProps = boolean | undefined;



const check = ( type ):StyleProps=>{
	switch (type) {
		case "secondary":
			return style.secondaryButton;
			break;
		case "outline":
			return style.outlineButton;
			break;
		default:
			return style.primaryButton;
			break;
	}
}

const addon = ( buttonColor:addonProps, borderColor:addonProps ,disabled:disabledProps )=>{

	let addonStyle:StyleProps = {};
	if(buttonColor)
		addonStyle.backgroundColor = buttonColor;
	
	if(borderColor){
		addonStyle.borderColor = borderColor;
		addonStyle.borderWidth = 2;
	}
	if(disabled)
		addonStyle.opacity = 0.7;
	
	return addonStyle;
}

const Button: React.FC<ButtonType>= ({ label ,type ,buttonColor ,borderColor ,disabled ,textColor ,onPress }) => {
	return (
		<Pressable disabled={disabled} accessibilityRole="button" style={({pressed}) =>[check(type),addon(buttonColor,borderColor,disabled),{opacity:pressed ? 0.7 : (disabled?0.7:1)}]} onPress={onPress}>
			<Text style={[check(type).text,textColor?{"color":textColor}:{}]}>{label}</Text>
		</Pressable>
	);
};

export default Button

const style:StyleProps = StyleSheet.create({
	primaryButton: {
		height: 55, 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row', 
		backgroundColor: '#0079c8', 
		padding: 20,
		text:{
			color: '#ffffff',
			fontSize: 18,
			lineHeight: 18,
			fontWeight: 'bold'
		}
	}, 
	secondaryButton: {
		height: 55, 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row', 
		borderWidth: 2,
    	borderColor: "#0079c8",
		padding: 20,
		text:{
			color: '#0079c8',
			fontSize: 18,
			lineHeight: 18,
			fontWeight: 'bold'
		}
	}, 
	outlineButton: {
		height: 30, 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row',
		text:{
			color: '#0079c8',
			fontSize: 18,
			lineHeight: 18,
			fontWeight: 'bold'
		}
	}, 
})
