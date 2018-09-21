import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";

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
            subtitle={
              <View
                style={[
                  styles.circle,
                  equipo.estado ? styles.active : styles.inactive
                ]}
              />
            }
            onPress={() => this.props.onSelectTeam(equipo)}
          />
        ))}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 10,
    marginTop: 5,
    marginLeft: 12,
    borderRadius: 50
  },
  active: {
    backgroundColor: "green"
  },
  inactive: {
    backgroundColor: "gray"
  }
});
