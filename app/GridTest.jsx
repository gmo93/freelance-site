export default function GridTest() {
  return (
    <div className="text-white h-screen grid grid-cols-3 gap-4">
      <div className="justify-center flex items-center col-span-3">
        Connect With Us!
      </div>
      <div className="col-span-3 flex flex-wrap justify-center items-center">
        <ul className="bg-yellow flex flex-wrap justify-center items-center">
          <li className={`w-full`}>-Branding</li>
          <li className={`w-full`}>-UX / UI Design</li>
          <li className={`w-full`}>-Web Development</li>
          <li className={`w-full`}>-eCommerce</li>
          <li className={`w-full`}>-SEO</li>
          <li className={`w-full`}>-Wordpress Development</li>
          <li className={`w-full`}>-Shopify</li>
          <li className={`w-full`}>-Home Page Animations</li>
        </ul>
      </div>
      <div className="col-span-2 ">07</div>
    </div>
  );
}
