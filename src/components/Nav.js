import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 4px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0;
  height: 100px;
  margin-bottom: 6px;
  background: #222;

  .logo a {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 10px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: flex;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }

  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
    @media only screen and (max-width: 600px) {
      height: auto;
      min-height: 50px;
      display: block;
      position: relative;
      .logo {
        width: 100%;
        display: block;
        padding-top: 20px;
        margin: 0px;
        margin-left: -5px;
        a {
          padding: 20px 0px;
        }
      }
      .checkbtn {
        display: inline-block;
        position: absolute;
        top: -3px;
        right: 3px;
        cursor: pointer;
      }
      ul.collapsed {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // flex-wrap: wrap;
        margin-top:100px
        background: rgb(27, 3, 71);
        overflow: hidden;
        max-height: 0;
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

        &.is-expanded {
          overflow: hidden;
          max-height: 200px; /* approximate max height */

          transition-duration: 0.4s;
          background:#555;
        //   display:flex;
          align-items:center
        //   flex-direction:column;
        //   justify-content: space-between;

          transition-timing-function: ease-in;
          margin-top: 250px;
        }
        li {
          padding: 1px 4px;
          width: 100%;
        }
      }
    }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className='logo  red lighten-2'>
          <Link to='/'>
            <p>React Responsive Navigation</p>
            <em>
              <div className='letterhead'>
                <span className='name'>kentorry</span>
                <span className='gray'>.io</span>
              </div>
            </em>
          </Link>
        </div>
        <nav className='nav purple darken-6'>
          <i
            className='fa fa-bars'
            aria-hidden='true'
            onClick={(e) => this.handleToggle(e)}
          />

          <button
            className='checkbtn'
            onClick={(e) => {
              console.log("Nav Open: " + isExpanded);

              this.handleToggle(e);
            }}
          >
            <i className='material-icons'>dehaze</i>
          </button>
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName='active' to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName='active' to='/product'>
              <li>Product</li>
            </NavLink>
            <NavLink activeClassName='active' to='/cart'>
              <li>Cart</li>
            </NavLink>
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default Nav;
