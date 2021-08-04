import { supabase } from '../supabaseClient';

export const logIn = async (email, password, setMessage, history, setEmail, setPassword) => {
  try {
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;
    setEmail('');
    setPassword('default');
  } catch (err) {
    setMessage(err.message);
  }
};

export const signUp = async (email, password, setOpen, setMessage) => {
  try {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setMessage('Welcome to the service.');
    setOpen(true);
  } catch (err) {
    setMessage(err.message);
  }
};
export const recoverPassword = async (email, setOpen, setMessage) => {
  try {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
    setMessage('Please, check your email inbox and follow the link.');
    setOpen(true);
  } catch (err) {
    setMessage(err.message);
  }
};
