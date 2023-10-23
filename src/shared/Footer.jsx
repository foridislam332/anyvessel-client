const Footer = () => {
  return (
    <footer className="bg-blue h-[279px] flex justify-center items-center mt-14">
      <p className="mt-4 pb-5">
        &copy; {new Date().getFullYear()} anyvessel. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
