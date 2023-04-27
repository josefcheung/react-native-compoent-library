import React from "react";
import { StyleSheet, Text ,Pressable ,ViewStyle , TextStyle , ImageStyle } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { text ,boolean ,color } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { View, Alert } from "react-native";
import { Button } from "../../../src";

export interface StyleProps{
	[key: string] : ViewStyle | TextStyle | ImageStyle | any;
}

storiesOf("Button", module)
	.addDecorator((getStory) => <View style={{flex: 1,padding:20}}>{getStory()}</View>)
	.add("Primary", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					arrow={boolean('Arrow', false)}
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Secondary", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					type="secondary"
					arrow={boolean('Arrow', false)}
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Outline", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					type="outline"
					arrow={boolean('Arrow', false)}
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Disable", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', true)}
					arrow={boolean('Arrow', false)}
					label={(text("label", "Disable Button"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Arrow Button", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					arrow={boolean('Arrow', true)}
					label={(text("label", "Arrow Button"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Left Icon Button", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					arrow={boolean('Arrow', true)}
					label={(text("label", "Icon Button"))} 
					onPress={() => Alert.alert("Pressed")}
					leftIcon={"font-awesome"}
					/>
					
			</View>
		)}
	)
	.add("Override Style Button", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					full={boolean('Full Width', false)}
					disabled={boolean('Disabled', false)}
					arrow={boolean('Arrow', true)}
					borderColor="#ff0000"
					label={(text("label", "Override Style Button"))} 
					onPress={() => Alert.alert("Pressed")}
					style={style.overrideStyle}
					hitSlop={100}
					/>
			</View>
		)}
	)

const style:StyleProps = StyleSheet.create({
	overrideStyle: {
		height: 40,
		backgroundColor: '#ee79c8',
		borderRadius: 60,
	}
})