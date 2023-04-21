import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/ContactForm';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '123-546-78' },
      { id: nanoid(), name: 'Hermione Kline', number: '236-771-25' },
      { id: nanoid(), name: 'Eden Clements', number: '657-741-26' },
    ],
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      // якщо контакт існує, то показувати повідомлення
      alert(`${name} is already in contacts`);
    } else {
      // додавання нового контакту до списку контактів
      this.setState(oldState => {
        const list = [...oldState.contacts];

        list.push({
          id: nanoid(), //генерація id
          name: name,
          number: number,
        });

        return { contacts: list };
      });
    }
  };

  render() {
    return (
      <div className={css.conteiner}>
        <h1>Phonebook</h1>

        {/* форма для додавання нового контакту */}
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
