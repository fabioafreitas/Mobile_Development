import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

const CustomButton = props => {
  return (
    <Button mode="contained" theme={{ roundness: 100 }} onPress={props.onPress}>
      <Text style={{ fontSize: 10 }}>{props.title}</Text>
    </Button>
  );
};

export default class DevScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftButtons: [
        "Login",
        "CreateAccount",
        "FeedComEventos",
        "FeedComExpositores",
        "Profile",
        "Favoritos",
        "Ajuda"
      ],
      rightButtons: [
        "MeusEventosOrg",
        "CriarEvento",
        "CriarEventoData",
        "CriarCategorias",
        "EventDetails",
        "Mensagens"
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, margin: 30, justifyContent: "space-around" }}>
          {this.state.leftButtons.map((title, index) => {
            return (
              <CustomButton
                key={index}
                title={title}
                onPress={() => this.props.navigation.navigate(title)}
              />
            );
          })}
        </View>
        <View style={{ flex: 1, margin: 30, justifyContent: "space-around" }}>
          {this.state.rightButtons.map((title, index) => {
            return (
              <CustomButton
                key={index}
                title={title}
                onPress={() => this.props.navigation.navigate(title)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

/*
<Button
                        mode="contained"
                        onPress={() => this.props.navigation.navigate('Login')}>
                        Login
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => this.props.navigation.navigate('CreateAccount')}>
                        CreateAccount
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => this.props.navigation.navigate('FeedComEventos')}>
                        Feed Event
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => this.props.navigation.navigate('FeedComExpositores')}>
                        Feed Exp
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        Profile
                    </Button>
*/
