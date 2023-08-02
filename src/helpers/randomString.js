export default (length) => {
  let cadena = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    cadena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return cadena;
};
