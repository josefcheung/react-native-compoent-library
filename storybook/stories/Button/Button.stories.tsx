import React from "react";
import { text ,boolean ,color } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { View, Alert } from "react-native";
import { Button } from "../../../src";

storiesOf("Button", module)
	.addDecorator((getStory) => <View style={{flex: 1}}>{getStory()}</View>)
	.add("Primary", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					disabled={boolean('Disabled', false)}
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Secondary", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					disabled={boolean('Disabled', false)}
					type="secondary"
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Outline", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					disabled={boolean('Disabled', false)}
					type="outline"
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Custom", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					disabled={boolean('Disabled', false)}
					buttonColor="#000000"
					textColor="#00ffff"
					borderColor="#ff0000"
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	.add("Disable", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					disabled={boolean('Disabled', true)}
					label={(text("label", "Disable Button"))} 
					onPress={() => Alert.alert("Pressed")}/>
			</View>
		)}
	)
	
