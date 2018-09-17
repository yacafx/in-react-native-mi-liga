import React, { Component } from "react";
import { Modal, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";

export class Team extends Component {
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
            <Text>Jugadores: 0</Text>
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
