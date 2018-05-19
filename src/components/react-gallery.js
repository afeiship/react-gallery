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

  get prevDisabled() {
    const { activeIndex } = this.state;
    return activeIndex == 0;
  }

  get nextDisabled() {
    const { value } = this.props;
    const { activeIndex } = this.state;
    return activeIndex == value.length - 1;
  }

  get current(){
    const { activeIndex } = this.state;
    return activeIndex + 1;
  }

  get total(){
    const { value } = this.props;
    return value.length;
  }

  constructor(props) {
    super(props);
    this.state = {
      zoom: 1,
      scrollerWidth: 0,
      activeIndex: 0,
      pageX: 0,
      pageY: 0
    };
  }

  componentDidMount() {
    const { root } = this.refs;
    const { value } = this.props;
    this._root = root;
    this.setState({ scrollerWidth: root.clientWidth * value.length });
    this.attachEvents();
  }

  componentWillUnmount() {
    this._root = null;
    this.detachEvents();
  }

  attachEvents() {
    this._resizeRes = NxDomEvent.on(window, 'resize', () => {
      this.setState({ scrollerWidth: this._root.clientWidth * this.props.value.length });
    });

    this._keyupRes = NxDomEvent.on(window, 'keyup', (inEvent) => {
      const { code } = inEvent;
      switch (code) {
        case 'ArrowRight':
          !this.nextDisabled && this.next();
          break;
        case 'ArrowLeft':
          !this.prevDisabled && this.prev();
          break;
        case 'Enter':
          this.toggleFullScreen();
          break;
        case 'Escape':
          this.toggleZoom();
          break;
        case 'ArrowUp':
          this.zoomIn();
          break;
        case 'ArrowDown':
          this.zoomOut();
          break;
      }
    });
  }

  detachEvents() {
    this._resizeRes.destroy();
    this._keyupRes.destroy();
  }

  change() {
    const { activeIndex } = this.state;
    const { onChange } = this.props;
    onChange({ target: { value: activeIndex } });
  }

  prev = () => {
    this.setState({ activeIndex: --this.state.activeIndex }, () => {
      this.change();
    });
  };

  next = () => {
    this.setState({ activeIndex: ++this.state.activeIndex }, () => {
      this.change();
    });
  };

  zoomIn() {
    this.setState({ zoom: 1.8 });
  }

  zoomOut() {
    this.setState({ zoom: 1 });
  }

  toggleZoom = () =>{
    const zoom = this.state.zoom  === 1 ? 1.8 : 1;
    this.setState({ zoom });
  };

  toggleFullScreen = () =>{
    document.documentElement.webkitRequestFullScreen();
  };

  _onDoubleClick = inEvent =>{
    const { pageX, pageY } = inEvent;
    this.setState({ pageX , pageY});
    this.toggleZoom();
  };

  render() {
    const { className, value, ...props } = this.props;
    const { zoom, scrollerWidth, activeIndex, pageX, pageY } = this.state;

    return (
      <section {...props} ref="root" className={classNames('react-gallery', className)}>
        <header className="react-gallery-hd">
          { `${this.current}/${this.total}` } &nbsp;
          HEADER INFO
          <button onClick={this.toggleZoom}>ToggleZoom</button>
          <button onClick={this.toggleFullScreen}>FullScreen</button>
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
                  <figure
                  data-active={activeIndex === index}
                  className="react-gallery-item"
                  key={index}
                  style={{ width: `${100 / value.length}%` }}>
                    <img
                    onDoubleClick={this._onDoubleClick}
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: `${pageX}px ${pageY}px`
                    }}
                    src={item.src}
                    data-action="zoom"
                    data-original={item.original} />
                  </figure>
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
        <footer className="react-gallery-ft">
          {value[activeIndex].title}
        </footer>
      </section>
    );
  }
}
