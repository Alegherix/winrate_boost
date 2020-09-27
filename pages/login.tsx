import React from 'react';
import Header from '../components/nav/Header';
import HeroHeading from '../components/HeroHeading';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import ButtonComponent, {
  StyledRegisterButton,
} from '../components/ButtonComponent';
import { device } from '../utils/breakpoints';
import { Color } from '../utils/Constants';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';

interface loginProps {}

export const Container = styled.section`
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-top: 2rem;

  p {
    margin: auto;
    margin-top: 2rem;
  }

  .separator {
    height: 1px;
    width: 100%;
    background-color: #333;
    margin: 1.5rem 0 0.5rem;
    /* margin-bottom: 0rem; */
  }

  @media ${device.mobileMin} {
    h1 {
      font-size: 30px;
    }
  }

  @media ${device.mobileM} {
    h1 {
      font-size: 34px;
    }
  }

  @media ${device.mobileL} {
    h1 {
      font-size: 42px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 70px;
    }
  }
`;

export const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  flex-grow: 2;
  margin-top: 2rem;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  height: 2rem;
  margin-bottom: 2rem;

  &,
  ::placeholder {
    font-family: ${({ theme }) => theme.fonts.spartan};
    color: ${({ theme }) => theme.colors.primaryWhite};
    font-size: 18px;
    font-weight: 800;
  }

  :focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

const login: React.FC<loginProps> = ({}) => {
  return (
    <>
      <Container>
        <Header />
        <HeroHeading text="Welcome Back" />
        <Formik
          initialValues={{
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
              <StyledRegisterButton type="submit">Sign in</StyledRegisterButton>
            </Styledform>
          )}
        </Formik>

        <div className="separator" />
        <Link href="/register" passHref>
          <LinkButton text="Create new account" color={Color.lightDark} />
        </Link>

        <p>Forgot your password?</p>
      </Container>
    </>
  );
};

export default login;

// https://formik.org/docs/examples/typescript
