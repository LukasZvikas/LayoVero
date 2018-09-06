import React, { Component } from "react";
import classNames from "classnames";

class ProgImageLoading extends Component {
  constructor(props) {
    super(props);

    this.state = { ready: false };

    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const buffer = new Image();
    buffer.onload = () => {
      this.mounted && this.setState({ ready: true });
    };
    buffer.src = this.props.regPhoto;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { regPhoto, thumbPhoto } = this.props;
    const { ready } = this.state;
    console.log(regPhoto, thumbPhoto);
    return (
      <div className="progressive-loading">
        {ready ? (
          <img className={`blog-posts-${this.props.imageClass}-image`} src={regPhoto} />
        ) : null}
        <img
          src={thumbPhoto}
          className={classNames("thumb", { hide: ready })}
        />
      </div>
    );
  }
}

export default ProgImageLoading;
