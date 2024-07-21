import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class Dropdown extends Component {

  state = {
    value: ""
  }

  onClickHandler = event => {
    const value = event.target.innerHTML;
    this.setState({ value })
  }

  render() {
    return (
      <>
        <p>Value: {this.state.value}</p>
        <MDBDropdown>
          <MDBDropdownToggle caret color="primary">
            MDBDropdown
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem active={this.state.value === "Action"} onClick={this.onClickHandler}>Action</MDBDropdownItem>
            <MDBDropdownItem active={this.state.value === "Another Action"} onClick={this.onClickHandler}>Another Action</MDBDropdownItem>
            <MDBDropdownItem active={this.state.value === "Something else here"} onClick={this.onClickHandler}>Something else here</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem active={this.state.value === "Separated link"} onClick={this.onClickHandler}>Separated link</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </>
    );
  }
}

export default Dropdown;