export default class {
  zoomIn() {
    const { zoom } = this.props;
    this.setState({ zoom });
  }

  zoomOut() {
    this.setState({ zoom: 1 });
  }

  zoomToggle() {
    const zoom = this.state.zoom === 1 ? this.props.zoom : 1;
    this.setState({ zoom });
  }
}
