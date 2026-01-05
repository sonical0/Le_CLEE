function Button({ href, variant = 'primary', children }) {
  return (
    <a className={`btn ${variant}`} href={href}>
      {children}
    </a>
  );
}

export default Button;
