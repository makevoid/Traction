/*
    Sub Mission - tribute to the Mission-R motorcycle which has now gone under
*/
var React      = require('react');
var Radium     = require('radium');
var ArcReactor = require("../../components/ArcReactor/ArcReactor");
var MoonDial   = require("../../components/MoonDial/MoonDial");
var Flipcard   = require("../../components/Flipcard");
var Devices    = require('../../components/Devices');

var SubMission = React.createClass({
 
    showDevices: function() {
        //this.refs.devices.showModal();
    },

    render: function() {
        var params = this.props.params;
        var data   = this.props.data;

        return (
        	<div style={styles.container}>
                <img src="img/mission.png" style={styles.mission} />

                <div style={styles.backdrop.container}>
                    <div style={[styles.backdrop.spot, styles.backdrop.left]} />
                    <div style={[styles.backdrop.spot, styles.backdrop.right]} />
                    <div style={[styles.backdrop.spot, styles.backdrop.center]} />
                    <div style={[styles.backdrop.drop, styles.backdrop.left]} />
                    <div style={[styles.backdrop.drop, styles.backdrop.right]} />
                </div>

                <table style={styles.navbar}>
                    <tbody>
                        <tr valign="center">
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={styles.line} />

                <table style={styles.main}>
                    <tbody>
                        <tr valign="center">
                            <td id="left" width="42%" align="left">

                                <Flipcard id="flipcard1">

                                    <ArcReactor
                                        id="arcReactor1"
                                        invert={false}
                                        colors={0}
                                        params={params.speed_kph}
                                        value={data.speed_kph} />

                                    <ArcReactor
                                        id="arcReactor2"
                                        invert={false}
                                        colors={-45}
                                        params={params.speed_mph}
                                        value={data.speed_mph} />

                                </Flipcard>
                            </td>

                            <td id="center" align="center">

                                <Flipcard id="flipcard2">
                                    <svg id="compass" viewBox="0 0 1000 1000" width="90%"></svg>
                                    <svg id="gyro" viewBox="0 0 1000 1000" width="90%"></svg>
                                </Flipcard>

                            </td>

                            <td id="right" width="42%" align="right">

                                <Flipcard id="flipcard3">

                                    <ArcReactor
                                        id="arcGauge3"
                                        invert={true}
                                        colors={90}
                                        params={params.power_kw}
                                        value={data.power_kw} />

                                    <ArcReactor
                                        id="arcGauge4"
                                        invert={true}
                                        colors={45}
                                        params={params.battery_current}
                                        value={data.battery_current} />

                                </Flipcard>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={styles.tripA}>
                    Trip A <b>1234</b> km
                </div>

                <div style={styles.tripB}>
                    Trip B <b>1234</b> km
                </div>

                <table style={styles.info}>
                    <tbody>
                        <tr valign="top">
                            <td width="25%">

                                <MoonDial
                                    id="moonDial1"
                                    params={params.motor_temp_c}
                                    value={data.motor_temp_c} />
                            </td>
                            <td width="25%">

                                <MoonDial
                                    id="moonDial2"
                                    params={params.battery_temp_c}
                                    value={data.battery_temp_c} />
                            </td>
                            <td width="25%">

                                <MoonDial
                                    id="moonDial3"
                                    params={params.controller_temp_c}
                                    value={data.controller_temp_c} />
                            </td>
                            <td width="25%">

                                <MoonDial
                                    id="moonDial4"
                                    flipcolor={true}
                                    params={params.battery_voltage}
                                    value={data.battery_voltage} />

                            </td>
                        </tr>   
                    </tbody>
                </table>
            </div>
        );
    }
});

var styles = {

    mission: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        opacity: '0.0',
    },

    backdrop: {
        container: {
            width: '100%',
            height: '100%',
            background: '#000',
            position: 'absolute',
            zIndex: '-1'
        },

        spot: {
            position: 'absolute',
            height: '50%',
            width: '50%',
            bottom: '0',
            opacity: '0.8',
            //background: '-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(18,80,109,1)), color-stop(90%, rgba(0,0,0,0.1)), color-stop(100%, rgba(0,0,0,0)))',
            background: '-webkit-radial-gradient(center, ellipse cover, rgba(18,80,109,1) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%)',
        },

        drop: {
            position: 'absolute',
            height: '10%',
            width: '50%',
            bottom: '33%',
            opacity: '0.5',
            //background: '-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(0,0,0,0.65)), color-stop(30%,rgba(0,0,0,0)))',
            background: '-webkit-radial-gradient(center, ellipse cover,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 30%)',
        },

        left: {
            left: '0',
        },

        right: {
            right: '0',
        },

        center: {
            top: '-50%',
            left: '20%',
            width: '60%',
            height: '100%',
            opacity: '0.5'
        }
    },

    container: {
        height: '100%',
        width: '100%',
        color: '#fff',
    },

    navbar: {
        height: '6%',
        width: '100%',
    },

    line: {
        width: '100%',
        height: '1px',
        background: '#333',
    },

    main: {
        height: '68%', 
        width: '100%',
    },

    info: {
        height: '26%',
        width: '100%',
        textAlign: 'center',
        background: '#000',
    },

    indicator: {
        height: '100%',
        width: '40%',
        position: 'absolute',
        bottom: '36%',
        left: '30%'
    },

    tripA: {
        fontSize: '2.5vh',
        position: 'absolute',
        bottom: '30%',
        left: '35%'
    },

    tripB: {
        fontSize: '2.5vh',
        position: 'absolute',
        bottom: '30%',
        right: '35%'
    }
}

module.exports = Radium(SubMission);