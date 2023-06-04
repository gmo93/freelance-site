export default function NavBar() {
  return (
    <div className="text-md md:text-lg fixed bottom-0 z-10 p-2 flex flex-wrap justify-center h-14 md:h-20 w-screen items-center text-center bg-omo-fifth text-omo-second font-light font-sans">
      <a href="/#home">
        <h4 className={`mx-2 animate-loadIn`}>HOME</h4>
      </a>
      <a href="/services">
        <h4 className={`mx-2 animate-loadIn`}>SERVICES</h4>
      </a>
      <a href="/#contact">
        <h4 className={`mx-2 animate-loadIn`}>CONTACT</h4>
      </a>
      <a href="/projects">
        <h4 className={`mx-2 animate-loadIn`}>PROJECTS</h4>
      </a>
    </div>
  );
}
