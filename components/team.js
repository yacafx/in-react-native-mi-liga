import React, { Component } from "react";
import { Modal, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";

export class Team extends Component {
  getTotalPlayers(players) {
    let total = 10;

    if (players !== undefined) {
      total = players.length;
    }

    return total;
  }

  render() {
    return (
      <Modal animationType="slide" visible={this.props.visible}>
        <View>
          <Card
            title={this.props.equipo.nombre}
            image={{
              uri: this.props.equipo.logo
            }}
          >
            <Text>
              Jugadores: {this.getTotalPlayers(this.props.equipo.jugadores)}
            </Text>
            <Text>Estado: {String(this.props.equipo.estado)}</Text>

            <Button
              backgroundColor="#03A9F4"
              title="Cerrar vista"
              onPress={() => this.props.onToggleTeam()}
            />
          </Card>
        </View>
      </Modal>
    );
  }
}
