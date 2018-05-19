import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';
//  afeiship/webkit-sassui-icon-line-arrow
export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    onChange: noop
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      scrollerWidth: 0,
      activeIndex: 0
    };
  }

  componentDidMount() {
    const { root } = this.refs;
    const { value } = this.props;
    this._root = root;
    this.setState({ scrollerWidth: root.clientWidth * value.length });
    this.attachResizeEvent();
  }

  componentWillUnmount() {
    this._root = null;
    this.detachResizeEvent();
  }

  attachResizeEvent() {
    this._resizeRes = NxDomEvent.on(window, 'resize', () => {
      this.setState({ scrollerWidth: this._root.clientWidth * this.props.value.length });
    });
  }

  detachResizeEvent() {
    this._resizeRes.destroy();
  }

  change() {
    const { activeIndex } = this.state;
    const { onChange } = this.props;
    onChange({ target: { value: activeIndex } });
  }

  _onPrev = e => {
    this.setState({ activeIndex: --this.state.activeIndex }, () => {
      this.change();
    });
  };

  _onNext = e => {
    this.setState({ activeIndex: ++this.state.activeIndex }, () => {
      this.change();
    });
  };

  render() {
    const { className, value, ...props } = this.props;
    const { scrollerWidth, activeIndex } = this.state;
    return (
      <section {...props} ref="root" className={classNames('react-gallery', className)}>
        <header className="react-gallery-hd">
          HEADER INFO
        </header>
        <div className="react-gallery-bd">
          <div className="react-gallery-scroller"
            style={{
              width: scrollerWidth + 'px',
              transform: `translate3d(-${(activeIndex) / value.length * scrollerWidth}px, 0, 0)`
            }}>
            {
              value.map((item, index) => {
                return (
                  <figure className="react-gallery-item" key={index} style={{ width: `${100 / value.length}%` }}>
                    <img src={item.src} alt="" data-action="zoom" data-original={item.original} />
                  </figure>
                )
              })
            }
          </div>
        </div>
        <button
          className="react-gallery-nav react-gallery-prev"
          onClick={this._onPrev}
          hidden={activeIndex == 0}>
          <i className="webkit-sassui-icon-line-arrow" data-direction="left" data-type="hairline" />
        </button>
        <button
          className="react-gallery-nav react-gallery-next"
          onClick={this._onNext}
          hidden={activeIndex == value.length - 1}>
          <i className="webkit-sassui-icon-line-arrow" data-direction="right" data-type="hairline" />
        </button>
        <footer className="react-gallery-ft">
          {value[activeIndex].title}
        </footer>
      </section>
    );
  }
}
