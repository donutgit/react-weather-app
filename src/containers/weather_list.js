import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon; // код для бомжей на ES5
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={name}>
                <th><GoogleMap lon={lon} lat={lat} /></th>
                <td><Chart data={temps} color="red" units="K" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="yellow" units="%" /></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}
// ES6 OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOooohhhhhhhhhhhh blyad...
function mapStateToProps({ weather }) {
    return { weather } // если key and value одинаковые, то можно не писать weather: weather
    console.log(weather)
}

export default connect(mapStateToProps)(WeatherList);