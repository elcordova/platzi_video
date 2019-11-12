import md5 from 'md5';

const gravart = (email) => {
  const base = 'https://www.gravatar.com/avatar/';
  const formatedEmail = email.trim().toLowerCase();
  const hash = md5(formatedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravart;
