import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      isLoading: true,
    };
  }

  async componentDidMount() {
    const user = await getUser();

    this.onMount(() => {
      this.setState({
        userName: user.name,
        isLoading: false,
      });
    });
  }

  onMount = (callback) => {
    callback();
  }

  render() {
    const { userName, isLoading } = this.state;

    return (
      <header data-testid="header-component">
        { isLoading ? <Loading />
          : (
            <div>
              <h1>Header</h1>
              <h3 data-testid="header-user-name">{ `Welcome back ${userName}` }</h3>
              <nav>
                <Link
                  to="/search"
                  data-testid="link-to-search"
                >
                  Pesquisa
                </Link>
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                >
                  Favoritas
                </Link>
                <Link
                  to="/profile"
                  data-testid="link-to-profile"
                >
                  Perfil
                </Link>
              </nav>
            </div>
          )}
      </header>
    );
  }
}

export default Header;