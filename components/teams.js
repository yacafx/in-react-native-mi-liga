import React, { Component } from "react";
import { List, ListItem } from "react-native-elements";

import { Text } from "react-native";

export class Teams extends Component {
  render() {
    return (
      <List>
        {this.props.equipos.map(equipo => (
          <ListItem
            roundAvatar
            avatar={{ uri: equipo.logo }}
            key={equipo.id}
            title={equipo.nombre}
            subtitle={String(equipo.estado)}
          />
        ))}
      </List>
    );
  }
}
