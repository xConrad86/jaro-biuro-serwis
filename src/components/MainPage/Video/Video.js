import React from "react";
import ModalVideo from "react-modal-video";
import styles from "./Video.module.scss";
import main from "../../../Common.module.css";

class video extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <section id={styles.video_play}>
        <div className={main.dark_overlay}>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="r5cCJNUnixg"
            onClose={() => this.setState({ isOpen: false })}
          />
          <i
            onClick={this.openModal}
            id={styles.marginTop}
            className="fas fa-play fa-3x"
          />
          <p id={styles.how_we_work}>Zobacz jak pracujemy</p>
        </div>
      </section>
    );
  }
}

export default video;
