const Breadcrumb = () => (
    <nav className="bg-white shadow-md p-4 mb-6 rounded-md">
      <div className="max-w-7xl mx-auto">
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-700 hover:text-[#095D40] flex items-center">
              <HomeIcon className="mr-2" size={20} /> {/* Icône de maison */}
              Accueil
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <span className="text-gray-500">Contactez-nous</span>
          </li>
        </ol>
      </div>
    </nav>
  );
  