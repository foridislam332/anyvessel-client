const Footer = () => {
  return (
    <footer className="bg-blue h-[79px] relative top-[85px] lg:top-[110px]">
      <div className="container">
        <div className="bg-gray-800 text-white p-4 text-center">
          <p className="mt-4">
            &copy; {new Date().getFullYear()} anyvessel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
