import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ParticlesBg from 'particles-bg';
import {landingPage} from '../../translations';

class Landing extends Component {
  componentDidMount() {
    if (this.props.user.validToken) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: 'all',
      color: ['random', '#ff0000'],
      cross: 'dead',
      // emitter: "follow",
      random: 15,
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        },
      });
    }

    return (
      <div className="landing">
        <ParticlesBg
          type="cobweb"
          config={config}
          bg={true}
          color="#17A2B8"
          num={150}
        />

        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">{landingPage.heading}</h1>
                <p className="lead">{landingPage.createAcc}</p>
                <Link to="/register" className="btn btn-lg btn-primary mr-2">
                  {landingPage.registration}
                </Link>
                <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                  {landingPage.login}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Landing);
