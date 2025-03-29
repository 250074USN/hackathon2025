const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white mt-auto"> {/* Legg til mt-auto her */}
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">Aktivio</h3>
            <p>
              Vi gjør trening tilgjengelig, motiverende og gøy for alle.
              Bli en del av fellesskapet!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Kontakt oss</h3>
            <ul>
              <li>Telefon: 123 45 678</li>
              <li>E-post: aktivio@outlook.com</li>
              <li>
                Adresse:{" "}
                <a
                    href="https://www.google.com/maps?q=Raveien+215,+3184+Borre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                  Raveien 215, 3184 Borre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Følg oss</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  <img
                      alt="Facebook"
                      height="36"
                      src="https://react.email/static/facebook-logo.png"
                      width="36"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <img
                      alt="Instagram"
                      height="36"
                      src="https://react.email/static/instagram-logo.png"
                      width="36"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <img
                      alt="Twitter"
                      height="36"
                      src="https://react.email/static/x-logo.png"
                      width="36"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 text-center py-4 text-xs">
          © {new Date().getFullYear()} Aktivio. Alle rettigheter reservert.
        </div>
      </footer>
  );
};

export default Footer;
