import { Component } from 'react'; // імпорт базового класу React Component
import css from './ContactForm.module.css'; // стилізація
import PropTypes from 'prop-types'; // типізація

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  // оновлення стану компонента
  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <form
          className={css.formstyle}
          onSubmit={evt => {
            evt.preventDefault();
            this.props.addContact(this.state);
            this.resetForm();
          }}
        >
          <label className={css.label}>
            Name
            <br />
            <input
              className={css.input}
              onChange={this.onChangeInput}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

// типізація
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
