import {useEffect, useState} from "react";

const usePasswordValidator = (password: string) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (password.length < 8) {
      setIsValid(false);
      setErrorMessage('Password must be at least 8 characters long');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  }, [password]);

  return { isValid, errorMessage };
}

const useEmailValidator = (email: string) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!email.includes('@')) {
      setIsValid(false);
      setErrorMessage('Email must include @');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  }, [email]);

  return { isValid, errorMessage };
}

const useTextValidator = (text: string) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (text.length < 3) {
      setIsValid(false);
      setErrorMessage('Text must be at least 3 characters long');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  }, [text]);

  return { isValid, errorMessage };
}

const useNumberValidator = (number: number) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (number < 0) {
      setIsValid(false);
      setErrorMessage('Number must be greater than 0');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  }, [number]);

  return { isValid, errorMessage };
}

const useValidators = () => {
  return {
    usePasswordValidator,
    useEmailValidator,
    useTextValidator,
    useNumberValidator,
  }
}

export default useValidators;