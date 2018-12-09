import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Player } from "video-react";
export default class VideosPage extends Component {
    render() {
        return (
            <div>
                <Container>
<Row>
<Col lg={2}></Col>
<Col lg={8}>                    <Player className="playerTheme" playsInline src="
https://videos2.sendvid.com/a4/6b/4cyapd7x.mp4?validfrom=1543870510&validto=1543877710&rate=200k&burst=1000k&hash=nrPVC2MC3nbVTZGe5YTRFIWgrSY%3D" /></Col>
<Col lg={2}></Col>
</Row>
<br/>
<Row>
<Col lg={2}></Col>
<Col lg={8}>                    <Player className="playerTheme" playsInline src="
https://videos2.sendvid.com/ac/12/5wu6jfp5.mp4?validfrom=1543870206&validto=1543877406&rate=200k&burst=1000k&hash=mmSAB5kCYpSM1SYyCv7Z%2BWE%2Bl8A%3D" /></Col>
<Col lg={2}></Col>
</Row>
<br/>
<Row>
<Col lg={2}></Col>
<Col lg={8}>                    <Player className="playerTheme" playsInline src="
https://videos2.sendvid.com/62/c0/psg8ty56.mp4?validfrom=1543870655&validto=1543877855&rate=200k&burst=1000k&hash=IxG9CctA3pQKpdcZYMDGlB1hTAU%3D" /></Col>
<Col lg={2}></Col>
</Row>
                </Container>
            </div>
        )
    }
}
