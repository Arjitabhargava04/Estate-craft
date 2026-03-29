import { PROJECT_NAME } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="container mx-auto px-6 py-10">

        <h2 className="text-xl font-semibold mb-4">
          {PROJECT_NAME}
        </h2>

        <p className="text-gray-400">
          Premium luxury apartments located in Pune with world-class amenities.
        </p>

        <p className="mt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} {PROJECT_NAME}. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;