import { Component } from "react";
import "..src/App.css"

class AppClass extends Component {
  render() {
    return (
        <div>
            <img key={this.props.id} src={this.props.imgUrl} />
        </div>
    )
  }
}

export default AppClass;