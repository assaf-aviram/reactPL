import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { } from '../../store/actions';
import Button from '../../components/Button';

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
)

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
