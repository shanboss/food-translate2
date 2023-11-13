import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemForm from "./ItemForm"; // Import ItemForm

class AddItemButton extends Component {
  static propTypes = {
    ButtonLabel: PropTypes.string.isRequired,
    // Add more prop types if needed
  };

  state = {
    showItemForm: false,
  };

  handleAddFoodItem = () => {
    // Toggle the state to show/hide the form
    this.setState((prevState) => ({ showItemForm: !prevState.showItemForm }));
  };

  handleCloseForm = () => {
    // Close the form
    this.setState({ showItemForm: false });
  };

  render() {
    const { ButtonLabel } = this.props;
    const { showItemForm } = this.state;

    return (
      <div className="py-6">
        <div className="text-xl">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded w-96"
            onClick={this.handleAddFoodItem}
          >
            {ButtonLabel}
          </button>
        </div>

        {showItemForm && (
          <div className="flex items-center space-x-2 mt-2">
            <ItemForm onClose={this.handleCloseForm} />
            <button
              className="text-red-500 font-bold"
              onClick={this.handleCloseForm}
            >
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddItemButton;
