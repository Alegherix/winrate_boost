import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Header from '../components/nav/Header';
import HeroHeading from '../components/HeroHeading';
import { Styledform, StyledInput, Container } from './login';
import { StyledRegisterButton } from '../components/ButtonComponent';
import Link from 'next/link';

interface registerProps {}

const StyledLink = styled.a`
  text-decoration: none;
  margin: auto;
  color: ${({ theme }) => theme.colors.tertiaryWhite};
  font-family: ${({ theme }) => theme.fonts.spartan};
  font-size: 16px;
  margin-top: 2rem;
  /* font-weight: 800; */
`;

const register: React.FC<registerProps> = ({}) => {
  return (
    <Container>
      <Header />
      <HeroHeading text="Create account" />
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Styledform onSubmit={props.handleSubmit}>
            <StyledInput
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="firstname"
              value={props.values.firstname}
              placeholder="First name"
            />

            <StyledInput
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="lastname"
              value={props.values.lastname}
              placeholder="Last name"
            />

            <StyledInput
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="username"
              value={props.values.username}
              placeholder="Username"
            />

            <StyledInput
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="email"
              value={props.values.email}
              placeholder="Email"
            />

            <StyledInput
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="password"
              value={props.values.password}
              placeholder="Password"
            />
            <StyledRegisterButton type="submit">
              Sign up for free
            </StyledRegisterButton>
            <Link href="/login">
              <StyledLink>Already have an account?</StyledLink>
            </Link>
          </Styledform>
        )}
      </Formik>
    </Container>
  );
};

export default register;
