import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, ScrollView } from 'react-native';

class Contact extends Component {

	static navigationOptions = {
		title: ''
	};

	render(){
		return(
			<ScrollView>
				<Card
		title="Contact Information"
		
		>
		
	<Text style={{margin:10}}>121, Clear Water Bay Road</Text>
	<Text style={{margin:10}}>Clear Water Bay, Kowloon</Text>
	<Text style={{margin:10}}>HONG KONG</Text>
	<Text style={{margin:10}}>Tel: +852 1234 5678</Text>
	<Text style={{margin:10}}>Fax: +852 8765 4321</Text>
	<Text style={{margin:10}}>Email:confusion@food.net</Text>

	</Card>
			</ScrollView>)
	}
}

export default Contact;