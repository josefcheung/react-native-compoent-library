import React from "react"; 
import { StyleSheet, Text ,Pressable ,ViewStyle , TextStyle , ImageStyle ,PressableProps } from "react-native";
import { ButtonType } from "./Button.types";
import { FontAwesome } from '@expo/vector-icons';
export interface StyleProps{
	[key: string] : ViewStyle | TextStyle | ImageStyle | any;
}

export type addonProps    = string | undefined;
export type disabledProps = boolean | undefined;

//style config
const textSize:number    = 18;
const btnPadding:number  = 20;
const borderWidth:number = 2;

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

	let add:StyleProps = {};
	if(buttonColor)
		add.backgroundColor = buttonColor;
	
	if(borderColor){
		add.borderColor = borderColor;
		add.borderWidth = 2;
	}

	if(disabled)
		add.opacity = 0.7;
	
	return add;
}

const Button: React.FC<ButtonType>= ({ label ,type ,buttonColor ,borderColor ,disabled ,textColor ,arrow ,leftIcon ,onPress ,style ={} ,full , ...args }) => {
	return (
		<Pressable disabled={disabled} accessibilityRole="button" style={({pressed}) =>[check(type),addon(buttonColor,borderColor,disabled),{opacity:pressed ? 0.7 : (disabled?0.7:1)},style]} onPress={onPress} {...args}>
			{ leftIcon && <FontAwesome style={[check(type).text,check(type).icon,textColor?{"color":textColor}:{}]} name={leftIcon} />}
			<Text style={[check(type).text,textColor?{"color":textColor}:{},full?{"flex":1,textAlign:'center'}:{}]}>{label}</Text>
			{ arrow && <FontAwesome style={[check(type).text,check(type).arrow,textColor?{"color":textColor}:{}]} name="angle-right" />}
		</Pressable>
	);
};

export default Button

const style:StyleProps = StyleSheet.create({
	primaryButton: {
		height: 55, 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row', 
		backgroundColor: '#0079c8', 
		paddingHorizontal: btnPadding,
		text:{
			fontWeight: 'bold',
			color: '#ffffff',
			fontSize: textSize,
			lineHeight: textSize,
		},
		arrow:{
			marginTop: -3,
			marginRight: -2,
			paddingLeft: 5,
		},
		icon:{
			paddingRight: 8,
			marginTop: -3,
		}
	}, 
	secondaryButton: {
		height: 55, 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row', 
		borderWidth: 2,
    	borderColor: "#0079c8",
		paddingHorizontal: btnPadding,
		text:{
			fontWeight: 'bold',
			color: '#0079c8',
			fontSize: textSize,
			lineHeight: textSize,
		},
		arrow:{
			marginTop: -3,
			marginRight: -2,
			paddingLeft: 5,
		},
		icon:{
			paddingRight: 8,
			marginTop: -3,
		}
	}, 
	outlineButton: {
		height: 30, 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 10, 
		flexDirection: 'row',
		text:{
			fontWeight: 'bold',
			color: '#0079c8',
			fontSize: textSize,
			lineHeight: textSize,
		},
		arrow:{
			marginTop: -3,
			marginRight: -2,
			paddingLeft: 5,
		},
		icon:{
			paddingRight: 8,
			marginTop: -3,
		}
	}, 
})
