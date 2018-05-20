import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import NxDomEvent from 'next-dom-event';

//  afeiship/webkit-sassui-icon-line-arrow
@mixin(['zoom', 'fullscreen', 'keyboard'])
export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.number,
    onChange: PropTypes.func,
    zoom: PropTypes.number,
    template: PropTypes.func,
    header: PropTypes.func,
    footer: PropTypes.func,
    extra: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: 0,
    onChange: noop,
    zoom: 1.8,
    template: noop,
    header: noop,
    footer: noop,
    extra: noop,
  };
  /*===properties end===*/

  get prevDisabled() {
    const { value } = this.state;
    return value == 0;
  }

  get nextDisabled() {
    const { items } = this.props;
    const { value } = this.state;
    return value == items.length - 1;
  }

  get current() {
    const { value } = this.state;
    return value + 1;
  }

  get length() {
    const { items } = this.props;
    return items.length;
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      zoom: 1,
      animating: false,
      scrollerWidth: 0,
      value: inProps.value,
    };
    this.change();
  }

  componentDidMount() {
    const { root } = this.refs;
    this._root = root;
    this.setState({ scrollerWidth: root.clientWidth * this.length });
    this.attachEvents();
  }

  componentWillReceiveProps(inProps){
    const { value } = inProps;
    if( value !== this.state.value ){
      this.setState({ value }, () => {
        this.change();
      });
    }
  }

  componentWillUnmount() {
    this._root = null;
    this.detachEvents();
  }

  attachEvents() {
    this._resizeRes = NxDomEvent.on(window, 'resize', () => {
      this.setState({ scrollerWidth: this._root.clientWidth * this.length });
    });

    this._loadRes = NxDomEvent.on(window, 'load', () => {
      this.setState({ animating: true });
    });

    this._keyupRes = NxDomEvent.on(window, 'keyup', ({ code }) => {
      (this[`on${code}`] || noop).call(this);
    });
  }

  detachEvents() {
    this._resizeRes.destroy();
    this._loadRes.destroy();
    this._keyupRes.destroy();
  }

  change() {
    const { value } = this.state;
    const { onChange } = this.props;
    onChange({ target: { value: value } });
  }

  prev = () => {
    this.setState({ value: --this.state.value }, () => {
      this.change();
    });
  };

  next = () => {
    this.setState({ value: ++this.state.value }, () => {
      this.change();
    });
  };

  _onDoubleClick = inEvent => {
    this.zoomToggle();
  };

  render() {
    const { className, items, zoom, template, header, footer, extra, ...props } = this.props;
    const { scrollerWidth, value, animating } = this.state;

    return (
      <section {...props} ref="root" className={classNames('react-gallery', className)}>
        {
          header(this) || (
            <header className="react-gallery-hd">
              {`${this.current}/${this.length}`} &nbsp;
            </header>
          )
        }
        <div className="react-gallery-bd">
          <div className="react-gallery-scroller"
            data-animating={animating}
            style={{
              width: scrollerWidth + 'px',
              transform: `translate3d(-${(value) / this.length * scrollerWidth}px, 0, 0)`
            }}>
            {
              items.map((item, index) => {
                return (
                  template(item, index, this) || (
                    <figure
                      data-active={value === index}
                      className="react-gallery-item"
                      key={index}
                      style={{ width: `${100 / this.length}%` }}>
                      <img
                        onDoubleClick={this._onDoubleClick}
                        style={{
                          transform: `scale(${this.state.zoom})`
                        }}
                        src={item.src} />
                    </figure>
                  )
                )
              })
            }
          </div>
        </div>
        <button
          className="react-gallery-nav react-gallery-prev"
          onClick={this.prev}
          hidden={this.prevDisabled}>
          <i className="webkit-sassui-icon-line-arrow" data-direction="left" data-type="hairline" />
        </button>
        <button
          className="react-gallery-nav react-gallery-next"
          onClick={this.next}
          hidden={this.nextDisabled}>
          <i className="webkit-sassui-icon-line-arrow" data-direction="right" data-type="hairline" />
        </button>
        {
          footer(this) || (
            <footer className="react-gallery-ft">
              {items[value].title}
            </footer>
          )
        }

        { extra(this) }
      </section>
    );
  }
}
