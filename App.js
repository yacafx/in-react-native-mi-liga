import React from "react";
import { Vibration, View } from "react-native";
import { Teams } from "./components/teams";
import { Team } from "./components/team";

const equipos = [
  {
    id: "1",
    nombre: "Equipo 1",
    logo: "https://via.placeholder.com/600x300/77b300/ffffff?text=Logo+equipo",
    estado: true,
    jugadores: [{ nombre: "Hugo" }]
  },
  {
    id: "2",
    nombre: "Equipo 2",
    logo: "https://via.placeholder.com/600x300/2eb8b8/ffffff?text=Logo+equipo",
    estado: false,
    jugadores: [{ nombre: "Paco" }, { nombre: "Luis" }]
  },
  {
    id: "3",
    nombre: "Equipo 3",
    logo: "https://via.placeholder.com/600x300/0040ff/ffffff?text=Logo+equipo",
    estado: true,
    jugadores: [
      { nombre: "Susana" },
      { nombre: "Carolina" },
      { nombre: "Marina" }
    ]
  },
  {
    id: "4",
    nombre: "Equipo 4",
    logo: "https://via.placeholder.com/600x300/ff00bf/ffffff?text=Logo+equipo",
    estado: false,
    jugadores: []
  },
  {
    id: "5",
    nombre: "Equipo 5",
    logo: "https://via.placeholder.com/600x300/D2B48C/ffffff?text=Logo+equipo",
    estado: true,
    jugadores: [{ nombre: "Gabriela" }, { nombre: "Alonso" }]
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamVisible: false,
      selectedTeam: {}
    };
  }

  toggleTeam() {
    Vibration.vibrate([1000, 2000, 3000]);
    this.setState({
      teamVisible: !this.state.teamVisible
    });
  }

  displayTeam(equipo) {
    this.setState({
      selectedTeam: equipo
    });
    this.toggleTeam();
  }

  render() {
    return (
      <View style={{ marginTop: 22, backgroundColor: "red" }}>
        <Teams
          equipos={equipos}
          onSelectTeam={equipo => this.displayTeam(equipo)}
        />
        <Team
          visible={this.state.teamVisible}
          equipo={this.state.selectedTeam}
          onToggleTeam={() => this.toggleTeam()}
        />
      </View>
    );
  }
}
