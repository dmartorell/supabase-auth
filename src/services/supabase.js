import { supabase } from '../supabaseClient';

export const logIn = async (email, password, history) => {
  try {
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;
    history.push('/home');
  } catch (err) {
    alert(err.message);
  }
};

export const signUp = async (email, password) => {
  try {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    alert('You Signed up!');
  } catch (err) {
    alert(err.message);
  }
};
