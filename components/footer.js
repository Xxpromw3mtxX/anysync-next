const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center m-5">
      <span className="text-sm tracking-tight font-light text-gray-500">
        &copy; {new Date().getFullYear()} Francesco Metta.
      </span>
    </div>
  );
};

export default Footer;
