/**
 * Created by farhad on 19.04.17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'


export default class MapCell extends Component {

  render() {

    const { status, ...restProps } = this.props;

    return (
      <div
        className={classNames('cell', status ? `status-${status}`: null)}
        {...restProps}
      />
    );
  }
}

MapCell.propTypes = {
  status: PropTypes.string,
};
